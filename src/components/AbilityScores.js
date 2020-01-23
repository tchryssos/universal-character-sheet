import React, { useEffect, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'
import prop from 'ramda/src/prop'
import clsx from 'clsx'

import SheetContext from 'contexts/sheetContext'
import modCalc from 'util/modCalc'

import NumberInput from 'components/NumberInput'
import CheckboxInput from 'components/CheckboxInput'

import { attributes } from 'constants/attributes'
import { VAL, MOD, PROF } from 'constants/schema'
import { shadow, white } from 'constants/styles/colors'
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
	},
	tableHeader: {
		backgroundColor: shadow,
		color: white,
		fontWeight: 'bold',
	},
	nameBox: {
		width: '40%',
		height: fontSizeMd,
		textTransform: 'uppercase',
	},
	numberBox: {
		width: '25%',
		display: 'flex',
		justifyContent: 'center',
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
		<div className={classes.numberBox}>SCORE</div>
		<div className={classes.numberBox}>MOD</div>
		<div className={classes.saveBox}>PROF</div>
	</div>
)

const AttrRows = ({ classes }) => {
	const formVals = useContext(SheetContext)
	const setFormVals = prop('setFormVals', formVals)
	return attributes.map(
		(attribute) => {
			useEffect(() => { // On ability value change, update ability mod
				setFormVals(assocPath(
					[attribute, MOD],
					modCalc(path([attribute, VAL], formVals)),
					formVals,
				))
			}, [path([attribute, VAL], formVals)])

			return (
				<div className={classes.tableRow} key={attribute}>
					<div className={classes.nameBox}>{attribute}</div>
					<div className={classes.numberBox}>
						<NumberInput
							min={0}
							max={30}
							formPath={[attribute, VAL]}
						/>
					</div>
					<div className={classes.numberBox}>
						<NumberInput
							min={-5}
							max={10}
							readOnly
							formPath={[attribute, MOD]}
						/>
					</div>
					<div className={classes.saveBox}>
						<CheckboxInput
							formPath={[attribute, PROF]}
						/>
					</div>
				</div>
			)
		},
	)
}

export default () => {
	const classes = useStyles()
	return (
		<div className={classes.tableWrapper}>
			<TableHeader classes={classes} />
			<AttrRows classes={classes} />
		</div>
	)
}
