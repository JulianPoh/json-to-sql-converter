const data = require('./countries.json');

//Parse JSON as string.
var obj = JSON(data);
var values = [];

//for loop to run through JSON file.
for (var i=0; i<obj.length; i++) {
    values.push(obj.countries[i].name, obj.countries[i].code);
    
    for (var j=0; j<values.length; j++)
    console.log("INSERT INTO countries (" + values[j].name + "," + values[j].code + ") VALUES (" + values[j] + ");");
}
