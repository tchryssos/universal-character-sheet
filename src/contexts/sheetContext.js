import React from 'react'

const SheetContext = React.createContext({
	formVals: {},
	setFormVals: () => {},
	gameType: '',
	setGameType: () => {},
})
SheetContext.displayName = 'SheetContext'

export default SheetContext
