import express, { type Request, type Response} from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.ts";

// importing routers
import { productRouter } from "./routers/product.router.ts";
import { orderRouter } from "./routers/order.router.ts";

// importing middleware
import { loggerMiddleware } from "./middleware/logger.ts";


// constants
const app = express();
const PORT = 8000;


// connect to database
// connectDB();


// middleware
app.use(loggerMiddleware);
app.use(express.json());


// routing
app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Hello, World!" });
});

app.post("/", (req: Request, res: Response) => {
    console.log(req.body)
    return res.json({ message: "Hello, World!" });
});


// attaching routers
// app.use("/api/products", productRouter);
// app.use("/api/orders", orderRouter);


app.listen(PORT, () => {
    console.clear();
    console.log(`Server is live on port: ${PORT}!`);
});