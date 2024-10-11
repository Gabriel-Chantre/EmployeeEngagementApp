import { Component, OnInit } from '@angular/core'
import { HierarchyService } from '../services/hierarchy.service'

@Component({
  selector: 'ns-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {
  employeeHierarchy: string
  customerHierarchy: string

  constructor(private hierarchyService: HierarchyService) {}

  ngOnInit() {
    this.employeeHierarchy = this.hierarchyService.getEmployeeHierarchy()
    this.customerHierarchy = this.hierarchyService.getCustomerHierarchy()
  }
}