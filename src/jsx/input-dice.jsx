import React, { Component } from 'react';

class InDice extends Component {
	render() {
		return(
			<div className='dice-module'>
				{/* <button className='increment-dice'>+</button> */}
				<span />
				<label className='icon-label' htmlFor={'d'+this.props.sides}>
					<img className='dice-icon' alt={this.props.sides + ' sided die'} src={this.props.source} />
				</label>
				<span />
				{/* <button className='increment-dice'>&minus;</button> */}
				<input
					id={'d'+this.props.sides}
					className='dice-input'
					type='number'
					min='0'
					max='999'
					// '|| 0' in the following line sets up a default value.
					// this is because inputDice[key] could be undefined!
					placeholder='0'
					value={this.props.inputDice[this.props.sides] || 0}
					onChange={(element) => this.props.update_dice(element.target.value, this.props.sides)} />
			</div>
		)
	}
}

export default InDice
