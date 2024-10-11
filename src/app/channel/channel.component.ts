import { Component, OnInit } from '@angular/core'
import { ChannelService } from '../services/channel.service'

@Component({
  selector: 'ns-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  channels: any[]

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.channels = this.channelService.getChannels()
  }

  openTeamsChannel(channel: any) {
    // Implement opening Microsoft Teams channel
    console.log('Opening Teams channel:', channel.name)
  }
}