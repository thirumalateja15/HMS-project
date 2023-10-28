import { Component } from '@angular/core';

@Component({
  selector: 'app-hack',
  templateUrl: './hack.component.html',
  styleUrls: ['./hack.component.css']
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
      msgDescription: 'Message Description 1'
    },
    {
      icon: 'assets/codecrafters.jpg',
      teamName: 'Code Crafters',
      review: 'Review 2',
      msgDescription: 'Message Description 2'
    },
    {
      icon: 'assets/codered.jpg',
      teamName: 'Code Red',
      review: 'Impressive work by Team Alpha! They have a promising project in the making.',
      msgDescription: 'Our team is working on a groundbreaking app that will revolutionize the healthcare industry.'
    },
    {
      icon: 'assets/codetechs.jpg',
      teamName: 'Code Tech',
      review: 'Code Wizards are showing remarkable creativity and innovation.',
      msgDescription: 'We are building a platform for connecting eco-conscious consumers with sustainable products and services.'
    },
    {
      icon: 'assets/news360.jpg',
      teamName: 'News 360',
      review: 'Tech Innovators have a unique approach to problem-solving.',
      msgDescription: 'We are developing an AI-driven virtual assistant that will simplify your daily tasks and enhance productivity.'
    },
    {
      icon: 'assets//powerhouse.jpg',
      teamName: 'Power House',
      review: 'Data Pioneers are making data science look easy!',
      msgDescription: 'Our project aims to analyze climate data and provide insights for sustainable farming practices.'
    },
    {
      icon: 'assets/raisers.jpg',
      teamName: 'Raisers',
      review: 'Data Pioneers are making data science look easy!',
      msgDescription: 'Our project aims to analyze climate data and provide insights for sustainable farming practices.'
    }
  ];
  teamChat = []
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
