import React, { useContext } from 'react'
import prop from 'ramda/src/prop'

import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import SelectInput from 'components/SelectInput'

import SheetContext from 'contexts/sheetContext'
import buildOptionsFromStrings from 'util/buildOptionsFromStrings'

import {
	CHAR_NAME, CHAR_CLASS, LEVEL, ALIGNMENT, ALIGNMENTS,
} from 'data/bank'

export default () => {
	const { formVals } = useContext(SheetContext)
	return (
		<>
			<TextInput
				label="Character Name"
				formPath={[CHAR_NAME]}
			/>
			<TextInput
				label="Character Class"
				formPath={[CHAR_CLASS]}
			/>
			<NumberInput
				label="Level"
				formPath={[LEVEL]}
				min={1}
				max={20}
			/>
			<SelectInput
				label="Alignment"
				formPath={[ALIGNMENT]}
				options={buildOptionsFromStrings(prop(ALIGNMENTS, formVals))}
			/>
		</>
	)
}
