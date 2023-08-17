import s from "./input.module.sass"
import { FC, InputHTMLAttributes,  ChangeEvent, KeyboardEvent } from "react"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "onKeyDown"> {
	onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void
	onKeyDown?: (event: KeyboardEvent, value: string) => void
}

export const Input: FC<InputProps> = ({ onChange, onKeyDown, ...otherProps }) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event, event.target.value)
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		onKeyDown?.(event, event.target.value)
	}

	return (
		<input {...otherProps} onChange={handleChange} onKeyDown={handleKeyDown} className={s.input}/>
	)
}
