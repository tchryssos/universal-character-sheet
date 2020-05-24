import React from 'react'
import { createUseStyles } from 'react-jss'

import Input from 'components/Input'

const useStyles = createUseStyles({
	input: {

	},
})

const CheckboxInput = ({
	setFormVals, formVals, formPath, label, visiblePath,
}) => {
	const classes = useStyles()
	return (
		<Input
			type="checkbox"
			formVals={formVals}
			formPath={formPath}
			visiblePath={visiblePath}
			setFormVals={setFormVals}
			label={label}
		/>
	)
}

export default CheckboxInput
