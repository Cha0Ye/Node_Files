//import file read
const fs = require('fs');
const process = require('process');

function cat(path){
    fs.readFile(path,'utf8', function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`);
    });
}


cat(process.argv[2]);


/*-------------------------------------------------------*/

// const fs = require('fs');

// let path = process.argv[2];



// NOTE: w/ this method you can do 
// node step1.js one.txt in the terminal
//     fs.readFile(path,'utf8', function(err, data){
//         if(err){
//             console.error(err);
//             process.exit(1);
//         }
//         console.log(`file contents: ${data}`);
//     });
