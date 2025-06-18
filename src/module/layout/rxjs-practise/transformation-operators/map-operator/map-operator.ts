import { Component, Inject, OnInit } from '@angular/core';
import { network_token, NetworkService } from '../../../../../common/service/network.service';
import { map, scan } from 'rxjs';
import { IMap, IMapDesc } from './models/map-operator.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-operator',
  imports: [CommonModule],
  templateUrl: './map-operator.html',
  styleUrl: './map-operator.css'
})
export class MapOperator implements OnInit {
  data!: IMapDesc[];
  constructor(@Inject(network_token) private network: NetworkService){}
  ngOnInit(): void {
    this.network.testGet<IMap[]>("https://api.sampleapis.com/codingresources/codingResources")
    .pipe(
      map((val: IMap[])=>{
        return val.map((item)=> ({ 
            id: item.id, 
            desc: item.description
          }))
      }),
      
    )
    .subscribe((data:IMapDesc[])=>{
      this.data = data;
    });
  }
}
