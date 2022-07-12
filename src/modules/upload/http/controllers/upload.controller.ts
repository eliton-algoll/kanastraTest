import { Request, Response } from 'express';
import {UploadService} from '../../services/upload.service';

class UploadController {
    async store (request: Request, response: Response) {
        try{
           const uploadService = new  UploadService();

           const data = request.body;

            uploadService.upload(data);

            response.status(200).json({
                success: true,
                data: {
                    message: "arquivo enviado com sucesso",
                    data: data
                }
           });
        } catch(err ) {
            return response.status(400).json({
                error: err
            })
        }

    }
}

export { UploadController }