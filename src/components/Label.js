import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	label: {
		display: 'flex',
	},
	labelText: {
		marginRight: 8,
	},
})

export default ({ label, key, children }) => {
	const classes = useStyles()
	if (label) {
		return (
			<label htmlFor={key} className={classes.label}>
				<p className={classes.labelText}>
					{label}
				</p>
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
