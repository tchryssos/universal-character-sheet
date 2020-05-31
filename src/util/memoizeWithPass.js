import curryN from 'ramda/src/curryN'
import has from 'ramda/src/has'

export default curryN(2, (mFn, fn) => {
	const cache = {}
	return (...args) => {
		const [key, pass] = mFn(...args)
		if (!has(key, cache)) {
			cache[key] = fn(...[...args, pass])
		}
		return cache[key]
	}
})
