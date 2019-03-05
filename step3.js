//import file read
const fs = require('fs');
const process = require('process');
const axios = require('axios')

function cat(path, out){
    fs.readFile(path,'utf8', function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        else{
            handleOutput(data, out);
        }
        //console.log(`file contents: ${data}`);
    });
}

function handleOutput(text, out){
    if(out){
        fs.writeFile(out, text, 'utf8', function(err, data){
            if(err){
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    }
    else{
        console.log(text);
    }
    
}


async function webCat(path, out){
    try {
        let resp = await axios.get(path);
        console.log(resp.data, out);
        handleOutput(resp.data, out);
        //data === "<html..."
    } catch (err) {
        console.error(`Error fetching ${path}: ${err}`);
        process.exit(1);
    }

    //OR we can use this way
    //axios.get(path).then(function (data) {}).catch()
}

let path;
let out;

if(process.argv[2] === '--out'){
    out = process.argv[3];
    path = process.argv[4];
}
else{
    path= process.argv[2];
}

if (path.startsWith("http://")){
    webCat(path, out);
}
else {
    cat(path, out);
}