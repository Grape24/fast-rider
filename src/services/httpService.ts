import axios, { AxiosInstance } from 'axios';

class HttpService {
    private http: AxiosInstance;
    constructor(baseURL: string) {
        this.http = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get(url: string, config: any) {
        try {
            const response = await this.http.get(url, config);
            return response.data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async post(url: string, data: any, config: any) {
        try {
            const response = await this.http.post(url, data, config);
            return response.data;
        } catch (error: unknown) {
            return error;
        }
    }
}

export default HttpService;
