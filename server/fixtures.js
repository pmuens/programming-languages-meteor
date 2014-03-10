if (Languages.find().count() === 0) {
  Languages.insert({
    name: 'Ruby',
    votes: 0
  });

  Languages.insert({
    name: 'JavaScript',
    votes: 0
  });

  Languages.insert({
    name: 'PHP',
    votes: 0
  });
}
