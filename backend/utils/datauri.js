import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    if (!file || !file.originalname) {
        throw new Error("File is required but not provided.");
    }

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
};

export default getDataUri;
