import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useFetchRides } from "../hooks/useFetchRides";
import { Instructions } from "../components/Instructions";
import { SubmitInput } from "../components/SubmitInput";
import { RidesList } from "../components/RidesList";
import { postTicket } from "../services/fastRiderService";
import { LocalStorageService } from "../services/storeService";

export const Home = () => {
    const navigate = useNavigate();
    const rides = useFetchRides()
    const [inputValue, setInputValue] = useState<string>('')
    const [selectedRideId, setSelectedRideId] = useState<number | null>(null)
    const [validationMsg, setValidationMsg] = useState<string>('');
    const onSelectRide = (rideId: number)=> {
        setSelectedRideId(rideId);
    }

    const onPostTicket = async()=>{
            if(!selectedRideId){
                setValidationMsg('Please select a ride')
                return;
            }
                const res = await postTicket(inputValue, selectedRideId)
                LocalStorageService.set('postTicketResponse', res);
                navigate('/ticket')   
                
    } 

    return (<>
        <Instructions />
        <SubmitInput inputValue={inputValue} 
                    setInputValue={setInputValue}
                    handleSubmit={(ev) => { ev.preventDefault(); onPostTicket() }}
                    placeholder='#PIN' />
        <div>{validationMsg}</div>
        <RidesList selectedRideId={selectedRideId} onSelectRide={onSelectRide} rides={rides} />
        </>)
}