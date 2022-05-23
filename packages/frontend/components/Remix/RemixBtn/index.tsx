import { useAccount } from 'wagmi';
import styles from '../../../styles/btns.module.css';

type RemixBtnProps = {
    btnText?: string,
    onClick: () => void,
    disabled: boolean;
    className?: string;
}

export const RemixBtn = ({btnText, onClick, disabled, className}: RemixBtnProps) => {    
    return (
        <button onClick={onClick} disabled={disabled}  className={(className || "create-btn-gradient rounded-full border-black border-solid border-4 px-16 sm:px-16 lg:px-20 py-3 text-lg font-medium ") + (disabled ? "opacity-30" : "comic-border-mini")}>
            { btnText || "REMIX THIS MEME" }
        </button>
    )
}