import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = SignupPage;
  constructor() {

  }
}
