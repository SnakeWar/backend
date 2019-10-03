const multer = require('multer');

module.exports = {
    storage: multer.diskStorage({
        destination: Path2D.resolve(__dirname, '..', '..', 'uploads'),
    })
}