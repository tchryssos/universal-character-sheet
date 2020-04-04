import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export default ({ label, onClick }) => {
	const classes = useStyles()
	return (
		<button type="button" onClick={onClick}>
			{label}
		</button>
	)
}
