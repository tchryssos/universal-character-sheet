import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	label: {

	},
})

export default ({ label, key, children }) => {
	const classes = useStyles()
	if (label) {
		return (
			<label htmlFor={key} className={classes.label}>
				{label}
				{children}
			</label>
		)
	}
	return (
		<>
			{children}
		</>
	)
}
