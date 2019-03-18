import React, { Component } from 'react';
import '../css/app.css';

class App extends Component {
	render() {
		return (
			<div>
				<h1>How I Roll</h1>

				<form action='/roll' method='GET'>
					<div class='module'>
						<label for='dice'>Input Dice:</label>
						<textarea type='text' name='dice' id='dice'>4d6</textarea>
					</div>

					<div class='module bar'>
						<button type='submit'>Roll Dice</button>
					</div>

					<div class='module'>
						<label for='result'>Result:</label>
						<output for='dice'>hello world</output>
					</div>
				</form>
			</div>
		);
	}
}

export default App;
