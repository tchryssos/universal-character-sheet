import React from 'react'
import { createUseStyles } from 'react-jss'

import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'

import { dice } from 'constants/attributes'

const useStyles = createUseStyles({
	diceInputWrapper: {
		display: 'flex',
	},
})

export default ({ diceCountPath, diceTypePath }) => {
	const classes = useStyles()
	return (
		<div className={classes.diceInputWrapper}>
			<NumberInput
				formPath={diceCountPath}
				min={1}
			/>
			<SelectInput
				formPath={diceTypePath}
				options={dice}
			/>
		</div>
	)
}
