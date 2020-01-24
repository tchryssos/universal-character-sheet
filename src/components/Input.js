import React, { useContext } from 'react'
import clsx from 'clsx'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'
import join from 'ramda/src/join'
import prop from 'ramda/src/prop'
import { createUseStyles } from 'react-jss'

import SheetContext from 'contexts/sheetContext'

import Label from 'components/Label'

const useStyles = createUseStyles({
	input: {
		padding: 4,
	},
})

export default ({
	formPath = [], label, min, max,
	readOnly, type, className,
}) => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	const setFormVals = prop('setFormVals', formVals)
	const onChange = (e) => {
		const value = type === 'checkbox' ? 'checked' : 'value'
		setFormVals(assocPath(formPath, e.target[value], formVals))
	}

	return (
		<div className={classes.inputWrapper}>
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
		</div>

	)
}
