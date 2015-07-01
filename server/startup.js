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
        'thumbnail': 'http://i.imgur.com/G4868vvl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/PlweEdi.jpg',
        'thumbnail': 'http://i.imgur.com/PlweEdil.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/UOtnDMB.gif',
        'thumbnail': 'http://i.imgur.com/UOtnDMBl.gif',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/YhGQeHl.jpg',
        'thumbnail': 'http://i.imgur.com/YhGQeHll.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/QyAt9Vx.gif',
        'thumbail': 'http://i.imgur.com/QyAt9Vxl.gif',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/Tdlth9s.jpg',
        'thumbnail': 'http://i.imgur.com/Tdlth9sl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/6JukZ5r.jpg',
        'thumbnail': 'http://i.imgur.com/6JukZ5rl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/2Gq4Und.jpg',
        'thumbnail': 'http://i.imgur.com/2Gq4Undl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/LReEK3G.png',
        'thumbnail': 'http://i.imgur.com/LReEK3Gl.png',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/mzCsZRe.jpg',
        'thumbnail': 'http://i.imgur.com/mzCsZRel.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/xsX5pyC.jpg',
        'thumbnail': 'http://i.imgur.com/xsX5pyCl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/2IvlSBc.jpg',
        'thumbnail': 'http://i.imgur.com/2IvlSBcl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'Notice me senpai',
        'name':  'do\'nt stop me now!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/6xMopeR.jpgk',
        'thumbnail': 'http://i.imgur.com/6xMopeRl.jpgk',
        'state': 'accepted',
        'shown': false,
        'academie': 'AVD'
      },
      {
        'title': 'One... Twenty-one guns!',
        'name':  'I\'m having a good time',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/KHokmZS.jpg',
        'thumbnail': 'http://i.imgur.com/KHokmZSl.jpg',
        'state': 'rejected',
        'shown': false,
        'academie': 'AI&I'
      },
      {
        'title': 'There\'s no stopping me',
        'name':  'That\'s why i\'m called mr. fahrenheit!',
        'quote': 'It\'s not like I like making up quotes baka-senpai!~~ uguu. Stop being tsundere onii-chan.',
        'image': 'http://i.imgur.com/GuAB8OE.jpg',
        'thumbnail': 'http://i.imgur.com/GuAB8OEl.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AVD'
      },
      {
        'title': 'Je weet dat ik',
        'name':  'Gewoon de tekst van \' don\'t stop me now',
        'quote': 'Aan het citeren ben of niet?',
        'image': 'http://i.imgur.com/dAvWkN8.jpg',
        'thumbnail': 'http://i.imgur.com/dAvWkN8l.jpg',
        'state': 'accepted',
        'shown': false,
        'academie': 'AVD'
      },
    ];

    for (var ii = quotes.length - 1; ii >= 0; ii--) {
      Quotes.insert(quotes[ii]);
    }
  }


});