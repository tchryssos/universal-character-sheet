import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import modCalc from 'util/modCalc'

import NumberInput from 'components/NumberInput'

import { attributes } from 'constants/attributes'
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
	},
	saveBox: {
		width: '10%',
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
		<div className={classes.saveBox}>Save</div>
	</div>
)

const AttrRows = ({ formVals, setFormVals, classes }) => attributes.map(
	(attribute) => {
		const onChange = (e) => setFormVals({ ...formVals, [attribute]: e.target.value })
		const formAttribute = formVals[attribute]
		const attributeScore = (formAttribute || formAttribute === 0) ? formAttribute : 10
		return (
			<div className={classes.tableRow} key={attribute}>
				<div className={classes.nameBox}>{attribute}</div>
				<div className={classes.numberBox}>
					<NumberInput
						min={0}
						max={30}
						formKey={attribute}
						onChange={onChange}
						formVals={formVals}
						setFormVals={setFormVals}
					/>
				</div>
				<div className={classes.numberBox}>
					{modCalc(attributeScore)}
				</div>
			</div>
		)
	},
)

export default ({ formVals, setFormVals }) => {
	const classes = useStyles()
	return (
		<div className={classes.tableWrapper}>
			<TableHeader classes={classes} />
			<AttrRows
				formVals={formVals}
				setFormVals={setFormVals}
				classes={classes}
			/>
		</div>
	)
}
