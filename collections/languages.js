Languages = new Meteor.Collection('languages');

Meteor.methods({
  upvote: function (languageId) {
    Languages.update(languageId, {$inc: {votes: 1}});
  },
  downvote: function (languageId) {
    Languages.update(languageId, {$inc: {votes: -1}});
  }
});
