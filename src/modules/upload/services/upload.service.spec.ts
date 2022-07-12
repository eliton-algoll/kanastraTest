import { IUploadRequestDto } from '../entities/upload.entities';
import { UploadService } from './upload.service'

describe('UploadService test', () => {
    it('should be able to process upload in background', () =>{

        const requestData: IUploadRequestDto[] = [
            {
                name: "John Doe",
                governmentId: 11111111111,
                email: "johndoe@kanastra.com.br",
                debtAmount: 1000000.00,
                debtDueDate: new Date("2022-10-12"),
                debtId: 8291
            },
        ];

        const uploadService = new UploadService();

        const spy = jest.spyOn(uploadService, 'processCsv').mockImplementation(() => new Promise((resolve) =>{resolve(true)}));

        uploadService.upload(requestData);

        expect(spy).toBeCalledTimes(1);
    });
})