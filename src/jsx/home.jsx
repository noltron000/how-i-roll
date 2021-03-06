import React, { Component } from 'react'

import octocat from '../img/octocat.svg'
import '../css/app.css'

import Interface from './interface.jsx'

class Home extends Component {
	state = {
		// inputDice is an object whose key is 'dice-size' and value is 'dice-amt'
		inputDice: {},
		rollResult: 0,
		shakeAwait: false,
	}

	// adds events listener when app component initializes
	componentDidMount = () => {

		// app should only ever be initialized once, else this listener would appear in every instance
		window.addEventListener('devicemotion', (event) => {
			// get accelerometer and gyroscope data from device, if any
			// see https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
			const { x, y, z } = event.acceleration
			const { alpha, beta, gamma } = event.rotationRate

			// check if rotation or acceleration are arbitrarily high
			if(!this.state.shakeAwait
			&& (Math.abs(x) + Math.abs(y) + Math.abs(z) > 30
			|| Math.abs(alpha) + Math.abs(beta) + Math.abs(gamma) > 1200)) {

				// shakeAwait enforces less function spam
				this.setState({shakeAwait: true})
				// shakeAwait turns off after 300ms
				setTimeout(this.setState({shakeAwait: false}), 300)
				// roll the dice stored in state
				this.roll_dice()
			}
		})
	}

	// update state when dice textarea changes
	update_dice = (diceNum, diceSize, min=0, max=999) => {

		// need to make sure input is an integer
		if (!isNaN(parseInt(diceNum))) {
			// if it is, we expand the object and add a new item
			let niceNum = parseInt(diceNum, 10)
			if (niceNum < min) {niceNum = min}
			else if (niceNum > max) {niceNum = max}
			// after parsing, we send it through setState
			this.setState({
				inputDice: {
					...this.state.inputDice,
					[diceSize]: [niceNum]
				}
			})
		} else if (diceNum === '') {
			this.setState({
				inputDice: {
					...this.state.inputDice,
					[diceSize]: 0
				}
			})
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
		window.navigator.vibrate(50)
		this.setState({rollResult: total})
	}

	// render HTML output
	render() {
		return (
			<div>
				<div id='content'>
					<section id='display'>
						<div id='overlay'>
							<header id='title-header'>
								<a id='info' href='https://github.com/noltron000/how-i-roll'>
									<img alt='more info...' src={octocat} />
								</a>
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
			</div>
		)
	}
}

export default Home
