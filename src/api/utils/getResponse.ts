import { URL } from "../const/const.ts"
export interface MessageChunk {
    status: "content" | "done"
    value: string
}

export const getResponse = async (message: string) => {
	try {
		const requestBody = {
			message: message
		}

		const response = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(requestBody)
		})

		if (response.body === null) {
			throw Error("Response body is null")
		}

		const reader = response.body.getReader()

		const Decoder = new TextDecoder()
		const { value } = await reader.read()

		const chunkString = Decoder.decode(value)
		const combinedChunks = chunkString.replace(/}{/g, "},{")
		const completeJson = "[" + combinedChunks + "]"

		const chunkArray: MessageChunk[] = JSON.parse(completeJson)

		return chunkArray
	} catch (error) {
		console.error(error)
	}
}
