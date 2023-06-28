import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})

export class GradesComponent implements OnInit{
  grades: number[] = [];
  isDisabled: boolean = false;
  //Read input -> add it to grades -> display + hide average 

  onSave(){
    var inputBox = (<HTMLInputElement>document.getElementById("grade_input")).value;
    if(inputBox === '' ){
      alert("You must insert a grade");

    } else {
      (<HTMLInputElement>document.getElementById("displayAverage")).innerHTML = '';
      this.grades.push(parseInt(inputBox));
      (<HTMLInputElement>document.getElementById("grade_input")).value = " ";
    }
    
  } 
  calcAverage(){
    let sum = this.grades.reduce((accumulator=0, currentValue=0) => accumulator + currentValue, 0);
    if (sum > 0){
      var average = (sum / this.grades.length).toFixed(2);
      (<HTMLInputElement>document.getElementById("displayAverage")).innerHTML = "The average is: " + average.toString();
    } else {
      this.isDisabled = true;
    }
  }

  hide(){
    (<HTMLInputElement>document.getElementById("displayAverage")).innerHTML = '';
  }


  constructor(){}

  ngOnInit(): void {
      
  }
  

}
