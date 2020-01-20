import React from 'react'
import { createUseStyles } from 'react-jss'

import Label from 'components/Label'

const useStyles = createUseStyles({
	textInput: {

	},
})

export default ({
	setFormVals, formVals, key, label,
}) => {
	const classes = useStyles()
	const onChange = (e) => setFormVals({ ...formVals, [key]: e.target.value })

	return (
		<Label label={label}>
			<input
				type="text"
				className={classes.textInput}
				name={key}
				value={formVals[key]}
				onChange={onChange}
			/>
		</Label>
	)
}
