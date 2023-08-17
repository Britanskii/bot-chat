import s from "./button.module.sass"
import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { cn } from "../../../lib/classNames.ts"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode | ReactNode[]
}

export const Button: FC<ButtonProps> = ({ children, className= "", type = "button", ...otherProps }) => {


	return (
		<button {...otherProps} className={cn([s.button, className])} type={type} >
			{children}
		</button>
	)
}
