import { Component, OnInit , ViewChild,ElementRef} from '@angular/core';
import { AlertService} from '../service/alert.service';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { Router} from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './ticTacToe.component.html',
  // styleUrls: ['./ticTacToe.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translate(0,0)'
      })),
      transition(':enter', [
        style({
          transform: 'translate(0,500px)'
        }),
        animate(300)
      // ]),
      // transition(':leave', [
      //   animate(300, style({
      //     transform: 'translate(0,500px)'
      //   }))
      ])
    ]),
    trigger('msg', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class TicTacToeComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef:ElementRef;
  sign:boolean=false;
  won:boolean=false;
  disp:string='';
 btn1;btn2;btn3;btn4;btn5;btn6;btn7;btn8;btn9;
 resultA:string='';
 resultB:string='';
 message:string='';
 action:boolean;
 counter:number=0;
//  resArr:Array<string>=["123","147","159","258","369","789",
//                       "321","741","951","852","963","987",
//                       "132","174","195","285","396","798",
//                       "312","714","915","528","396","978"
//                     ]

  constructor(private _alertService:AlertService,private router:Router) { 
   
  }

  ngOnInit() {
    

  }

  check(val:string,sign:boolean){
    if(sign==true){
      this.disp="O";
      this.resultA=this.resultA+val; 
      }
      else{
        this.disp="+";
        this.resultB=this.resultB+val;
      }
      switch(val.toString()){
        
        case "1":
        this.btn1=this.disp;
        break;
        case "2":
        this.btn2=this.disp;
        break;
        case "3":
        this.btn3=this.disp;
        break;
        case "4":
        this.btn4=this.disp;
        break;
        case "5":
        this.btn5=this.disp;
        break;
        case "6":
        this.btn6=this.disp;
        break;
        case "7":
        this.btn7=this.disp;
        break;
        case "8":
        this.btn8=this.disp;
        break;
        case "9":
        this.btn9=this.disp;
        break;
        default:
        break;
      }
          this.sign=!this.sign
          this.counter++;
          if(this.counter>=9){
            this.message="Game over";
            //this._alertService.error("Game over!", false);
          }
          
          if(this.counter>=5){
          if(this.btn1==this.btn2&&this.btn2==this.btn3 && this.btn1!=undefined &&this.btn2!=undefined && this.btn3!=undefined||
            this.btn1==this.btn4&&this.btn1==this.btn7 && this.btn1!=undefined &&this.btn4!=undefined && this.btn7!=undefined||
            this.btn1==this.btn5&&this.btn1==this.btn9 && this.btn1!=undefined &&this.btn5!=undefined && this.btn9!=undefined||
            this.btn2==this.btn5&&this.btn2==this.btn8 && this.btn2!=undefined &&this.btn5!=undefined &&this.btn8!= undefined||
            this.btn3==this.btn6&&this.btn3==this.btn9 && this.btn3!=undefined &&this.btn6!=undefined &&this.btn9!=undefined||
            this.btn7==this.btn8&&this.btn7==this.btn9 && this.btn7!=undefined &&this.btn8!=undefined &&this.btn9!=undefined||
            this.btn7==this.btn5&&this.btn3==this.btn7 && this.btn7!=undefined &&this.btn3!=undefined &&this.btn5!=undefined||
            this.btn4==this.btn5&&this.btn4==this.btn6 && this.btn4!=undefined &&this.btn5!=undefined &&this.btn6!=undefined)
            {
              this.message="You won!";
              this.won=true;
              //this._alertService.success("You Won!", true);
              this.AudioPlay();
            }
          }
          // if(){
          //   this.message="You win";
          // }
          
          
    }  


          AudioPlay(){
                      this.audioPlayerRef.nativeElement.play();
                    } 

          refreshpage(){
            window.location.href=window.location.href;
          }

 }


