import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import prop from 'ramda/src/prop'
import path from 'ramda/src/path'
import length from 'ramda/src/length'
import remove from 'ramda/src/remove'
import assoc from 'ramda/src/assoc'
import append from 'ramda/src/append'
import orNull from 'util/orNull'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import Button from 'components/Button'
import Label from 'components/Label'
import BodyText from 'components/BodyText'
import DiceInput from 'components/DiceInput'
import SelectInput from 'components/SelectInput'

import mapWithIndex from 'util/mapWithIndex'

import SheetContext from 'contexts/sheetContext'
import { ATTACKS } from 'constants/schema'
import { damageTypes } from 'constants/game'
import { black } from 'constants/styles/colors'

const useStyles = createUseStyles({
	labelWrapper: {
		width: '100%',
	},
	attacksWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		border: [[1, 'solid', black]],
		padding: 4,
	},
	rowWrapper: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 8,
		'&:last-child': {
			paddingBottom: 0,
		},
		'&:hover $removeButton': {
			display: 'block',
		},
	},
	rowBox: {
		width: '100%',
		marginRight: 4,
	},
	deleteWrapper: {
		width: 20,
		minWidth: 20,
		display: 'flex',
		justifyContent: 'center',
	},
	removeButton: {
		display: 'none',
	},
})

const HeaderRow = ({ classes }) => (
	<div className={classes.rowWrapper}>
		<div className={clsx(classes.rowBox, classes.attackName)}>
			<BodyText>
				Attack Name
			</BodyText>
		</div>
		<div className={clsx(classes.rowBox, classes.attackBonus)}>
			<BodyText>
				Bonus
			</BodyText>
		</div>
		<div className={clsx(classes.rowBox, classes.damDice)}>
			<BodyText>
				Damage Dice
			</BodyText>
		</div>
		<div className={clsx(classes.rowBox, classes.damType)}>
			<BodyText>
				Damage Type
			</BodyText>
		</div>
		<div className={classes.deleteWrapper} />
	</div>
)

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
				className={classes.rowWrapper}
			>
				<div className={clsx(classes.rowBox, classes.attackName)}>
					<TextInput
						formPath={[ATTACKS, index, 'name']}
					/>
				</div>
				<div className={clsx(classes.rowBox, classes.attackBonus)}>
					<NumberInput
						formPath={[ATTACKS, index, 'attackBonus']}
					/>
				</div>
				<div className={clsx(classes.rowBox, classes.damDice)}>
					<DiceInput
						diceCountPath={[ATTACKS, index, 'damageDiceCount']}
						diceTypePath={[ATTACKS, index, 'damageDiceType']}
					/>
				</div>
				<div className={clsx(classes.rowBox, classes.damType)}>
					<SelectInput
						options={damageTypes}
						formPath={[ATTACKS, index, 'damageType']}
					/>
				</div>
				<div className={clsx(classes.rowBox, classes.deleteWrapper)}>
					{orNull(
						length(path([[ATTACKS]], formVals)) > 1,
						<Button
							label="x"
							onClick={deleteAttack}
							className={classes.removeButton}
						/>,
					)}
				</div>
			</div>
		)
	},
	attacks,
)

const Attacks = () => {
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
					damageType: 'default',
				},
				attacks,
			),
		),
	)
	return (
		<Label label="Attacks" column className={classes.labelWrapper}>
			<div className={classes.attacksWrapper}>
				<HeaderRow classes={classes} />
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

export default Attacks
