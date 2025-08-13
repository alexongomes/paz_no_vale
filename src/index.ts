import express from "express";
import type { Request, Response } from "express"; // Importação type-only

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo Alexon Gomes");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});


app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo Alexon");
} );