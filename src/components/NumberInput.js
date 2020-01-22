import React from 'react'
import { createUseStyles } from 'react-jss'

import Label from 'components/Label'

const useStyles = createUseStyles({
	input: {

	},
})

export default ({
	setFormVals, formVals, formKey, label,
	min, max,
}) => {
	const classes = useStyles()
	const onChange = (e) => setFormVals({ ...formVals, [formKey]: e.target.value })

	return (
		<Label label={label}>
			<input
				type="number"
				min={min}
				max={max}
				className={classes.textInput}
				name={formKey}
				value={formVals[formKey]}
				onChange={onChange}
			/>
		</Label>
	)
}
