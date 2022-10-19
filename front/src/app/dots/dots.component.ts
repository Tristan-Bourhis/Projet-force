import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  TOTAL: number
  DOT: number

  resultTOTAL: string
  resultDOT: string

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit (ngForm: NgForm) {
    const male = document.getElementById('maleRadio') as HTMLInputElement;
    const female = document.getElementById('femaleRadio') as HTMLInputElement;

    const sub = document.getElementById('SubRadio') as HTMLInputElement;
    const jun = document.getElementById('JuniorsRadio') as HTMLInputElement;
    const open = document.getElementById('OpenRadio') as HTMLInputElement;
    const master = document.getElementById('MastersRadio') as HTMLInputElement;
    if (male.checked){
      const squatM = ngForm.form.value.squatRM
      const benchM = ngForm.form.value.benchRM
      const deadliftM = ngForm.form.value.deadliftRM
      const bodyM = ngForm.form.value.mass

      this.TOTAL = squatM + benchM + deadliftM

      const A0M = -0.000001093 * bodyM**4;
      const B0M = 0.0007391293  * bodyM**3;
      const C0M = -0.1918759221 * bodyM**2;
      const D0M = 24.0900756 * bodyM;
      const E0M = -307.75076;

      const Q0M = A0M+B0M+C0M+D0M+E0M;
      const dotKoeff0M = Math.round((500/Q0M + Number.EPSILON)*100)/100;
      this.DOT = Math.round((this.TOTAL * dotKoeff0M + Number.EPSILON)*100)/100;

      this.resultTOTAL = 'Ton total sur les 3 mouvements est de ' + this.TOTAL + ' kg'
      this.resultDOT = 'Ton score DOT est de ' + this.DOT
      document.getElementById('resultTotal').style.display = 'block';
      document.getElementById('resultDot').style.display = 'block';
    }
    if (female.checked){
      const squatF = ngForm.form.value.squatRM
      const benchF = ngForm.form.value.benchRM
      const deadliftF = ngForm.form.value.deadliftRM
      const bodyF = ngForm.form.value.mass

      this.TOTAL = squatF + benchF + deadliftF

      const A0F = -0.0000010706 * bodyF**4;
      const B0F = 0.000515868  * bodyF**3;
      const C0F = -0.1126655495 * bodyF**2;
      const D0F = 13.6175032 * bodyF;
      const E0F = -57.96288;

      const Q0F = A0F+B0F+C0F+D0F+E0F;
      const dotKoeff0F = Math.round((500/Q0F + Number.EPSILON)*100)/100;
      this.DOT = Math.round((this.TOTAL * dotKoeff0F + Number.EPSILON)*100)/100;

      this.resultTOTAL = 'Ton total sur les 3 mouvements est de ' + this.TOTAL + ' kg'
      this.resultDOT = 'Ton score DOT est de ' + this.DOT
      document.getElementById('resultTotal').style.display = 'block';
      document.getElementById('resultDot').style.display = 'block';
    }
    if (sub.checked){
      document.getElementById('subjuniorDots').style.display = 'block';
      document.getElementById('juniorDots').style.display = 'none';
      document.getElementById('seniorDots').style.display = 'none';
      document.getElementById('masterDot').style.display = 'none';
    }
    if (jun.checked){
      document.getElementById('juniorDots').style.display = 'block';
      document.getElementById('subjuniorDots').style.display = 'none';
      document.getElementById('seniorDots').style.display = 'none';
      document.getElementById('masterDot').style.display = 'none';
    }
    if (open.checked){
      document.getElementById('seniorDots').style.display = 'block';
      document.getElementById('subjuniorDots').style.display = 'none';
      document.getElementById('juniorDots').style.display = 'none';
      document.getElementById('masterDot').style.display = 'none';
    }
    if (master.checked){
      document.getElementById('masterDot').style.display = 'block';
      document.getElementById('subjuniorDots').style.display = 'none';
      document.getElementById('juniorDots').style.display = 'none';
      document.getElementById('seniorDots').style.display = 'none';
    }
  }

}
