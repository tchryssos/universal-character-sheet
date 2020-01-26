import React from 'react'
import { createUseStyles } from 'react-jss'

import NumberInput from 'components/NumberInput'

const useStyles = createUseStyles({
	iconStatWrapper: {
		position: 'relative',
		height: 64,
		width: 64,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: 0,
		left: 0,
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
			/>
			<NumberInput
				formPath={formPath}
				min={min}
				max={max}
				label={label}
				labelColumn
			/>
		</div>
	)
}
