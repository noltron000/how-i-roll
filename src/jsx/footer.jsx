import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<div id='footer'>
				<label htmlFor='dice-box'>Input Dice:</label>
				<textarea
					type='text'
					name='dice-box'
					id='dice-box'
					value={this.inputText}
					onChange={(element) => this.props.update_input_text(element.target.value)}
				></textarea>
			</div>
		)
	}
}

export default Footer
