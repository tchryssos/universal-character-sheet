import slice from 'ramda/src/slice'
import propOr from 'ramda/src/propOr'

export default (string = '') => (
	`${propOr('', 0, string).toUpperCase()}${slice(1, Infinity, string)}`
)
