import { useEffect } from 'react'
import assoc from 'ramda/src/assoc'
import prop from 'ramda/src/prop'
import split from 'ramda/src/split'

import profBonusCalc from 'util/profBonusCalc'

import { PROF_BONUS, TOTAL_HIT_DICE } from 'constants/schema'

export default (formVals, setFormVals, level) => {
	useEffect(() => {
		// Update Proficiency Bonus
		setFormVals(assoc(
			PROF_BONUS,
			profBonusCalc(level),
			formVals,
		))

		// Update Hit Dice
		const hitDiceSplit = split(
			'd',
			prop(TOTAL_HIT_DICE, formVals),
		)
		setFormVals(assoc(
			TOTAL_HIT_DICE,
			`${level}d${prop(1, hitDiceSplit)}`,
			formVals,
		))
	}, [level])
}
