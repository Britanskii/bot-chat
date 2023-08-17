import { FC } from "react"
import s from "./header.module.sass"

interface HeaderProps {
    title: string
    subtitle?:string
}

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {

	return (
		<div>
			<div className={s.header__title}>{title}</div>
			{subtitle && <div className={s.header__subtitle}>{subtitle}</div>}
		</div>
	)
}
