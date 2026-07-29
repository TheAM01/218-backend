import express, { type Request, type Response} from "express";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) =>{
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.clear();
    console.log(`Server is live on port: ${PORT}!`);
});