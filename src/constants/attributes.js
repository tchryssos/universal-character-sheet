import {
	STR, DEX, CON, WIS, INT, CHA,
	STR_SAVE, DEX_SAVE, CON_SAVE, WIS_SAVE, INT_SAVE, CHA_SAVE,
} from 'constants/schema'

export const alignments = [
	'Lawful Good',
	'Neutral Good',
	'Chaotic Good',
	'Lawful Neutral',
	'True Neutral',
	'Chaotic Neutral',
	'Lawful Evil',
	'Neutral Evil',
	'Chaotic Evil',
]

export const attributes = [
	STR, DEX, CON, WIS, INT, CHA,
]

export const saves = {
	[STR]: STR_SAVE,
	[DEX]: DEX_SAVE,
	[CON]: CON_SAVE,
	[WIS]: WIS_SAVE,
	[INT]: INT_SAVE,
	[CHA]: CHA_SAVE,
}
