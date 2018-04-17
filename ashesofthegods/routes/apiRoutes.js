module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const gameMaster = require("../controllers/GameMaster");


	// Matches with "/api/gods"
	router.route("/gods")
	.get(gameMaster.findAll)

	// Matches with "/api/gods/:id"
	router
	.route("/gods/:id")
	.get(gameMaster.findById)

	// Matches with "/api/users"
	router.route("/users")
	.get(gameMaster.findAll)
	
	// Matches with "/api/users/:id"
	router
	.route("/users/:id")
	.get(gameMaster.findById)
	


	return router;
};

// module.exports = router;