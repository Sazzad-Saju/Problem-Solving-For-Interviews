<?php
    function compressString($str){
        $count = 1;
        $temp = "";
        for($i=0;$i<strlen($str);$i++){
            if ($i + 1 < strlen($str) && $str[$i] == $str[$i + 1]) {
                $count++;
            }else{
                while($count>9){
                    $temp .= '9'.$str[$i];
                    $count -= 9;
                }
                $temp .= $count > 1 ? $count . $str[$i] : $str[$i];
                $count = 1;
            }
        }
        return $temp;
    }

    $str = "aaabbcccddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
    $result = compressString($str);
    echo $result;

?>