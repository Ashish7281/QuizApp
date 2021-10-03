import { Component, OnInit } from '@angular/core';
import data from '../_files/question.json';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  data: any;
  question: any;
  answer1: any;
  answer2: any;
  answer3: any;
  answer4: any;
ans:string='';
  correct_answer:any;
  queNo:any;
  inc: any = 0;
  radioSelected:any;
  color1:string='';
  color2:string='';
  color3:string='';
  color4:string='';
  id:string=''
  
  stat:boolean = false;
  correct:boolean=false;
  cMarks:number =0;
  wMarks:number=0;
  cCount:number=0;
  wCount:number=0;
  button:string="Next >"
  div1:string='';
  indicate:string='';

  public dataList: { number: Number, question: String, answers: Array<String> , correct_answer:Number}[] = data;

  constructor() { }

  ngOnInit(): void {
    this.queNo = this.dataList[this.inc].number;
    
    this.question = this.dataList[this.inc].question;
    this.answer1 = this.dataList[this.inc].answers[0];
    this.answer2 = this.dataList[this.inc].answers[1];
    this.answer3 = this.dataList[this.inc].answers[2];
    this.answer4 = this.dataList[this.inc].answers[3]
    
  } 
  showMsg(){ }
  onItemChange(value:any){
    this.inc++;
     
    this.question = this.dataList[this.inc].question;
    this.answer1 = this.dataList[this.inc].answers[0];
    this.answer2 = this.dataList[this.inc].answers[1];
    this.answer3 = this.dataList[this.inc].answers[2];
    this.answer4 = this.dataList[this.inc].answers[3]; 

    
    if(this.radioSelected ==  this.dataList[this.inc].correct_answer)
    { 
      //  this.color = "green";
       this.cCount +=1;
       this.cMarks+=2;
       
    }else{
      // this.color = "red";
      this.wCount +=1;
     
      if(this.wMarks<0)
          this.wMarks-=0;
      
    }
    
  }

  showNext() {
  
    console.log(this.inc);
        
    }
    
  }



