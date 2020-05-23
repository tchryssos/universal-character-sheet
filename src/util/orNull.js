export default (bool, truthy, strict) => {
	if (strict && bool !== undefined) {
		return truthy
	}
	if (bool) {
		return truthy
	}
	return null
}
