import { IMainDataPageData } from "../common/interfaces/json-interfaces"

const url = {
	homePageData: "https://jsonplaceholder.typicode.com/posts",
}

export const httpGet = (url: string, headers: string[][] | Record<string, string> | undefined) =>
	fetch(url, {
		method: "get",
		headers,
		credentials: "same-origin",
	})

export const httpGetJson = async (url: string, headerOverrides = {}) => {
	const response = await httpGet(url, { Accept: "application/json", ...headerOverrides })
	return response.json()
}

const api = {
	fetchMainDataPageData: async () => {
		return (await httpGetJson(url.homePageData)) as IMainDataPageData[]
	},
}

export default api
