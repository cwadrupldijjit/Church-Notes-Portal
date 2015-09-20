/// <reference path="app.js" />
/// <reference path="controllers.js" />
/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../bower_components/angular-material/angular-material.js" />

app.service('mainService', function($http) {
	var notes = [
		{
			meta: {
				title: 'Church Notes',
				timestamp: '09/20/2015 12:11:15'
			},
			
			announcements: {
				title: '',
				announcements: [
					''
				]
			},
			
			speakers: {
				title: '',
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
					'I have a deep fear in social situations.  Whether that be fear of approaching someone new, fear of making a fool of myself, fear of failure or rejection.  Socializing is a risk-taking experience.  I feel like I\'m not good enough in social situations that I can get through them all right.  I\'m always so afraid of pushing some people away that I don\'t want to do much with them.  I\'m afraid of them.  I wouldn\'t make a good entrepreneuer because I am too afraid of taking risks, and I don\'t know which risks I should take.  This also affects my confidence in making any decisions, as I don\'t trust that I\'d make the right ones.  Part of the reason why I don\'t trust myself in a leadership position.',
					
					'I\'ve struggled a lot with many things.  I feel like I have a wound which I need healing from.  I need more confidence, or I need more courage to make any of those decisions.  I\'m terrified of this, and I think that something that I have been a huge slacker on is keeping my contact with the One whom I shouldn\'t turn from when I am afraid, the One who has said repeatedly throughout history to "fear not."  I feel like I have failed to remember to sing those hymns I\'d memorized when I was younger.  I need to re-internalize the doctrines of empowerment in the Atonement.  I need to pray more often.  I need to be humble.',
					
					'I know that as I turn to Him, I can overcome all things.  I know that when I turn to Him, I can grow in relationships I could only know if I am with others.  I know that when I turn to Him, He will help me to find my wife--another thing I\'ve feared may never happen.  I know that through the Atonement, I can find an ennobling, empowering energy to do better.  Repentence isn\'t a burden.  It is a gift.  Repentence doesn\'t mean that we suffer as we change our ways.  It means that our views have changed, our understanding of ourselves, others, and God have refreshed.  We learn who we are better and what our role is in the Plan of Salvation for us and those around us.  God wouldn\'t send us here to learn and grow with others around us unless He intended for us to live life together with somebody.  I\'m starting to get really lonely.  But I\'m also very afraid.',
					
					'I need to get down on my knees tonight and ask Father to help me.  Plead with Him to get over myself and ask someone out.  Plead with Him and so I can change my focus, refresh my view of myself and ask for Him to help me.  I haven\'t asked His help for a while.  I need to overcome this weakness.  I need to remember who I am an what I came here for.  Why I felt a change of scenery would help me to get better.'
				],
				
				
				
				
				
				privateNotes: [
					'Realization:  Nudity is not the answer.'
				]
			}
		},
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