/// <reference path="../../typings/angularjs/angular.d.ts" />
(function () {
    'use strict';
    angular
        .module('NoteBlogApp', ['ngRoute', 'ngMaterial'])
        .config(routes);
    routes.$inject = ['$routeProvider', '$locationProvider'];
    function routes($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            template: '<posts></posts>'
        })
            .when('/add-post', {
            template: '<add-post></add-post>',
        })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }
})();
/// <reference path="app" />
(function () {
    'use strict';
    angular
        .module('NoteBlogApp')
        .controller('MainController', MainController);
    MainController.$inject = ['mainService'];
    function MainController(mainService) {
        this.posts = mainService.getNotes();
    }
})();
/// <reference path="app" />
/// <reference path="app.controller.ts" />
(function () {
    'use strict';
    angular
        .module('NoteBlogApp')
        .service('mainService', function ($http) {
        var notes = [
            {
                meta: {
                    title: 'Church Notes',
                    timestamp: '08/11/2015 14:30:00'
                },
                announcements: {
                    title: 'Announcements',
                    announcements: [
                        'Stake Conference is next week, Saturday meeting at 7:00 at the church, then 10:00 on Sunday morning',
                        'Stake Halloween party Friday, October 23rd, 7:00 at the church, 10:00 Provo Rec Center',
                        'Ward Halloween party Saturday, October 24th, 7:00 at the church?  ZOMBIES (and nerf guns)'
                    ]
                },
                speakers: {
                    title: 'Speakers',
                    speakers: [
                        {
                            name: 'Brother Napp?',
                            notes: [
                                'We\'re instructed to be especially sure that we attend Stake Conference next week; the blessings we will receive by doing so are found in D&C 44.'
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
            },
            {
                meta: {
                    title: 'Church Notes',
                    timestamp: '09/20/2015 12:11:15'
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
                        'Study and re-read "Beware of Pride" by Ezra Taft Benson found in the April 1989 General Conference.  Print it out.  Read it.  Mark it up.  I may need this talk the most right now.'
                    ],
                    privateNotes: [
                        'Study the above talk about fear.  It may be able to help you get over your below problems.',
                        'I have a deep fear in social situations.  Whether that be fear of approaching someone new, fear of making a fool of myself, fear of failure or rejection.  Socializing is a risk-taking experience.  I feel like I\'m not good enough in social situations that I can get through them all right.  I\'m always so afraid of pushing some people away that I don\'t want to do much with them.  I\'m afraid of them.  I wouldn\'t make a good entrepreneuer because I am too afraid of taking risks, and I don\'t know which risks I should take.  This also affects my confidence in making any decisions, as I don\'t trust that I\'d make the right ones.  Part of the reason why I don\'t trust myself in a leadership position.',
                        'I\'ve struggled a lot with many things.  I feel like I have a wound which I need healing from.  I need more confidence, or I need more courage to make any of those decisions.  I\'m terrified of this, and I think that something that I have been a huge slacker on is keeping my contact with the One whom I shouldn\'t turn from when I am afraid, the One who has said repeatedly throughout history to "fear not."  I feel like I have failed to remember to sing those hymns I\'d memorized when I was younger.  I need to re-internalize the doctrines of empowerment in the Atonement.  I need to pray more often.  I need to be humble.',
                        'I know that as I turn to Him, I can overcome all things.  I know that when I turn to Him, I can grow in relationships I could only know if I am with others.  I know that when I turn to Him, He will help me to find my wife--another thing I\'ve feared may never happen.  I know that through the Atonement, I can find an ennobling, empowering energy to do better.  Repentence isn\'t a burden.  It is a gift.  Repentence doesn\'t mean that we suffer as we change our ways.  It means that our views have changed, our understanding of ourselves, others, and God have refreshed.  We learn who we are better and what our role is in the Plan of Salvation for us and those around us.  God wouldn\'t send us here to learn and grow with others around us unless He intended for us to live life together with somebody.  I\'m starting to get really lonely.  But I\'m also very afraid.',
                        'I need to get down on my knees tonight and ask Father to help me.  Plead with Him to get over myself and ask someone out.  Plead with Him and so I can change my focus, refresh my view of myself and ask for Him to help me.  I haven\'t asked His help for a while.  I need to overcome this weakness.  I need to remember who I am an what I came here for.  Why I felt a change of scenery would help me to get better.',
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
                    privateNotes: []
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
        this.getNotes = function () {
            return notes;
        };
        this.postNotes = function (post) {
            notes.push(post);
        };
    });
})();
/// <reference path="../app" />
(function () {
    'use strict';
    angular
        .module('NoteBlogApp')
        .directive('noteClickToEdit', NoteClickToEditDirective);
    function NoteClickToEditDirective() {
        return {
            restrict: 'A',
            controller: NoteClickToEdit,
            controllerAs: 'vm',
            scope: {},
            bindToController: true
        };
    }
    NoteClickToEdit.$inject = [];
    function NoteClickToEdit() {
        var vm = this;
        vm.post = {};
    }
})();
/// <reference path="../../js/app" />
(function () {
    'use strict';
    angular
        .module('NoteBlogApp')
        .directive('addPost', AddPostDirective);
    function AddPostDirective() {
        return {
            restrict: 'E',
            templateUrl: '/views/add-post/add-post-template.html',
            controller: AddPostController,
            controllerAs: 'vm',
            scope: {},
            bindToController: true
        };
    }
    AddPostController.$inject = ['mainService'];
    function AddPostController(mainService) {
        var vm = this;
        vm.newPost;
    }
    ;
})();
/// <reference path="../../js/app" />
(function () {
    'use strict';
    angular
        .module('NoteBlogApp')
        .directive('posts', PostsDirective);
    function PostsDirective() {
        return {
            restrict: 'E',
            templateUrl: '/views/posts/post-template.html',
            controller: PostsController,
            controllerAs: 'vm',
            scope: {},
            bindToController: true
        };
    }
    PostsController.$inject = ['mainService'];
    function PostsController(mainService) {
        var vm = this;
        vm.posts = mainService.getNotes();
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2FwcC50cyIsImpzL2FwcC5jb250cm9sbGVyLnRzIiwianMvbWFpblNlcnZpY2UudHMiLCJqcy9jdXN0b20tZGlyZWN0aXZlcy9ub3RlLWNsaWNrLXRvLWVkaXQuZGlyZWN0aXZlLnRzIiwidmlld3MvYWRkLXBvc3QvYWRkLXBvc3QuZGlyZWN0aXZlLnRzIiwidmlld3MvcG9zdHMvcG9zdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbInJvdXRlcyIsIk1haW5Db250cm9sbGVyIiwiTm90ZUNsaWNrVG9FZGl0RGlyZWN0aXZlIiwiTm90ZUNsaWNrVG9FZGl0IiwiQWRkUG9zdERpcmVjdGl2ZSIsIkFkZFBvc3RDb250cm9sbGVyIiwiUG9zdHNEaXJlY3RpdmUiLCJQb3N0c0NvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxDQUFDO0lBQ0EsWUFBWSxDQUFDO0lBRWIsT0FBTztTQUNMLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFFLENBQUM7U0FDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWpCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRXpELGdCQUFnQixjQUFjLEVBQUUsaUJBQWlCO1FBQ2hEQSxjQUFjQTthQUNaQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQTtZQUNWQSxRQUFRQSxFQUFFQSxpQkFBaUJBO1NBQzNCQSxDQUFDQTthQUVEQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQTtZQUNsQkEsUUFBUUEsRUFBRUEsdUJBQXVCQTtTQUNqQ0EsQ0FBQ0E7YUFFREEsU0FBU0EsQ0FBQ0EsRUFBRUEsVUFBVUEsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFakNBLGlCQUFpQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0FBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztB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QUU3QjtRQUNDQyxJQUFJQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVkQSxFQUFFQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNkQSxDQUFDQTtBQUNGLENBQUMsQ0FBQyxFQUFFLENBQUM7QUN6QkwscUNBQXFDO0FBRXJDLENBQUM7SUFDQSxZQUFZLENBQUM7SUFFYixPQUFPO1NBQ0wsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNyQixTQUFTLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFHeEM7UUFDQ0MsTUFBTUEsQ0FBQ0E7WUFDTkEsUUFBUUEsRUFBRUEsR0FBR0E7WUFDYkEsV0FBV0EsRUFBR0Esd0NBQXdDQTtZQUN0REEsVUFBVUEsRUFBRUEsaUJBQWlCQTtZQUM3QkEsWUFBWUEsRUFBRUEsSUFBSUE7WUFDbEJBLEtBQUtBLEVBQUVBLEVBQUVBO1lBQ1RBLGdCQUFnQkEsRUFBRUEsSUFBSUE7U0FDdEJBLENBQUNBO0lBQ0hBLENBQUNBO0lBRUQsaUJBQWlCLENBQUMsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFNUMsMkJBQTJCLFdBQVc7UUFDckNDLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO1FBRWRBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBO0lBQ1pBLENBQUNBO0lBQUEsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7QUM1QkwscUNBQXFDO0FBRXJDLENBQUM7SUFDQSxZQUFZLENBQUM7SUFFYixPQUFPO1NBQ0wsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNyQixTQUFTLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBRXBDO1FBQ0NDLE1BQU1BLENBQUNBO1lBQ05BLFFBQVFBLEVBQUVBLEdBQUdBO1lBQ2JBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7WUFDOUNBLFVBQVVBLEVBQUVBLGVBQWVBO1lBQzNCQSxZQUFZQSxFQUFFQSxJQUFJQTtZQUNsQkEsS0FBS0EsRUFBRUEsRUFBRUE7WUFDVEEsZ0JBQWdCQSxFQUFFQSxJQUFJQTtTQUN0QkEsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFFRCxlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFMUMseUJBQXlCLFdBQVc7UUFDbkNDLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO1FBRWRBLEVBQUVBLENBQUNBLEtBQUtBLEdBQUdBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0lBQ25DQSxDQUFDQTtBQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
