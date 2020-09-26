import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, } from 'react-native';
import {styles} from './Styles/Styles';
import * as firebase from 'firebase/app';
import "firebase/firestore";


export default function Formulario() {
    const [textNombre, setTextNombre] = useState("");
    const [textEdad, setTextEdad] = useState("");
    const [textAltura, setTextAltura] = useState("");
    
    function GuardarBase(){
      dbh.collection("usuarios").doc("sujetouno").set({
        nombre: textNombre,
        edad: textEdad,
        altura: textAltura
      });
    };
  
    return (
      <View style={styles.container}>
        <Text>Newplay is in development!</Text>
        <StatusBar style="auto" />
        <Text>Intento de exportar datos</Text>
          <Text>Nombre</Text>
            <TextInput keyboardType='Digite su nombre' onChangeText={(textNombre) => this.setTextNombre({nombre: textNombre})}></TextInput>
          <Text>Edad</Text>
            <TextInput keyboardType='Digite su edad' onChangeText={(textEdad) => this.setTextEdad({edad: textEdad})}></TextInput>
          <Text>Altura</Text>
            <TextInput keyboardType='Digite su altura' onChangeText={(textAltura) => this.setTextAltura({altura: textAltura})}></TextInput>
            <TouchableOpacity onPress={GuardarBase}>
            <Text>Registrar</Text>
          </TouchableOpacity>
      </View>
    );
  }
  