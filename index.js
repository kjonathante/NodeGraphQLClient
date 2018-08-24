var fs = require('fs')
var path = require('path')

// const loadQuery = (fileName) => new Promise((res, reject) => {
//     readFile(resolve(fileName), 'utf-8', (err, data) => {
//         (err) ? reject(err) : res(data)
//     })
// })


function loadQuery( filename ) {
  return new Promise( function( resolve, reject ) {
    fs.readFile( path.join(__dirname, filename), 'utf-8', function(err, data) {
      return (err) ? reject(err) : resolve(data)
    })
  })
}

var x = async function () {
  try {
    var result = await loadQuery( './query.gql' )
    console.log(result)
  } catch( error ) {
    console.log(error)
  }
}

x()