import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
dotenv.config();

const app = express();
const port = 3030;

app.use(cors());

// app.get('/', (req, res) => {
//   console.log('updated')
//   res.send('This works')
// })

app.use(express.static(path.join(__dirname, '/../public')));


app.listen(port, () => {
	console.log(`Server running on: http://localhost:${port}`);
});
