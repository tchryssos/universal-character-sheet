import React, { useContext, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import propOr from 'ramda/src/propOr'
import F from 'ramda/src/F'

import CharacterMeta from 'components/CharacterSheet/CharacterMeta'
import AbilityScores from 'components/CharacterSheet/AbilityScores'
import NumberInput from 'components/NumberInput'
import Skills from 'components/CharacterSheet/Skills'
import Combat from 'components/CharacterSheet/Combat'
import HashViewer from 'components/HashViewer'

import SheetContext from 'contexts/sheetContext'

import {
	LEVEL_UP_FUNC, LEVEL, INSPIRATION, PROF_BONUS, PAS_WIS,
	PAS_WIS_FUNC,
} from 'data/bank'

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	form: {
		margin: [[16]],
		marginTop: 48,
		display: 'flex',
		flexDirection: 'column',
	},
})

export default () => {
	const classes = useStyles()
	const { formVals, setFormVals } = useContext(SheetContext)

	// On each form field change, update the encoded string
	const json = JSON.stringify(formVals)
	const hash = window.btoa(json)

	// Run level up effect, if one exists
	const level = prop(LEVEL, formVals)
	useEffect(() => {
		propOr(F, LEVEL_UP_FUNC, formVals)(formVals, setFormVals, level)
	}, [level])

	// // Set passive wisdom based on mod, prof bonus, and prof
	// useEffect(() => {
	// 	const profMod = prop(PROF, wisdom) ? profBonus : 0
	// 	const wisBonus = prop(MOD, wisdom) || 0
	// 	setFormVals(assoc(
	// 		PAS_WIS,
	// 		10 + wisBonus + profMod,
	// 		formVals,
	// 	))
	// }, [prop(MOD, wisdom), prop(PROF, wisdom), profBonus])

	return (
		<div className={classes.wrapper}>
			<form className={classes.form}>
				<CharacterMeta />
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
				<Skills />
				<Combat />
			</form>
			<HashViewer string={hash} />
		</div>
	)
}
