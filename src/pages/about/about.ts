import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SwiperModule} from 'swiper';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {



    //DEFINIR OBJETOS df 
    let objeto = {
        Nombre : "pepe",
        Edad   : 30
    }
    objeto.Nombre = "Antonio";

    console.log(objeto.Nombre);


    //FUNCIONES: PARÁMETROS OPCIONALES, OBLIGATORIOS Y POR DEFECTO
    function activar( quien :string,
                      objeto:string = "por defecto",
                      momento?:string){

       let mensaje:string;

       if ( momento ){
         mensaje = `${ quien } activó la señal ${objeto} momento:${momento}`;
       }else{
         mensaje = `${ quien } activó la señal ${objeto}`;
       }
       console.log(mensaje);
    }

    activar("Gordon","parametro","momento");




    //FUNCIONES DE FLECHA
    let miFuncion = function( a ){
      return a;
    }

    //recibe como argumento a y devuelve a
    let miFuncionF = (a) => a


    let miFuncion2 = function( a:number, b:number){
      return a + b;
    }

    let miFuncion2F = (a:number, b:number)=> a + b;


    let miFuncion3 = function( nombre:string){
      nombre = nombre.toUpperCase();
      return nombre;
    }

    let miFuncion3F = (nombre:string) =>{
      nombre = nombre.toUpperCase();
      return nombre;
    }

    console.log( miFuncion("Normal"));
    console.log( miFuncionF("Flecha"));


    //ejemplo de uso de flechas. Dentro de las funciones de fecha, el this no es afectado, apunta
    // al mismo objeto
    let hulk = {
      nombre: "Bruce",
      smash(){
          setTimeout(  ()=>console.log("hola " + this.nombre), 1500);
          let pepe = ()=>console.log("hol2 " + this.nombre);
          pepe();
      }
    }

    hulk.smash();





    //DESTRUCTURACIÓN DE OBJETOS Y ARREGLOS
    let avenger = {
      nombre: "Steve",
      clave: "Capitan America",
      poder: "Droga"
    }

    //let nombre = avenger.nombre;
    //let clave = avenger.clave;
    //let poder = avenger.poder;
    //let {nombre, clave, poder} = avenger;
    //no es secuencial
    let {clave, poder, nombre} = avenger;
    console.log(nombre,clave,poder);


    let avengers:string[] = ["Thor","Steve","Tony"];

    let [thor, capi, ironman] = avengers;

    console.log(thor, capi, ironman);




    //PROMESAS EN ES6
    let prom1 = new Promise( function(resolve, reject){
        setTimeout(()=>{
          console.log("Promesa terminada");
          //Termina bien
          resolve();
        }, 1500)



        //Termina mal
        //reject();
    });

    console.log("paso1");

    prom1.then(
      function(){
        console.log("Ejecutarme cuando se termina bien!");
      },
      function(){
        console.log("Ejecutarme si algo sale mal!");
      }
    )

    console.log("paso2");



    // INTERFACES DE TYPESCRIPT
    interface Xmen{
        nombre:string,
        poder:string
    }

    function enviarMision(xmen:Xmen){

      console.log("Enviando a: " + xmen.nombre);

    }

    function enviarCuartel(xmen:Xmen){

      console.log("Enviando al cuartel: " + xmen.nombre);

    }

    let wolverine:Xmen = {
      nombre:"Wolverine",
      poder: "Regeneración"
    };

    enviarMision(wolverine);





    //CLASES DE LA POO
    class Avenger{

      nombre:string = "AntMan";
      equipo:string;
      nombreReal:string;

      puedePelear:boolean;
      peleasGanadas:number;

      constructor(nombre:string){
         this.nombre = nombre;
      }
    }

    let antman:Avenger = new Avenger("pepe");

    console.log(antman);


  }





}
