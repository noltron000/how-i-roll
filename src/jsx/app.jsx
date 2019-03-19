import React, { Component } from 'react';
import '../css/app.css';

class App extends Component {
	state = {
		input: '',
		output: '',
	};

	update_input = (value) => {
		this.setState({
			input: value
		})
	}

	parse_dice = () => {
		console.log(this.state.input)

		let diceNum = ''
		let diceSize = ''
		let error = null
		let passType = false

		for (let char of this.state.input) {
			console.log('=====')
			console.log('your char:', char)
			if (char === 'd' && !passType) {
				passType = true
			} else {
				let found = false
				for(let num of "0123456789") {
					if(char === num) {
						if (passType) {
							diceSize += char
						} else {
							diceNum += char
						}
						found = true
						break
					}
				}
				if (!found) {
					error = 'ERROR!'
				}
			}
		}
		if (!passType) {
			error = 'ERROR!'
		}
		console.log("diceNum:", diceNum)
		console.log("diceSize:", diceSize)
		return { diceNum, diceSize, error }
	}

	randomize = (obj) => {
		console.log('getting started')
		let diceNum = obj.diceNum
		let diceSize = obj.diceSize
		let error = obj.error

		let counter = 0
		let result = 0
		console.log(error)
		if(!error) {
			console.log(diceNum)
			while(counter < parseFloat(diceNum)) {
				let diceRoll = Math.floor(Math.random() * parseFloat(diceSize)+1)
				console.log(diceRoll)
				result += diceRoll
				counter++
			}
		}

		return {result, error}
	}

	roll_dice = (obj) => {
		let result = this.randomize(this.parse_dice()).result
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
							value={this.input}
							onChange={(e) => this.update_input(e.target.value)}
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
