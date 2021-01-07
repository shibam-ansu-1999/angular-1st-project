import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerFromService } from './customer-from.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { AdminQueryListComponent } from '../admin-query-list/admin-query-list.component';
import { AdminQueryListService } from '../admin-query-list/admin-query-list.service';



@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(private query: CustomerFromService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(queryForm) {
    let values = queryForm.value;
    this.query.addCustomerQuery(values).subscribe((result) => {
      console.log(result);
    })
  }
  // customerQueryList: any[] = [];
  getCustomerQuery() {
    this.router.navigate([`/admin-query-list`]);

}
}

