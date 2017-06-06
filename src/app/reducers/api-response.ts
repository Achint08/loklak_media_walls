import { createSelector } from 'reselect';
import { ApiResponse, ApiResponseResult } from '../models/api-response';
import * as api from '../actions/api';

/**
 * Each reducer module must import the local `State` which it controls.
 *
 * Here the `State` contains three properties:
 * @prop [metadata: ApiResponseMetadata] metadata of the response which comes from api
 * @prop [entities: ApiResponseResult[]] array of response items returned by the api.
 * @prop [hashtags: Array<{ tag: string, count: number }>] array of hashtags computed from entities.
 * @prop [aggregations: ApiResponseAggregations] array of Mentions, Hashtags, Screen Names and Date Created.
 * @prop [valid: boolean] shows the validity of data present in state.
 * 												Used to detect wheather the loading has been success/fail.
 */
export interface State {
	pages: ApiResponse[];
	entities: ApiResponseResult[];
	valid: boolean;
}

/**
 * There is always a need of initial state to be passed onto the store.
 *
 * @prop: metadata: null
 * @prop: entities: []
 * @prop: hashtags: []
 * @prop: aggregations: null
 * @prop: valid: true
 */
export const initialState: State = {
	pages: [],
	entities: [],
	valid: true,
};


/**
 * The actual reducer function. Reducers can be thought of as the tables in the DataBase.
 * These are the functions which are responsible for maintaing, and updating the
 * `State` of the application they control.
 *
 * Here the reducer controls the part of state which is responsilble for storing the
 * results fetched from the API.
 */
export function reducer(state: State = initialState, action: api.Actions): State {
	switch (action.type) {
		case api.ActionTypes.SEARCH_COMPLETE_SUCCESS: {
			const apiResponse = action.payload;

			return Object.assign({}, state, {
				pages: [ apiResponse ],
				entities: apiResponse.statuses,
				valid: true
			});
		}

		case api.ActionTypes.SEARCH_COMPLETE_FAIL: {
			return Object.assign({}, state, {
				valid: false
			});
		}

		default: {
			return state;
		}
	}
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getPages = (state: State) => state.pages;

export const isResultValid = (state: State) => state.valid;

export const lastRecord = (state: State) => state.entities.length - 1;


