import React from 'react'
import { createUseStyles } from 'react-jss'

import Label from 'components/Label'

const useStyles = createUseStyles({
	textInput: {

	},
})

export default ({
	setFormVals, formVals, formKey, label,
}) => {
	const classes = useStyles()
	const onChange = (e) => setFormVals({ ...formVals, [formKey]: e.target.value })

	return (
		<Label label={label}>
			<input
				type="text"
				className={classes.textInput}
				name={formKey}
				value={formVals[formKey]}
				onChange={onChange}
			/>
		</Label>
	)
}
