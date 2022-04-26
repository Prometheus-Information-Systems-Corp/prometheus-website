import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  userAttribute: string;
  domainAttribute: string;
  elementAttribute: string;


  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";

    this.userAttribute = "";
    this.domainAttribute = "";
    this.elementAttribute = "";    
  }

  ngOnInit(): void {
    this.showEmail("contact", "prometheus.systems", "contact-email");
    this.showEmail("support", "prometheus.systems", "support-email");    
  }

  processForm() {
    const allInfo = `Name = ${this.name} \nEmail = ${this.email} \nMessage = ${this.message}`;
    alert("This contact form is just a dummy and currently isn't hooked up to the email server. If you would like to email us, send a message to contact@prometheus.systems \n\nYour info is: \n" + allInfo); 
  }

  showEmail(userAttribute: any, domainAttribute: any, elementAttribute: any){
  var user = userAttribute,
      domain = domainAttribute,
      element = document.getElementById(elementAttribute)!;

      element.innerHTML = user + '@' + domain;    
  }
}
