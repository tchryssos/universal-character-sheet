import { useEffect } from 'react'
import assoc from 'ramda/src/assoc'

import profBonusCalc from 'util/profBonusCalc'

import { PROF_BONUS } from 'constants/schema'

export default (formVals, setFormVals, level) => {
	useEffect(() => {
		setFormVals(assoc(
			PROF_BONUS,
			profBonusCalc(level),
			formVals,
		))
	}, [level])
}
