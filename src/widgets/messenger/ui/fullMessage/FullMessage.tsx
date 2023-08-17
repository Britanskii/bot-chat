import { Icon } from "../../../../shared"
import { FC, ReactNode, useEffect, useState } from "react"
import { Message } from "../../../../shared"
import s from "./fullMessage.module.sass"
import { cn } from "../../../../shared"

interface FullMessageProps {
    icon: ReactNode | string
    value: string
	align?: "left" | "right"
	style?: "accent" | "secondary"
}

export const FullMessage: FC<FullMessageProps> = ({ icon, value, align = "left", style = "secondary" }) => {
	const [message, setMessage] = useState<string[]>([])


	useEffect(() => {
		setMessage(value.split(""))
	}, [])


	return (
		<div className={cn([s.fullMessage, s[align]])}>
			<Icon className={s.fullMessage__icon} style={style}>{icon}</Icon>
			<Message className={s.fullMessage__message} style={style}>
				{message.map((letter, index) =>
					<span key={index} style={{ animationDelay: `${index * 5}ms` }} className={s.fullMessage__letter}>{letter}</span>
				)}
			</Message>
		</div>
	)
}
