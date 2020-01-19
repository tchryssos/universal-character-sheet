import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	test: {
		backgroundColor: '#6edb9f',
		height: 100,
		width: 100,
	}
})

const Home = () => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.test}>Whoa cool website</div>
		</>
	)
}

export default Home
