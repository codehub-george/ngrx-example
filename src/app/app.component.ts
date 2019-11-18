import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './reducers';
import { show } from './loader/loader.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-example';
  load$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.load$ = store.pipe(select('loader'));
  }

  ngOnInit(): void {
    // this.store.dispatch({
    //   type: '[Loader Component] Show'
    // });

    this.store.dispatch(show());

  }
}
