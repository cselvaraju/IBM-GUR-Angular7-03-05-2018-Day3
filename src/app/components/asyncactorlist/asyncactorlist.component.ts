import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncActorService } from '../../services/asyncactor.service';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-asyncactorlist',
  templateUrl: './asyncactorlist.component.html',
  styleUrls: ['./asyncactorlist.component.css']
})
export class AsyncactorlistComponent implements OnInit {

  actorlist: Actor[];

  constructor(private asyncActorService: AsyncActorService) { }

  ngOnInit() {
    this.asyncActorService.getActors().subscribe(
      (data) => {
        this.actorlist = data;
      }
    );
  }

}
