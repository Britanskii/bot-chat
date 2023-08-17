import { FC, InputHTMLAttributes, MouseEvent, useRef, ChangeEvent } from "react"
import { Input } from "../../input/ui/Input.tsx"
import { Button } from "../../button/ui/Button.tsx"
import send from "../assets/send.svg"
import s from "./inputSend.module.sass"
import { cn } from "../../../lib/classNames.ts"

interface InputSendProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onSubmit"> {
    onSubmit: (event: MouseEvent<HTMLButtonElement> , value: string) => void
}


export const InputSend: FC<InputSendProps> = ({ onSubmit, className = "", ...otherProps }) => {
	const value = useRef("")

	const handleSubmit = (event: MouseEvent<HTMLButtonElement> ) => {
		onSubmit(event, value.current)
	}

	const handleChange = (_: ChangeEvent<HTMLInputElement>, inputValue: string) => {
		value.current = inputValue
	}

	return (
		<div className={cn([s.inputSend, className])}>
			<Button className={s.inputSend__button} onClick={handleSubmit}><img src={send} alt="send"/></Button>
			<Input onChange={handleChange} {...otherProps}/>
		</div>
	)
}
