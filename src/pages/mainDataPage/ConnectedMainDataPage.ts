import MainDataPage from "./MainDataPage"
import { connect, ConnectedProps } from "react-redux"
import {
	fetchMainDataPageDataAsync,
	selectMainDataPageData,
	selectResultText,
	setMainDataPageData,
	setResultText,
} from "./state/mainDataSlice"
import { RootState } from "../../redux/store"

const mapStateToProps = (state: RootState) => {
	return {
		mainPageData: selectMainDataPageData(state),
		resultText: selectResultText(state),
	}
}

const mapDispatchToProps = {
	fetchMainDataPageDataAsync,
	setResultText,
	setMainDataPageData,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type TMainDataPageProps = ConnectedProps<typeof connector>

export default connector(MainDataPage)
