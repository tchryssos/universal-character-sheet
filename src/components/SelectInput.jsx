import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'
import join from 'ramda/src/join'

import SheetContext from 'contexts/sheetContext'
import Label from 'components/Label'

import orNull from 'util/orNull'

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

const SelectInput = ({
	formPath = [], label, options, className,
}) => {
	const classes = useStyles()
	const { formVals, setFormVals } = useContext(SheetContext)
	const onChange = (e) => setFormVals(assocPath(formPath, e.target.value, formVals))

	return orNull(
		path(formPath, formVals),
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
		</Label>,
		true,
	)
}

export default SelectInput
