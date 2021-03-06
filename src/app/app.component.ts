import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'TabsPage';

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              translateService: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // This language will be used as a fallback when a translation
      // isn't found in the current language.
      translateService.setDefaultLang('en');
      // The lang to use, if the lang isn't available, it will use
      // the current loader to get them.
      translateService.use('en');
    });
  }
}
