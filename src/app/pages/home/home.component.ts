import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/home/navigation/navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NavigationComponent]
})
export class HomeComponent {}
