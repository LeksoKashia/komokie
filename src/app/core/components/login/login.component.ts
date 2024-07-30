import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      (err) => {
        this.errorMessage = err.code;
      }
    );
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle().subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      (err) => {
        this.errorMessage = err.code;
      }
    );
  }

  loginAnonymously(): void {
    this.authService.loginAnonymously().subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      (err) => {
        this.errorMessage = err.code;
      }
    );
  }
}