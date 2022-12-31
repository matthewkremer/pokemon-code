var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var inputFile='pokemon.csv';
var pokemon = {};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var parser = parse({delimiter: ','}, function (err, data) {
  async.eachSeries(data, function (line, callback) {
    // do something with the line
    if (parseInt(line[2]) < 152 && line[7] == '1'){
        pokemon[line[2]] = {
            name: capitalizeFirstLetter(line[1]),
            exp: parseInt(line[5])
        }
        // console.info(pokemon[line[2]]);
    }
    callback();
  })
})

fs.createReadStream(inputFile).pipe(parser).on('end',function() {
    //do something wiht csvData
    console.log(pokemon);
    fs.writeFile('pokemon.json', JSON.stringify(pokemon));
});
