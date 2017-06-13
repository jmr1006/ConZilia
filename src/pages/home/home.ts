import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ionic2Calendar } from 'ionic2-calendar2';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) mySlider: Slides;
  public myCalendario: ClaseCalendario;
  constructor(public navCtrl: NavController) {
       this.myCalendario  = new ClaseCalendario();
    }


//@ViewChild(Content) content: Content;
  public muestraSlide:boolean = true;
  public PosicionActual :number= 0;
  public PosicionAnterior :number=0;
  public Diferencia :number= 0;

  public hoy: Date;
  public listaDias: string[] = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  public filaDias1: string[] = ["27", "28", "29", "30", "31", "1", "2"];

  public tipoDias1: string[] = ["column", "column", "column", "column", "column", "column", "column"];
  public tipoDia = "";

  public SlideActual:number = 10;
  public FechaActual:string="";

  public Linea1:number[]=[];
  public Linea2:number[]=[];
  public Linea3:number[]=[];
  public Linea4:number[]=[];
  public Linea5:number[]=[];
  public Linea6:number[]=[];


  public slideCambia1(){
    console.log("SLIDE REAL    :", this.mySlider.getActiveIndex());
    this.FechaActual = this.myCalendario.Slider[this.mySlider.realIndex].FechaTexto.Mes.toString() + '-' + this.myCalendario.Slider[this.mySlider.realIndex].FechaTexto.Ano.toString();
    console.log("numero slides " + this.myCalendario.Slider.length);
  }


  public slideCambia() {

    let operacion:string="SUMA";


    if (this.SlideActual === 10 ){
      this.SlideActual = 2;

    }else{

    }

  //  this.myCalendario.avanzaMes(this.slides.realIndex);

    let currentIndex = this.mySlider.getActiveIndex();



  //  while(this.mySlider.isEnd()) {
      //  this.mySlider.slideNext();
      //  this.mySlider.slidePrev();
  // }

    console.log("SLIDE ANTERIOR:", this.PosicionAnterior);

    this.Diferencia = this.PosicionAnterior - this.mySlider.realIndex;

    this.PosicionAnterior = this.SlideActual;

    if (this.Diferencia == -1 || this.Diferencia == 4){
       console.log("SUMA");
       operacion = "SUMA";

       if (this.SlideActual === 4){
         this.SlideActual = 0;

       }else{
         this.SlideActual++;
       }
    }
    if (this.Diferencia == 1 || this.Diferencia == -4){
       console.log("RESTA");
       operacion = "RESTA";
       this.SlideActual--;
       if (this.SlideActual === -1){
         this.SlideActual = 4;
       }
    }


    this.Linea1 = this.myCalendario.Slider[this.SlideActual].Linea1;
    this.Linea2 = this.myCalendario.Slider[this.SlideActual].Linea2;
    this.Linea3 = this.myCalendario.Slider[this.SlideActual].Linea3;
    this.Linea4 = this.myCalendario.Slider[this.SlideActual].Linea4;
    this.Linea5 = this.myCalendario.Slider[this.SlideActual].Linea5;
    this.Linea6 = this.myCalendario.Slider[this.SlideActual].Linea6;
    console.log("SLIDE NUEVO   :", this.SlideActual);
    console.log("SLIDE REAL    :", this.mySlider.getActiveIndex());
    this.FechaActual = this.myCalendario.Slider[this.SlideActual].FechaTexto.Mes.toString() + '-' + this.myCalendario.Slider[this.SlideActual].FechaTexto.Ano.toString();

    let numeroSlide = 0;
    console.log("Fecha Slide 0: " + this.myCalendario.Slider[0].FechaTexto.Mes + "-" + this.myCalendario.Slider[0].FechaTexto.Ano);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea1);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea2);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea3);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea4);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea5);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea6);
    console.log("Fecha Slide 1: " + this.myCalendario.Slider[1].FechaTexto.Mes + "-" + this.myCalendario.Slider[1].FechaTexto.Ano);
    numeroSlide++;
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea1);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea2);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea3);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea4);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea5);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea6);
    console.log("Fecha Slide 2: " + this.myCalendario.Slider[2].FechaTexto.Mes + "-" + this.myCalendario.Slider[2].FechaTexto.Ano);
