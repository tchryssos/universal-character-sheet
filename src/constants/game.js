import {
	STR, DEX, CON, WIS, INT, CHA,
	ACROBATICS, ANIMAL_HANDLING, ATHLETICS, DECEPTION, HISTORY,
	INSIGHT, INTIMIDATION, INVESTIGATION, MEDICINE, NATURE,
	PERCEPTION, PERFORMANCE, PERSUASION, RELIGION, SCIENCE,
	SLEIGHT_OF_HAND, STEALTH, SURVIVAL,
} from 'constants/schema'
import buildOptionsFromStrings from 'util/buildOptionsFromStrings'

export const alignments = [
	{
		label: 'Lawful Good',
		value: 'lawfulGood',
	},
	{
		label: 'Neutral Good',
		value: 'neutralGood',
	},
	{
		label: 'Chaotic Good',
		value: 'chaoticGood',
	},
	{
		label: 'Lawful Neutral',
		value: 'lawfulNeutral',
	},
	{
		label: 'True Neutral',
		value: 'trueNeutral',
	},
	{
		label: 'Chaotic Neutral',
		value: 'chaoticNeutral',
	},
	{
		label: 'Lawful Evil',
		value: 'lawfulEvil',
	},
	{
		label: 'Neutral Evil',
		value: 'neutralEvil',
	},
	{
		label: 'Chaotic Evil',
		value: 'chaoticEvil',
	},
]

export const damageTypes = [
	{
		label: 'Acid',
		value: 'acid',
	},
	{
		label: 'Bludgeoning',
		value: 'bludgeoning',
	},
	{
		label: 'Cold',
		value: 'cold',
	},
	{
		label: 'Fire',
		value: 'fire',
	},
	{
		label: 'Force',
		value: 'force',
	},
	{
		label: 'Lightning',
		value: 'lightning',
	},
	{
		label: 'Necrotic',
		value: 'necrotic',
	},
	{
		label: 'Piercing',
		value: 'piercing',
	},
	{
		label: 'Poison',
		value: 'poison',
	},
	{
		label: 'Psychic',
		value: 'psychic',
	},
	{
		label: 'Radiant',
		value: 'radiant',
	},
	{
		label: 'Slashing',
		value: 'slashing',
	},
	{
		label: 'Thunder',
		value: 'thunder',
	},
]

export const attributes = [
	STR, DEX, CON, WIS, INT, CHA,
]

export const attributeOptions = buildOptionsFromStrings(attributes)

export const skills = [
	ACROBATICS, ANIMAL_HANDLING, ATHLETICS, DECEPTION, HISTORY,
	INSIGHT, INTIMIDATION, INVESTIGATION, MEDICINE, NATURE,
	PERCEPTION, PERFORMANCE, PERSUASION, RELIGION, SCIENCE,
	SLEIGHT_OF_HAND, STEALTH, SURVIVAL,
]

export const dice = [
	{
		label: 'd4',
		value: 4,
	},
	{
		label: 'd6',
		value: 6,
	},
	{
		label: 'd8',
		value: 8,
	},
	{
		label: 'd10',
		value: 10,
	},
	{
		label: 'd12',
		value: 12,
	},
	{
		label: 'd20',
		value: 20,
	},
]
