import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { slideShowImage } from "../models/slideShowHomeOne.modal";

@Injectable({ providedIn: 'root' })

export class HomeSlideOneService {

  imageList = new Subject<slideShowImage[]>();
  private images: slideShowImage[] = [
    new slideShowImage(
      'assets/images/home_images/Rectangle 21 (1).png',
      'Any Random Video',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    ),
    new slideShowImage(
      'assets/images/home_images/Rectangle 21 (1).png',
      'Any Random Video',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    ),
    new slideShowImage(
      'assets/images/home_images/Rectangle 21 (1).png',
      'Any Random Video',
      'lorem ipsumd defahsfkuahbfkqhvfhlhf'
    )
  ];

  getImages() {
    // this.imageList.next(this.images);
    return this.images.slice();
  }


}
