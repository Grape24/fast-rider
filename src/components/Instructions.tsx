import SubmitIcon from '../assets/submit.svg';
import TicketIcon from '../assets/ticket.svg';
import TimeIcon from '../assets/time.svg';
import { Instruction } from "./Instruction";

interface IInstructionsData {
    svgSrc: string;
    text: string;
    alt: string
}

export const Instructions = () => {
    const instructionsData: IInstructionsData[] = [{
        svgSrc: TicketIcon,
        text: 'Enter your park ticket #PIN number, then select the desired ride while noting the stated return time',
        alt: 'Ticket'
    },
    { svgSrc: SubmitIcon, text: `Press 'submit' to confirm and retrieve your access code`, alt: 'Submit' },
    { svgSrc: TimeIcon, text: 'When the time comes use the special FastRider line to cut out a considerable wait time', alt: 'time' }]
    return (<section className="instructions-container">
        {instructionsData.map(({ svgSrc, text, alt }, idx) => (<div key={idx}>
            <Instruction svgSrc={svgSrc} text={text} alt={alt} />
        </div>))}
    </section>)
}
