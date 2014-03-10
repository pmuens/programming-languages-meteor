Languages = new Meteor.Collection('languages');

Meteor.methods({
  upvote: function (languageId) {
    Languages.update(languageId, {$inc: {votes: 1}});
  },
  downvote: function (languageId) {
    Languages.update(languageId, {$inc: {votes: -1}});
  },
  add: function (attributes) {
    var language = _.extend(_.pick(attributes, 'name'), {
      votes: 0
    });

    var languageId = Languages.insert(language);

    return languageId;
  }
});
