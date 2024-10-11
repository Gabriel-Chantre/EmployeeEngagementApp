import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  currentQuestion = 0
  questions = [
    'What is your preferred work style?',
    'What are your career goals?',
    'How do you like to receive feedback?'
  ]

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {}

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++
    } else {
      this.routerExtensions.navigate(['/channels'], { clearHistory: true })
    }
  }
}