import React, { Component } from 'react';

class InDice extends Component {
	render() {
		return(
			<div className='dice-module'>
				<button className='increment-dice'>+</button>
				<span />
				<img className='dice-icon' alt={this.props.sides + ' sided die'} src={this.props.source} />
				<span />
				<button className='increment-dice'>&minus;</button>
				<input className='dice-input' type='number' min='0' max='999'/>
			</div>
		)
	}
}

export default InDice
