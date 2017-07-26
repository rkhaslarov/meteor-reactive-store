import {Session} from "meteor/session";
import {Mongo} from "meteor/mongo";
import {Random} from "meteor/random";
import {set, get, find, isObject, isArray} from "lodash";

export default class SessionStore {

	constructor() {
		this._store  = Session;
	}

	raw() {
		return this._store;
	}

	set(key, data) {
		return this._store.set(key, data);
	}

	get(key) {
		return this._store.get(key);
	}

	getBy(query) {
		return find(this.getAll(), query);
	}

	getAll() {
		return Object.values(this._store.keys).map((value) => {
			try {
				return JSON.parse(value);
			} catch (e) {
				return value;
			}
		});
	}

	size() {
		return this.getAll().length;
	}

	has(key) {
		return this.keys().hasOwnProperty(key);
	}

	remove(key) {
		this._store.set(key, undefined);
		delete this.keys()[key];
	}

	clear() {
		this._store.keys = {};
	}

	keys() {
		return this._store.keys;
	}
}
