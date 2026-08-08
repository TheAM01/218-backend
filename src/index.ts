import express, { type Request, type Response} from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.ts";
import path from "path";
import fs from "fs";


// importing routers
import { productRouter } from "./routers/product.router.ts";
import { orderRouter } from "./routers/order.router.ts";

// importing middleware
import helmet from "helmet";
import cors from "cors";
import multer, { type FileFilterCallback } from "multer";
import morgan from "morgan";
import { loggerMiddleware } from "./middleware/logger.ts";
import { headersMiddleware } from "./middleware/header.ts";
import { apiKeyMiddleware } from "./middleware/apiKey.ts";
import { authRouter } from "./routers/auth.router.ts";
import { authenticate } from "./middleware/authentication.ts";
import cookieParser from "cookie-parser";


// constants
const app = express();
const PORT = 8000;
const dir = path.resolve();
const uploadDir = path.join(dir, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
        cb(null, `${uniqueName}${path.extname(file.originalname)}`)
    },
});
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (allowed.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"));
    }
}
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
});


// connect to database
// connectDB();


// middleware
app.use(morgan('common'));
app.use(helmet());
app.use(loggerMiddleware);
app.use(headersMiddleware);
app.use(apiKeyMiddleware);
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'x-api-key'],
    credentials: true,
    maxAge: 24 * 60 * 60 * 1000
}));
app.use("/profile", authenticate);

// routing
app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Hello, World!" });
});

app.get("/profile", (req: Request, res: Response) => {
    console.log(dir)
    return res.sendFile(dir + "/src/static/index.html");
});

app.post("/profile", upload.single('profile-picture'), (req: Request, res: Response) => {
    console.log(req.body);

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded!" });
    }

    return res.json({
        message: "Hello, World!",
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
    });
});


// attaching routers
// app.use("/api/products", productRouter);
// app.use("/api/orders", orderRouter);
app.use("/auth", authRouter);


app.listen(PORT, () => {
    console.clear();
    console.log(`Server is live on port: ${PORT}!`);
});


// helmet -> security
// morgan -> logging
// multer -> file uploads
// cors -> Cross Origin Resource Sharing
