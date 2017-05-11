/** Collection utitltie -- Array of objects  */

/** Intersect an array of objects  */
function intersection(arr1,arr2,field) {

    var result = [];

    arr1.forEach(function(e1) {

        arr2.forEach(function(e2){


            if(e1[field] == e2[field]){

                result.push(e1);

            }


        })
        
    }, this);

    return result;

}

module.exports = {
    intersection:intersection

}