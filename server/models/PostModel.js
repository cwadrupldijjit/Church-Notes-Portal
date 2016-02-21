/// <reference path="../server" />
var mongoose = require('mongoose');
var Post = mongoose.model('Post', new mongoose.Schema({
    postTitle: String,
    timestamp: Date,
    announcements: [{
            type: String
        }],
    speakers: [{
            name: String,
            notes: [{ type: String }]
        }],
    publicNotes: [{
            type: String
        }],
    privateNotes: [{
            type: String
        }]
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Post;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9Qb3N0TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUMxQixNQUFNLEVBQ04sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25CLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLENBQUM7WUFDZixJQUFJLEVBQUUsTUFBTTtTQUNaLENBQUM7SUFDRixRQUFRLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDekIsQ0FBQztJQUNGLFdBQVcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxFQUFFLE1BQU07U0FDWixDQUFDO0lBQ0YsWUFBWSxFQUFFLENBQUM7WUFDZCxJQUFJLEVBQUUsTUFBTTtTQUNaLENBQUM7Q0FDRixDQUFDLENBQ0YsQ0FBQztBQUVGO2tCQUFlLElBQUksQ0FBQyIsImZpbGUiOiJtb2RlbHMvUG9zdE1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3NlcnZlclwiIC8+XHJcblxyXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBQb3N0ID0gbW9uZ29vc2UubW9kZWwoXHJcblx0J1Bvc3QnLCBcclxuXHRuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuXHRcdHBvc3RUaXRsZTogU3RyaW5nLFxyXG5cdFx0dGltZXN0YW1wOiBEYXRlLFxyXG5cdFx0YW5ub3VuY2VtZW50czogW3tcclxuXHRcdFx0dHlwZTogU3RyaW5nXHJcblx0XHR9XSxcclxuXHRcdHNwZWFrZXJzOiBbe1xyXG5cdFx0XHRuYW1lOiBTdHJpbmcsXHJcblx0XHRcdG5vdGVzOiBbeyB0eXBlOiBTdHJpbmcgfV1cclxuXHRcdH1dLFxyXG5cdFx0cHVibGljTm90ZXM6IFt7XHJcblx0XHRcdHR5cGU6IFN0cmluZ1xyXG5cdFx0fV0sXHJcblx0XHRwcml2YXRlTm90ZXM6IFt7XHJcblx0XHRcdHR5cGU6IFN0cmluZ1xyXG5cdFx0fV1cclxuXHR9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
