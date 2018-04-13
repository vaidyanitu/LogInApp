import { Component,AfterViewInit } from '@angular/core';
declare const gapi: any;
@Component({
  selector: 'glogin',
  template: `<div id="googleBtn">Google</div>`
})
export class GoogleLoginComponent implements AfterViewInit {
   auth2: any;
   googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '774590296620-bkeg0p6ojr85ljrl0vmsss8j9l9jos8h.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
   attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        //console.log('Token || ' + googleUser.getAuthResponse().id_token);
        //console.log('ID: ' + profile.getId());
        //console.log('Name: ' + profile.getName());
        //console.log('Image URL: ' + profile.getImageUrl());
        //console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }


  ngAfterViewInit() {
    this.googleInit();
  }
}
