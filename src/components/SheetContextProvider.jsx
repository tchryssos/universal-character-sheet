import React, { useState, useEffect } from 'react'
import propOr from 'ramda/src/propOr'

import SheetContext from 'contexts/sheetContext'
import { AMAZING_ADVENTURES } from 'constants/games'

import data from 'data'

const defaultData = {}
export default ({ children }) => {
	const [formVals, setFormVals] = useState(defaultData)
	const [gameType, setGameType] = useState(AMAZING_ADVENTURES)
	console.log(formVals)

	useEffect(() => {
		setFormVals(propOr(defaultData, gameType, data))
	}, [gameType])

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
