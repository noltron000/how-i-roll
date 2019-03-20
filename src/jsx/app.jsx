import React, { Component } from 'react';

import info_icon from '../img/iconmonstr-info-6-icon.svg'
import '../css/app.css';

// import Interface from '../jsx/interface.jsx'

class App extends Component {
	state = {
		inputText: '',
		rollResult: 0,
	};

	// update state when dice textarea changes
	update_input_text = (data) => {
		this.setState({
			inputText: data
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

			} else {
				console.error("invalid input")
			}
		}

		// extract integers and return
		diceNum = parseInt(diceNum)
		diceSize = parseInt(diceSize)
		return { diceNum, diceSize }
	}

	randomize_dice = (diceObj) => {
		// takes in a dice object
		let { diceNum, diceSize } = diceObj
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

	roll_dice = () => {
		let total = this.randomize_dice(this.parse_dice())
		this.setState({rollResult: total})
	}

	// render HTML output
	render() {
		return (
			<div>
				<section id='display'>
					<div id='overlay'>
						<header id='title-header'>
							<img id='info' alt='more info...' src={info_icon} />
							<h1 id='title'>How I Roll</h1>
						</header>

						<div id='button-container'>
							<button id='roll-button' onClick={this.roll_dice}>Roll Dice</button>
						</div>

						<div id='results-bar'>
							<label htmlFor='output-box'><h2>Result:</h2></label>
							<output id='output-box' htmlFor='dice-box' value=''>{this.state.rollResult}</output>
						</div>
					</div>

					<div id='dice-tray'>
					</div>
				</section>

				<section id='interface'>
					<label htmlFor='dice-box'>Input Dice:</label>
					<textarea
						type='text'
						name='dice-box'
						id='dice-box'
						value={this.inputText}
						onChange={(element) => this.update_input_text(element.target.value)}
					></textarea>
				</section>

				{/* <Interface
					update_input_text={this.update_input_text}
					rollResult={this.state.rollResult}
				/> */}
			</div>
		);
	}
}

export default App;
