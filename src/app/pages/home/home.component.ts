import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../../components/home/login/login.component';
import { NavigationComponent } from '../../components/home/navigation/navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [LoginComponent, NavigationComponent]
})
export class HomeComponent {
  message = '';

  constructor(private http: HttpClient) { }
}
