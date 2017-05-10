/**Calculator.js test */

var assert = require('assert')

var calculator = require('../src/calculator')

describe("Calculator",function(){

    it("Should subtract value",function(){

        assert.equal(5,calculator.subtract(10,5));
    })

    it("Should add value",function(){

        assert.equal(10,calculator.add(5,5))
    })

    it("Should multiply ",function(){
        assert.equal(10,calculator.multiply(5,2))
    })

    it("Should divide",function(){
        assert.equal(2,calculator.divide(10,5))
    })
})