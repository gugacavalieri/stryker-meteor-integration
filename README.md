
[![Build Status](https://travis-ci.org/gugacavalieri/unit-testing-with-testdouble.svg?branch=master)](https://travis-ci.org/gugacavalieri/unit-testing-with-testdouble)
[![Mutation Score](https://badge.stryker-mutator.io/github.com/gugacavalieri/unit-testing-with-testdouble/master)](https://badge.stryker-mutator.io/github.com/gugacavalieri/unit-testing-with-testdouble/master)

# Integrating [Stryker](https://stryker-mutator.io) with [Meteor](https://www.meteor.com/) ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/gugacavalieri/stryker-meteor-integration/stargazers">⭐</a> : <a href="https://github.com/gugacavalieri/stryker-meteor-integration/issues">😞</a></code>
</p>

## Requirements

* We have to mock the Meteor Framework in our unit tests using [testdouble.js](https://github.com/testdouble/testdouble.js)
* ([you can read more in here](http://www.petecorey.com/blog/2016/05/02/meteor-unit-testing-with-testdoublejs/?from=east5th.co))
* We have to use Babel along with Stryker to transpile our code (see stryker.conf.js)

## How to Run Tests

Install Project:

    npm i

Unit Tests:

    npm test

Mutation Tests:

    npm test-stryker


## .babelrc File

We use a `.babelrc` in the root of the project to make Meteor and Mocha compile in the same way. The file used here follows [these recommendations](https://forums.meteor.com/t/announcing-meteor-1-3-4-1-and-1-4-beta-1/25460/8?u=rdickert). There are a few compromises that you will have to live with in your Meteor app as a result of this:

* It won't allow you to use nested import declarations.
* [You cannot use absolute import paths](https://forums.meteor.com/t/announcing-meteor-1-3-4-1-and-1-4-beta-1/25460/10?u=rdickert) from your project root (Node will read it as being the root of your filesystem)

There may be a way to improve this further using `meteor-babel/register` - [here is an example](https://github.com/meteor/babel/blob/master/test/register.js). A PR that makes this work would be welcome! Regardless, it seems likely that this situation will improve as Meteor migrates to NPM.
