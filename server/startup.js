Quotes = new Mongo.Collection("quotes");

Meteor.startup(function () {
  if (Quotes.find().count() === 0) {

    var quotes = [
      {
        'title': 'Houdoe Avans!',
        'name': 'Pieter Hendriksen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false
      },
      {
        'title': 'Een laatste groet!',
        'name':  'Arja Mortenssen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false
      },
      {
        'title': 'Houdoe allemaal!',
        'name':  'Elsa Martens',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false
      },
      {
        'title': 'Was heel leuk!',
        'name':  'Erik Brandsma',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false
      },
      {
        'title': 'We hadden like.. vakken ofzo',
        'name':  'Ivan Horn',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false
      },
      {
        'title': 'Kawaii sugoi sugoi',
        'name':  'Give a little time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'One... Twenty-one guns!',
        'name':  'I\'m having a good time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/KHokmZS.jpg',
        'state': 'rejected',
        'shown': false
      },
      {
        'title': 'There\'s no stopping me',
        'name':  'That\'s why i\'m called mr. fahrenheit!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/GuAB8OE.jpg',
        'state': 'accepted',
        'shown': false
      },
      {
        'title': 'Je weet dat ik',
        'name':  'Gewoon de tekst van \' don\'t stop me now',
        'quote': 'Aan het citeren ben of niet?',
        'image': 'http://i.imgur.com/dAvWkN8.jpg',
        'state': 'accepted',
        'shown': false
      },
    ];

    for (var i = 0; i < quotes.length; i++)
      Quotes.insert(quotes[i]);
    }
});