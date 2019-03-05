//import file read
const fs = require('fs');
const process = require('process');
const axios = require('axios')





function cat(path){
    fs.readFile(path,'utf8', function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`);
    });
}


async function webCat(path){

    try {
        let resp = await axios.get(path);
        console.log(resp.data);
        //data === "<html..."
    } catch (err) {
        console.error(`Error fetching ${path}: ${err}`);
        process.exit(1);
    }

    //OR we can use this way
    //axios.get(path).then(function (data) {}).catch()
}

let path = process.argv[2];

if (path.startsWith("http://")){
    webCat(path);
}
else {
    cat(path);
}
