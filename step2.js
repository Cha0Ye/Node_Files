//import file read
const fs = require('fs');
const axios = require('axios')

let path = process.argv[2];



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
    } catch {
        console.log("ERROR, please check URL!")
    }

    //OR we can use this way
    //axios.get(path).then(function (data) {}).catch()
}



//webCat("...").then()



if (path.includes("http://")){
    webCat(path);
}
else {
    cat(path);
}
