import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import CharacterMeta from 'components/CharacterSheet/CharacterMeta'

import SheetContext from 'contexts/sheetContext'

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		// paddingTop: 16,
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
	return (
		<div className={classes.wrapper}>
			<form className={classes.form}>
				<CharacterMeta />
			</form>
		</div>
	)
}
