import { Component, OnInit } from '@angular/core';
import { reviewHolders } from 'src/app/models/review.modal';
import { HomeSlideNineService } from 'src/app/services/home.slideNine.service';

@Component({
  selector: 'app-home-section-nine',
  templateUrl: './home-section-nine.component.html',
  styleUrls: ['./home-section-nine.component.css']
})
export class HomeSectionNineComponent implements OnInit {

  constructor(private reviewSlide: HomeSlideNineService) { }

  reviews: reviewHolders[] = []

  ngOnInit() {
    this.reviews = this.reviewSlide.getReviews();
  }


}
