import { map } from "lodash/"
import React, { useCallback } from "react"
import { TMainDataPageProps } from "./ConnectedMainDataPage"
import { IMainDataPageDataItem } from "./state/mainDataSlice"
import { getOr } from "lodash/fp"
import { Button, ButtonGroup } from "@mui/material"

const MainDataPage = ({
	fetchMainDataPageDataAsync,
	mainPageData,
	setMainDataPageData,
	setResultText,
	resultText,
}: TMainDataPageProps) => {
	const fetchData = useCallback(async () => {
		await fetchMainDataPageDataAsync()
	}, [fetchMainDataPageDataAsync])

	const onInput = useCallback(
		(e) => {
			setResultText(getOr("", "target.value", e) as string)
		},
		[setResultText],
	)

	const onClearData = useCallback(() => {
		setMainDataPageData()
	}, [setMainDataPageData])

	return (
		<div className='container-sm'>
			<ButtonGroup aria-label='Basic example'>
				<Button onClick={fetchData}>Fetch Data</Button>
				<Button onClick={onClearData}>Clear Data</Button>
			</ButtonGroup>

			{/*<InputGroup>*/}
			{/*  <InputGroup.Text>With textarea</InputGroup.Text>*/}
			{/*  <FormControl as='textarea' aria-label='With textarea' />*/}
			{/*</InputGroup>*/}

			<div>
				<input style={{ width: 100, height: 30 }} onInput={onInput} />
			</div>
			{resultText}
			<div>
				{map(mainPageData ?? [], (item: IMainDataPageDataItem, index) => {
					return <div key={index}>{item.title}</div>
				})}
			</div>
		</div>
	)
}

export default MainDataPage
