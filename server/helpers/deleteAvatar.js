import { unlink } from "fs/promises";

export default (avatar) => {
  unlink(`uploads/${avatar}`).catch((err) => console.error(err));
};
