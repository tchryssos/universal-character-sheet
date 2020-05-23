import map from 'ramda/src/map'
import join from 'ramda/src/join'
import match from 'ramda/src/match'
import capitalize from 'util/capitalize'

export default (strings = []) => map(
	(string) => {
		const wordChunks = match(/[A-Z]/g, string)
		const label = capitalize(join(' ', wordChunks))
		return ({ label, value: string })
	},
	strings,
)
