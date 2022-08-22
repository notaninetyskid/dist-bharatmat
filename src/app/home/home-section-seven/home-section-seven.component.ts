import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { slideShowImage } from 'src/app/models/slideShowHomeOne.modal';
import { HomeSlideOneService } from 'src/app/services/home.slideSeven.service';

@Component({
  selector: 'app-home-section-seven',
  templateUrl: './home-section-seven.component.html',
  styleUrls: ['./home-section-seven.component.css']
})
export class HomeSectionSevenComponent implements OnInit {


  slideShowSides: slideShowImage[] = []
  FirstSlideIndex: number;
  LastSlideIndex: number;
  secondOne: boolean;
  constructor(private homeSlideShowService: HomeSlideOneService, private renderer: Renderer2) { }

  @ViewChild('slideShowClass') slideShowClass: ElementRef;

  ngOnInit() {
    this.slideShowSides = this.homeSlideShowService.getImages();
    this.homeSlideShowService.imageList.subscribe(slides => {
      this.slideShowSides = slides;
    });
    this.FirstSlideIndex = this.slideShowSides.indexOf(this.slideShowSides[0])
    this.LastSlideIndex = this.slideShowSides.length;

    //   console.log(this.renderer.addClass(this.slideShowSides[1], `centerOne`))

    // for(let slide of this.slideShowSides) {
    //   console.log(this.slideShowSides[1]);
    // }


  }

  next() {
    this.homeSlideShowService.prevButton(this.FirstSlideIndex);
  }
  prev() {
    this.homeSlideShowService.nextButton(this.LastSlideIndex)
  }

}
