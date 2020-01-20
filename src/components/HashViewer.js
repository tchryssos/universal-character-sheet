import React from 'react'
import { createUseStyles } from 'react-jss'

import { grey, darkGrey } from 'constants/styles/colors'

const useStyles = createUseStyles({
	viewer: {
		marginTop: 16,
		backgroundColor: grey,
		padding: 24,
		boxShadow: [['inset', 1, 1, 3, darkGrey]],
		wordWrap: 'break-word',
	},
})

export default ({ string }) => {
	const classes = useStyles()
	return (
		<div className={classes.viewer}>
			{string}
		</div>
	)
}
