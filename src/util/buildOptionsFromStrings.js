import map from 'ramda/src/map'
import capitalize from 'util/capitalize'

export default (strings = []) => map(
	(string) => ({ label: capitalize(string), value: string }),
	strings,
)
