Template.languagesTable.languages = function () {
  return Languages.find({}, {sort: {votes: -1}});
};

Template.languagesTable.events({
  'click .upvote': function () {
    Meteor.call('upvote', this._id);
  },
  'click .downvote': function () {
    Meteor.call('downvote', this._id);
  }
});
