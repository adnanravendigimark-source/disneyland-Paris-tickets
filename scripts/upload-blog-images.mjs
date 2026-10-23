import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

const sql = neon(process.env.DATABASE_URL);

async function main() {
  const images = [
    {
      source: "/Users/adnankhan/.gemini/antigravity-ide/brain/43c42419-95ae-40c3-a109-0ecd02974340/disney_tickets_castle_view_1792736909813.jpg",
      localDest: "public/images/disneyland-paris-tickets-guide.jpg",
      blobFilename: "disneyland-paris-tickets-guide.jpg",
    },
    {
      source: "/Users/adnankhan/.gemini/antigravity-ide/brain/43c42419-95ae-40c3-a109-0ecd02974340/disney_park_hopper_family_1792736932852.jpg",
      localDest: "public/images/disneyland-paris-park-hopper.jpg",
      blobFilename: "disneyland-paris-park-hopper.jpg",
    },
  ];

  const results = {};

  for (const img of images) {
    console.log(`Processing ${img.blobFilename}...`);
    // 1. Copy locally
    const destPath = path.join(process.cwd(), img.localDest);
    fs.copyFileSync(img.source, destPath);
    console.log(`✓ Copied to ${img.localDest}`);

    // 2. Upload to Vercel Blob if token available
    const fileBuffer = fs.readFileSync(img.source);
    const sizeBytes = fileBuffer.length;
    let finalUrl = `/${img.localDest.replace(/^public\//, "")}`;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const blob = await put(img.blobFilename, fileBuffer, {
          access: "public",
          contentType: "image/jpeg",
        });
        finalUrl = blob.url;
        console.log(`✓ Uploaded to Vercel Blob: ${finalUrl}`);
      } catch (blobErr) {
        console.warn(`! Vercel Blob upload failed, using local URL:`, blobErr.message);
      }
    } else {
      console.warn("! BLOB_READ_WRITE_TOKEN not set, using local URL.");
    }

    // 3. Record in media_library
    try {
      await sql`
        INSERT INTO media_library (url, filename, content_type, size_bytes)
        VALUES (${finalUrl}, ${img.blobFilename}, ${"image/jpeg"}, ${sizeBytes})
        ON CONFLICT (url) DO NOTHING
      `;
      console.log(`✓ Recorded in media_library table.`);
    } catch (dbErr) {
      console.warn(`! Could not record in media_library:`, dbErr.message);
    }

    results[img.blobFilename] = finalUrl;
  }

  const outPath = path.join(process.cwd(), "scripts", "uploaded-images.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf-8");
  console.log("✓ Uploaded images JSON written:", results);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
