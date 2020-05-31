import { useContext } from 'react'
import SheetContext from 'contexts/sheetContext'

const EffectDummy = ({ effect }) => {
	const { formVals, setFormVals } = useContext(SheetContext)
	effect(formVals, setFormVals)
	return null
}

export default EffectDummy
