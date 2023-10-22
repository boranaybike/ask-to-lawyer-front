import { IResponse } from '@/types/base/response';
import { ILawyerModel } from '@/types/model/lawyer';
import axios from 'axios';

export class LawyerService {
    constructor() {
        console.log('Lawyer Service initialized')
    }

    async list(): Promise<IResponse<ILawyerModel[]>> {
        const response = await axios.get<IResponse<ILawyerModel[]>>('Lawyers')
        return response.data
    }
}