import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss']
})
export class NewsletterSectionComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  errors = new Array<any>();

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  onClickSubmit() {
    if(this.contactForm.invalid){
      this.processValidationErrors();
      return;
    }

    let item = this.contactForm.value;

    /* this.mainService.sendContact(item).subscribe(res => {}); */

    this.errors = [];
    this.contactForm.reset();

    this._snackBar.open("Your message has been sent successfully", '', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: 'snackbar_success'
    });
  }

  processValidationErrors() {
    this.errors = new Array<any>();

    Object.keys(this.contactForm.controls).forEach(key => {

      let elementErrors: ValidationErrors|null = this.contactForm.get(key)!.errors;
      if (elementErrors) {
        Object.keys(elementErrors).forEach(keyError => {
          this.errors.push({
            'control': key,
            'error': keyError
          });
        });
      }
    });
  }
}
