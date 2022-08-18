import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-become-a-dealer',
  templateUrl: './become-a-dealer.component.html',
  styleUrls: ['./become-a-dealer.component.css']
})
export class BecomeADealerComponent implements OnInit {
  constructor() { }
  DealerForm = new FormGroup({
    firmName: new FormControl(null, Validators.required),
    contactPerson: new FormControl(null, Validators.required),
    mobileNumberOne: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    mobileNumberTwo: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    landLineNumber: new FormControl(null, Validators.maxLength(10)),
    gstIn: new FormControl(null),
    aadharCardCopy: new FormControl(null, Validators.required),
    shopPhoto: new FormControl(null, Validators.required),
    gstInCopy: new FormControl(null, Validators.required),
    panCardNumberAndCopy: new FormControl(null, Validators.required),
    fullAddress: new FormControl(null, Validators.required),
    googleMapLocation: new FormControl(null, Validators.required)
  })


  ngOnInit() {
    this.DealerForm.get('aadharCardCopy').disable();
    this.DealerForm.get('shopPhoto').disable();
    this.DealerForm.get('gstInCopy').disable();
    this.DealerForm.get('panCardNumberAndCopy').disable();
  }

  onSubmit() {

  }
}
