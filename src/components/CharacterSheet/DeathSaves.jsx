import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import times from 'ramda/src/times'
import path from 'ramda/src/path'
import prop from 'ramda/src/prop'
import SheetContext from 'contexts/sheetContext'
import orNull from 'util/orNull'
import {
	SUCCESSFUL_DEATH_SAVES, FAILED_DEATH_SAVES, DEATH_SAVES,
} from 'data/bank'

import CheckboxInput from 'components/CheckboxInput'
import Label from 'components/Label'
import Body from 'components/typography/Body'

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
	const count = path([...formPath, 'total'], formVals)
	const deathSaveType = prop(1, formPath)
	const label = deathSaveType === SUCCESSFUL_DEATH_SAVES ? 'Successes' : 'Failures'
	return (
		<div className={classes.saveWrapper}>
			<Body>{label}</Body>
			<div className={classes.checkboxWrapper}>
				{
					times(
						(i) => (
							<CheckboxInput
								formPath={[...formPath, 'saves', i]}
								key={`${i}-${deathSaveType}`}
							/>
						),
						count,
					)
				}
			</div>
		</div>
	)
}

const DeathSaves = () => {
	const classes = useStyles()
	const { formVals } = useContext(SheetContext)
	const deathSaves = prop(DEATH_SAVES, formVals)
	return orNull(
		deathSaves,
		<Label label="Death Saves" column>
			<div className={classes.savesWrapper}>
				<Saves
					formVals={formVals}
					formPath={[DEATH_SAVES, SUCCESSFUL_DEATH_SAVES]}
					classes={classes}
				/>
				<Saves
					formVals={formVals}
					formPath={[DEATH_SAVES, FAILED_DEATH_SAVES]}
					classes={classes}
				/>
			</div>
		</Label>,
		true,
	)
}

export default DeathSaves
