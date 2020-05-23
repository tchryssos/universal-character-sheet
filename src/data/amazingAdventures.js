import {
	ABILITIES,
	ACROBATICS, ANIMAL_HANDLING, ATHLETICS, DECEPTION, HISTORY,
	INSIGHT, INTIMIDATION, INVESTIGATION, MEDICINE, NATURE,
	PERCEPTION, PERFORMANCE, PERSUASION, RELIGION, SCIENCE,
	SLEIGHT_OF_HAND, STEALTH, SURVIVAL,
} from 'data/shared'
import buildAbilityStatObjs from 'util/buildAbilityStatObjs'

export default {
	abilities: { ...buildAbilityStatObjs(ABILITIES) },
	skills: [
		ACROBATICS, ANIMAL_HANDLING, ATHLETICS, DECEPTION, HISTORY,
		INSIGHT, INTIMIDATION, INVESTIGATION, MEDICINE, NATURE,
		PERCEPTION, PERFORMANCE, PERSUASION, RELIGION, SCIENCE,
		SLEIGHT_OF_HAND, STEALTH, SURVIVAL,
	],
}
