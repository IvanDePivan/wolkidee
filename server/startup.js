Quotes = new Mongo.Collection("quotes");

Meteor.startup(function () {
  if (Quotes.find().count() === 0) {

    var quotes = [
      {
        'title': 'Super mooie test titel',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300'
      },
      {
        'title': 'Super mooie test titel',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300'
      },
      {
        'title': 'Super mooie test titel',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300'
      },
      {
        'title': 'Super mooie test titel',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300'
      },
      {
        'title': 'Super mooie test titel',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300'
      },
      {
        'title': 'Super mooie test titel',
        'name': 'Studentnaam Achternaam',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300'
      },
    ];

    for (var i = 0; i < quotes.length; i++)
      Quotes.insert(quotes[i]);
    }
});