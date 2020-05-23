import React, { useContext, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import propOr from 'ramda/src/propOr'
import F from 'ramda/src/F'

import CharacterMeta from 'components/CharacterSheet/CharacterMeta'
import AbilityScores from 'components/CharacterSheet/AbilityScores'

import SheetContext from 'contexts/sheetContext'

import { LEVEL_UP_FUNC, LEVEL } from 'data/bank'

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	form: {
		margin: [[16]],
		marginTop: 48,
		display: 'flex',
		flexDirection: 'column',
	},
})

export default () => {
	const classes = useStyles()
	const { formVals, setFormVals } = useContext(SheetContext)

	const level = prop(LEVEL, formVals)
	useEffect(() => {
		propOr(F, LEVEL_UP_FUNC, formVals)(formVals, setFormVals, level)
	}, [level])

	return (
		<div className={classes.wrapper}>
			<form className={classes.form}>
				<CharacterMeta />
				<AbilityScores />
			</form>
		</div>
	)
}
