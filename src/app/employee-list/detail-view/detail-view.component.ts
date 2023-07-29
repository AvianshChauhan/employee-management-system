import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
 
  constructor (private route: ActivatedRoute,
    private service:DataServiceService) {}
  employee:any;
  ngOnInit() {
    
    const employeeId = this.route.snapshot.paramMap.get('id');
    this.employee = this.service.getSingleEmployee(employeeId);
   
  }
}

