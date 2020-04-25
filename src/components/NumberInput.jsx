import React from 'react'

import Input from 'components/Input'

const NumberInput = ({
	setFormVals, formVals, formPath, label,
	min, max, readOnly, labelColumn, className,
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
		className={className}
	/>
)

export default NumberInput
