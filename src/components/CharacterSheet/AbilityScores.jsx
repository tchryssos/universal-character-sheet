import React, { useEffect, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'
import prop from 'ramda/src/prop'
import clsx from 'clsx'

import SheetContext from 'contexts/sheetContext'
import modCalc from 'util/modCalc'
import orNull from 'util/orNull'

import NumberInput from 'components/NumberInput'
import CheckboxInput from 'components/CheckboxInput'
import Body from 'components/typography/Body'

import {
	MOD, PROF, VAL, ABILITY_LIST, ABILITY_SCORES,
} from 'data/bank'
import { shadow } from 'constants/styles/colors'
import { fontSizeMd } from 'constants/styles/text'

const useStyles = createUseStyles({
	tableWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	tableRow: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		marginTop: 8,
	},
	tableHeader: {
		backgroundColor: shadow,
	},
	nameBox: {
		width: '40%',
		height: fontSizeMd,
		textTransform: 'uppercase',
		display: 'flex',
		alignItems: 'center',
	},
	numberBox: {
		width: '25%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	saveBox: {
		width: '10%',
		display: 'flex',
		justifyContent: 'center',
		alginItems: 'center',
	},
})

const TableHeader = ({ classes }) => (
	<div
		className={clsx(
			classes.tableRow,
			classes.tableHeader,
		)}
	>
		<div className={classes.nameBox} />
		<div className={classes.numberBox}>
			<Body lightText bold>
				SCORE
			</Body>
		</div>
		<div className={classes.numberBox}>
			<Body lightText bold>
				MOD
			</Body>
		</div>
		<div className={classes.saveBox}>
			<Body lightText bold>
				SCORE
			</Body>
		</div>
	</div>
)

const AttrRows = ({
	classes, abilities, setFormVals, formVals,
}) => {
	return abilities.map(
		(ability) => {
			useEffect(() => { // On ability value change, update ability mod
				setFormVals(assocPath(
					[ABILITY_SCORES, ability, MOD],
					modCalc(path([ABILITY_SCORES, ability, VAL], formVals)),
					formVals,
				))
			}, [path([ABILITY_SCORES, ability, VAL], formVals)])

			return (
				<div className={classes.tableRow} key={ability}>
					<div className={classes.nameBox}>
						<Body>{ability}</Body>
					</div>
					<div className={classes.numberBox}>
						<NumberInput
							min={0}
							max={30}
							formPath={[ABILITY_SCORES, ability, VAL]}
						/>
					</div>
					<div className={classes.numberBox}>
						<NumberInput
							min={-5}
							max={10}
							readOnly
							formPath={[ABILITY_SCORES, ability, MOD]}
						/>
					</div>
					<div className={classes.saveBox}>
						<CheckboxInput
							formPath={[ABILITY_SCORES, ability, PROF]}
						/>
					</div>
				</div>
			)
		},
	)
}

const AbilityScores = () => {
	const classes = useStyles()
	const { formVals, setFormVals } = useContext(SheetContext)
	const abilities = prop(ABILITY_LIST, formVals)
	return orNull(
		abilities,
		<div className={classes.tableWrapper}>
			<TableHeader classes={classes} />
			<AttrRows
				classes={classes}
				abilities={abilities}
				setFormVals={setFormVals}
				formVals={formVals}
			/>
		</div>,
		true,
	)
}

export default AbilityScores
