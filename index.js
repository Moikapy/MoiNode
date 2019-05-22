import dotenv from "dotenv";
import express from "express";
import cors from "cors"
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
	res.send("Hello from Moi Node!");
});

// Sets what Port the Server is listening on
app.listen(port, () => {
	console.log(`Listening to http://localhost:${port}`);
});
