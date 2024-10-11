import { Component, OnInit } from '@angular/core'
import { TechnicalSupportService } from '../services/technical-support.service'

@Component({
  selector: 'ns-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.css']
})
export class TechnicalSupportComponent implements OnInit {
  knowledgebaseItems: any[]

  constructor(private technicalSupportService: TechnicalSupportService) {}

  ngOnInit() {
    this.knowledgebaseItems = this.technicalSupportService.getKnowledgebaseItems()
  }

  openSharePointPage(item: any) {
    // Implement opening SharePoint page
    console.log('Opening SharePoint page:', item.title)
  }
}