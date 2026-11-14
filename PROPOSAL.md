# Project Proposal
> **Objective:** Create an open-source dice-roller application using Agile Development techniques.<br />
> **Challenge:** Make it better than what already exists on the web.

A dice-roller app starts simple, but many interesting features can be layered on top of it.
That makes the project surprisingly complex, even though the individual improvements are small and easy to ship.

## Market Viability
There are plenty of dice apps, but few of them are particularly good.
Tabletop role-playing games have been gradually digitized, and no site has fully captured the feel of digital dice.
Take these websites as examples:
- [This is the first result](https://www.wizards.com/dnd/dice/dice.htm) for *'dice roller'* in Google Search.
- [This analytics tool](https://anydice.com/) is not open source, nor is it fast.
- [Some results](http://a.teall.info/dice/) are interesting, but not especially intuitive.
- [More in-depth products](https://roll20.net/) lack ease of use and accessibility.

## Objectives
*This section is dedicated to the objectives themselves rather than the version system.
The version system is outlined at the bottom of this page.*

### 1. Ship an MVP to Heroku
> Timeline: 1 day (due monday night)

1. Attain `v0.1: MVP` status.
1. A person should be able to simulate a basic dice roll with the web app.
1. Completing the MVP early will pave the road to success.
	- Further scoping mechanisms will be similarly small and digestible.
	- This scoping system adheres to Agile Development practices.
1. This objective will be marked with a live, functioning Heroku app.

### 2. Conduct User Testing
> Timeline: 1 day (due tuesday night)

1. Create wireframes.
1. Conduct user testing.
	- Doing this will uncover unseen obstacles and features.
	- It will improve the product experience in the end.
	- Cycle through this and wireframing several times.
1. Once there is enough information, additional basic features can be added.
	- This step will not be well defined until `v0.2: extra features` is defined.
1. Write user stories.
1. Once these are implemented and functioning, they should be pushed to `master`.

### 3. Improve User Experience
> Timeline: 1 day (due wednesday night)

1. Create a Progressive Web App.*
	- A Progressive Web App is a standard for replacing native phone apps, unifying phones with the web.
1. Focus on frontend and UX.
1. Improve flow and beauty.
1. Reduce page loads.
1. Improve code; adhere to the Airbnb style guide.
1. Decide fonts, colors, and the initial logo.
1. Once all of these things are done, there should be a significant visual improvement from the previous version.
	- User interviews should be mostly positive now.
	- People should agree that the new version, `v0.3: better UX`, is far more impressive than previous iterations.

## Project Timeline
- Monday 3/18
	- submit proposal
	- create mvp
- Tuesday 3/19
	- user interviews
	- add extra features
- Wednesday 3/20
	- create slide deck
	- improve codebase
	- refactor
	- beautify frontend
- Thursday 3/21
	- pitch app
	- live demo
	- further scoping plans

## Project Scope
This project has a week to be completed, so careful scoping is essential.

The idea is that an MVP can be shipped within a few hours.
At its core, this app is very simple, and once the foundation is in place, more features can be iterated in without much difficulty.

This version of the application will be bare-bones basic.

### `v0.1` MVP
There is limited scope for this iteration.
Ideally, it can be set up in a few hours.
The biggest hurdle will be deploying a live web app to Heroku or Netlify.

#### `HTML` Components
The components for this version will be limited.
Only three elements are needed:
- input textbox
- submit button
- output display

#### Program Functionality
At this point, the app needs only to roll `X` dice with each die having `Y` sides.
A person inputs `XdY` into a textbox, where `X` and `Y` are positive integers, then clicks the roll button.

<!--
The notation is common among the RPG community
and therefore is upheld within this app.
-->

The resulting integer from each die is randomly determined and summed before being returned as an output.
Here are some examples that the app should be able to handle:
- roll a single die, ie 1d6
- roll multiple dice, ie 2d6
- roll n-sided dice, ie 1d17
- roll 1d0
- roll 0d1
- roll 0d0
