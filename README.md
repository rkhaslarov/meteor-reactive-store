rkhaslarov:reactive-store
=================

This package provides a reactive key-value store for your application.

# Usage
```js
import {Store} from "meteor/rkhaslarov:reactive-store"; // importing Store

this.store = (new Store()).create(); // Local store engine
this.store = (new Store("session")).create(); // Session engine

this.store.raw(); // Get Raw instance of store
this.store.set(key, data); // Set some data by key
this.store.get(key); // Get data by key
this.store.getBy(query, additional); // Get data by query like {query: true}
this.store.getAll(); // Get all items
this.store.size(); // Collection size
this.store.has(key); // Check if store has item with key
this.store.remove(key); // Remove by key
this.store.removeBy(query); // Remove by query
this.store.clear(); // Clear store
this.store.keys(); // Get all keys as array
```
