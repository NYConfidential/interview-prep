import { createTheme } from "@mui/material/styles"

export const appTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1600,
			xl: 2200,
		},
	},
})
