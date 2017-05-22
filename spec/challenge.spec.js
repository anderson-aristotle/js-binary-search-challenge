'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('Sync', function () {
  it('is true', function () {
    expect(challenge(true)).to.be.true
  })
})

// Math.ceil(Math.log2(sortedArray.length))

// https://git.generalassemb.ly/ga-wdi-boston/cs-algorithms#predicting-complexity
