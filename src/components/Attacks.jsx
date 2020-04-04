import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import prop from 'ramda/src/prop'
import remove from 'ramda/src/remove'
import assoc from 'ramda/src/assoc'
import append from 'ramda/src/append'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import Button from 'components/Button'
import Label from 'components/Label'
import BodyText from 'components/BodyText'
import DiceInput from 'components/DiceInput'

import mapWithIndex from 'util/mapWithIndex'

import SheetContext from 'contexts/sheetContext'
import { ATTACKS } from 'constants/schema'
import { black } from 'constants/styles/colors'

const useStyles = createUseStyles({
	attacksWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: 'fit-content',
		border: [[1, 'solid', black]],
		padding: 4,
	},
	labelWrapper: {
		display: 'flex',
		paddingRight: 16,
	},
	attackHeader: {
		flex: 1,
	},
	attackRow: {
		display: 'flex',
		alignItems: 'center',
		paddingBottom: 8,
		'&:last-child': {
			paddingBottom: 0,
		},
		'&:hover $removeButton': {
			display: 'block',
		},
	},
	inputWrapper: {
		marginRight: 4,
	},
	buttonWrapper: {
		width: 20,
		display: 'flex',
		justifyContent: 'center',
	},
	removeButton: {
		display: 'none',
	},
})

const MappedAttacks = ({ attacks, formVals, classes }) => mapWithIndex(
	(attack, index) => {
		const { setFormVals } = formVals

		const deleteAttack = () => setFormVals(
			assoc(
				ATTACKS,
				remove(index, 1, attacks),
				formVals,
			),
		)

		return (
			<div
				key={index}
				className={classes.attackRow}
			>
				<div className={classes.inputWrapper}>
					<TextInput
						formPath={[ATTACKS, index, 'name']}
					/>
				</div>
				<div className={classes.inputWrapper}>
					<NumberInput
						formPath={[ATTACKS, index, 'attackBonus']}
						min={0}
					/>
				</div>
				<div className={classes.inputWrapper}>
					<DiceInput
						diceCountPath={[ATTACKS, index, 'damageDiceCount']}
						diceTypePath={[ATTACKS, index, 'damageDiceType']}
					/>
				</div>
				<div className={classes.buttonWrapper}>
					<Button
						label="x"
						onClick={deleteAttack}
						className={classes.removeButton}
					/>
				</div>
			</div>
		)
	},
	attacks,
)

export default () => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	const { setFormVals } = formVals
	const attacks = prop(ATTACKS, formVals)

	const addAttack = () => setFormVals(
		assoc(
			ATTACKS,
			append(
				{
					name: '',
					attackBonus: 0,
					damageDiceCount: 1,
					damageDiceType: 8,
					damageType: '',
				},
				attacks,
			),
		),
	)
	return (
		<Label label="Attacks" column>
			<div className={classes.attacksWrapper}>
				<div className={classes.labelWrapper}>
					<BodyText className={classes.attackHeader}>
						Name
					</BodyText>
					<BodyText className={classes.attackHeader}>
						Attack Bonus
					</BodyText>
					<BodyText className={classes.attackHeader}>
						Damage / Type
					</BodyText>
				</div>
				<MappedAttacks
					attacks={attacks}
					formVals={formVals}
					classes={classes}
				/>
				<Button
					onClick={addAttack}
					label="+"
				/>
			</div>
		</Label>
	)
}
