import React, { Component } from 'react';

import InputDice from '../jsx/input-dice.jsx'

import '../css/interface.css'
import d4 from '../img/d4.svg'
import d6 from '../img/d6.svg'
import d8 from '../img/d8.svg'
import d10 from '../img/d10.svg'
import d12 from '../img/d12.svg'
import d20 from '../img/d20.svg'
import d00 from '../img/d00.svg'

class Interface extends Component {
	render() {
		return(
			<div id='interface'>
				<div id='dice-box'>
					<InputDice sides='4' source={d4} />
					<InputDice sides='6' source={d6} />
					<InputDice sides='8' source={d8} />
					<InputDice sides='10' source={d10} />
					<InputDice sides='12' source={d12} />
					<InputDice sides='12' source={d20} />
					<InputDice sides='12' source={d00} />
				</div>
			</div>
		)
	}
}

export default Interface
