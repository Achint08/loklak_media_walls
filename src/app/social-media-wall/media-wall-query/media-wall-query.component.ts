import { Component, Output,
					OnInit, AfterViewInit, OnDestroy,
					ChangeDetectionStrategy, EventEmitter, ElementRef, HostListener } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as apiAction from '../../actions/api';

import { ApiResponse, ApiResponseMetadata, ApiResponseResult, ApiResponseAggregations } from '../../models/api-response';
import { Query, ReloactionAfterQuery } from '../../models/query';


@Component({
	selector: 'media-wall-query',
	templateUrl: './media-wall-query.component.html',
	styleUrls: ['./media-wall-query.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaWallQueryComponent implements OnInit, OnDestroy {
	private __subscriptions__: Subscription[] = new Array<Subscription>();
	public _queryControl: FormControl = new FormControl();
	public query$: Observable<Query>;
	@Output() next: EventEmitter<number> = new EventEmitter<number>();

	constructor(
		private store: Store<fromRoot.State>,
	) { }

	ngOnInit() {
		this.setupSearchField();
	}

	/**
	 * Handles the Query request when Enter key is pressed `explicitly` in input.
	 * There is an only need to change the location as the current request
	 * is already being fetched (ngrx/effects).
	 *
	 * @param query : The string term which is set as parameter to url.
	 */
	private setupSearchField() {
		this.__subscriptions__.push(
			this._queryControl.valueChanges
				.subscribe((value) => {
						this.store.dispatch(new apiAction.SearchAction({
							queryString: value,
							location: ReloactionAfterQuery.RELOCATE
						}));
						this.store.dispatch(new apiAction.ShowSearchResults(''));
				}));
	}


	/**
	 * Clearup all the subscription when component is destroyed.
	 */
	ngOnDestroy() {
		this.__subscriptions__.forEach(subscription => subscription.unsubscribe());
	}

}

