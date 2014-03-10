Template.newLanguage.events({
  'submit form': function (event) {
    event.preventDefault();

    $name = $(event.target).find('.name')

    var language = {
      name: $name.val()
    }

    Meteor.call('add', language, function (error, id) {
      if (!error) {
        $('input[type=text]').val('');
      } else {
        $name.val('');
      }
    });
  }
});
