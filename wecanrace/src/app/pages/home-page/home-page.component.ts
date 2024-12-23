import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';

@Component({
  selector: 'app-home-page',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    LoginComponent,
    RegisterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  message: string = 'Please login to continue';

  onTabChange(index: number): void {
    if (index === 0) {
      this.message = 'Please login to continue';
    } else if (index === 1) {
      this.message = 'Please register to login';
    }
  }
}
