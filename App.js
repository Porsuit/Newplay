import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import {styles} from './Styles/Styles'
import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth"
import {Formulario} from './Form';
import {RegisterComponent} from './Register'
import {Token} from "./firebase/Token";
import { render } from 'react-dom';


firebase.initializeApp(Token);

const dbh = firebase.firestore();


export default function App() {
  
  const [loadingFirebase, setLoadingFirebase] = useState(true);
  let db ="";
  async function LoadFirebase(){
    if(!firebase.apps.length){
     await firebase.initializeApp(Token);
    }
  }
  useEffect(
    () => {
      LoadFirebase().then(()=>{setLoadingFirebase(false);db = firebase.firestore()}).catch(err=>Alert.alert("error", err));
    }
  )
  return( 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      <Formulario/>
    } else {
      // No user is signed in.
      <RegisterComponent/>
    }
  })
  )
}
