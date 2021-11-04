import { app } from "./app";
import "dotenv/config";
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server funcionando na porta ${PORT}`));
