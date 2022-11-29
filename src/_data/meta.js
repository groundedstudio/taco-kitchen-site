const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Taco Kitchen',
  siteDescription:
    'Plant led tacos for everyone!',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Sam Drew', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'sam@groundedstudio.co.uk', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#36AD77', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3EfE6', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Updates from Taco Kitchen',
    description:
      'Stories and updates from the team at Taco Kitchen'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Taco Kitchen',
    street: 'A pop-up near you',
    city: 'The South West',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'liamgidd@gmail.com',
    cif: ''
  },
  menu: {
    closedText: '...'
  }
};
