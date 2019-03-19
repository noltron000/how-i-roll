import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<div className='module'>
				<label htmlFor='dice'>Input Dice:</label>
				<textarea
					type='text'
					name='dice'
					id='dice'
					value={this.inputText}
					onChange={(element) => this.props.update_input_text(element.target.value)}
				></textarea>
			</div>
		)
	}
}

export default Footer
