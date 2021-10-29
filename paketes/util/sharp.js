const sharp = require('sharp');

sharp("./nodejs.png")
    .resize(850, 480)
    .toFile('refil1.png')