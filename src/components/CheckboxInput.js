import React from 'react'
import { createUseStyles } from 'react-jss'

import Label from 'components/Label'

const useStyles = createUseStyles({
	input: {

	},
})

export default ({
	setFormVals, formVals, formKey, label,
}) => {
	const classes = useStyles()
	const onChange = () => setFormVals({ ...formVals, [formKey]: !formVals[formKey] })

	return (
		<Label label={label}>
			<input
				type="checkbox"
				className={classes.textInput}
				name={formKey}
				value={formVals[formKey]}
				onChange={onChange}
			/>
		</Label>
	)
}
