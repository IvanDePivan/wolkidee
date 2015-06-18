Quotes = new Mongo.Collection("quotes");

Meteor.startup(function () {
  if (Quotes.find().count() === 0) {

    var quotes = [
      {
        'title': 'Test titel 1',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
      {
        'title': 'Test titel 2',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
      {
        'title': 'Super mooie test titel 3',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'Super mooie test titel 4',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
      {
        'title': 'Super mooie test titel 5',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
      {
        'title': 'Super mooie test titel 6',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'rejected'
      },
    ];

    for (var i = 0; i < quotes.length; i++)
      Quotes.insert(quotes[i]);
    }
});