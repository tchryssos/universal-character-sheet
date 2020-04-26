import React from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import Home from 'pages/Home'

import { fontSizeMd } from 'constants/styles/text'

const useStyles = createUseStyles(() => {
	const marPadZero = {
		margin: 0,
		padding: 0,
	}
	const baseStyle = {
		height: '100%',
		width: '100%',
		...marPadZero,
	}

	return {
		'@import': [
			"url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap')",
		],
		'@global': {
			html: baseStyle,
			body: {
				...baseStyle,
				fontFamily: "'Lato', sans-serif",
				fontSize: fontSizeMd,
				position: 'relative',
			},
			'#app': baseStyle,
			div: {
				boxSizing: 'border-box',
			},
			p: marPadZero,
			h1: marPadZero,
			h2: marPadZero,
			h3: marPadZero,
		},
	}
})

const App = ({ location }) => {
	// Create global effects or state here
	// with access to router location
	useStyles()
	return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			{/* NavBar?? */}
		</>
	)
}

const RouterApp = withRouter(props => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)