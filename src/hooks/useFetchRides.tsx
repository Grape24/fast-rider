import {useState, useEffect} from "react";
import { fetchRides } from "../services/fastRiderService";
import { IRide } from "../types/types";
import { formatTime } from "../utils/formatTime";

export const useFetchRides = () : IRide[]=> {
    const [rides, setRides] = useState([])
    useEffect(()=>{
        const fetch = async () => {
            const rawFetchedRide = await fetchRides()
            const formattedRides = rawFetchedRide.map((fetchedRide: IRide) => ({...fetchedRide, return_time : formatTime(fetchedRide.return_time, 'HH:mm')}))
            setRides(formattedRides);
        }
        fetch()
    },[])
    return rides;
}
