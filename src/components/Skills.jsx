import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import map from 'ramda/src/map'
import path from 'ramda/src/path'

import SheetContext from 'contexts/sheetContext'
import { skills } from 'constants/game'
import {
	PROF, ABILITY, MOD,
} from 'constants/schema'

import NumberInput from 'components/NumberInput'
import CheckboxInput from 'components/CheckboxInput'
import Label from 'components/Label'
import BodyText from 'components/BodyText'

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
		textTransform: 'capitalize',
		marginRight: 8,
	},
})

const SkillRow = ({
	skill, formVals, classes,
}) => (
	<div className={classes.skillRow}>
		<div className={classes.nameBox}>
			<BodyText>{skill}</BodyText>
		</div>
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

const Skills = () => {
	const classes = useStyles()
	const formVals = useContext(SheetContext)

	return (
		<div className={classes.skillsWrapper}>
			<Label key="skills" label="Skills" column>
				<div className={classes.table}>
					{
						map(
							(skill) => (
								<SkillRow
									key={skill}
									skill={skill}
									formVals={formVals}
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

export default Skills
