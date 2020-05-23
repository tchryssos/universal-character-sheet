import map from 'ramda/src/map'
import capitalStringFromCamel from 'util/capitalStringFromCamel'

export default (strings = []) => map(
	(string) => {
		const label = capitalStringFromCamel(string)
		return ({ label, value: string })
	},
	strings,
)
