import {useState,useEffect} from "react";

const Formulario = () => {
    let [peso,setPeso] = useState(0);
    let [altura,setAltura] = useState(0);
    
   
   
    const rederizResultado = () => {
        const imc = peso/(altura*altura);

        console.log("peso: " + peso);
        console.log("altura: " + altura);
       
        console.log("IMC: "+imc);

        
        if(imc <= 18.5){
            return (
                <p>IMC: {parseInt(imc)} -- Baixo peso </p>
            )
        }if(imc >= 18.5 && imc <= 24.99){
            return (
                <p>IMC: {parseInt(imc)}--  Normal</p>
            )
        }if(imc >= 25 && imc <= 29.99){
            return (
                <p>IMC: {parseInt(imc)}--  Sobrepeso</p>
            )
        }
        if(imc > 30 ){
            return (
                <p>IMC: {parseInt(imc)}--  Obesidade</p>
            )
        }
    }

    
    
    return (
        <form action="">
            
            
           
            <label>Peso: </label><input onChange={evento=> setPeso(parseFloat(evento.target.value))} type="number" placeholder="Peso em kg: 62" />
            <label>Altura: </label><input onChange={evento=> setAltura(parseFloat(evento.target.value))} type="number" step="0.01" placeholder="Altura em m: 1.82" />
            
            {rederizResultado()}
            
            
        
        </form>

    )
}

export default Formulario