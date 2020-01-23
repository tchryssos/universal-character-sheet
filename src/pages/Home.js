import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import assoc from 'ramda/src/assoc'

import SheetContext from 'contexts/sheetContext'
import setProfBonus from 'effects/setProfBonus'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'
import AbilityScores from 'components/AbilityScores'
import HashViewer from 'components/HashViewer'

import { alignments } from 'constants/attributes'
import {
	schema, CHAR_NAME, CHAR_CLASS, LEVEL, ALIGNMENT,
	INSPIRATION, PROF_BONUS, PAS_WIS, WIS, PROF, MOD,
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

	const level = prop(LEVEL, formVals)
	const wisdom = prop(WIS, formVals)
	const profBonus = prop(PROF_BONUS, formVals)

	// On each form field change, update the encoded string
	const json = JSON.stringify(formVals)
	const hash = window.btoa(json)

	// START - EFFECTS - START
	setProfBonus(formVals, setFormVals, level) // Set proficiency bonus based on level

	useEffect(() => { // Set passive wisdom based on mod, prof bonus, and prof
		const profMod = prop(PROF, wisdom) ? profBonus : 0
		setFormVals(assoc(
			PAS_WIS,
			10 + prop(MOD, wisdom) + profMod,
			formVals,
		))
	}, [prop(MOD, wisdom), prop(PROF, wisdom), profBonus])
	// END - EFFECTS - END

	return (
		<SheetContext.Provider value={{ ...formVals, setFormVals }}>
			<div className={classes.wrapper}>
				<form className={classes.form}>
					<TextInput
						label="Character Name"
						formPath={[CHAR_NAME]}
					/>
					<TextInput
						label="Character Class"
						formPath={[CHAR_CLASS]}
					/>
					<NumberInput
						label="Level"
						formPath={[LEVEL]}
						min={1}
						max={20}
					/>
					<SelectInput
						label="Alignment"
						formPath={[ALIGNMENT]}
						options={alignments}
					/>
					<AbilityScores />
					<NumberInput
						label="Inpsiration"
						formPath={[INSPIRATION]}
						min={0}
					/>
					<NumberInput
						label="Proficiency Bonus"
						formPath={[PROF_BONUS]}
						min={0}
						readOnly
					/>
					<NumberInput
						label="Passive Perception"
						formPath={[PAS_WIS]}
						min={0}
						readOnly
					/>
				</form>
				<HashViewer string={hash} />
			</div>
		</SheetContext.Provider>
	)
}

export default Home
