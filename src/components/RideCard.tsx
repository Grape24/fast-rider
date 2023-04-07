import { IRide } from "../types/types";
import Time from '../assets/time.svg'
import Ticket from '../assets/ticket.svg';

interface RideCardProps {
    ride: IRide;
    onSelectRide: (rideId: number) => void;
    isSelected: boolean;
}

export const RideCard: React.FC<RideCardProps> = ({ ride, onSelectRide, isSelected }) => {
    return (<div onClick={()=>onSelectRide(ride.id)} className={(isSelected)? 'selected-ride ride-card-container':  'ride-card-container'} style={{ borderTop: `4px solid ${ride.zone.color}` }}>
        <div className="ride-zone">{ride.zone.name}</div>
        <div className="title">{ride.name}</div>
        <div className="flex space-between">
            <div className="flex return-time-container">
                <img src={Time} alt='Return Time' />
                <span>{ride.return_time}</span></div>
            <div className="flex remaining-tickets-container">
                <img src={Ticket} alt='Remaining Tickets' />
                <span> {ride.remaining_tickets}</span>
            </div>
        </div>
    </div>)
}