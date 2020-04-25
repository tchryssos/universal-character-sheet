import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	button: {
		width: 'fit-content',
	},
})

const Button = ({ label, onClick, className }) => {
	const classes = useStyles()
	return (
		<button
			type="button"
			onClick={onClick}
			className={clsx(
				classes.button,
				className,
			)}
		>
			{label}
		</button>
	)
}

export default Button
