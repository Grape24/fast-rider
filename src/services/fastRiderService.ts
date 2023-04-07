import HttpService from './httpService';
import { config } from '../ignore/ignore';

const api = new HttpService('http://fast-rider.herokuapp.com/api/v1');

export const fetchRides = async () => {
    try {
        const rides = await api.get('/rides', {params: {token: config.api_key}});
        return rides;
    } catch (error) {
        console.error(error);
    }
}

export const postTicket = async (pin: string, rideId: number) => {
       const res = await api.post('/tickets', null, {params: {pin, ride_id: rideId, token: config.api_key }})
       if(res.access_code){
        return res;
       }else{
        return res.response.data.message;
       }
    
}
