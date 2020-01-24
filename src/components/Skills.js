import React, { useContext, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import prop from 'ramda/src/prop'
import map from 'ramda/src/map'
import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'

import SheetContext from 'contexts/sheetContext'
import { skills } from 'constants/attributes'
import {
	VAL, PROF, ABILITY, MOD,
} from 'constants/schema'

import NumberInput from 'components/NumberInput'
import CheckboxInput from 'components/CheckboxInput'
import Label from 'components/Label'

const useStyles = createUseStyles({
	skillsWrapper: {
		display: 'flex',
	},
	table: {
		display: 'flex',
		flexDirection: 'column',
	},
	skillRow: {
		display: 'flex',
	},
	nameBox: {
		flex: 1,
		textTransform: 'capitalize',
		marginRight: 8,
	},
})

const SkillRow = ({
	skill, formVals, classes,
}) => {
	return (
		<div className={classes.skillRow}>
			<div className={classes.nameBox}>{skill}</div>
			<NumberInput
				readOnly
				min={-5}
				formPath={[path([skill, ABILITY], formVals), MOD]}
			/>
			<CheckboxInput
				formPath={[skill, PROF]}
			/>
		</div>
	)
}

export default () => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)
	const setFormVals = prop('setFormVals', formVals)

	return (
		<div className={classes.skillsWrapper}>
			<Label key="skills" label="Skills">
				<div className={classes.table}>
					{
						map(
							(skill) => (
								<SkillRow
									key={skill}
									skill={skill}
									formVals={formVals}
									setFormVals={setFormVals}
									classes={classes}
								/>
							), skills,
						)
					}
				</div>
			</Label>
		</div>
	)
}
