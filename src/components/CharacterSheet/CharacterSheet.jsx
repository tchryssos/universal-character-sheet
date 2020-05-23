import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: [[16]],
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
})

export default ({ }) => {
	const classes = useStyles()
	return (
		<div className={classes.wrapper}>
			<form className={classes.form}>
				this is a form
			</form>
		</div>
	)
}
