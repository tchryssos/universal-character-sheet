import forEach from 'ramda/src/forEach'
import { VAL, MOD, PROF } from 'data/shared'

export default (abilities = []) => {
	const obj = {}
	forEach(
		(ability) => {
			const abilityObj = {
				[VAL]: 10,
				[MOD]: 0,
				[PROF]: false,
			}
			obj[ability] = abilityObj
		},
		abilities,
	)
}
