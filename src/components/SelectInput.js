import React from 'react'
import { createUseStyles } from 'react-jss'

import Label from 'components/Label'

const useStyles = createUseStyles({
	input: {

	},
	option: {
		textTransform: 'uppercase',
	},
})

const Options = ({ options, classes }) => options.map(
	(option) => (
		<option
			className={classes.option}
			value={option}
			key={option}
		>
			{option}
		</option>
	),
)

export default ({
	setFormVals, formVals, formKey, label, options,
}) => {
	const classes = useStyles()
	const onChange = (e) => setFormVals({ ...formVals, [formKey]: e.target.value })

	return (
		<Label label={label}>
			<select
				className={classes.textInput}
				name={formKey}
				value={formVals[formKey]}
				onChange={onChange}
				defaultValue="default"
			>
				<option value="default" disabled>-- Choose One --</option>
				<Options options={options} classes={classes} />
			</select>
		</Label>
	)
}
