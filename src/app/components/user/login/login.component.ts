import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { ServerService } from '../../../servicios/server.service';



@Component({
  selector: 'mail-error',
  templateUrl: 'mail-error.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class MailErrorComponent {}

@Component({
  selector: 'no-pass',
  templateUrl: 'no-pass.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class NoPassComponent {}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(public snackBar: MatSnackBar, private http: ServerService, private router: Router) {}

  mailMal() {
    /*this.snackBar.open(msn,icono, {
      duration: 2000,
    });*/
    this.snackBar.openFromComponent(MailErrorComponent, {
      duration: 1000,
    });
  }

  noPass() {
    /*this.snackBar.open(msn,icono, {
      duration: 2000,
    });*/
    this.snackBar.openFromComponent(NoPassComponent, {
      duration: 1000,
    });
  }

  ngOnInit() {
  }


  Logearse() {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(this.email)) {
      if (this.password) {
        this.router.navigate(['/inicio']);
        localStorage.setItem('Token', '');
        if (this.password) {
          this.http.LogIn(this.email, this.password).subscribe(data => {
            console.log(data);
            localStorage.setItem('Token', data['token']);
            this.router.navigate(['/inicio']);
          }, err => {});
        }
      } else {
        this.noPass();
      }
    } else {
      this.mailMal();
    }

   }

}
