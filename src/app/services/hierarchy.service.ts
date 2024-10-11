import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {
  getEmployeeHierarchy() {
    // Mock data, replace with actual API call
    return `
      @startuml
      skinparam monochrome true
      skinparam shadowing false
      
      rectangle CEO
      rectangle "VP Marketing" as VPM
      rectangle "VP Engineering" as VPE
      rectangle "VP HR" as VPHR
      
      CEO --> VPM
      CEO --> VPE
      CEO --> VPHR
      @enduml
    `
  }

  getCustomerHierarchy() {
    // Mock data, replace with actual API call
    return `
      @startuml
      skinparam monochrome true
      skinparam shadowing false
      
      rectangle "Customer A" as CA
      rectangle "Customer B" as CB
      rectangle "Customer C" as CC
      
      CA --> "Project 1"
      CA --> "Project 2"
      CB --> "Project 3"
      CC --> "Project 4"
      CC --> "Project 5"
      @enduml
    `
  }
}