# Project Proposal
> **Goal:** Create an open-source dice-roller application, using Agile Development techniques.<br />
> **Challenge:** Make it better than those that already exist on the web.

A dice-roller application starts simple in scope, yet many interesting features can be built on
&mdash; making it surprisingly complex. What's great is that many of these features are small, allowing discrete improvements to be shipped quickly.

## Market Viability
There are plenty of apps like this that exist, but none of them are particularly good. Table-top role playing games have been slowly digitized over time, and yet no site has perfected the feel of digital dice. Take these website as examples:

- [This is the first result](https://www.wizards.com/dnd/dice/dice.htm) for *'dice roller'* in Google Search
- [This analytics tool](https://anydice.com/) is not open source, nor is it fast.
- [Some results](http://a.teall.info/dice/) are quite interesting, but are not the most intuitive.
- [More in-depth products](https://roll20.net/) lack ease-of-use and accessibility.


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
" `X` dice with each die having `Y` sides. A user inputs `XdY` into a textbox, where `X` and `Y` are positive integers, then clicks the roll button.

<!-- The notation is common among the RPG community and therefore is upheld within this app. -->

The resulting integer from each die is randomly determined, and summed together before being returned as an output. Here are some examples that the app should be able to handle:
- roll a single die, ie 1d6
- roll multiple dice, ie 2d6
- roll n-sided dice, ie 1d17
- roll 1d0
- roll 0d1
- roll 0d0
