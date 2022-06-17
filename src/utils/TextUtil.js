
const TextUtil = {
   isEmpty: function(str) {
     if(str== null || str== "" || str== "undefined") {
        return true;
     } else {
        return false;
     }
   }
}

export default TextUtil;