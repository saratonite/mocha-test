/**Array utils  */

/**
 * Chunk arrays 
 */

function chunk(arr,chunkSize) {

  return arr.map( function(e,i){
      return i%chunkSize===0 ? arr.slice(i,i+chunkSize) : null;
  })
  .filter(function(e){ return e; });

}





module.exports = {


    chunk:chunk
}