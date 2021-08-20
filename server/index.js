import { dbConnect } from "./db_connection.js";
import app from "./server.js";

const PORT = process.env.PORT || 3001;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`REST API listening on port: ${PORT}`);
  });
});
