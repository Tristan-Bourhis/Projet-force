import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})

export class MaxComponent implements OnInit {

  weightRM: number

  reps: number
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form.value.weightRm + ngForm.form.value.repsRm)
    this.reps = ngForm.form.value.repsRm
    this.weightRM = ngForm.form.value.weightRm + this.reps
  }
}




