import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import assoc from 'ramda/src/assoc'

import SheetContext from 'contexts/sheetContext'
import levelUp from 'effects/levelUp'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'
import AbilityScores from 'components/AbilityScores'
import Skills from 'components/Skills'
import IconStat from 'components/IconStat'
import DeathSaves from 'components/DeathSaves'
import Attacks from 'components/Attacks'
import HashViewer from 'components/HashViewer'
import DiceInput from 'components/DiceInput'

import Heart from 'static/svg/heart.svg'
import HalfHeart from 'static/svg/halfHeart.svg'
import Shield from 'static/svg/shield.svg'
import HeartStack from 'static/svg/heartStack.svg'
import Run from 'static/svg/run.svg'

import { alignments } from 'constants/game'
import {
	schema, CHAR_NAME, CHAR_CLASS, LEVEL, ALIGNMENT,
	INSPIRATION, PROF_BONUS, PAS_WIS, WIS, PROF, MOD,
	AC, CURRENT_HIT_POINTS, MAX_HIT_POINTS, TEMP_HIT_POINTS,
	SPEED, TOTAL_HIT_DICE_COUNT, TOTAL_HIT_DICE_TYPE, CURRENT_HIT_DICE,

} from 'constants/schema'

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
	levelUp(formVals, setFormVals, level) // Perform basic updates based on level

	useEffect(() => { // Set passive wisdom based on mod, prof bonus, and prof
		const profMod = prop(PROF, wisdom) ? profBonus : 0
		const wisBonus = prop(MOD, wisdom) || 0
		setFormVals(assoc(
			PAS_WIS,
			10 + wisBonus + profMod,
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
					<Skills />
					<IconStat
						label="AC"
						icon={Shield}
						min={0}
						formPath={[AC]}
					/>
					<IconStat
						label="Current HP"
						icon={HalfHeart}
						formPath={[CURRENT_HIT_POINTS]}
					/>
					<IconStat
						label="Max HP"
						icon={Heart}
						formPath={[MAX_HIT_POINTS]}
					/>
					<IconStat
						label="Temporary HP"
						icon={HeartStack}
						formPath={[TEMP_HIT_POINTS]}
						min={0}
					/>
					<IconStat
						label="Speed"
						icon={Run}
						formPath={[SPEED]}
						min={0}
					/>
					<DiceInput
						diceCountPath={[TOTAL_HIT_DICE_COUNT]}
						diceTypePath={[TOTAL_HIT_DICE_TYPE]}
						label="Total Hit Dice"
					/>
					<NumberInput
						label="Remaining Hit Dice"
						formPath={[CURRENT_HIT_DICE]}
						min={0}
					/>
					<DeathSaves />
					<Attacks />
				</form>
				<HashViewer string={hash} />
			</div>
		</SheetContext.Provider>
	)
}

export default Home
