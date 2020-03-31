import React from 'react'

import Input from 'components/Input'

export default ({
	setFormVals, formVals, formPath, label,
	min, max, readOnly, labelColumn,
}) => (
	<Input
		type="number"
		min={min}
		max={max}
		readOnly={readOnly}
		formVals={formVals}
		formPath={formPath}
		setFormVals={setFormVals}
		label={label}
		labelColumn={labelColumn}
	/>
)
