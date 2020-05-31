import React, { useContext, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import propOr from 'ramda/src/propOr'
import F from 'ramda/src/F'
import map from 'ramda/src/map'

import CharacterMeta from 'components/CharacterSheet/CharacterMeta'
import AbilityScores from 'components/CharacterSheet/AbilityScores'
import NumberInput from 'components/NumberInput'
import Skills from 'components/CharacterSheet/Skills'
import Combat from 'components/CharacterSheet/Combat'
import HashViewer from 'components/HashViewer'
import EffectDummy from 'components/EffectDummy'

import SheetContext from 'contexts/sheetContext'

import {
	LEVEL_UP_FUNC, LEVEL, INSPIRATION, PROF_BONUS, PAS_WIS,
	LINKED_STAT_UPDATE_EFFECTS,
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

const CharacterSheet = () => {
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

	return (
		<>
			{/*
				Takes an unknown n of effects and creates dummy components
				to run each one. This gets around the error for
				changing the number of effect calls made on different renders,
				as each "component" created here has its own effect, which may or may not
				exist on different renders (specifically initial and subsequent)
			*/}
			{map(
				(effect) => <EffectDummy effect={effect} />,
				propOr([], LINKED_STAT_UPDATE_EFFECTS, formVals),
			)}
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
		</>
	)
}

export default CharacterSheet
