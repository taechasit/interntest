import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  numbers
  numbersCount:number = 0;
  numbersform

  nameform
  name
  shortName
  nameArray = [];

  constructor(private formBuilder: FormBuilder,) { 

    this.numbersform = this.formBuilder.group({
      numbers:''
    });
    this.nameform = this.formBuilder.group({
      name: ''
    });

  }

  ngOnInit() {
  }

  onSubmitNumbers(Numbers) {
    console.warn('Your order has been submitted', Numbers);
    this.numbersCount = (Numbers.numbers); 
    console.log(this.numbersCount)

    this.numbersform.reset();
  }

  onSubmitName(Name) {
    this.shortName = this.getShortName(Name.name)
    console.log(this.shortName)
    this.nameArray.push(this.shortName); 
    console.log(this.sortByLength(this.nameArray))

    this.numbersCount = this.numbersCount-1
  }

  getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).filter(n => n === n.toUpperCase()).join('');
  }

  sortByLength(array) {
    return array.sort((x,y) => (y.length - x.length || x.localeCompare(y)))
 }
}
