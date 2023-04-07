import React from 'react';
import { IRide } from '../types/types';
import { RideCard } from './RideCard';

interface RidesListProps {
    rides: IRide[];
    onSelectRide: (rideId: number) => void;
    selectedRideId: number| null;
}

export const RidesList: React.FC<RidesListProps> = ({ rides, onSelectRide, selectedRideId }) => {
    return (<section className='rides-list-container'>
        {rides.map((ride: IRide) => <RideCard onSelectRide={onSelectRide} isSelected={selectedRideId === ride.id}  key={ride.id} ride={ride}></RideCard>)}
    </section>)
}