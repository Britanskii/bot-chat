import rounds from "../assets/rounds.svg"
import s from "./chat.module.sass"
import { Header } from "../../../shared"
import { Messenger } from "../../../widgets"


export const Chat = () => {

	return (
		<div className={s.chat}>
			<div className={s.chat__main}>
				<Header title={"Bot Chat"} subtitle={"AI-based service"}/>
				<Messenger/>
			</div>
			<div className={s.chat__background} />
			<img className={s.chat__rounds} src={rounds} alt="rounds"/>
		</div>
	)
}
