import { app } from "./app";
import "dotenv/config";
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`🟢 Server listening to port ${PORT}`));
