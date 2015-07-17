routine1 = Session.get('selectedRoutine');

Template.exercises.helpers({
	getExercises: function () { return Exercises.find().fetch();},
	startExercise: function() { return Session.get('selectedRoutine').exercises.length > 0},
	getCardio: function () { return Cardio.find().fetch();},
	showExerciseList2 : function() {return Session.get("showExerciseList2");},
	exerciseList2: function() {return Session.get('forCompletedRoutine',routine1);},
	'strengthOrCardioForm': function(){
		return Session.get("strengthOrCardio");
	},

	isCardio : function() { 
		var thisExercise = Session.get("storeExercise");
		return thisExercise.type.indexOf("Cardio") > -1;
	},

	'editOrNot': function(){
		return Session.get("editOrNot");
	},
});


Template.exercises.events({
	'click #startWorkout' : function() {
		var routine = Session.get("selectedRoutine");
		Router.go('routineExercises', {_id: routine._id});
	},

	'click .selectedExercise' : function() {
		var exercise = this;
		console.log(exercise);
		Session.set('storeExercise', (exercise.Type.indexOf("Cardio") > -1));

	},
	'click .selectedCardio' : function() {
		var cardio = this;
		console.log(cardio);
		Session.set('storeExercise', (cardio.Type.indexOf("Cardio") > 1));

	},

	'click #viewAddStrength': function (event){
		Session.set("strengthOrCardio", true);
		Session.set("editOrNot", false);
		Session.set("showExerciseList2", false);

		document.getElementById("viewAddStrength").className = "tab-item active";
		document.getElementById("viewAddCardio").className = "tab-item";
		document.getElementById("viewEdit").className = "tab-item";

		console.log(":P")
	},

	'click #viewEdit': function (event){
		Session.set("editOrNot", true);

		Session.set("showExerciseList2", true);

		document.getElementById("viewAddStrength").className = "tab-item";
		document.getElementById("viewEdit").className = "tab-item active";
		document.getElementById("viewAddCardio").className = "tab-item";
		var x = Session.get('selectedRoutine');
		console.log(":D")
		console.log(x)

	},
	'click #viewAddCardio': function (event){
		Session.set("strengthOrCardio", false);
		Session.set("editOrNot", false);
		Session.set("showExerciseList2", false);

		document.getElementById("viewAddStrength").className = "tab-item";
		document.getElementById("viewAddCardio").className = "tab-item active";
		document.getElementById("viewEdit").className = "tab-item";

		console.log(":)")
	},

})
