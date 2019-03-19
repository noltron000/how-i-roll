import React, { Component } from 'react';
import '../css/app.css';

class App extends Component {
	state = {
		inputText: '',
		output: 0,
	};

	update_input_text = (value) => {
		this.setState({
			inputText: value
		})
	}

	// parse_dice converts XdY to an object
	parse_dice = () => {
		// initialize variables
		const { inputText } = this.state
		let diceNum = ''
		let diceSize = ''
		let passType = false

		// iterate through string in state
		for (let char of inputText) {

			// change passtype on 'd'
			if (char === 'd' && !passType) {
				passType = true

			// this is checking if the char string is in 0123456789
			} else if(char >= '0' && char <= '9') {

				// passtype dictates wheter to append size or num
				if (passType) {
					diceSize += char
				} else {
					diceNum += char
				}

			// something broke!
			} else {
				console.error("invalid input")
			}
		}

		// extract integers and return
		diceNum = parseInt(diceNum)
		diceSize = parseInt(diceSize)
		return { diceNum, diceSize }
	}

	randomize_dice = (dice) => {
		// takes in a dice object
		let { diceNum, diceSize } = dice
		let counter = 0
		let total = 0

		// roll each die once
		while(counter < diceNum) {
			const diceRoll = Math.floor(Math.random() * diceSize + 1)
			total += diceRoll
			counter++
		}

		// return total integer
		return total
	}

	roll_dice = (obj) => {
		let result = this.randomize_dice(this.parse_dice()).result
		this.setState({output: result})
	}

	render() {
		return (
			<div>
				<h1>How I Roll</h1>
				<form action='/roll' method='GET'>
					<div className='module'>
						<label htmlFor='dice'>Input Dice:</label>
						<textarea
							type='text'
							name='dice'
							id='dice'
							value={this.inputText}
							onChange={(element) => this.update_input_text(element.target.value)}
						></textarea>
					</div>

					<div className='module bar'>
						<button type='button' onClick={this.roll_dice}>Roll Dice</button>
					</div>

					<div className='module'>
						<label htmlFor='result'>Result:</label>
						<output htmlFor='dice' value=''>{this.state.output}</output>
					</div>
				</form>
			</div>
		);
	}
}

export default App;
