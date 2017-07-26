Package.describe({
	"name" : "rkhaslarov:reactive-store",
	"version" : "1.0.0",
	"summary" : "This package provides a reactive key-value store for your application.",
	"git" : "https://github.com/rkhaslarov/meteor-reactive-store",
	"documentation" : "README.md"
});

Npm.depends({
	"babel-plugin-transform-class-properties" : "6.24.1",
	"lodash" : "4.17.4"
});

Package.onUse(function(api) {
	api.versionsFrom("1.2.1");
	api.use(["underscore", "ecmascript", "random", "mongo", "session"]);
	api.addFiles(["store.js", "stores/collection.js", "stores/session.js"], "client");
	api.export("Store");
});
