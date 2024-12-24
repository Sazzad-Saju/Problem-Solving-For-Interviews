

function compressString(str){
    let count = 1;
    let temp = "";
    for(let i=0; i<str.length;i++){
        if(str[i] == str[i+1]){
            count++;
        }else{
            while(count>9){
                temp += "9"+str[i]
                count -= 9;
            }
            temp += count>1 ? count + str[i] : str[i];
            count = 1;
        }
    }
    return temp;
}




$str = "aaabbcccddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
$result = compressString($str);
console.log($result);