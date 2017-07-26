import {Mongo} from "meteor/mongo";
import {Random} from "meteor/random";

export default class CollectionStore {

	constructor() {
		this._store = new Mongo.Collection(null);
	}

	raw() {
		return this._store;
	}

	set(key, data) {
		return this._store.upsert({"_id" : key}, data);
	}

	get(key) {
		return this._store.findOne({"_id" : key});
	}

	getBy(query, additional) {
		return this._store.find(query, additional).fetch();
	}

	getAll() {
		return this._store.find().fetch();
	}

	size() {
		return this._store.find().count();
	}

	has(key) {
		return !!this.get(key);
	}

	remove(key) {
		return this._store.remove({"_id" : key});
	}

	removeBy(query) {
		return this._store.remove(query);
	}

	clear() {
		return this._store.remove({});
	}

	keys() {
		return this._store.find({}, {"fields" : {"_id" : 1}}).fetch().map(x => x._id);
	}
}
