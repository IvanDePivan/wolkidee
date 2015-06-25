Quotes = new Mongo.Collection("quotes");
Educations = new Mongo.Collection("educations");

Meteor.startup(function () {
  if(Educations.find().count() === 0){
    var educations = [
      { 'name': "Informatica" },
      { 'name': "Werktuigbouwkunde" },
      { 'name': "CMD" },
      { 'name': "Kunst en vormgeving" },
      { 'name': "Technische informatica" },
      { 'name': "Zorg" },
    ];

    for (var i = 0; i < educations.length; i++)
      Educations.insert(educations[i]);
  }

  if (Quotes.find().count() === 0) {
    var quotes = [
      {
        'title': 'Houdoe Avans!',
        'name': 'Pieter Hendriksen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Een laatste groet!',
        'name':  'Arja Mortenssen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Houdoe allemaal!',
        'name':  'Elsa Martens',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Was heel leuk!',
        'name':  'Erik Brandsma',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'We hadden like.. vakken ofzo',
        'name':  'Ivan Horn',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Kawaii sugoi sugoi',
        'name':  'Give a little time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'CMD'
      },
      {
        'title': 'One... Twenty-one guns!',
        'name':  'I\'m having a good time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/KHokmZS.jpg',
        'state': 'rejected',
        'shown': false,
        'education': 'Informatica'
      },
      {
        'title': 'There\'s no stopping me',
        'name':  'That\'s why i\'m called mr. fahrenheit!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/GuAB8OE.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'CMD'
      },
      {
        'title': 'Je weet dat ik',
        'name':  'Gewoon de tekst van \' don\'t stop me now',
        'quote': 'Aan het citeren ben of niet?',
        'image': 'http://i.imgur.com/dAvWkN8.jpg',
        'state': 'accepted',
        'shown': false,
        'education': 'CMD'
      },
    ];

    for (var i = 0; i < quotes.length; i++)
      Quotes.insert(quotes[i]);
    }


});