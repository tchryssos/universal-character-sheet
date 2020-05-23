import React, { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import map from 'ramda/src/map'

import Label from 'components/Label'
import Button from 'components/Button'
import SheetContext from 'contexts/sheetContext'
import buildOptionsFromStrings from 'util/buildOptionsFromStrings'
import { gamesArray } from 'constants/games'
import { forest } from 'constants/styles/colors'

const useStyles = createUseStyles({
	menuWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		padding: 16,
	},
	hiddenMenu: {
		position: 'absolute',
		top: 16,
		left: 16,
		padding: 8,
		display: 'flex',
		flexDirection: 'column',
		transition: 'transform 0.3s',
		transform: 'translateX(-700px)',
		backgroundColor: forest,
		borderRadius: 4,
	},
	visibleMenu: {
		transform: 'translateX(0)',
	},
	closeMenuButton: {
		alignSelf: 'flex-end',
		marginBottom: 8,
	},
})

const GameOptions = ({ games }) => map(
	({ label, value }) => (
		<option
			// className={classes.option}
			value={value}
			key={value}
		>
			{label}
		</option>
	),
	buildOptionsFromStrings(games),
)

export default () => {
	const classes = useStyles()
	const { setGameType, gameType } = useContext(SheetContext)
	const [menuOpen, setMenuOpen] = useState(false)
	const onGameTypeChange = (e) => setGameType(e.target.value)
	return (
		<div className={classes.menuWrapper}>
			<Button label="Menu" onClick={() => setMenuOpen(true)} />
			<div
				className={clsx(
					classes.hiddenMenu,
					{ [classes.visibleMenu]: menuOpen },
				)}
			>
				<Button
					onClick={() => setMenuOpen(false)}
					label="X"
					className={classes.closeMenuButton}
				/>
				<form className={classes.menuForm}>
					<Label label="Select game system: ">
						<select
							onChange={onGameTypeChange}
							name="set-game"
							value={gameType}
						>
							<GameOptions games={gamesArray} />
						</select>
					</Label>
				</form>
			</div>
		</div>
	)
}
