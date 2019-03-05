//import file read
const fs = require('fs');

const axios = require('axios')

let path = process.argv[2];



async function cat(path){
    fs.readFile(path,'utf8', function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`);
        return data;
    });
}

function write(fileToWriteTo,data){
    fs.writeFile(`./${fileToWriteTo}`, data, function(){console.log('Success!')});
}


async function webCat(path){

    try {
        let resp = await axios.get(path);
        console.log(resp.data);
        //data === "<html..."
    } catch {
        console.log("ERROR, please check URL!")
    }

    //OR we can use this way
    //axios.get(path).then(function (data) {}).catch()
}

if (path.startsWith("http://")){
    webCat(path);
}
else if(path === '--out'){
//     let writeToFile = process.argv[3];
//     let writeFromFile = process.argv[4];
//     console.log(writeFromFile)
//     let data = cat(writeFromFile); 
//     console.log(data)
//     write(writeToFile,data);
    let d = Promise.resolve(cat(process.argv[4]))//.then(msg=>{return msg});
    console.log(`this is ${d}`);
}

else {
    cat(path);
}
