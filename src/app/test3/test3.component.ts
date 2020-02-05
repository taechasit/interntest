import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  numbers
  numbersCount:number = -1;
  numbersform
  numbersArray= []

  ansform
  ans
  ansArray =  new Array(12);
  worngAns = []
  point:number = 0

  constructor(private formBuilder: FormBuilder) { 

    this.numbersform = this.formBuilder.group({
      numbers:''
    });

    this.ansform = this.formBuilder.group({
      ans: ''
    });

  }

  ngOnInit() {

  }

  onSubmitNumbers(Numbers) {
    this.numbersCount = 5
    //console.log(this.getNumberSplit(Numbers.numbers))
    this.numbersArray = this.getNumberSplit(Numbers.numbers)
    console.log(this.numbersArray)
  }

  onSubmitAns(Ans) {
    let corAns:number=0
    for(let i = 0; i<this.numbersArray.length;i++){
      if(Ans.ans == this.numbersArray[i]){
        this.ansArray[i] = Ans.ans
        corAns = corAns +1
        this.point = this.point + 1
      }
    }
    if(corAns == 0){
      this.worngAns.push(Ans.ans)
    }

    this.numbersCount = this.numbersCount-1
  }

  getNumberSplit(fullName) { 
    return fullName.split(' ')
  }
  newGame(){
    this.ansArray =  new Array(12);
    this.worngAns = []
    this.point = 0

    this.numbersCount= -1;
    this.numbersArray= []
  }
}
