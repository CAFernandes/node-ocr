import Tesseract from 'tesseract.js';
import fs from 'fs';
import { Lib } from '../../../shared/helpers/Lib';

export class OCRService {
  public async execute(filename: string): Promise<{ text: string, matches?: null | any[] }> {
    const path = `temp/${filename}`
    // senão for imagem retorna um erro
    if (!filename.match(/.(jpg|jpeg|png)$/)) {
      throw new Error('File is not an image');
    }
    const { text } = await this.performOCR(path);
    return await this.extractDataFromText(text);
  }
  // Função para realizar OCR na imagem
  async performOCR(path: string): Promise<{ text: string }> {
    const { data: { text } } = await Tesseract.recognize(path, 'por');

    fs.unlinkSync(path);
    return { text };
  }
  async extractDataFromText(text: string): Promise<{ text: string, findData: any[] }> {
    const matches = Lib.FILTER.map((key: string) => {
      //@ts-ignore
      const match = text.match(Lib[key]);
      if (match) {
        return { [key]: match[0] };
      }
      return null;
    }).filter((match: { [x: string]: string } | null) => match !== null);
    return { text, findData: matches };
  }
}
