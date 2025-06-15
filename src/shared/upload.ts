import multer from 'multer';

const folder = 'temp/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
    req.body.file = filename;
  }
});
const upload = multer({
  storage: storage,
});

export { folder, upload };