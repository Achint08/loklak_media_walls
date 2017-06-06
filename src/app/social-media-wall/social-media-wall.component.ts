import { Component,
					OnInit, AfterViewInit, OnDestroy,
					ChangeDetectionStrategy, ElementRef, HostListener } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import * as transitions from './social-media-wall.transition';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as apiAction from '../actions/api';

import { ApiResponse, ApiResponseMetadata, ApiResponseResult, ApiResponseAggregations } from '../models/api-response';
import { Query, ReloactionAfterQuery } from '../models/query';


type Orientation = ( 'prev' | 'next' | 'none' );

@Component({
	selector: 'app-social-media-wall',
	// animations: [transitions.slidetoRight, transitions.slidetoLeft],
	templateUrl: './social-media-wall.component.html',
	styleUrls: ['./social-media-wall.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaWallComponent implements OnInit, AfterViewInit, OnDestroy {
	private __subscriptions__: Subscription[] = new Array<Subscription>();
	public _queryControl: FormControl = new FormControl();
	public query$: Observable<Query>;
	public isSearching$: Observable<boolean>;
	public areResultsAvailable$: Observable<boolean>;
	public apiResponseResults$: Observable<ApiResponseResult[]>;
	public index = 12;
	public orientation: Orientation = 'none';
	public state = 1;

	constructor(
		private store: Store<fromRoot.State>
		// private changeDetectorRef: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.getDataFromStore();
	}

	ngAfterViewInit() {
		// this.focusTextbox();
	}

	/**
	 * Getting the data(Observables) from store into the component.
	 */
	private getDataFromStore(): void {
		this.query$ = this.store.select(fromRoot.getSearchQuery);
		this.isSearching$ = this.store.select(fromRoot.getSearchLoading);
		this.areResultsAvailable$ = this.store.select(fromRoot.getAreResultsAvailable);
		this.apiResponseResults$ = this.store.select(fromRoot.getApiResponseEntities);
	}


	private changestate(event) {
		console.log(event);
		this.state = event;
	}


	/**
	 * Clearup all the subscription when component is destroyed.
	 */
	ngOnDestroy() {
		this.__subscriptions__.forEach(subscription => subscription.unsubscribe());
	}

}
