import { useEffect, useState } from "react";
import { Instruction } from "../components/Instruction"
import V from '../assets/V.svg';
import { AccessCard, AccessData } from "../components/AccessCard";
import { LocalStorageService } from "../services/storeService";


export const TicketPage: React.FC = () => {
    const [storedAcessData, setStoredAccessData] = useState<AccessData | string>()
    useEffect(() => {
        const accessData = LocalStorageService.get('postTicketResponse');
        if (accessData) {
            setStoredAccessData(accessData as AccessData | string)
        }
    }, [])
    return (<>
        {Boolean((storedAcessData as AccessData)?.access_code) ? <>
            <Instruction alt='success' svgSrc={V} text='Thank you for using The Jungle FastRider ticket system- your access code is now ready!' />
            <AccessCard accessData={storedAcessData as AccessData} />
        </> : <div>{storedAcessData as string}</div>}
    </>)
}