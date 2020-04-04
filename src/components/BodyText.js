import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { black, white } from 'constants/styles/colors'

const useStyles = createUseStyles({
	body: {
		fontSize: 14,
		color: black,
	},
	bold: {
		fontWeight: 700,
	},
	lightText: {
		color: white,
	},
})

export default ({
	children, bold, medium, lightText, className,
}) => {
	const classes = useStyles()
	return (
		<p
			className={clsx(
				classes.body,
				{
					[classes.bold]: bold,
					[classes.medium]: medium,
					[classes.lightText]: lightText,
				},
				className,
			)}
		>
			{children}
		</p>
	)
}
