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
					<TextInput
						formPath={[ATTACKS, index, 'damage']}
					/>
				</div>
				<Button
					label="x"
					onClick={deleteAttack}
					className={classes.removeButton}
				/>
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
					damage: '',
				},
				attacks,
			),
		),
	)
	return (
		<div className={classes.attacksWrapper}>
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
	)
}
