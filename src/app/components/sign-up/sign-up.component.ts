import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService:AuthServiceService
  ) { }

  ngOnInit(): void {
  }

}
