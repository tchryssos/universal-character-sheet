import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import times from 'ramda/src/times'
import path from 'ramda/src/path'
import SheetContext from 'contexts/sheetContext'
import { SUCCESSFUL_DEATH_SAVES, FAILED_DEATH_SAVES } from 'constants/schema'

import CheckboxInput from 'components/CheckboxInput'
import Label from 'components/Label'

const useStyles = createUseStyles({
	savesWrapper: {
		border: [[1, 'solid', 'black']],
		width: 'fit-content',
		padding: 4,
	},
	saveWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	checkboxWrapper: {
		display: 'flex',
	},
})

const Saves = ({ formVals, formPath, classes }) => {
	const count = path([formPath, 'total'], formVals)
	const label = formPath === SUCCESSFUL_DEATH_SAVES ? 'Successes' : 'Failures'
	return (
		<div className={classes.saveWrapper}>
			<p>{label}</p>
			<div className={classes.checkboxWrapper}>
				{
					times(
						(i) => (
							<CheckboxInput
								formPath={[formPath, 'saves', i]}
								key={`${i}-${formPath}`}
							/>
						),
						count,
					)
				}
			</div>
		</div>
	)
}

export default () => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)

	return (
		<Label label="Death Saves" key="deathSaves" column>
			<div className={classes.savesWrapper}>
				<Saves
					formVals={formVals}
					formPath={SUCCESSFUL_DEATH_SAVES}
					classes={classes}
				/>
				<Saves
					formVals={formVals}
					formPath={FAILED_DEATH_SAVES}
					classes={classes}
				/>
			</div>
		</Label>
	)
}
