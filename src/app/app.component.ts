import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  firstClick = false;
  currentPosition = 0;
  @ViewChild('circle',{static:false}) circleRef:any;
  myInterval : any;
  count : number = 9;

  constructor(){

  }

  itemClick(){
    this.count++;
    clearInterval(this.myInterval);
    //alert('Hello')
    if(!this.firstClick){
      this.circleRef.nativeElement.style.left = 0 + 'px';
      this.circleRef.nativeElement.style.top = 0 + 'px';
      this.currentPosition = 0;
      this.firstClick = true;
      this.myInterval = setInterval(()=>{
        this.moveNext()
    },500)
    }else{
      this.myInterval = setInterval(()=>{
        this.moveNext()
    },500)
    }
  }

  moveNext(){
    //this.currentPosition = this.getRandomNumer();
    console.log(this.currentPosition)
    if(this.currentPosition == 0){
      this.circleRef.nativeElement.style.left = 197 + 'px';
      this.currentPosition = 1;
    }else if(this.currentPosition == 1){
      this.circleRef.nativeElement.style.top = 197 + 'px';
      this.currentPosition = 2;
    }else if(this.currentPosition == 2){
      this.circleRef.nativeElement.style.left = 0 + 'px';
      this.currentPosition = 3;
    }else if(this.currentPosition == 3){
      this.circleRef.nativeElement.style.top = 0 + 'px';
      this.currentPosition = 0;
    }
  }


  getRandomNumer(){
    return (Math.floor(Math.random() * 10) % 4);
  }

}
