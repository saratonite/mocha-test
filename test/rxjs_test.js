var Rx = require('rxjs/Rx');
var of = require('rxjs/observable/of').of;
var map = require('rxjs/operator/map').map;

var assert = require('assert');


describe("Rxjs",function(){

    it("Shuold create an observable",function(done){

        var $obs = Rx.Observable.create(function(observer){

            let arr = [1,2,3];

            //observer.next(arr);

            setTimeout(function(){
                arr.push(4);
                observer.next(arr);
                observer.complete();
            },2000)
        })

        $obs.subscribe(function(value){

            console.log(value.length);
            //assert.equal(4,value.length);
            done();


        },

        function(err){
            console.log('Error')
        },
        function(){

            console.log('Completed');
        }
        );

    })
})