import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'
import join from 'ramda/src/join'
import prop from 'ramda/src/prop'

import SheetContext from 'contexts/sheetContext'
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
	formPath = [], label, options,
}) => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	const setFormVals = prop('setFormVals', formVals)
	const onChange = (e) => setFormVals(assocPath(formPath, e.target.value, formVals))

	return (
		<Label label={label}>
			<select
				className={classes.textInput}
				name={join('-', formPath)}
				value={path(formPath, formVals)}
				onChange={onChange}
			>
				<option value="default" disabled>-- Choose One --</option>
				<Options options={options} classes={classes} />
			</select>
		</Label>
	)
}
