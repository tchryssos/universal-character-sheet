import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import BodyText from 'components/BodyText'

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
				<BodyText
					bold
					className={clsx(
						classes.labelText,
						{ [classes.columnText]: column },
					)}
				>
					{label}
				</BodyText>
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
