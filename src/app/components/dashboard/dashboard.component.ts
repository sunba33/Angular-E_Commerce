import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService:AuthServiceService
  ) { }

  ngOnInit(): void {
  }

}
