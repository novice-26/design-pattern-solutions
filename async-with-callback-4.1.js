
const fs = require("fs");

function concatFiles(cb,destinationfile,...rest){
    const files= [...rest];
    let finalString="";
    const fileLength=files.length;
    console.log("fileLength",fileLength)

    function iterate(finalString,index){
        if(index === fileLength){
            return finished(destinationfile,finalString) ;
        }
       const file=files[index];
        fs.readFile(String(file),"UTF-8",(err,data)=>{
            if(err){
              cb(err);
            }
            iterate(finalString+data,index+1);
        })
    }

    iterate(finalString,0);
    
}

    

    function finished(destinationFile,result){
        console.log("the result is",result);
        fs.writeFile("result.txt",result,"UTF-8",(err,data)=>{
            if(err){
                console.log(err);
            }
        })
    }
    
    concatFiles((err,concatString,value)=>{
        if(err){
            return new Error("Error processing file");
        }
        
    },"result.txt","baz.txt","foo.txt","bar.txt",);
    
