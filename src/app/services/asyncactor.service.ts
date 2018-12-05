import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncActorService {

  actors: Actor[];

  constructor() {
  }

  getActors(): Observable<Actor[]> {
    return new Observable(observer => {
        setTimeout(() => {
            this.actors = [
                { name: 'Amitabh Bachhan', city: 'Mumbai' },
                { name: 'Priyanka Chopra', city: 'New Delhi' },
                { name: 'Denzel Washington', city: 'Hollywood' }
            ];
            observer.next(this.actors);
        }, 5000);
    });
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
  }

  deleteActor(ndx: number) {
    this.actors.splice(ndx, 1);
  }

  updateActor(ndx: number, newActor: Actor) {
    this.actors.splice(ndx, 1, newActor);
  }
}
