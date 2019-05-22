import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
const host = process.env.HOST || localhost;
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Hello from IDD Docker!");
});

// Sets what Port the Server is listening on
app.listen(port, host, () => {
	console.log(`Listening to http://${host}:${port}`);
});
