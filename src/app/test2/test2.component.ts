import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  numbers
  isprime
  isprimeArray = []
  numbersform
  numCheck

  constructor(private formBuilder: FormBuilder) {

    this.numbersform = this.formBuilder.group({
      numbers:''
    });

   }

  ngOnInit() {
  }

  onSubmitNumbers(Numbers) {
    console.warn(Numbers);
    this.numCheck = Numbers.numbers
    if(this.numCheck !== 0.0){
      this.getOnlyNumber(Numbers.numbers)
    }

    this.isprimeArray = this.isprimeArray.filter(n => n.isPrime == true || n.number > 1000)
    console.log(this.isprimeArray)
    this.numbersform.reset();
  }

  numArr = []
  getOnlyNumber(fullNum) { 
    let num = fullNum.toString().split('.').join('')
    for(let i = 2; i < 5;i++){
      if(this.isPrime(Number(num.substring(0, num.length - (num.length-i))))){
        this.isprimeArray.push({'number':Number(num.substring(0, num.length - (num.length-i))),'isPrime':this.isPrime(Number(num.substring(0, num.length - (num.length-i))))})
        console.log(this.isprime)
        break
      }else {
        this.isprimeArray.push({'number':Number(num.substring(0, num.length - (num.length-i))),'isPrime':this.isPrime(Number(num.substring(0, num.length - (num.length-i))))})
      }
    }
    console.log(this.numArr)
  }

  isPrime(num){
    var flag = true;
    for(var i=2; i<=Math.ceil(num/2); i++){
      if((num%i)==0){
        flag = false;
        break;
      }
    }
    return flag;    
  }
  setNum(){
    this.numCheck = 1
  }

}
