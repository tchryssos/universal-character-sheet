import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import map from 'ramda/src/map'
import path from 'ramda/src/path'
import prop from 'ramda/src/prop'

import SheetContext from 'contexts/sheetContext'
import {
	PROF, ABILITY, MOD, SKILL_LIST, SKILLS,
} from 'data/bank'

import NumberInput from 'components/NumberInput'
import CheckboxInput from 'components/CheckboxInput'
import Label from 'components/Label'
import Body from 'components/typography/Body'

import orNull from 'util/orNull'
import capitalStringFromCamel from 'util/capitalStringFromCamel'

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
		alignItems: 'center',
	},
	nameBox: {
		flex: 1,
		marginRight: 8,
	},
})

const SkillRows = ({
	skills, formVals, classes,
}) => map(
	(skill) => (
		<div className={classes.skillRow} key={skill}>
			<div className={classes.nameBox}>
				<Body>{capitalStringFromCamel(skill)}</Body>
			</div>
			<NumberInput
				readOnly
				min={-5}
				formPath={[path([SKILLS, skill, ABILITY], formVals), MOD]}
			/>
			<CheckboxInput
				formPath={[SKILLS, skill, PROF]}
			/>
		</div>
	),
	skills,
)

const Skills = () => {
	const classes = useStyles()
	const { formVals } = useContext(SheetContext)
	const skills = prop(SKILL_LIST, formVals)
	return orNull(
		skills,
		<div className={classes.skillsWrapper}>
			<Label label="Skills" column>
				<div className={classes.table}>
					<SkillRows
						skills={skills}
						formVals={formVals}
						classes={classes}
					/>
				</div>
			</Label>
		</div>,
		true,
	)
}

export default Skills
