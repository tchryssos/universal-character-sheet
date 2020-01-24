import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	label: {
		display: 'flex',
	},
	column: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	labelText: {
		fontWeight: 'bold',
		marginRight: 8,
	},
})

export default ({ label, key, column, children }) => {
	const classes = useStyles()
	if (label) {
		return (
			<label
				htmlFor={key}
				className={clsx(
					classes.label,
					{ [classes.column]: column },
				)}

			>
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
