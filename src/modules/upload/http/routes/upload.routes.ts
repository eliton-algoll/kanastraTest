import { Router, Request, Response } from 'express';

import { UploadController } from '../controllers/upload.controller';

const controller = new UploadController();

const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.status(200).json({
        success: true,
        data: {
            message: 'ok'
        }
    })
});

router.post('/', controller.store);

export default router;