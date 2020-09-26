import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase/app';
import "firebase/auth";
import {Styles} from "./Styles/Styles"

const LoginComponent = (props) =>{
    
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const LoginUsuario = () => {
        Alert.alert("Entro a la funcion");
        firebase.auth().signInWithEmailAndPassword(email, password,).then(()=>{
            Alert.alert("Login Realizado");
        }).catch(err => Alert.alert("error ", err));
    }
    return(
        <View style = {Styles.container}>
            <Text>Ingresar datos</Text>
            <TextInput style = {styles.InputTextStyle} placeholder="Email" onChangeText={text=>setEmail(text)} defaultValue={email}/>
            <TextInput style = {styles.InputTextStyle} placeholder="Nombre" onChangeText={text=>setName(text)} defaultValue={name}/>
            <TouchableOpacity style={styles.ModalButtton} onPress={()=>LoginUsuario()}>
                <Text style={styles.interiorText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export {LoginComponent};
