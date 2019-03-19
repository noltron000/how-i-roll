# Project Proposal
> **Objective:** Create an open-source dice-roller application, using Agile Development techniques.<br />
> **Challenge:** Make it better than those that already exist on the web.

A dice-roller application starts simple in scope, yet many interesting features can be built on
&mdash; making it surprisingly complex. What's great is that many of these features are small, allowing discrete improvements to be shipped quickly.

## Market Viability
There are plenty of apps like this that exist, but none of them are particularly good. Table-top role playing games have been slowly digitized over time, and yet no site has perfected the feel of digital dice. Take these website as examples:

- [This is the first result](https://www.wizards.com/dnd/dice/dice.htm) for *'dice roller'* in Google Search
- [This analytics tool](https://anydice.com/) is not open source, nor is it fast.
- [Some results](http://a.teall.info/dice/) are quite interesting, but are not the most intuitive.
- [More in-depth products](https://roll20.net/) lack ease-of-use and accessibility.

## Objectives
*This section is dedicated to the objectives themselves rather than the version system. The version system is outlined at the bottom of this page.*

### 1. Ship an MVP to Heroku
> - [ ] in progress<br />
> timeline: 1 day (due monday night)

1. Attain `v0.1: MVP` status
1. A person should be able to simulate a basic dice roll with the web app.
1. Completing the MVP early will pave the road to success.
	- Further scoping mechinsims will be similarly small and digestable.
	- This scoping system adheres to Agile Development practices.
1. The completion this objective will be marked with a live &amp; functioning heroku app.

### 2. Conduct User Testing
> - [ ] to do<br />
> timeline: 1 day (due tuesday night)

1. Create wireframes
1. Conduct user testing
	- Doing this will uncover unseen obstacles and features.
	- It will improve the product experience in the end.
	- Cycle through this and wireframing several times.
1. Now, there should be enough information to add additional basic features
	- this step will not be well outlined until `v0.2: extra features` is defined.
1. Write user stories
1. Once these are implemented and functioning, they should be pushed to `master`.

### 3. Improve User Experience
> - [ ] to do<br />
> timeline: 1 days (due wednesday night)

1. Create a Progressive Web App*
	- A Progressive Web App is a standard to obsolete native phone apps, unifying phones with the web.
1. Focus on frontend and UX
1. Improve flow and beauty
1. Reduce page loads
1. Improve code; adhere to airbnb style guide
1. Decide fonts, colors, and initial logo
1. Once all these things are done, there should be a significant visual improvement from the previous version.
	- User interviews should be mostly positive now
	- People should agree that the new version, `v0.3: better UX`, is far more impressive than previous iterations.

## Project Timeline
- [ ] monday 3/18
	- submit proposal
	- create mvp
- [ ] Tuesday 3/19
	- user interviews
	- add extra features
- [ ] wednesday 3/20
	- create slide deck
	- improve codebase
	- refactor
	- beautify frontend
- [ ] thursday 3/21
	- pitch app
	- live demo
	- further scoping plans

## Project Scope
This project has a week to be completed. Because of this, careful scoping mechanisms have been put in place.

The idea is that a project MVP can be shipped within a few hours. At its core, this app is incredibly simple. Once this is done, more features can easily be iterated into the application.

This version of the application will be bare-bones basic.

### `v0.1` MVP
There is limited scope for this iteration. Hopefully this can be set up in a few hours. The biggest hurdle will be deploying a live web app to heroku or netlify.

#### `HTML` Components
The components for this version will be limited. Just three elements are needed:
- input textbox
- submit button
- output display

#### Program Functionality
At this point, the app needs only to "roll
" `X` dice with each die having `Y` sides. A person inputs `XdY` into a textbox, where `X` and `Y` are positive integers, then clicks the roll button.

<!-- The notation is common among the RPG community and therefore is upheld within this app. -->

The resulting integer from each die is randomly determined, and summed together before being returned as an output. Here are some examples that the app should be able to handle:
- roll a single die, ie 1d6
- roll multiple dice, ie 2d6
- roll n-sided dice, ie 1d17
- roll 1d0
- roll 0d1
- roll 0d0