numeroSlide++;
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea1);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea2);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea3);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea4);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea5);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea6);
    console.log("Fecha Slide 3: " + this.myCalendario.Slider[3].FechaTexto.Mes + "-" + this.myCalendario.Slider[3].FechaTexto.Ano);
numeroSlide++;
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea1);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea2);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea3);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea4);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea5);
    console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea6);
    console.log("Fecha Slide 4: " + this.myCalendario.Slider[4].FechaTexto.Mes + "-" + this.myCalendario.Slider[4].FechaTexto.Ano);
numeroSlide++;
console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea1);
console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea2);
console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea3);
console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea4);
console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea5);
console.log(numeroSlide + "-->" + this.myCalendario.Slider[numeroSlide].Linea6);
    if (operacion === "SUMA"){
      if (this.SlideActual === 2){
        let F:IFecha = {Dia:this.myCalendario.Slider[3].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[3].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[3].FechaTexto.Ano
        };
        this.myCalendario.ActualizaSlide(0,F.Dia, F.Mes, F.Ano,2);

      }
      if (this.SlideActual === 3){
        let F:IFecha = {Dia:this.myCalendario.Slider[4].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[4].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[4].FechaTexto.Ano
        };
        this.myCalendario.ActualizaSlide(1,F.Dia, F.Mes, F.Ano,2);

      }
      if (this.SlideActual === 4){
        let F:IFecha = {Dia:this.myCalendario.Slider[0].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[0].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[0].FechaTexto.Ano
        };
        this.myCalendario.ActualizaSlide(2,F.Dia, F.Mes, F.Ano,2);

      }
      if (this.SlideActual === 0){
        let F:IFecha = {Dia:this.myCalendario.Slider[1].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[1].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[1].FechaTexto.Ano
        };
        this.myCalendario.ActualizaSlide(3,F.Dia, F.Mes, F.Ano,2);

      }
      if (this.SlideActual === 1){
        let F:IFecha = {Dia:this.myCalendario.Slider[2].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[2].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[2].FechaTexto.Ano
        };
        this.myCalendario.ActualizaSlide(4,F.Dia, F.Mes, F.Ano,2);

      }

    }
    if (operacion === "RESTA"){
      if (this.SlideActual === 2){
        let F:IFecha = {Dia:this.myCalendario.Slider[1].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[1].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[1].FechaTexto.Ano
        };
        this.myCalendario.Slider[4]  = this.myCalendario.CargaSlide(this.myCalendario.Calendario,F.Dia, F.Mes, F.Ano,-2);

      }
      if (this.SlideActual === 1){
        let F:IFecha = {Dia:this.myCalendario.Slider[0].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[0].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[0].FechaTexto.Ano
        };
        this.myCalendario.Slider[3]  = this.myCalendario.CargaSlide(this.myCalendario.Calendario,F.Dia, F.Mes, F.Ano,-2);

      }
      if (this.SlideActual === 0){
        let F:IFecha = {Dia:this.myCalendario.Slider[4].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[4].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[4].FechaTexto.Ano
        };
        this.myCalendario.Slider[2]  = this.myCalendario.CargaSlide(this.myCalendario.Calendario,F.Dia, F.Mes, F.Ano,-2);

      }
      if (this.SlideActual === 4){
        let F:IFecha = {Dia:this.myCalendario.Slider[3].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[3].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[3].FechaTexto.Ano
        };
        this.myCalendario.Slider[1]  = this.myCalendario.CargaSlide(this.myCalendario.Calendario,F.Dia, F.Mes, F.Ano,-2);

      }
      if (this.SlideActual === 3){
        let F:IFecha = {Dia:this.myCalendario.Slider[2].FechaTexto.Dia,
                        Mes:this.myCalendario.Slider[2].FechaTexto.Mes,
                        Ano:this.myCalendario.Slider[2].FechaTexto.Ano
        };
        this.myCalendario.Slider[0]  = this.myCalendario.CargaSlide(this.myCalendario.Calendario,F.Dia, F.Mes, F.Ano,-2);

      }
    }

  }



}

interface TipoFecha{
  Valor:Date,
  Texto:String,
  Linea1?:String[]
}

interface ICalendario{
    Fecha: String,
    Dia:  number,
    Mes:  number,
    Ano:  number,
    Pos:  number,
    Tipo: String,
    Dat : Date
}

