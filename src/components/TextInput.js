import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export default ({ setFormVals, formVals, key }) => {
	const classes = useStyles()
	const onChange = e => setFormVals({ ...formVals, `${key}`: e.target.value })

	return (
		<input
			type="text"
			className={classes.input}
			name={key}
			value={formVals[key]}
			onChange={onChange}
		/>
	)
}
