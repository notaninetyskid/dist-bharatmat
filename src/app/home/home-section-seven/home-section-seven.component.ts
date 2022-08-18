import { Component, OnInit } from '@angular/core';
import { slideShowImage } from 'src/app/models/slideShowHomeOne.modal';
import { HomeSlideOneService } from 'src/app/services/home.slideOne.service';

@Component({
  selector: 'app-home-section-seven',
  templateUrl: './home-section-seven.component.html',
  styleUrls: ['./home-section-seven.component.css']
})
export class HomeSectionSevenComponent implements OnInit {


  slideShowSides: slideShowImage[] = []
  FirstSlideIndex: number;
  LastSlideIndex: number;
  constructor(private homeSlideShowService: HomeSlideOneService) { }

  ngOnInit() {
    this.slideShowSides = this.homeSlideShowService.getImages();
    this.homeSlideShowService.imageList.subscribe(slides => {
      this.slideShowSides = slides;
    })

    this.FirstSlideIndex = this.slideShowSides.indexOf(this.slideShowSides[0])
    this.LastSlideIndex = this.slideShowSides.length;
    console.log(this.slideShowSides[4]);
  }

  next() {
    this.homeSlideShowService.prevButton(this.FirstSlideIndex);
  }
  prev() {
    this.homeSlideShowService.nextButton(this.LastSlideIndex)
  }

}