interface ISlider{
    FechaTexto:     IFecha,
    Fecha:  Date,
    Linea1: number[],
    Linea2: number[],
    Linea3: number[],
    Linea4: number[],
    Linea5: number[],
    Linea6: number[]
}

interface IFecha{
    Dia: number,
    Mes: number,
    Ano: number
}


class ClaseCalendario{
  public Calendario: ICalendario[] = [];
  public Slider    : ISlider[] = [];

   constructor(){
     const F:IFecha= {Dia:4, Mes:1, Ano:2017};


//(ionSlideDidChange)="slideCambia()"
     this.Calendario = this.CargarCalendario();
     let mesaux = 0;
     let numslider = 0;
     console.log("Longitud del calendario: " + this.Calendario.length);
     console.log("Mes inicio: " + this.Calendario[0].Mes);
     console.log("Ano inicio: "  + this.Calendario[0].Ano);
     console.log("Dia inicio: "  + this.Calendario[0].Dia);
     /*
     for (let i = 0; i < this.Calendario.length; i++){

           if (this.Calendario[i].Mes != mesaux){

             this.Slider[numslider] = this.CargaSlide(this.Calendario,this.Calendario[i].Dia, this.Calendario[i].Mes, this.Calendario[i].Ano,0);
             numslider++;
             mesaux=this.Calendario[i].Mes;
           }

     }
*/

     this.Slider[0]     = this.CargaSlide(this.Calendario,F.Dia, F.Mes, F.Ano,-2);
     this.Slider[1]     = this.CargaSlide(this.Calendario,F.Dia, F.Mes, F.Ano,-1);
     this.Slider[2]     = this.CargaSlide(this.Calendario,F.Dia, F.Mes, F.Ano,0);
     this.Slider[3]     = this.CargaSlide(this.Calendario,F.Dia, F.Mes, F.Ano,1);
     this.Slider[4]     = this.CargaSlide(this.Calendario,F.Dia, F.Mes, F.Ano,2);



   }

   public ActualizaSlide(numeroSlide:number, Dia:number, Mes:number,Ano:number,Operador:number){
      this.Slider[numeroSlide]     = this.CargaSlide(this.Calendario,Dia, Mes, Ano,Operador);

   }


   public CargarCalendario():ICalendario[]{
       let Calendario: ICalendario[] = [];
       let FechaInicio: Date = new Date(Date.now());
       FechaInicio.setDate(FechaInicio.getDate() - 1825);

       for (let i = 0; i < 3650; i++){
           FechaInicio.setDate(FechaInicio.getDate() + 1);
           Calendario[i] = { Fecha: FechaInicio.toDateString(),
                             Dia  : FechaInicio.getDate(),
                             Mes  : FechaInicio.getMonth() + 1,
                             Ano  : FechaInicio.getFullYear(),
                             Pos  : this.ConviertePosicion(FechaInicio.getDay()),
                             Tipo: "Tipo",
                             Dat:  FechaInicio
                            };
       }

       return Calendario;
   }

