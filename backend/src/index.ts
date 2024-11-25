import express, { Express, Request, Response } from "express";
import { chats } from "./data/data";
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get('/api/chats', (req: Request, res: Response) => {
  res.send(chats)
})

app.get('/api/chats/:id', (req: Request, res: Response) => {
  const userID = req.params.id;

  const singleChat = chats.find((item) => {
    if (item._id === userID) return item;
  }) || [] 

  res.send(singleChat)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});