import express, { Request, Response, Router } from "express";
import { getPlaylistVideos } from "usetube";

const app = express();

app.use(express.json());

const route = Router();

app.get("/", async (req: Request, res: Response) => {
  const playlist = await getPlaylistVideos(
    "PLLBRimSpFRj7Lnq-JdW2n8iNUPcEydkcl"
  );
  res.json({ playlist });
});

app.listen(3060, () => {
  console.log("Rodando");
});
