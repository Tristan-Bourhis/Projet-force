import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-rpe',
  templateUrl: './rpe.component.html',
  styleUrls: ['./rpe.component.css']
})
export class RpeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.value.estimatedMax == 0) { /* If nothing as been entered no action needed */

    }
    else{
      const E1RM = parseInt(ngForm.form.value.estimatedMax);
      const table = document.getElementById('rpeScaleTable') as HTMLTableElement | null;
      /* RPE 10 */
      table.rows[1].cells[1].innerHTML = String(E1RM);
      table.rows[1].cells[2].innerHTML =  String(Math.round((E1RM*2.205 + Number.EPSILON)*100)/100); /* All throughout this js page this same formula is used to round at 2 decimals */
      /* RPE 9.5 */
      table.rows[2].cells[1].innerHTML = String(Math.round((E1RM*0.978 + Number.EPSILON)*100)/100);
      table.rows[2].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.978 + Number.EPSILON)*100)/100);
      /* RPE 9 */
      table.rows[3].cells[1].innerHTML = String(Math.round((E1RM*0.955 + Number.EPSILON)*100)/100);
      table.rows[3].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.955 + Number.EPSILON)*100)/100);
      /* RPE 8.5 */
      table.rows[4].cells[1].innerHTML = String(Math.round((E1RM*0.939 + Number.EPSILON)*100)/100);
      table.rows[4].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.939 + Number.EPSILON)*100)/100);
      /* RPE 8 */
      table.rows[5].cells[1].innerHTML = String(Math.round((E1RM*0.922 + Number.EPSILON)*100)/100);
      table.rows[5].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.922 + Number.EPSILON)*100)/100);
      /* RPE 7.5 */
      table.rows[6].cells[1].innerHTML = String(Math.round((E1RM*0.907 + Number.EPSILON)*100)/100);
      table.rows[6].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.907 + Number.EPSILON)*100)/100);
      /* RPE 7 */
      table.rows[7].cells[1].innerHTML = String(Math.round((E1RM*0.892 + Number.EPSILON)*100)/100);
      table.rows[7].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.892 + Number.EPSILON)*100)/100);
      /* RPE 6.5 */
      table.rows[8].cells[1].innerHTML = String(Math.round((E1RM*0.878 + Number.EPSILON)*100)/100);
      table.rows[8].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.878 + Number.EPSILON)*100)/100);
      /* RPE 6 */
      table.rows[9].cells[1].innerHTML = String(Math.round((E1RM*0.864 + Number.EPSILON)*100)/100);
      table.rows[9].cells[2].innerHTML = String(Math.round((E1RM*2.205*0.864 + Number.EPSILON)*100)/100);

      document.getElementById('rpeScaleTable').style.display = 'block';
    }
  }

}
