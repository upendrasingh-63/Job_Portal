import mutler from 'multer';

const storage = mutler.memoryStorage()
export const singleupload = mutler({ storage }).single('file');