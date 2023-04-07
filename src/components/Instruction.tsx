interface InstructionProps {
    alt: string;
    svgSrc: string;
    text: string;
}

export const Instruction: React.FC<InstructionProps>= ({ alt, svgSrc, text})=>{
    return (<div className="instruction-container flex-center">
    <img className="instructions-icon" alt={alt} src={svgSrc} />
    <div className="instructions-text">{text}</div>
</div>)
}