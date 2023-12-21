import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import bmiData from './bmi.json';

interface BMI {
  id:Number;
  category:String;
  bmi:String;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BMI Calculator';
  bmi:BMI[]=bmiData;
}
