import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {


    // const script = this.renderer.createElement('script')
    // script.src = '../../assets/javaScripts/javScriptForcarouselHome.js'
    // this.renderer.appendChild(document.head, script)
  };



}




