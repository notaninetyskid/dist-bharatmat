import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { slideShowImage } from "../models/slideShowHomeOne.modal";

@Injectable({ providedIn: 'root' })

export class HomeSlideOneService {

  imageList = new Subject<slideShowImage[]>();
  private images: slideShowImage[] = [
    new slideShowImage(
      '../../assets/images/home_images/Rectangle 1419.png',
      'Zero',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    ),
    new slideShowImage(
      '../../assets/images/home_images/Rectangle 1419.png',
      'One',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    ),
    new slideShowImage(
      '../../assets/images/home_images/Rectangle 1419.png',
      'Two',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    ),
    new slideShowImage(
      '../../assets/images/home_images/Rectangle 1419.png',
      'Three',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    ),
    new slideShowImage(
      '../../assets/images/home_images/Rectangle 1419.png',
      'Four',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    )
  ];

  getImages() {
    return this.images.slice();
  }

  prevButton(index: number) {
    this.images.push(this.images.splice(index, 1)[0]);
    this.imageList.next(this.images.slice());
  }

  nextButton(index: number) {
    let justTosee = this.images.unshift(this.images.splice(index-1, 1)[0])
    console.log(justTosee)
    this.imageList.next(this.images.slice());
  }
}
