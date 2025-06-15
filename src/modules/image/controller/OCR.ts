import { Request, Response } from "express";
import { OCRService } from "../services/OCR";

export class OCRController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const { file } = req.body;
    if (!file) return res.status(400).json({ error: 'File not found' });
    const OCR = new OCRService();
    const result = await OCR.execute(file);
    return res.json(result);
  }
}
