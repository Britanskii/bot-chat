type Mods = Record<string, boolean | string>


export const classNames = (classes: string[], mods: Mods = {}): string => {

	return [
		...classes.filter(Boolean),
		...Object.entries(mods)
			.filter(([, value]) => Boolean(value))
			.map(([className]) => className)
	].join(" ").trimEnd()
}

export const cn = classNames
