import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'
import AbilityScores from 'components/AbilityScores'
import HashViewer from 'components/HashViewer'

import { alignments } from 'constants/attributes'
import {
	schema, CHAR_NAME, CHAR_CLASS, LEVEL, ALIGNMENT,
	INSPIRATION, PROF_BONUS, PAS_WIS,
} from 'constants/schema'

import profBonus from 'util/profBonus'

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

	useEffect(() => { // Set proficiency bonus based on level
		setFormVals({
			...formVals,
			[PROF_BONUS]: profBonus(formVals[LEVEL]),
		})
	}, [formVals[LEVEL]])

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
				<NumberInput
					label="Inpsiration"
					formKey={INSPIRATION}
					setFormVals={setFormVals}
					formVals={formVals}
					min={0}
				/>
				<NumberInput
					label="Proficiency Bonus"
					formKey={PROF_BONUS}
					formVals={formVals}
					min={0}
					readOnly
				/>
				<NumberInput
					label="Passive Perception"
					formKey={PAS_WIS}
					formVals={formVals}
					min={0}
					readOnly
				/>
			</form>
			<HashViewer string={hash} />
		</div>
	)
}

export default Home
