import express from 'express';
import { OCRRouter } from './modules/image/routers/OCR';
import { PDFRouter } from './modules/pdf/routers/PDF';

class App {
  app: express.Application;
  constructor() {
    this.app = express();
    this.setHeaders();
    this.routes();
  }
  private setHeaders() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'POST');
      // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });
  }
  private routes() {
    this.app.use('/image', OCRRouter.routes());
    this.app.use('/pdf', PDFRouter.routes());
  }
  public start() {
    this.app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
}
const instance = new App();
export default instance;