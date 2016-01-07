Chatterbox client
==============

This is a project I completed as a student at Hack Reactor. This project was worked on with a pair, and we built a chat client consuming some parse API.

## Structure:

The repository consist of

- Chatterbox app
- test Specs files.

#### Chatterbox app

The app allows the user to chose rooms and fetch/post messages from and to a parse based API backend.

## Install:

The project rely on bower for managing external libraries and dependencies, so be sure to first:

`bower install`

to run it, simply open `./client/index.html` with your browser.


Make sure to have a valid config.js inside the env folder.

### SpecRunner - mocha

The specrunner contain both the tests for the client

**Some code may be written in ES6 and may require to be transpiled in order to be tested**.

### Testing

Tests are made with the [Mocha](https://github.com/mochajs/mocha) testing framework.
Test are located in the ./spec directory. To run the Just open the spec runner file with chrome.

```
SpecRunner.html
```
