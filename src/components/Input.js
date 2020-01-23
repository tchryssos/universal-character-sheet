import React from 'react'
import clsx from 'clsx'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'
import join from 'ramda/src/join'
import { createUseStyles } from 'react-jss'

import Label from 'components/Label'

const useStyles = createUseStyles({
	input: {

	},
})

export default ({
	setFormVals, formVals, formPath = [], label,
	min, max, readOnly, type, className,
}) => {
	const classes = useStyles()
	const onChange = (e) => {
		const value = type === 'checkbox' ? 'checked' : 'value'
		setFormVals(assocPath(formPath, e.target[value], formVals))
	}

	return (
		<Label label={label}>
			<input
				type={type}
				min={min}
				max={max}
				className={clsx(
					classes.input,
					className,
				)}
				name={join('-', formPath)}
				value={path(formPath, formVals)}
				onChange={onChange}
				readOnly={readOnly}
			/>
		</Label>
	)
}
