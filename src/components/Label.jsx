import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'

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
		marginRight: 8,
	},
	columnText: {
		marginRight: 0,
	},
})

const Label = ({
	label, key, column, className, children,
}) => {
	const classes = useStyles()
	if (label) {
		return (
			<label
				htmlFor={key}
				className={clsx(
					classes.label,
					{ [classes.column]: column },
					className,
				)}

			>
				<Body
					bold
					className={clsx(
						classes.labelText,
						{ [classes.columnText]: column },
					)}
				>
					{label}
				</Body>
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

export default Label
