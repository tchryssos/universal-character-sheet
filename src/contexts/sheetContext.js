import React from 'react'
import { schema } from 'constants/schema'

const SheetContext = React.createContext({
	...schema,
	setFormVals: () => {},
})
SheetContext.displayName = 'SheetContext'

export default SheetContext
