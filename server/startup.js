Quotes = new Mongo.Collection("quotes");

Meteor.startup(function () {
  if (Quotes.find().count() === 0) {

    var quotes = [
      {
        'title': 'Houdoe Avans!',
        'name': 'Pieter Hendriksen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'Een laatste groet!',
        'name':  'Arja Mortenssen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'Houdoe allemaal!',
        'name':  'Elsa Martens',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'Was heel leuk!',
        'name':  'Erik Brandsma',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'We hadden like.. vakken ofzo',
        'name':  'Ivan Horn',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'Kawaii sugoi sugoi',
        'name':  'Give a little time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'pending'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
      {
        'title': 'One... Twenty-one guns!',
        'name':  'I\'m having a good time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'rejected'
      },
      {
        'title': 'There\'s no stopping me',
        'name':  'That\'s why i\'m called mr. fahrenheit!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
      {
        'title': 'Je weet dat ik',
        'name':  'Gewoon de tekst van \' don\'t stop me now',
        'quote': 'Aan het citeren ben of niet?',
        'image': 'http://placehold.it/300',
        'state': 'accepted'
      },
    ];

    for (var i = 0; i < quotes.length; i++)
      Quotes.insert(quotes[i]);
    }
});