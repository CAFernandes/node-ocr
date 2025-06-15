import { Router } from 'express';
import { OCRController } from '../controller/OCR';
import { upload } from '../../../shared/upload';

export class OCRRouter {
  private static _router: Router = Router();

  public static routes(): Router {
    this._router.post('/', upload.single('file'), OCRController.index);
    return this._router;
  }
}
