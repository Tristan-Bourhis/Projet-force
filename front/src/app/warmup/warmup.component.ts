import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.css']
})
export class WarmupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.value.weightSet==0){
    }

    else{
      const topSet = ngForm.form.value.weightSet
      const wuTable = document.getElementById('warmUpTable') as HTMLTableElement | null;
      /* These are the percentage to calculate the warm ups and they are a mix of personnal data and research */
      wuTable.rows[0].cells[1].innerHTML = topSet + " kg";
      wuTable.rows[2].cells[2].innerHTML = Math.round((topSet*0.45 + Number.EPSILON)*100)/100 + " kg";
      wuTable.rows[2].cells[3].innerHTML = Math.round((topSet*0.65 + Number.EPSILON)*100)/100 + " kg";
      wuTable.rows[2].cells[4].innerHTML = Math.round((topSet*0.75 + Number.EPSILON)*100)/100 + " kg";
      wuTable.rows[2].cells[5].innerHTML = Math.round((topSet*0.85 + Number.EPSILON)*100)/100 + " kg";
      wuTable.rows[2].cells[6].innerHTML = Math.round((topSet*0.93 + Number.EPSILON)*100)/100 + " kg";

      document.getElementById('warmUpTable').style.display = 'block';
    }

  }

}
