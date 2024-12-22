import {StyleSheet , Dimensions} from "react-native"


const {width , height} = Dimensions.get("window");
console.log(width);
console.log(height);





const Loginstyles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        flex : 1
    },
    input : {
        width : width*0.9
    }
    

})


export default Loginstyles