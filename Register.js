
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import {Styles} from "./Styles/Styles"
import {LoginComponent} from './Login'


const RegisterComponent = (props) =>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [name, setName]=useState("");
    const [activity, setActivity]=useState("");
    const RegistrarUsuario = () => {
        Alert.alert("Entro a la funcion");
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userRecord)=>{
            Alert.alert("Entro al auth");
            firebase.firestore().collection("cuentaPrueba").doc(userRecord.user.uid).set({
                email:email,
                password:password,
                name:name,
                activity:activity
            }).then(()=>{
                Alert.alert("Salio bien firestore");
                setEmail("");
                setPassword("");
                setName("");
                setActivity("");
            }).catch(err => Alert.alert("no se guardo ", err));
        }).catch(err => Alert.alert("error ", err));
    }
    return(
        <View style = {Styles.container}>
            <Text>Ingresar datos</Text>
            <TextInput style = {styles.InputTextStyle} placeholder="Email" onChangeText={text=>setEmail(text)} defaultValue={email}/>
            <TextInput style = {styles.InputTextStyle} placeholder="Nombre" onChangeText={text=>setName(text)} defaultValue={name}/>
            <TextInput style = {styles.InputTextStyle} placeholder="Contrasena" onChangeText={text=>setPassword(text)} defaultValue={password}/>
            <TextInput style = {styles.InputTextStyle} placeholder="Actividad" onChangeText={text=>setActivity(text)} defaultValue={activity}/>
            <TouchableOpacity style={styles.ModalButtton} onPress={()=>RegistrarUsuario()}>
                <Text  style={styles.interiorText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>LoginComponent()}>
                <Text style={styles.interiorText}>Ya tienes cuenta</Text>
            </TouchableOpacity>
            
            
                        

        </View>
    )
}
export {RegisterComponent};
