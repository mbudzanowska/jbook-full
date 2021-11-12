import express from "express";

export const serve = (port: number, filename: string, dir: string): Promise<void> => {
  const app = express();
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
