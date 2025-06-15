import { Request, Response } from "express";
import { PDFService } from "../services/PDF";

export class PDFController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const { file } = req.body;
    if (!file) return res.status(400).json({ error: 'File not found' });
    const pdf = new PDFService();
    const result = await pdf.execute(file);
    return res.json(result);
  }
}
