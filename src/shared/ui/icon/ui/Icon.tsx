import { FC, ReactNode } from "react"
import s from "./icon.module.sass"
import { cn } from "../../../lib/classNames.ts"

interface IconProps {
    style?: "accent" | "secondary"
	children?: ReactNode
	className?: string
}

export const Icon: FC<IconProps> = ({ children, className= "", style = "secondary" }) => {

	return (
		<div className={cn([s.icon, s[style], className])}>
			{children}
		</div>
	)
}
