import React, { Component } from 'react';
import '../css/app.css';

class App extends Component {
	roll_dice = () => {
		console.log('hello!')
	}

	render() {
		return (
			<div>
				<h1>How I Roll</h1>
				<form action='/roll' method='GET'>
					<div className='module'>
						<label htmlFor='dice'>Input Dice:</label>
						<textarea type='text' name='dice' id='dice' defaultValue='4d6'></textarea>
					</div>

					<div className='module bar'>
						<button type='button' onClick={this.roll_dice}>Roll Dice</button>
					</div>

					<div className='module'>
						<label htmlFor='result'>Result:</label>
						<output htmlFor='dice'>hello world</output>
					</div>
				</form>
			</div>
		);
	}
}

export default App;
