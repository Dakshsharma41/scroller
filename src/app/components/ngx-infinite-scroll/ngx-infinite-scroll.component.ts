import { Component, OnInit } from '@angular/core';
import { PaginationDummyService } from '../../services/pagination-dummy.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-ngx-infinite-scroll',
  standalone: true,
  imports: [InfiniteScrollModule],
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrl: './ngx-infinite-scroll.component.css'
})
export class NgxInfiniteScrollComponent implements OnInit {
  items:string[]=[];
  isLoading=false;
  currentPage=1;
  itemPerPage=10;

  toggleLoading= ()=>this.isLoading=!this.isLoading;

  loadData= ()=>{
    this.toggleLoading();
    this.paginatonService.getItems(this.currentPage,this.itemPerPage).subscribe({
      next:response=>this.items=response,
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
    })
  }



  constructor(private paginatonService:PaginationDummyService){}
  ngOnInit(): void {
   this.loadData();
  }

  appendData= ()=>{
    this.toggleLoading();
    this.paginatonService.getItems(this.currentPage,this.itemPerPage).subscribe({
      next:response=>this.items = [...this.items,...response],
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
    })
  }
onScroll= ()=>{
  this.currentPage++;
  this.appendData();
}
}
