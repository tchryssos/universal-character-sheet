import React from 'react'

import IconStat from 'components/IconStat'
import DiceInput from 'components/DiceInput'
import NumberInput from 'components/NumberInput'
import DeathSaves from 'components/CharacterSheet/DeathSaves'

import Heart from 'static/svg/heart.svg'
import HalfHeart from 'static/svg/halfHeart.svg'
import Shield from 'static/svg/shield.svg'
import HeartStack from 'static/svg/heartStack.svg'
import Run from 'static/svg/run.svg'

import {
	HIT_POINTS, CURRENT_HIT_POINTS, CURRENT_HIT_DICE_COUNT, HIT_DICE,
	MAX_HIT_POINTS, TEMP_HIT_POINTS, SPEED, AC, TOTAL_HIT_DICE_COUNT,
	TOTAL_HIT_DICE_TYPE,
} from 'data/bank'

export const Combat = () => (
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
	</>
)

export default Combat
