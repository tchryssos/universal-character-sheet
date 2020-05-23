import map from 'ramda/src/map'
import join from 'ramda/src/join'
import match from 'ramda/src/match'
import any from 'ramda/src/any'
import capitalize from 'util/capitalize'

const lowercaseWords = ['of', 'and', 'to', 'a']

export default (string) => {
	let wordChunks = match(/[A-Z]?[a-z0-9]+/g, string)
	wordChunks = map(
		(word) => {
			const lcWord = word.toLowerCase()
			const lcWordMatch = any(
				(lc) => lc === lcWord,
				lowercaseWords,
			)
			return lcWordMatch ? lcWord : word
		}, wordChunks,
	)
	return capitalize(join(' ', wordChunks))
}
