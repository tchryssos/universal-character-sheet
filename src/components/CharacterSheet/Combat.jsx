import React, { useContext } from 'react'
import prop from 'ramda/src/prop'

import IconStat from 'components/IconStat'
import DiceInput from 'components/DiceInput'
import NumberInput from 'components/NumberInput'
import DeathSaves from 'components/CharacterSheet/DeathSaves'
import Attacks from 'components/Attacks'
import SelectInput from 'components/SelectInput'

import Heart from 'static/svg/heart.svg'
import HalfHeart from 'static/svg/halfHeart.svg'
import Shield from 'static/svg/shield.svg'
import HeartStack from 'static/svg/heartStack.svg'
import Run from 'static/svg/run.svg'

import buildOptionsFromStrings from 'util/buildOptionsFromStrings'

import SheetContext from 'contexts/sheetContext'

import {
	HIT_POINTS, CURRENT_HIT_POINTS, CURRENT_HIT_DICE_COUNT, HIT_DICE,
	MAX_HIT_POINTS, TEMP_HIT_POINTS, SPEED, AC, TOTAL_HIT_DICE_COUNT,
	TOTAL_HIT_DICE_TYPE, CASTING_ABILITY, ABILITY_LIST, SPELL_SAVE,
} from 'data/bank'

export const Combat = () => {
	const { formVals } = useContext(SheetContext)
	return (
		<>
			<IconStat
				label="AC"
				icon={Shield}
				min={0}
				formPath={[AC]}
			/>
			<IconStat
				label="Current HP"
				icon={HalfHeart}
				formPath={[HIT_POINTS, CURRENT_HIT_POINTS]}
			/>
			<IconStat
				label="Max HP"
				icon={Heart}
				formPath={[HIT_POINTS, MAX_HIT_POINTS]}
			/>
			<IconStat
				label="Temporary HP"
				icon={HeartStack}
				formPath={[HIT_POINTS, TEMP_HIT_POINTS]}
				min={0}
			/>
			<IconStat
				label="Speed"
				icon={Run}
				formPath={[SPEED]}
				min={0}
			/>
			<DiceInput
				diceCountPath={[HIT_DICE, TOTAL_HIT_DICE_COUNT]}
				diceTypePath={[HIT_DICE, TOTAL_HIT_DICE_TYPE]}
				label="Total Hit Dice"
			/>
			<NumberInput
				label="Remaining Hit Dice"
				formPath={[HIT_DICE, CURRENT_HIT_DICE_COUNT]}
				min={0}
			/>
			<DeathSaves />
			<Attacks />
			<SelectInput
				options={buildOptionsFromStrings(prop(ABILITY_LIST, formVals))}
				label="Casting Ability"
				formPath={[CASTING_ABILITY]}
			/>
			<NumberInput
				readOnly
				label="Spell Save DC"
				formPath={[SPELL_SAVE]}
			/>
		</>
	)
}

export default Combat
