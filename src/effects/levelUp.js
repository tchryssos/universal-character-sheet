import { useEffect } from 'react'
import mergeDeepRight from 'ramda/src/mergeDeepRight'
import prop from 'ramda/src/prop'
import split from 'ramda/src/split'

import profBonusCalc from 'util/profBonusCalc'

import { PROF_BONUS, TOTAL_HIT_DICE } from 'constants/schema'

export default (formVals, setFormVals, level) => {
	useEffect(() => {
		const hitDiceSplit = split(
			'd',
			prop(TOTAL_HIT_DICE, formVals),
		)
		setFormVals(
			mergeDeepRight(
				formVals,
				{
					[PROF_BONUS]: profBonusCalc(level),
					[TOTAL_HIT_DICE]: `${level}d${prop(1, hitDiceSplit)}`,
				},
			),
		)
	}, [level])
}
