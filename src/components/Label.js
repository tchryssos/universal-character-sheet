import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	label: {
		display: 'flex',
		alignItems: 'center',
		width: 'fit-content',
	},
	column: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	labelText: {
		fontWeight: 'bold',
		marginRight: 8,
	},
	columnText: {
		marginRight: 0,
	},
})

export default ({
	label, key, column, children,
}) => {
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
				<p
					className={clsx(
						classes.labelText,
						{ [classes.columnText]: column },
					)}
				>
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
