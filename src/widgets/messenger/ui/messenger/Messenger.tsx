import { InputSend } from "../../../../shared"
import s from "./messenger.module.sass"
import { MouseEvent, useState } from "react"
import { getResponse } from "../../../../api/utils/getResponse.ts"
import { FullMessage } from "../fullMessage/FullMessage.tsx"

interface Message {
    owner: "user" | "bot",
    message: string
}

const initialMessages: Message[] = [
	{
		owner: "bot",
		message: "Hello! I’m BotHub, AI-based bot designed to answer all your questions."
	}
]

export const Messenger = () => {
	const [messages, setMessages] = useState<Message[]>(initialMessages)

	const onSubmit = async (_: MouseEvent<HTMLButtonElement>, value: string) => {
		if (value === "") {
			return
		}

		setMessages(messages => [...messages, { owner: "user", message: value }])

		const data = await getResponse(value)

		if (data === undefined) {
			return
		}

		const messageContent = data.reduce((accumulator, message) => accumulator + message.value, "")

		const message: Message = { owner: "bot", message: messageContent }

		setMessages(messages => [...messages, message])
	}

	return (
		<div>
			<div className={s.messenger__messages}>
				{messages.map(({ message, owner }, index) => {
					const isUser = owner === "user"
					const { style, align, icon }:
                        { style: "secondary" | "accent", align: "left" | "right", icon: string } =
                        isUser ? { style: "secondary", align: "right", icon: "T" } : {
                        	style: "accent",
                        	align: "left",
                        	icon: "B"
                        }

					return <FullMessage key={index} style={style} align={align} icon={icon} value={message}/>
				})}
			</div>

			<InputSend className={s.messenger__input} onSubmit={onSubmit} placeholder={"Start typing here"}/>
		</div>
	)
}
