import forEach from 'ramda/src/forEach'
import assoc from 'ramda/src/assoc'

import { VAL, MOD, PROF } from 'data/bank'

export default (abilities = []) => {
	let obj = {}
	forEach(
		(ability) => {
			const abilityObj = {
				[VAL]: 10,
				[MOD]: 0,
				[PROF]: false,
			}
			obj = assoc(ability, abilityObj, obj)
		},
		abilities,
	)
	return obj
}
