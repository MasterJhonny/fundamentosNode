const sharp = require('sharp');

sharp('js.jpg')
    .resize(780, 420)
    .grayscale()
    .toFile('resize.jpg');