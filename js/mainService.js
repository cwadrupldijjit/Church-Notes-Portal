app.service('mainService', function($http) {
	var notes = [
		{
			meta: {
				title: 'Church Notes',
				timestamp: '08/30/2015 13:17:00'
			},
			
			announcements: {
				title: 'Announcements',
				announcements: [
					'Institute kickoff is this Wednesday at 6:00pm which will include food and a talk given by Pres Heaton, followed by games',
					'FHE this week is at Bro Napp\'s house in Mapleton at 7:00. Carpooling is available at the church at 6:30pm.'
				]
			},
			
			speakers: {
				title: 'Speakers',
				speakers: [
					{
						name: '',
						notes: [
							''
						]
					}
				]
			},
			
			otherThoughts: {
				title: 'Other Thoughts',
				publicNotes: [
					'Repentence refreshes our view of ourselves, of others, and elevates our view to a higher level and helps us to know how God loves us and helps us to love others like God loves us.'
				],
				privateNotes: [
					
				]
			}
		},
		{
			meta: {
				title: 'Church Notes',
				timestamp: '09/06/2015 09:33:00'
			},
			
			announcements: {
				title: 'Announcements',
				announcements: [
					''
				]
			},
			
			speakers: {
				title: 'Speakers',
				speakers: [
					{
						name: 'Mr Test',
						notes: [
							'Test',
							'rteydfghjklktrewertu'
						]
					}
				]
			},
			
			otherThoughts: {
				title: 'Other Thoughts',
				publicNotes: [
					''
				],
				privateNotes: [
					''
				]
			}
		}
	];
	
	this.getNotes = function() {
		return notes;
	};
	
	this.postNotes = function(post) {
		notes.push(post);
	};
});