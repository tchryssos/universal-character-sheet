import React, { useContext, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'

import mapWithIndex from 'util/mapWithIndex'

import SheetContext from 'contexts/sheetContext'
import { ATTACKS } from 'constants/schema'

const useStyles = createUseStyles({
	attackRow: {
		display: 'flex',
		marginBottom: 8,
		'&:last-child': {
			marginBottom: 0,
		},
	},
	inputWrapper: {
		marginRight: 4,
	},
})

const MappedAttacks = ({ attacks, classes }) => mapWithIndex(
	(attack, index) => (
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
			<div>
				<TextInput
					formPath={[ATTACKS, index, 'damage']}
				/>
			</div>
		</div>
	),
	attacks,
)

export default () => {
	const [lastIndex, setLastIndex] = useState(0)
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	const { setFormVals } = formVals
	const attacks = prop(ATTACKS, formVals)
	const lastName = path([lastIndex, 'name'], attacks)
	const lastDamage = path([lastIndex, 'damage'], attacks)

	useEffect(() => {
		if (lastName && lastDamage) {
			setFormVals(
				assocPath(
					[ATTACKS, lastIndex + 1],
					{
						name: '',
						attackBonus: 0,
						damage: '',
					},
					formVals,
				),
			)
			setLastIndex(lastIndex + 1)
		}
	}, [lastName, lastDamage])

	return (
		<MappedAttacks
			attacks={attacks}
			classes={classes}
		/>
	)
}
