import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'
import join from 'ramda/src/join'
import prop from 'ramda/src/prop'

import SheetContext from 'contexts/sheetContext'
import Label from 'components/Label'

const useStyles = createUseStyles({
	option: {
		textTransform: 'uppercase',
	},
})

const Options = ({ options, classes }) => options.map(
	({ label, value }) => (
		<option
			className={classes.option}
			value={value}
			key={value}
		>
			{label}
		</option>
	),
)

export default ({
	formPath = [], label, options, className,
}) => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	const setFormVals = prop('setFormVals', formVals)
	const onChange = (e) => setFormVals(assocPath(formPath, e.target.value, formVals))

	return (
		<Label label={label}>
			<select
				className={clsx(
					className,
				)}
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
