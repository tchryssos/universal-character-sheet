import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		height: '100%',
	},
})

const Home = () => {
	const classes = useStyles()
	const [formVals, setFormVals] = useState({})

	// On each form field change, update the encoded string
	const json = JSON.stringify(formVals)
	const hash = window.btoa(json)

	return (
		<div className={classes.wrapper}>
			<form>
				
			</form>
		</div>
	)
}

export default Home
