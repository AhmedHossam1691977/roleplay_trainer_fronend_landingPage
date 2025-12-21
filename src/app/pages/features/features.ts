import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.html',
  styleUrls: ['./features.scss']
})
export class Features {
  features = [
    {
      icon: 'bi-stars',
      title: 'AI-Powered Scenarios',
      description: 'Generate realistic training scenarios using advanced AI technology.'
    },
    {
      icon: 'bi-chat-dots',
      title: 'Natural Conversations',
      description: 'Engage in fluid, natural dialogues with AI characters.'
    },
    {
      icon: 'bi-bar-chart',
      title: 'Performance Analytics',
      description: 'Track progress with detailed metrics and insights.'
    },
    {
      icon: 'bi-clock',
      title: '24/7 Availability',
      description: 'Practice anytime, anywhere at your convenience.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Secure & Private',
      description: 'Enterprise-grade security for your data protection.'
    },
    {
      icon: 'bi-lightning',
      title: 'Instant Feedback',
      description: 'Get actionable feedback instantly after each session.'
    }
  ];
}