import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
