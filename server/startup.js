Quotes = new Mongo.Collection("quotes");
Academies = new Mongo.Collection("academies");

Meteor.startup(function () {
  if(Academies.find().count() === 0){
    var academies = [
      { 'name': "AB&I" },
      { 'name': "AHB" },
      { 'name': "AI&I" },
      { 'name': "AGZ" },
      { 'name': "AMIB" },
      { 'name': "AOMI" },
      { 'name': "AVB" },
      { 'name': "AVD" },
      { 'name': "AFM" },
    ];

    for (var i = 0; i < academies.length; i++)
      Academies.insert(academies[i]);
  }

  if (Quotes.find().count() === 0) {
    var quotes = [
      {
        'title': 'Houdoe Avans!',
        'name': 'Pieter Hendriksen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Een laatste groet!',
        'name':  'Arja Mortenssen',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Houdoe allemaal!',
        'name':  'Elsa Martens',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Was heel leuk!',
        'name':  'Erik Brandsma',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'We hadden like.. vakken ofzo',
        'name':  'Ivan Horn',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Kawaii sugoi sugoi',
        'name':  'Give a little time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'state': 'pending',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/G4868vv.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/PlweEdi.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/UOtnDMB.gif',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/o0GQK.gif',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/QyAt9Vx.gif',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/Tdlth9s.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/6JukZ5r.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/2Gq4Und.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/LReEK3G.png',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/mzCsZRe.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/xsX5pyC.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/2IvlSBc.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/6xMopeR.jpgk',
        'state': 'accepted',
        'shown': false,
        'academie': 'AVD'
      },
      {
        'title': 'One... Twenty-one guns!',
        'name':  'I\'m having a good time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/KHokmZS.jpg',
        'state': 'rejected',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'There\'s no stopping me',
        'name':  'That\'s why i\'m called mr. fahrenheit!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/GuAB8OE.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AVD'
      },
      {
        'title': 'Je weet dat ik',
        'name':  'Gewoon de tekst van \' don\'t stop me now',
        'quote': 'Aan het citeren ben of niet?',
        'image': 'http://i.imgur.com/dAvWkN8.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AVD'
      },
    ];

    for (var i = 0; i < quotes.length; i++)
      Quotes.insert(quotes[i]);
    }


});