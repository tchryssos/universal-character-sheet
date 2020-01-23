import React from 'react'
import { createUseStyles } from 'react-jss'

import Input from 'components/Input'

const useStyles = createUseStyles({
	input: {

	},
})

export default ({
	setFormVals, formVals, formPath, label,
}) => {
	const classes = useStyles()
	return (
		<Input
			type="text"
			formVals={formVals}
			formPath={formPath}
			setFormVals={setFormVals}
			label={label}
		/>
	)
}
