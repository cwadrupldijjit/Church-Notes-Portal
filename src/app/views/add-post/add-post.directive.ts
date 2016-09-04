/// <reference path="../../js/app.module.ts" />
let vm;
(function() {
	'use strict';
	
	class Speaker {
		id: number;
		name: string = '';
		notes: string[] = [];
	}

	class Post {
		title: string = '';
		announcements: string[] = [];
		speakers: Speaker[] = [];
		publicNotes: string[] = [];
		privateNotes: string[] = [];
		
		constructor() {}
	}
	
	angular
		.module('NoteBlogApp')
		.directive('addPost', AddPostDirective)
	
	
	function AddPostDirective() {
		return {
			restrict: 'E',
			templateUrl : '/views/add-post/add-post-template.html',
			controller: AddPostController,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	AddPostController.$inject = ['$location', 'mainService'];
	
	function AddPostController($location, mainService) {
		vm = this;
		
		vm.post = {
			title: '',
			announcements: [],
			speakers: [],
			publicNotes: [],
			privateNotes: []
		};
		
		vm.addAnnouncement = addAnnouncement;
		vm.cancelAnnouncement = cancelAnnouncement;
		vm.addSpeaker = addSpeaker;
		vm.deleteSpeaker = deleteSpeaker;
		vm.addSpeakerNote = addSpeakerNote;
		vm.cancelSpeakerNote = cancelSpeakerNote;
		vm.addPublicNote = addPublicNote;
		vm.cancelPublicNote = cancelPublicNote;
		vm.addPrivateNote = addPrivateNote;
		vm.cancelPrivateNote = cancelPrivateNote;
		vm.submitPost = submitPost;
		
		function addAnnouncement() {
			vm.post.announcements.push('');
		}
		
		function cancelAnnouncement(announcement) {
			let index = vm.post.announcements.indexOf(announcement);
			if (!vm.post.announcements[index] || 
				 confirm('Are you sure you want to delete this announcement?  The action cannot be undone.')) {
				vm.post.announcements.splice(index, 1);
			}
		}
		
		function addSpeaker() {
			let id: number;
			if (vm.post.speakers.length === 0) {
				id = 1;
			} else {
				id = vm.post.speakers[vm.post.speakers.length - 1].id + 1;
			}
			
			let speaker = {
				id,
				name: '',
				notes: ['']
			};
			
			vm.post.speakers.push(speaker);
		}
		
		function deleteSpeaker(speaker) {
			let index = vm.post.speakers.indexOf(speaker);
			let notesExist = false;
			
			if (vm.post.speakers[index].notes.length) {
				vm.post.speakers[index].notes.forEach(function notesExistFunc(val) {
					if (val) {
						notesExist = true;
					}
				})
			}
			
			let hasContent = !!(vm.post.speakers[index].name || notesExist);
			
			if (!hasContent || confirm(`Are you sure you want to delete ` +
									   `the speaker?  The action cannot be ` +
									   `undone.`)) {
				vm.post.speakers.splice(index, 1);
			}
		}
		
		function addSpeakerNote(speaker) {
			let index = vm.post.speakers.indexOf(speaker);
			vm.post.speakers[index].notes.push('');
		}
		
		function cancelSpeakerNote(speaker, note) {
			let speakerIndex = vm.post.speakers.indexOf(speaker);
			let noteIndex = vm.post.speakers[speakerIndex].notes.indexOf(note);
			if (!vm.post.speakers[speakerIndex].notes[noteIndex] || 
				confirm(`Are you sure you want to delete this ` + 
						`speaker note?  The action cannot be undone.`)) {
				vm.post.speakers[speakerIndex].notes.splice(noteIndex, 1);
			}
		}
		
		function addPublicNote() {
			vm.post.publicNotes.push('');
		}
		
		function cancelPublicNote(note) {
			let index = vm.post.publicNotes.indexOf(note);
			if (!vm.post.publicNotes[index] || confirm('Are you sure you want to delete this public note?  The action cannot be undone.')) {
				vm.post.publicNotes.splice(index, 1);
			}
		}
		
		function addPrivateNote() {
			vm.post.privateNotes.push('');
		}
		
		function cancelPrivateNote(note) {
			let index = vm.post.privateNotes.indexOf(note);
			if (!vm.post.privateNotes[index] || confirm('Are you sure you want to delete this private note?  The action cannot be undone.')) {
				vm.post.privateNotes.splice(index, 1);
			}
		}
		
		function submitPost() {
			if (!vm.post.title) {
				return console.log('You must name the post--something unique would be best');
			}
			console.log(vm.post);
			mainService
				.submitPost(vm.post)
					.then(function newPostSuccess(response) {
						$location.path('/');
					}, function newPostError(err) {
						console.warn(err);
					});
		}
	};
})();