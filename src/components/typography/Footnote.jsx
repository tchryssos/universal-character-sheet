import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { black } from 'constants/styles/colors'

const useStyles = createUseStyles({
	footnote: {
		fontSize: 12,
		color: black,
		display: 'block',
	},
	medium: {
		fontWeight: 500,
	},
	bold: {
		fontWeight: 600,
	},
})

const Footnote = ({
	children, className, bold, medium,
}) => {
	const classes = useStyles()
	return (
		<span
			className={clsx(
				classes.footnote,
				{
					[classes.bold]: bold,
					[classes.medium]: medium,
				},
				className,
			)}
		>
			{children}
		</span>
	)
}

export default Footnote
