import React from "react"

export interface IResultsPage {
  results?: object[]
}

const ResultsPage = ({ results }: IResultsPage) => {
	return (
		<div>
			<header>Results</header>
		</div>
	)
}

export default ResultsPage
