import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/guards/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private readonly _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.accessToken = 'true';
    const redirectURL =
      this._activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
      '/';
    // Navigate to the redirect url
    this.router.navigateByUrl(redirectURL);
  }
}
