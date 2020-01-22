import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'
import AbilityScores from 'components/AbilityScores'
import HashViewer from 'components/HashViewer'

import { alignments } from 'constants/attributes'
import {
	CHAR_NAME, CHAR_CLASS, LEVEL, ALIGNMENT, schema,
} from 'constants/schema'

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
	const [formVals, setFormVals] = useState(schema)

	// On each form field change, update the encoded string
	const json = JSON.stringify(formVals)
	const hash = window.btoa(json)

	return (
		<div className={classes.wrapper}>
			<form className={classes.form}>
				<TextInput
					label="Character Name"
					formKey={CHAR_NAME}
					setFormVals={setFormVals}
					formVals={formVals}
				/>
				<TextInput
					label="Character Class"
					formKey={CHAR_CLASS}
					setFormVals={setFormVals}
					formVals={formVals}
				/>
				<NumberInput
					label="Level"
					formKey={LEVEL}
					setFormVals={setFormVals}
					formVals={formVals}
					min={1}
					max={20}
				/>
				<SelectInput
					label="Alignment"
					formKey={ALIGNMENT}
					setFormVals={setFormVals}
					formVals={formVals}
					options={alignments}
				/>
				<AbilityScores
					setFormVals={setFormVals}
					formVals={formVals}
				/>
			</form>
			<HashViewer string={hash} />
		</div>
	)
}

export default Home
