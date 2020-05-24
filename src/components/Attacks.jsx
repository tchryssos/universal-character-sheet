import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import prop from 'ramda/src/prop'
import path from 'ramda/src/path'
import length from 'ramda/src/length'
import remove from 'ramda/src/remove'
import assoc from 'ramda/src/assoc'
import append from 'ramda/src/append'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import Button from 'components/Button'
import Label from 'components/Label'
import Body from 'components/typography/Body'
import DiceInput from 'components/DiceInput'
import SelectInput from 'components/SelectInput'

import mapWithIndex from 'util/mapWithIndex'
import buildOptionsFromStrings from 'util/buildOptionsFromStrings'
import orNull from 'util/orNull'

import SheetContext from 'contexts/sheetContext'
import { ATTACKS, DEFAULT_ATTACK, DAMAGE_TYPES } from 'data/bank'
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
	damDice: {
		display: 'flex',
		flexDirection: 'column',
	},
	damType: {
		display: 'flex',
		flexDirection: 'column',
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
			<Body>
				Attack Name
			</Body>
		</div>
		<div className={clsx(classes.rowBox, classes.attackBonus)}>
			<Body>
				Attack Bonus
			</Body>
		</div>
		<div className={clsx(classes.rowBox, classes.damDice)}>
			<Body>
				Damage Dice
			</Body>
		</div>
		<div className={clsx(classes.rowBox, classes.damBonus)}>
			<Body>
				Damage Bonus
			</Body>
		</div>
		<div className={clsx(classes.rowBox, classes.damType)}>
			<Body>
				Damage Type(s)
			</Body>
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
				{/* ATTACK NAME */}
				<div className={clsx(classes.rowBox, classes.attackName)}>
					<TextInput
						formPath={[ATTACKS, index, 'name']}
					/>
				</div>

				{/* ATTACK BONUS */}
				<div className={clsx(classes.rowBox, classes.attackBonus)}>
					<NumberInput
						formPath={[ATTACKS, index, 'attackBonus']}
					/>
				</div>

				{/* DAMAGE DICE */}
				<div className={clsx(classes.rowBox, classes.damDice)}>
					{mapWithIndex(
						(damage, dIndex) => (
							<div key={`${index}-${dIndex}-dice`}>
								<DiceInput
									diceCountPath={[ATTACKS, index, 'damage', dIndex, 'damageDiceCount']}
									diceTypePath={[ATTACKS, index, 'damage', dIndex, 'damageDiceType']}
								/>
							</div>
						),
						path([ATTACKS, index, 'damage'], formVals),
					)}
				</div>

				{/* DAMAGE BONUS */}
				<div className={clsx(classes.rowBox, classes.damType)}>
					<NumberInput
						formPath={[ATTACKS, index, 'damageBonus']}
					/>
				</div>

				{/* DAMAGE TYPE */}
				<div className={clsx(classes.rowBox, classes.damType)}>
					{mapWithIndex(
						(damage, dIndex) => (
							<div key={`${index}-${dIndex}-damage`}>
								<SelectInput
									options={buildOptionsFromStrings(prop(DAMAGE_TYPES, formVals))}
									formPath={[ATTACKS, index, 'damage', dIndex, 'damageType']}
								/>
							</div>
						),
						path([ATTACKS, index, 'damage'], formVals),
					)}
				</div>

				{/* DELETE ROW */}
				<div className={clsx(classes.rowBox, classes.deleteWrapper)}>
					{orNull(
						length(path([[ATTACKS]], formVals)) > 1,
						<Button
							label="X"
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
	const { formVals, setFormVals } = useContext(SheetContext)
	const attacks = prop(ATTACKS, formVals)

	const addAttack = () => setFormVals(
		assoc(
			ATTACKS,
			append(
				DEFAULT_ATTACK,
				attacks,
			),
		),
	)

	return orNull(
		attacks,
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
					label="+ Add New Attack"
				/>
			</div>
		</Label>,
		true,
	)
}

export default Attacks
