import { StyleSheet} from 'react-native';
export {styles};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000"
    },
    containerChild: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        borderBottomWidth: 1,
        borderColor: "white",
    },
    titleText: {
        color: '#fff', 
        fontSize: 32,
        padding: 10
    },
    squareOne:{
        width: 150, 
        height: 150, 
        backgroundColor: 'steelblue', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    squareTwo:{
        width: 100,
        height: 100, 
        backgroundColor: 'skyblue', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    squareThree:{
        width: 50, 
        height: 50, 
        backgroundColor: 'powderblue', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    randomNumberButtton:{
        width: 50, 
        height: 50, 
        backgroundColor: 'steelblue', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    ModalButtton:{
        width: 100, 
        height: 50, 
        backgroundColor: 'steelblue', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    interiorText:{
        color: '#fff',
        fontSize: 24
    },
    containerModal:{
        width: 250, 
        height: 250, 
        backgroundColor: 'black', 
        borderWidth: 4,
        borderColor: "white", 
        alignItems: 'center', 
        borderRadius:50,
        shadowColor: "#fff",
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset:{
            height:1,
            width:1
        },
        justifyContent: 'center',
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: [{translateX: -125}, {translateY: -125}]
    },
    CheckBoxStyle:{
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputTextStyle:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        padding: 10,
        width: 250,
        justifyContent: "center",
        alignItems: "center"
    }

  });