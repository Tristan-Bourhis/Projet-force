import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})

export class MaxComponent implements OnInit {

  ERM: string

  weight: number

  reps: number

  rpeIndex: number

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(ngForm: NgForm){

    if (ngForm.form.value.weightRm == 0 || ngForm.form.value.repsRm == 0 ){}

    else{
      this.weight = ngForm.form.value.weightRm
      this.reps = ngForm.form.value.repsRm
      this.rpeIndex = parseInt(ngForm.form.value.estimatedRpe)

      /* This refers to the rpe chart that can be found in stockage */
      const multi:number[][] =[[0.864,0.878,0.892,0.907,0.922,0.939,0.955,0.978,1],[0.836,0.85,0.863,0.878,0.892,0.907,0.922,0.939,0.955],[0.81,0.824,0.837,0.85,0.863,0.878,0.892,0.907,0.922],[0.785,0.799,0.811,0.824,0.837,0.85,0.863,0.878,0.892],[0.76,0.774,0.786,0.799,0.811,0.824,0.837,0.85,0.863],[0.737,0.751,0.762,0.774,0.786,0.799,0.811,0.824,0.837],[0.709,0.723,0.739,0.751,0.762,0.774,0.786,0.799,0.811],[0.68,0.694,0.707,0.723,0.739,0.751,0.762,0.774,0.786],[0.653,0.667,0.68,0.694,0.707,0.723,0.739,0.751,0.762],[0.626,0.64,0.653,0.667,0.68,0.694,0.707,0.723,0.739],[0.599,0.613,0.626,0.64,0.653,0.667,0.68,0.694,0.707],[0.572,0.586,0.599,0.613,0.626,0.64,0.653,0.667,0.68]];
      const repsIndex = this.reps - 1 ;
      console.log(this.rpeIndex)
      const valueOfE1RM = this.weight / multi[repsIndex][this.rpeIndex]
      const roundedValueOfE1RM = Math.round((valueOfE1RM + Number.EPSILON)*100)/100;
      this.ERM = "Ta charge maximale estimée est de " + roundedValueOfE1RM + " kg";
      document.getElementById('resultE1RM').style.display = 'block';
    }
  }
}




