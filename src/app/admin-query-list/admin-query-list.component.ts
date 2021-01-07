import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminQueryListService } from './admin-query-list.service';

@Component({
  selector: 'app-admin-query-list',
  templateUrl: './admin-query-list.component.html',
  styleUrls: ['./admin-query-list.component.css']
})
export class AdminQueryListComponent implements OnInit {
  
  customerQueryList: any[] = [];
  constructor(private adminquery: AdminQueryListService) { }

  ngOnInit(): void {
    this.adminquery.getCustomerQuery(null).subscribe(
      (resp: any) => {
      this.customerQueryList = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );;
  }
  }

