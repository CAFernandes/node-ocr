import { Router } from 'express';
import { upload } from '../../../shared/upload';
import { PDFController } from '../controller/PDF';

export class PDFRouter {
  private static _router: Router = Router();

  public static routes(): Router {
    this._router.post('/', upload.single('file'), PDFController.index);
    return this._router;
  }
}
