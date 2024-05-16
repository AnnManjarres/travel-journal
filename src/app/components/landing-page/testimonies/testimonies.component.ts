import { Component } from '@angular/core';
import { TestimonyI } from '../../../interfaces/testimony.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonies.component.html',
  styleUrl: './testimonies.component.css'
})
export class TestimoniesComponent {


  testimonies:TestimonyI[] = [
    {image: '/assets/images/woman-1.jpg', name: 'Elizabeth Smith', text: "Every single time I plan a new holiday, I make sure to get the best tips from the place I'm going to, and this website always has the best info!", tag: ["photography", "travel", "profile"]},
    {image: '/assets/images/man-1.jpg', name: 'John Doe', text: "Every single time I plan a new holiday, I make sure to get the best tips from the place I'm going to, and this website always has the best info!", tag: ["travel", "profile"]},
    {image: '/assets/images/woman-2.jpg', name: 'Elizabeth Smith', text: "Every single time I plan a new holiday, I make sure to get the best tips from the place I'm going to, and this website always has the best info!", tag: ["photography", "travel", "profile"]}

  ]
}
