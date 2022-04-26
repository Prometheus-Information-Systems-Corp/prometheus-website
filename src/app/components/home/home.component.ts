import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass', './logo.sass']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
    this.consoleText();
  }

  consoleText() {
      var words = 'Defying the digital authority';
      var id = 'console-text';
      var visible = true;
      var con = document.getElementById('console-cursor');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
          waiting = true;
          // @ts-ignore: Object is possibly 'null'.
          target.innerHTML = words.substring(0, letterCount)
          window.setTimeout(function() {
            x = 1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          // @ts-ignore: Object is possibly 'null'.
          target.innerHTML = words.substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      
      
      window.setInterval(function() {
        if (visible === true) {
          // @ts-ignore: Object is possibly 'null'.
          con.className = 'console-underscore hidden'
          visible = false;
        } else {
          // @ts-ignore: Object is possibly 'null'.
          con.className = 'console-underscore'
          visible = true;
        }
      }, 400)
    }

}
