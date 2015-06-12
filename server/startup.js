if(Meteor.isServer){

	Meteor.startup(function(){

		if(Profiles.find().count()== 0 ) {
			Profiles.insert({firstName: "Dewar", lastName:"Tan"})
		}
		ArmExercises.insert({
			name: "Bicep Curl",
			sets: 4,
			reps: 15, 
			weight: 20
		});

		ArmExercises.insert({
			name: "Hammar Curl",
			sets: 2,
			reps: 12,
			weight: 15
		});

		ArmExercises.insert({
			name: "Reverse Curl",
			sets: 3,
			reps: 10,
			weight: 25
		});
		
	});
}