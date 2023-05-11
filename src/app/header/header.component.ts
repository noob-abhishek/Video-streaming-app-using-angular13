import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formModal: any;
  ngOnInit(): void {


  }
openModel(){
  const modelDiv =document.getElementById('exampleModal');
  if (modelDiv!=null){
    modelDiv.style.display = 'block'
  }

}
closeModel(){
  const modelDiv =document.getElementById('exampleModal');
  if (modelDiv!=null){
    modelDiv.style.display = 'none'
  }

}

}
