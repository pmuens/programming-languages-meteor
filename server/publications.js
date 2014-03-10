Meteor.publish('languages', function () {
  return Languages.find();
});
