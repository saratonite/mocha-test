var assert = require('assert');
var _ = require('underscore')

describe("Underscore Array Utilities",function(){

    it("should find first element",function(){

        var arr = [7,8,9,6,4,2,3];
       assert.equal(7,_.first(arr));
    })

})
