import express from 'express';
import cors from "cors";
const routes = require('./src/infrastructure/productRouter');
const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());
app.use("/", routes)

app.listen(3001, () => {
    console.log(`Server listening on port 3001`);
});
