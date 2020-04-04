import React from 'react'
import { createUseStyles } from 'react-jss'

import NumberInput from 'components/NumberInput'

const useStyles = createUseStyles({
	iconStatWrapper: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		height: 32,
		width: 32,
	},
})

export default ({
	icon, formPath, min, max, label,
}) => {
	const classes = useStyles()
	return (
		<div className={classes.iconStatWrapper}>
			<img
				src={icon}
				className={classes.icon}
				alt={label}
			/>
			<NumberInput
				formPath={formPath}
				min={min}
				max={max}
				label={label}
			/>
		</div>
	)
}
