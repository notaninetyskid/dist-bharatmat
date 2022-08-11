import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  [x: string]: any;

  @ViewChild('minSlidePr', { static: true }) minSlidePr: ElementRef;
  @ViewChild('maxSlidePr', { static: true }) maxSlidePr: ElementRef;
  @ViewChild('progressBarStylePriceRange', { static: true }) progressBarStylePriceRange: ElementRef;


  @ViewChild('maxSlideDiscount', { static: true }) maxSlideDiscount: ElementRef;
  @ViewChild('minSlideDiscount', { static: true }) minSlideDiscount: ElementRef;
  @ViewChild('progressBarStyleDiscount', { static: true }) progressBarStyleDiscount: ElementRef;



  maxValuePr: number;
  minValuePr: number;

  minValueDiscount: number;
  maxValueDiscount: number;
  priceGapPr = 1000;
  priceGapDiscount = 30;

  constructor() { }

  ngOnInit() {
    let percentageOfMin = -1.5 + (this.minSlidePr.nativeElement.value / this.minSlidePr.nativeElement.max) * 100;
    this.progressBarStylePriceRange.nativeElement.style.left = percentageOfMin + '%';
    this.minValuePr = this.minSlidePr.nativeElement.value;


    let percentageOfMax = 101 - (this.maxSlidePr.nativeElement.value / this.maxSlidePr.nativeElement.max) * 100;
    this.progressBarStylePriceRange.nativeElement.style.right = percentageOfMax + '%';
    this.maxValuePr = this.maxSlidePr.nativeElement.value;

    let percentageOfMaxDiscount = 101 - (this.maxSlideDiscount.nativeElement.value / this.maxSlideDiscount.nativeElement.max) * 100;
    this.progressBarStyleDiscount.nativeElement.style.right = percentageOfMaxDiscount + '%'
    this.maxValueDiscount = this.maxSlideDiscount.nativeElement.value;

    let percentageOfMinDiscount = (this.minSlideDiscount.nativeElement.value / this.minSlideDiscount.nativeElement.max) * 100;
    this.progressBarStyleDiscount.nativeElement.style.left = percentageOfMinDiscount + '%'
    this.minValueDiscount = this.minSlideDiscount.nativeElement.value;
  }


  ChangingWidthOfLeftPriceRange(e: Event) {

    if (this.maxSlidePr.nativeElement.value - this.minSlidePr.nativeElement.value < this.priceGapPr) {
      this.minSlidePr.nativeElement.value = this.maxSlidePr.nativeElement.value - this.priceGapPr
    };
    this.minValuePr = this.minSlidePr.nativeElement.value;
    let percentageOfMin = (this.minSlidePr.nativeElement.value / this.minSlidePr.nativeElement.max) * 100;
    this.progressBarStylePriceRange.nativeElement.style.left = percentageOfMin - 1.5 + '%';

  }

  onChangingWidthOfRightPriceRange(e: Event) {
    if (this.maxSlidePr.nativeElement.value - this.minSlidePr.nativeElement.value <= this.priceGapPr) {
      this.maxSlidePr.nativeElement.value = +this.minSlidePr.nativeElement.value + +this.priceGapPr;
    };
    this.maxValuePr = this.maxSlidePr.nativeElement.value;
    let percentageOfMax = 101 - (this.maxSlidePr.nativeElement.value / this.maxSlidePr.nativeElement.max) * 100;
    this.progressBarStylePriceRange.nativeElement.style.right = percentageOfMax + '%';

  }

  ChangingWidthOfRightDiscount(e: Event) {
    if (this.maxSlideDiscount.nativeElement.value - this.minSlideDiscount.nativeElement.value < this.priceGapDiscount) {
      this.maxSlideDiscount.nativeElement.value = +this.minSlideDiscount.nativeElement.value + +this.priceGapDiscount
    };
    this.maxValueDiscount = this.maxSlideDiscount.nativeElement.value;
    let percentageOfMaxDiscount = 101 - (this.maxSlideDiscount.nativeElement.value / this.maxSlideDiscount.nativeElement.max) * 100;
    this.progressBarStyleDiscount.nativeElement.style.right = percentageOfMaxDiscount + '%'

  }

  ChangingWidthOfLeftDiscount(e: Event) {
    if (this.maxSlideDiscount.nativeElement.value - this.minSlideDiscount.nativeElement.value < this.priceGapDiscount) {
      this.minSlideDiscount.nativeElement.value = +this.maxSlideDiscount.nativeElement.value - +this.priceGapDiscount
    };
    this.minValueDiscount = this.minSlideDiscount.nativeElement.value;
    let percentageOfMinDiscount = (this.minSlideDiscount.nativeElement.value / this.minSlideDiscount.nativeElement.max) * 100;
    this.progressBarStyleDiscount.nativeElement.style.left = percentageOfMinDiscount + '%'


  }





  // onChangingWidth(e: Event) {
  //   if( this.maxSlide.nativeElement.value - this.minSlide.nativeElement.value < this.priceGap) {
  //     this.minSlide.nativeElement.value = +this.maxSlide.nativeElement.value - +this.priceGap
  //     this.maxSlide.nativeElement.value = +this.minSlide.nativeElement.value + +this.priceGap
  //   };
  //   console.log(this.minSlide.nativeElement.value);
  //   console.log(this.maxSlide.nativeElement.value);


  //   let percentageOfMax = 101 - (this.maxSlide.nativeElement.value / this.maxSlide.nativeElement.max) * 100;
  //   let percentageOfMin = (this.minSlide.nativeElement.value / this.minSlide.nativeElement.max) * 100;

  //   this.progressBarStyle.nativeElement.style.right = percentageOfMax + '%';
  //   this.progressBarStyle.nativeElement.style.left = percentageOfMin - 1.5 + '%';



  // }


}
