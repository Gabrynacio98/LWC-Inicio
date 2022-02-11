import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  //criar variaveis, atributos.
    horario = "Dia";
    nome = "Gaburieru";
    telefone = "4002-8922";
    cpf = "12345678910";
    idade = 24;
    email = "gaburieru@gmail.com";
    insta = "Gabriel Inacio";
    linkedin = "Gabriel Inacio";
    instaLink = "https://www.instagram.com/gabrynacio/";
    gif = "https://giphy.com/embed/sTczweWUTxLqg";


    trocarValores(){
      if(this.nome == 'Gaburieru'){
        this.horario = "Noite";
        this.nome = 'Batman';
        this.telefone = '107.95 MHz';
        this.cpf = 'id.0821684';
        this.email = 'morce.gao88@batmail.org';
        this.insta = 'BatMano';
        this.instaLink = 'https://www.instagram.com/batdadblake/';
      }else{
        this.horario = "Dia";
        this.nome = 'Gaburieru';
        this.telefone = '4002-8922';
        this.cpf = '12345678910';
        this.email = 'gaburieru@gmail.com';
        this.insta = 'Gabriel Inacio'
        this.instaLink = 'https://www.instagram.com/gabrynacio/';
      }
    }

    visibleDados = true;
    visibleRS = true;
    visibleCalculadora = true;

    mostrarDados(){
      //alterar o valor de visible para false
      if(this.visibleDados == true){
        this.visibleDados = false;
      }else{
        this.visibleDados = true;
      }
    }

    mostrarRS(){
      //alterar o valor de visible para false
      if(this.visibleRS == true){
        this.visibleRS = false;
      }else{
        this.visibleRS = true;
      }
    }

    mostrarCalc(){
      //alterar o valor de visible para false
      if(this.visibleCalculadora == true){
        this.visibleCalculadora = false;
      }else{
        this.visibleCalculadora = true;
      }
    }






    //CALCULADORA SHOW
    @track primeiroNumero;
    @track segundoNumero;
    resultado;

    handleNumberOneChange(event){
      this.primeiroNumero = parseInt(event.target.value);
    }
    handleNumberTwoChange(event){
      this.segundoNumero = parseInt(event.target.value);
    }

    soma(){
      this.resultado = parseInt(this.primeiroNumero) + parseInt(this.segundoNumero);
    }
    subtrair(){
      this.resultado = parseInt(this.primeiroNumero) - parseInt(this.segundoNumero);
    }
    multiplicar(){
      this.resultado = parseInt(this.primeiroNumero) * parseInt(this.segundoNumero);
    }
    divisao(){
      this.resultado = parseInt(this.primeiroNumero) / parseInt(this.segundoNumero);
    }
}