import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Result from "./Result";

export default function CalcularImc(){
 const [peso, setPeso] = useState(null)
 const [altura, setAltura] = useState(null)
 const [resultado, setResultado] = useState('Digite suas informações para calcularmos')

 const Calcular = ()=>{
  if(peso != '' && altura != ''){
   let imc = (peso / altura**2).toFixed(2)
   let estado = ''

   if(imc <= 18.5 ){
    estado = 'Abaixo do normal'
   } else if(imc < 25){
    estado = 'Normal'
   } else if(imc < 30){
    estado = 'Sobrepeso'
   } else if(imc < 35){
    estado = 'Obesidade grau 1'
   } else if(imc < 40){
    estado = 'Obesidade grau 2'
   } else {
    estado = 'Obesidade grau 3'
   }
   return setResultado(`O seu imc é: ${imc}\nEstado: ${estado}`)
  }
  return console.log('Insira as informações corretamente!')
 }

 return(
  <View>
   <Text>Calculadora de Imc</Text>
   <TextInput 
   placeholder="Digite o seu peso(kg)..." 
   value={peso}
   onChangeText={setPeso}
   keyboardType="numeric"
   />
   <TextInput 
   placeholder="Digite a sual altura(m)..." 
   value={altura}
   onChangeText={setAltura}
   keyboardType="numeric"
   />
   <TouchableOpacity onPress={Calcular}>
    <Text>CALCULAR</Text>
   </TouchableOpacity>
   <Result resultado={resultado} />
  </View>
 )
}