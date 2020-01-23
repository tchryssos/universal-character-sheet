export const CHAR_NAME = 'charName'
export const CHAR_CLASS = 'charClass'
export const LEVEL = 'level'
export const ALIGNMENT = 'alignment'
export const STR = 'str'
export const DEX = 'dex'
export const CON = 'con'
export const WIS = 'wis'
export const INT = 'int'
export const CHA = 'cha'
export const INSPIRATION = 'inspiration'
export const PROF_BONUS = 'profBonus'
export const PAS_WIS = 'pasWis'

export const VAL = 'val'
export const MOD = 'mod'
export const PROF = 'prof'

export const schema = {
	[CHAR_NAME]: '',
	[CHAR_CLASS]: '',
	[LEVEL]: '',
	[ALIGNMENT]: 'default',
	[STR]: {
		[VAL]: '',
		mod: '',
		prof: false,
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
}
