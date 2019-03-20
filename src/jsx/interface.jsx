import React, { Component } from 'react';

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
				{/* <img alt='4 sided die' src={d4} />
				<img alt='6 sided die' src={d6} />
				<img alt='8 sided die' src={d8} />
				<img alt='10 sided die' src={d10} />
				<img alt='12 sided die' src={d12} />
				<img alt='20 sided die' src={d20} />
				<img alt='100 sided die' src={d00} /> */}
			</div>
		)
	}
}

export default Interface
