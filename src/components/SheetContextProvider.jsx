import React, { useState } from 'react'

import SheetContext from 'contexts/sheetContext'
import { AMAZING_ADVENTURES } from 'constants/games'

const defaultForm = {}
export default ({ children }) => {
	const [formVals, setFormVals] = useState(defaultForm)
	const [gameType, setGameType] = useState(AMAZING_ADVENTURES)
	return (
		<SheetContext.Provider
			value={{
				formVals, setFormVals, gameType, setGameType,
			}}
		>
			{children}
		</SheetContext.Provider>
	)
}
