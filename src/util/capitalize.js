import slice from 'ramda/src/slice'

export default (string = '') => (
	`${string[0].toUpperCase()}${slice(1, Infinity, string)}`
)
