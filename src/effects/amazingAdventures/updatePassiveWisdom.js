import { useEffect } from 'react'
import prop from 'ramda/src/prop'
import path from 'ramda/src/path'
import assoc from 'ramda/src/assoc'
import {
	PROF, MOD, PAS_WIS, ABILITY_SCORES, WIS,
	PROF_BONUS,
} from 'data/bank'


export default (formVals, setFormVals) => {
	const wisdom = path([ABILITY_SCORES, WIS], formVals)
	const profBonus = prop(PROF_BONUS, formVals)
	const profMod = prop(PROF, wisdom) ? profBonus : 0
	const wisBonus = prop(MOD, wisdom) || 0
	return useEffect(() => (
		setFormVals(assoc(
			PAS_WIS,
			10 + wisBonus + profMod,
			formVals,
		))
	), [profBonus, profMod, wisBonus])
}
