// BIOGRAPHICAL
export const CHAR_NAME = 'charName'
export const CHAR_CLASS = 'charClass'
export const LEVEL = 'level'
export const ALIGNMENT = 'alignment'

// ABILITIES
export const STR = 'str'
export const DEX = 'dex'
export const CON = 'con'
export const WIS = 'wis'
export const INT = 'int'
export const CHA = 'cha'

// MISC
export const INSPIRATION = 'inspiration'
export const PROF_BONUS = 'profBonus'
export const PAS_WIS = 'pasWis'

// SKILLS
export const ACROBATICS = 'acrobatics'
export const ANIMAL_HANDLING = 'animalHandling'
export const ATHLETICS = 'athletics'
export const DECEPTION = 'deception'
export const HISTORY = 'history'
export const INSIGHT = 'insight'
export const INTIMIDATION = 'intimidation'
export const INVESTIGATION = 'investigation'
export const MEDICINE = 'medicine'
export const NATURE = 'nature'
export const PERCEPTION = 'perception'
export const PERFORMANCE = 'performance'
export const PERSUASION = 'persuasion'
export const RELIGION = 'religion'
export const SCIENCE = 'science'
export const SLEIGHT_OF_HAND = 'sleightOfHand'
export const STEALTH = 'stealth'
export const SURVIVAL = 'survival'

// MODIFIERS
export const VAL = 'val'
export const MOD = 'mod'
export const PROF = 'prof'
export const ABILITY = 'ability'

export const schema = {
	[CHAR_NAME]: '',
	[CHAR_CLASS]: '',
	[LEVEL]: '',
	[ALIGNMENT]: 'default',
	[STR]: {
		[VAL]: '',
		[MOD]: '',
		[PROF]: false,
	},
	[DEX]: {
		[VAL]: '',
		[MOD]: '',
		[PROF]: false,
	},
	[CON]: {
		[VAL]: '',
		[MOD]: '',
		[PROF]: false,
	},
	[WIS]: {
		[VAL]: '',
		[MOD]: '',
		[PROF]: false,
	},
	[INT]: {
		[VAL]: '',
		[MOD]: '',
		[PROF]: false,
	},
	[CHA]: {
		[VAL]: '',
		[MOD]: '',
		[PROF]: false,
	},
	[INSPIRATION]: '',
	[PROF_BONUS]: '',
	[PAS_WIS]: '',
	[ACROBATICS]: {
		[ABILITY]: DEX,
		[PROF]: false,
	},
	[ANIMAL_HANDLING]: {
		[ABILITY]: WIS,
		[PROF]: false,
	},
	[ATHLETICS]: {
		[ABILITY]: STR,
		[PROF]: false,
	},
	[DECEPTION]: {
		[ABILITY]: CHA,
		[PROF]: false,
	},
	[HISTORY]: {
		[ABILITY]: INT,
		[PROF]: false,
	},
	[INSIGHT]: {
		[ABILITY]: WIS,
		[PROF]: false,
	},
	[INTIMIDATION]: {
		[ABILITY]: CHA,
		[PROF]: false,
	},
	[INVESTIGATION]: {
		[ABILITY]: INT,
		[PROF]: false,
	},
	[MEDICINE]: {
		[ABILITY]: WIS,
		[PROF]: false,
	},
	[NATURE]: {
		[ABILITY]: INT,
		[PROF]: false,
	},
	[PERCEPTION]: {
		[ABILITY]: WIS,
		[PROF]: false,
	},
	[PERFORMANCE]: {
		[ABILITY]: CHA,
		[PROF]: false,
	},
	[PERSUASION]: {
		[ABILITY]: CHA,
		[PROF]: false,
	},
	[RELIGION]: {
		[ABILITY]: CHA,
		[PROF]: false,
	},
	[SCIENCE]: {
		[ABILITY]: INT,
		[PROF]: false,
	},
	[SLEIGHT_OF_HAND]: {
		[ABILITY]: DEX,
		[PROF]: false,
	},
	[STEALTH]: {
		[ABILITY]: DEX,
		[PROF]: false,
	},
	[SURVIVAL]: {
		[ABILITY]: WIS,
		[PROF]: false,
	},
}
