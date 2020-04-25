import { useEffect } from 'react'
import mergeDeepRight from 'ramda/src/mergeDeepRight'
import prop from 'ramda/src/prop'

import profBonusCalc from 'util/profBonusCalc'

import { PROF_BONUS, TOTAL_HIT_DICE_COUNT } from 'constants/schema'

export default (formVals, setFormVals, level) => {
	useEffect(() => {
		setFormVals(
			mergeDeepRight(
				formVals,
				{
					[PROF_BONUS]: profBonusCalc(level),
					[TOTAL_HIT_DICE_COUNT]: prop(TOTAL_HIT_DICE_COUNT, formVals) + 1,
				},
			),
		)
	}, [level])
}
