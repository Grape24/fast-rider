import { formatTime } from "../utils/formatTime";

 export type AccessData = {
        access_code: string;
        id: number;
        return_time: string;
        ride: {
            id: number;
            name: string;
            remaining_tickets: number;
            return_time: string;
            zone: {
                id: number;
                name: string;
                color: string;
            };
        };
}

interface AccessCardProps {
    accessData: AccessData;
};

export const AccessCard: React.FC<AccessCardProps> = ({accessData: {ride, return_time, access_code}}) => {
    return (<div className='ride-card-container' style={{borderTop: `4px solid ${ride.zone.color}`}}>
            <div className="flex space-between">
                <div className="ride-name">{ride.name}</div>
                <div>{ride.zone.name}</div>
            </div>
            <div className="access-card-main-content">
            <div>Return At</div>
            <div className="title">{formatTime(return_time, 'HH:mm')}</div>
            <div>Use Access Code</div>
            <div className="title">{access_code}</div>
            </div>
    </div>)
}