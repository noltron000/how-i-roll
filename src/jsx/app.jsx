import React, { Component } from 'react';

import info_icon from '../img/info.svg'
import '../css/app.css';

import Interface from '../jsx/interface.jsx'

class App extends Component {
	state = {
		inputDice: {},
		rollResult: 0,
	};

	// adds a single mount event for device motion
	componentDidMount = () => {
		window.addEventListener('devicemotion', (event) => {
			const { x, y, z } = event.acceleration
			const { alpha, beta, gamma } = event.rotationRate

			if(Math.abs(x) + Math.abs(y) + Math.abs(z) > 30
			|| Math.abs(alpha) + Math.abs(beta) + Math.abs(gamma) > 1200) {
				this.roll_dice()
			}
		});
	}


	// update state when dice textarea changes
	update_dice = (diceNum, diceSize) => {
		// need to make sure input is an integer
		if (!isNaN(parseInt(diceNum))) {
			// if it is, we expand the object and add a new item
			this.setState({
				inputDice: {
					...this.state.inputDice,
					[diceSize]: parseInt(diceNum),
				}
			})
		} else if (diceNum === '') {
			console.warn('Deleting final character results in empty string. Empty string is not a number, so its invalidated.\nThis is a bug! You should be able to delete the number!')
			// TODO: Fix that bug!
			// TODO: When there is nothing left, remove the key from the inputDice object.
		}
	}

	// parse_dice converts XdY to an object
	parse_dice = (diceStr) => {
		// initialize variables
		let diceNum = ''
		let diceSize = ''
		let passType = false

		// iterate through string in state
		for (const char of diceStr) {

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
		const {inputDice} = this.state
		let total = 0
		for(const diceSize in inputDice) {
			const diceNum = inputDice[diceSize]
			const diceObj = {diceNum, diceSize}
			total += this.randomize_dice(diceObj)
		}
		window.navigator.vibrate(50);
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
					<Interface update_dice={this.update_dice} inputDice={this.state.inputDice} />
				</section>

			</div>
		);
	}
}

export default App;
