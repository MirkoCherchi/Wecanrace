import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-home-page',
  imports: [ MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
