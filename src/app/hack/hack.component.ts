import { Component } from '@angular/core';

@Component({
  selector: 'app-hack',
  templateUrl: './hack.component.html',
  styleUrls: ['./hack.component.css'],
})
export class HackComponent {
  hours: number = 24;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: any;
  isDropdownOpen = false;
  posts = [
    {
      icon: 'assets/codechefs.jpg',
      teamName: 'Code chefs',
      review: 'Review 1',
      msgDescription:
        'We are building a platform for connecting eco-conscious consumers with sustainable products and services.',
    },
    {
      icon: 'assets/codecrafters.jpg',
      teamName: 'Code Crafters',
      review: 'Review 2',
      msgDescription:
        'We are developing an AI-driven virtual assistant that will simplify your daily tasks and enhance productivity.',
    },
    {
      icon: 'assets/codered.jpg',
      teamName: 'Code Red',
      review:
        'Impressive work by Team Alpha! They have a promising project in the making.',
      msgDescription:
        'Our team is working on a groundbreaking app that will revolutionize the healthcare industry.',
    },
    {
      icon: 'assets/codetechs.jpg',
      teamName: 'Code Tech',
      review: 'Code Wizards are showing remarkable creativity and innovation.',
      msgDescription:
        'We are building a platform for connecting eco-conscious consumers with sustainable products and services.',
    },
    {
      icon: 'assets/news360.jpg',
      teamName: 'News 360',
      review: 'Tech Innovators have a unique approach to problem-solving.',
      msgDescription:
        'We are developing an AI-driven virtual assistant that will simplify your daily tasks and enhance productivity.',
    },
    {
      icon: 'assets//powerhouse.jpg',
      teamName: 'Power House',
      review: 'Data Pioneers are making data science look easy!',
      msgDescription:
        'Our project aims to analyze climate data and provide insights for sustainable farming practices.',
    },
    {
      icon: 'assets/raisers.jpg',
      teamName: 'Raisers',
      review: 'Data Pioneers are making data science look easy!',
      msgDescription:
        'Our project aims to analyze climate data and provide insights for sustainable farming practices.',
    },
  ];
  teamChat = [
    {
      sender: 'Rani',
      message:
        "Hey everyone, I'm excited to start our new image recognition project!",
    },
    {
      sender: 'Raghu',
      message:
        "Absolutely! I think it's a fascinating venture. Where do we begin?",
    },
    {
      sender: 'Bhanu',
      message:
        'We should outline the primary objectives and gather the necessary datasets first.',
    },
    {
      sender: 'Rani',
      message:
        "Agreed. I've been looking into some image databases that might serve our purpose.",
    },
    {
      sender: 'Raghu',
      message: "That's great, Rani. What types of images are we focusing on?",
    },
    {
      sender: 'Bhanu',
      message:
        'I believe we should start with common objects and then move on to more complex scenes.',
    },
    {
      sender: 'Rani',
      message:
        'Makes sense. We can set milestones to track our progress as we tackle different complexities.',
    },
    {
      sender: 'Raghu',
      message:
        'Should we consider a specific machine learning algorithm for this project?',
    },
    {
      sender: 'Bhanu',
      message:
        "Let's research various algorithms and choose the most suitable based on accuracy and efficiency.",
    },
    {
      sender: 'Rani',
      message:
        'We could also look into transfer learning to leverage pre-existing models.',
    },
  ];
  
  showReviewPopup = false;
  selectedPost: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        clearInterval(this.intervalId);
      } else {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            this.hours--;
            this.minutes = 59;
          } else {
            this.minutes--;
          }
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      }
    }, 1000);
  }

  openReviewPopup(post: any) {
    this.selectedPost = post;
    this.showReviewPopup = true;
  }

  closeReviewPopup() {
    this.selectedPost = null;
    this.showReviewPopup = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
