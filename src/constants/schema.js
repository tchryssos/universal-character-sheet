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

// MISC GAME
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

// COMBAT STATS
export const AC = 'ac'
export const INITIATIVE = 'initiative'
export const SPEED = 'speed'
export const MAX_HIT_POINTS = 'maxHitPoints'
export const CURRENT_HIT_POINTS = 'currentHitPoints'
export const TEMP_HIT_POINTS = 'tempHitPoints'
export const CURRENT_HIT_DICE = 'hitDice'
export const TOTAL_HIT_DICE_COUNT = 'totalHitDiceCount'
export const TOTAL_HIT_DICE_TYPE = 'totalHitDiceType'
export const SUCCESSFUL_DEATH_SAVES = 'successfulDeathSaves'
export const FAILED_DEATH_SAVES = 'failedDeathSaves'

// MODIFIERS
export const VAL = 'val'
export const MOD = 'mod'
export const PROF = 'prof'
export const ABILITY = 'ability'

// ATTACKS
export const ATTACKS = 'attacks'

export const schema = {
	// BIOGRAPHICAL
	[CHAR_NAME]: '',
	[CHAR_CLASS]: '',
	[LEVEL]: 1,
	[ALIGNMENT]: 'default',

	// ABILITIES
	[STR]: {
		[VAL]: 10,
		[MOD]: 0,
		[PROF]: false,
	},
	[DEX]: {
		[VAL]: 10,
		[MOD]: 0,
		[PROF]: false,
	},
	[CON]: {
		[VAL]: 10,
		[MOD]: 0,
		[PROF]: false,
	},
	[WIS]: {
		[VAL]: 10,
		[MOD]: 0,
		[PROF]: false,
	},
	[INT]: {
		[VAL]: 10,
		[MOD]: 0,
		[PROF]: false,
	},
	[CHA]: {
		[VAL]: 10,
		[MOD]: 0,
		[PROF]: false,
	},
	// MISC GAME
	[INSPIRATION]: 0,
	[PROF_BONUS]: 2,
	[PAS_WIS]: 10,

	// SKILLS
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

	// COMBAT STATS
	[AC]: 10,
	[INITIATIVE]: 0,
	[SPEED]: 30,
	[MAX_HIT_POINTS]: 1,
	[CURRENT_HIT_POINTS]: 1,
	[TEMP_HIT_POINTS]: 0,
	[CURRENT_HIT_DICE]: 1,
	[TOTAL_HIT_DICE_COUNT]: 1,
	[TOTAL_HIT_DICE_TYPE]: 8,
	[SUCCESSFUL_DEATH_SAVES]: {
		total: 3,
		saves: [],
	},
	[FAILED_DEATH_SAVES]: {
		total: 3,
		saves: [],
	},

	// ATTACKS
	[ATTACKS]: [
		{
			name: '',
			attackBonus: 0,
			damageDiceCount: 1,
			damageDiceType: 8,
			damageType: '',
		},
	],

}
