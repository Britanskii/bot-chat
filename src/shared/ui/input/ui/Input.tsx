import s from "./input.module.sass"
import { FC, InputHTMLAttributes,  ChangeEvent } from "react"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void
}

export const Input: FC<InputProps> = ({ onChange, ...otherProps }) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event, event.target.value)
	}

	return (
		<input {...otherProps} onChange={handleChange} className={s.input}/>
	)
}
