import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, "public");

function convertImagesToWebp(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      convertImagesToWebp(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const outputFile = fullPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

      if (fs.existsSync(outputFile)) {
        console.log(`Skipping (already exists): ${outputFile}`);
        return;
      }

      sharp(fullPath)
        .webp({ quality: 90 })
        .toFile(outputFile)
        .then(() => {
          console.log(`Converted: ${file} → ${path.basename(outputFile)}`);
        })
        .catch((err) => console.error(`Error converting ${file}:`, err));
    }
  });
}

convertImagesToWebp(publicDir);
