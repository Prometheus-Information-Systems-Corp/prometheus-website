import { Component } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Prometheus';

  ngOnInit() {
    this.introduction();
  }

  ngAfterViewInit() {
    this.loadParticles();
  }

  loadParticles(){
    particlesJS.load('particles-js', './assets/particlesjs-config.json', function() {
    });
  }

  introduction(){
    console.log("\n\nWelcome to Prometheus Information Systems Corp.\n\nWe are doing more than just making websites. We are working to make the internet and the world a better place by putting control over the technology we use every day into the hands of the people using it. For too long, the gods of Silicon Valley have been the gatekeepers of the world's knowledge. They take ownership of our personal data to grow their power and use their power to try to control history and the minds of men. We are standing up to them. If you have a desire to help us in this battle to free minds, join us in our chats and social media.\n\n");

    console.log("\n\n"+'"'+"It is stern work , it is perilous work, to thrust your hand in the sun And pull out a spark of immortal flame to warm the hearts of men: But Prometheus, torn by the claws and beaks whose task is never done, Would be tortured another eternity to go stealing fire again."+'"'+"\n\n-Joyce Kilmer in 'The Proud Poet' in Main Street and Other Poems (1917)\n\n")    
  }

}
