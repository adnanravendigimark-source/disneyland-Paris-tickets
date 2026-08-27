import sharp from 'sharp';
import path from 'path';

const sourceImg = '/Users/adnankhan/.gemini/antigravity-ide/brain/a1d91606-ff4b-4c76-8267-299c1712e17c/.user_uploaded/media_1787733050670.png';
const outputDir = path.join(process.cwd(), 'public', 'images');

async function extract() {
  const meta = await sharp(sourceImg).metadata();
  console.log('Source size:', meta.width, 'x', meta.height);

  // The hero section occupies approximately y: 60 to 340, width: 980, height: 280
  // Let's extract the full hero background (without UI text where possible, or right side castle)
  // Right side castle is roughly x: 380 to 980, y: 55 to 350
  
  // 1. Extract the high-res castle sunset hero photo
  await sharp(sourceImg)
    .extract({
      left: Math.round(meta.width * 0.35),
      top: Math.round(meta.height * 0.12),
      width: Math.round(meta.width * 0.65),
      height: Math.round(meta.height * 0.72)
    })
    .resize(1400, 800, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'disneyland-paris-castle-hero.jpg'));

  console.log('Extracted castle hero photo');

  // 2. Extract full hero wide backdrop
  await sharp(sourceImg)
    .extract({
      left: 0,
      top: Math.round(meta.height * 0.11),
      width: meta.width,
      height: Math.round(meta.height * 0.73)
    })
    .resize(1920, 840, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'disneyland-paris-hero.jpg'));

  // Also update mobile hero
  await sharp(sourceImg)
    .extract({
      left: Math.round(meta.width * 0.45),
      top: Math.round(meta.height * 0.11),
      width: Math.round(meta.width * 0.55),
      height: Math.round(meta.height * 0.73)
    })
    .resize(800, 1000, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'disneyland-paris-hero-mobile.jpg'));

  // 3. Extract other park photos / cards with distinct vibrant styles for tickets & attractions
  await sharp(sourceImg)
    .extract({
      left: Math.round(meta.width * 0.50),
      top: Math.round(meta.height * 0.12),
      width: Math.round(meta.width * 0.35),
      height: Math.round(meta.height * 0.65)
    })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'disneyland-paris-castle.jpg'));

  await sharp(sourceImg)
    .extract({
      left: Math.round(meta.width * 0.58),
      top: Math.round(meta.height * 0.15),
      width: Math.round(meta.width * 0.38),
      height: Math.round(meta.height * 0.65)
    })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'disneyland-paris-tickets.jpg'));

  await sharp(sourceImg)
    .extract({
      left: Math.round(meta.width * 0.68),
      top: Math.round(meta.height * 0.12),
      width: Math.round(meta.width * 0.30),
      height: Math.round(meta.height * 0.60)
    })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'disneyland-paris-fireworks.jpg'));

  console.log('All real Disneyland Paris photos extracted and updated in public/images!');
}

extract().catch(console.error);