   public CargaSlide(Calendario:ICalendario[], dia:number, mes:number, ano:number, Meses:number):ISlider{

       let Slider:      ISlider; //Slider a cargar
       let FechaInicio: IFecha;
       let FechaInicioSlide: Date;
       let Posicion:    number;
       let Resta:       number;
       let Linea1: number[] = [];
       let Linea2: number[] = [];
       let Linea3: number[] = [];
       let Linea4: number[] = [];
       let Linea5: number[] = [];
       let Linea6: number[] = [];
       let Fecha:IFecha={Dia:dia, Mes:mes, Ano:ano};
       let FechaEntrada:IFecha={Dia:dia, Mes:mes, Ano:ano};

       // Sumamos o Restamos el mes
       console.log("Fecha entra:" + Fecha.Mes + "-" + Fecha.Ano);
       FechaInicio = this.SumaMeses(Fecha,Meses);
       console.log("Fecha salida:" + FechaInicio.Mes + "-" + FechaInicio.Ano);



      // FechaInicio.Dia = 1;
       Posicion = this.getPosicion(FechaInicio, this.Calendario);

       //console.log("La fecha inicio del mes es: " + Calendario[Posicion].Fecha);
       console.log("posicion:" + Posicion);
       FechaInicioSlide = new Date(Calendario[Posicion].Ano, Calendario[Posicion].Mes - 1, Calendario[Posicion].Dia);

       Resta = Calendario[Posicion].Pos - 1;
       FechaInicioSlide.setDate(FechaInicioSlide.getDate() - Resta);

       //console.log("La primera fecha del slide es: " + FechaInicioSlide);

       // Cargar las 6 lineas sumando 1


       for (let i = 0; i < 7; i++){
           //Slider = {}
           //Slider.Linea1[i]
           Linea1[i] = FechaInicioSlide.getDate();
           FechaInicioSlide.setDate(FechaInicioSlide.getDate() + 1);
       }

       for (let i = 0; i < 7; i++){
           //Slider.Linea2[i] = FechaInicioSlide.getDate();
           Linea2[i] = FechaInicioSlide.getDate();
           FechaInicioSlide.setDate(FechaInicioSlide.getDate() + 1);
       }

       for (let i = 0; i < 7; i++){
           //Slider.Linea3[i] = FechaInicioSlide.getDate();
           Linea3[i] = FechaInicioSlide.getDate();
           FechaInicioSlide.setDate(FechaInicioSlide.getDate() + 1);
       }

       for (let i = 0; i < 7; i++){
           //Slider.Linea4[i] = FechaInicioSlide.getDate();
           Linea4[i] = FechaInicioSlide.getDate();
           FechaInicioSlide.setDate(FechaInicioSlide.getDate() + 1);
       }

       for (let i = 0; i < 7; i++){
           //Slider.Linea5[i] = FechaInicioSlide.getDate();
           Linea5[i] = FechaInicioSlide.getDate();
           FechaInicioSlide.setDate(FechaInicioSlide.getDate() + 1);
       }

       for (let i = 0; i < 7; i++){
           //Slider.Linea6[i] = FechaInicioSlide.getDate();
           Linea6[i] = FechaInicioSlide.getDate();
           FechaInicioSlide.setDate(FechaInicioSlide.getDate() + 1);
       }

       console.log("FECHA:" + FechaInicio.Mes + "-" + FechaInicio.Ano);
       /*
       console.log(Linea1);
       console.log(Linea2);
       console.log(Linea3);
       console.log(Linea4);
       console.log(Linea5);
       console.log(Linea6);
       */
       Slider = {
           FechaTexto: FechaInicio,
           Fecha:  FechaInicioSlide,
           Linea1: Linea1,
           Linea2: Linea2,
           Linea3: Linea3,
           Linea4: Linea4,
           Linea5: Linea5,
           Linea6: Linea6
       }


       return Slider;
   }


    public SumaMeses(Fecha1:IFecha,Meses:number):IFecha{
          let Suma:boolean;
          let Resto:number;
          //Ver si es suma o resta:
          if (Meses > 0){
             Suma = true;
             Fecha1.Mes = Fecha1.Mes + Meses;
             Resto     = Fecha1.Mes - 12;
             if (Resto > 0){
                Fecha1.Mes = Resto;
                Fecha1.Ano++;
             }
          }else{
             Suma = false;
             Fecha1.Mes = Fecha1.Mes + Meses;
             Resto     = Fecha1.Mes + 12;
             if (Resto < 13){
                Fecha1.Mes = Resto;
                Fecha1.Ano--;
             }
          }

          return Fecha1;
   }

   public getPosicion(Fecha:IFecha, calendario:ICalendario[]):number{
        let indice:number=0;

        indice = this.BuscaFecha(calendario,Fecha.Dia, Fecha.Mes, Fecha.Ano);

        return indice;
        //return calendario[indice].Pos;
   }

   public ConviertePosicion(dia:number):number{
     if (dia === 0){ dia = 7;}
   	return dia;
   }

   public BuscaFecha(calendario:ICalendario[], dia:number, mes:number, ano:number):number{
      let indice:number = -1;
    //  console.log("buscamos: dia, mes, ano:" + dia + "-" + mes + "-" + ano);
      calendario.forEach((item, index) => {
      //  console.log("leer: dia, mes, ano:" + item.Dia + "-" + item.Mes + "-" + item.Ano);
       if (item.Dia === dia &&
           item.Mes === mes &&
           item.Ano === ano){

           indice = index;
       }
      });

      return indice;
   }



   /*   11--> diciembre
       var d = new Date(2016, 11, 17);
       for (let i = 0; i < 100; i++){

       }
   */



}
