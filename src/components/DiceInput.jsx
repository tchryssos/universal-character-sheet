import React from 'react'
import { createUseStyles } from 'react-jss'

import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'
import Label from 'components/Label'

import { DICE } from 'data/bank'

const useStyles = createUseStyles({
	diceInputWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	input: {
		width: 48,
	},
})

const DiceInput = ({ label, diceCountPath, diceTypePath }) => {
	const classes = useStyles()
	return (
		<Label label={label}>
			<div className={classes.diceInputWrapper}>
				<NumberInput
					formPath={diceCountPath}
					min={1}
					max={20}
					className={classes.input}
				/>
				<SelectInput
					formPath={diceTypePath}
					options={DICE}
					className={classes.input}
				/>
			</div>
		</Label>
	)
}

export default DiceInput
