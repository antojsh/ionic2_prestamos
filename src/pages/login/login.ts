import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth.service'
import { SessionService } from '../../services/session.service'
import { RegisterPage } from '../register/register';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  email : string =''
  password : string =''
  constructor(public navCtrl: NavController, public authService: AuthService, public session : SessionService) {}

  ionViewDidLoad() {
    //this.ilogin ={email: 'antoniojsh93@gmail.com', password:'123456'}
  }
  login(){
    
    //this.navCtrl.setRoot(TabsPage);
      this.authService.login(this.email,this.password).subscribe(
          data => {
              this.session.set_session(data.token)
              this.navCtrl.setRoot(TabsPage);
          },
          err => {
              alert(err);
          },
          () => console.log('Movie Search Complete')
      );
  }

  go_to_register(){
    this.navCtrl.setRoot(RegisterPage);
  }


}
