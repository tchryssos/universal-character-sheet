import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import map from 'ramda/src/map'
import prop from 'ramda/src/prop'

import SheetContext from 'contexts/sheetContext'
import { ATTACKS } from 'constants/schema'

const useStyles = createUseStyles({

})

const MappedAttacks = ({ attacks, classes }) => map(
	(attack) => {
		const { name, attackBonus, damage } = attack
		return (
			<div>{name}{attackBonus}{damage}</div>
		)
	},
	attacks,
)

export default () => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	return (
		<MappedAttacks
			attacks={prop(ATTACKS, formVals)}
			classes={classes}
		/>
	)
}
