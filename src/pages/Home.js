import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import TextInput from 'components/TextInput'
import HashViewer from 'components/HashViewer'

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: [[16, '10%']],
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
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
			<form className={classes.form}>
				<TextInput
					label="Character Name"
					formKey="charName"
					setFormVals={setFormVals}
					formVals={setFormVals}
				/>
			</form>
			<HashViewer string={hash} />
		</div>
	)
}

export default Home
