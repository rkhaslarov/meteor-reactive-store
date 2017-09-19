import {Mongo} from "meteor/mongo";
import SessionStore from "./stores/session";
import CollectionStore from "./stores/collection";

Store = class Store {

	create(engine) {
		switch (engine) {
		case "session":
			return new SessionStore();
		default:
			return new CollectionStore();
		}
	}

	synchronize(cursor, store) {

		if (!cursor || !store) {
			throw Error("Mongo.Collection cursor and callback params needed");
		}

		if (Meteor.isClient) {

			cursor.observeChanges({
				"added" : (id, fields) => store.set(id, cursor.collection.findOne(id)),
				"changed" : (id, fields) => store.set(id, cursor.collection.findOne(id)),
				"removed" : (id) => store.remove(id)
			});

		}
	}
}
