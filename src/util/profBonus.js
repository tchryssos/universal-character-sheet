export default (level) => {
	let profBonus
	if (level <= 4) {
		profBonus = 2
	} else if (level <= 8) {
		profBonus = 3
	} else if (level <= 12) {
		profBonus = 4
	} else if (level <= 15) {
		profBonus = 5
	} else {
		profBonus = 6
	}
	return profBonus
}
