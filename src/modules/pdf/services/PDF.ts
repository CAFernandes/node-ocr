import pdf from 'pdf-parse';
import fs from 'fs';
import { Lib } from '../../../shared/helpers/Lib';

export class PDFService {
  public async execute(filename: string): Promise<{ text: string, matches?: null | any[] }> {
    const path = `temp/${filename}`
    if (!/\.pdf$/.test(filename)) {
      return { text: '', matches: [] };
    }
    const { text } = await this.extractTextFromPDF(path);
    return await this.extractDataFromText(text);
  }

  async extractTextFromPDF(path: string): Promise<{ text: string }> {
    const dataBuffer = fs.readFileSync(path);
    const data = await pdf(dataBuffer);
    fs.unlinkSync(path);
    return { text: data.text };
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
