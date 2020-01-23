import React from 'react'
import { createUseStyles } from 'react-jss'

import Input from 'components/Input'

const useStyles = createUseStyles({
	input: {

	},
})

export default ({
	setFormVals, formVals, formPath, label,
	min, max, readOnly,
}) => {
	const classes = useStyles()
	return (
		<Input
			type="number"
			min={min}
			max={max}
			readOnly={readOnly}
			formVals={formVals}
			formPath={formPath}
			setFormVals={setFormVals}
			label={label}
		/>
	)
}
