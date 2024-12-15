import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpRequestService } from '../../service/http-request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // Definizione del FormGroup per il form di registrazione
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private httpRequest: HttpRequestService) {}

 
  onSubmit() {
    const formData = this.registerForm.value;

    // Controlla che le password combacino
    if (formData.password !== formData.repassword) {
      console.error('Le password non coincidono!');
      return;
    }

    console.log('Dati di registrazione:', formData);

   
    this.httpRequest.postRegister(formData).subscribe(
      (response) => {
        console.log('Registrazione avvenuta con successo:', response);
      },
      (error) => {
        console.error('Errore nella registrazione:', error);
      }
    );
  }
}