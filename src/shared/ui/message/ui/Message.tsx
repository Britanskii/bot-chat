import { FC, ReactNode } from "react"
import s from "./message.module.sass"
import { cn } from "../../../lib/classNames.ts"

interface MessageProps {
    style?: "accent" | "secondary"
    children: ReactNode
	className?: string
}
export const Message: FC<MessageProps> = ({ children, className = "", style = "secondary" }) => {


	return (
		<div className={cn([s.message, s[style], className])}>
			{children}
		</div>
	)
}
