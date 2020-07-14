module.exports = {
  siteMetadata: {
    title: `Vinyl-Shop`,
    description: `an online marketplace for music enthusiasts`,
    author: `@Ron Braha`,
    verticalTabs: [
      {
        label: 'studio',
        color: 'linear-gradient(to bottom,#e1c157 0,#c3a44a 100%)',
      },
      {
        label: 'dj',
        color: 'linear-gradient(to bottom,#e08f57 0,#be7548 100%)',
      },
      {
        label: 'records',
        color: 'linear-gradient(to bottom, #57a9e1 0, #4891be 100%)',
      },
    ],
    headerData: {
      navbarData: {
        categories: [
          { label: 'Music', short: 'Music', to: '/' },
          { label: 'DJ equipment', short: 'DJ', to: '/' },
          { label: 'Studio equipment', short: 'Studio', to: '/' },
        ],
        misc: [
          { icon: null, iso: 'gb', label: 'USD', to: '/' },
          { icon: 'gift', label: 'Gift Vouchers', to: '/' },
          { icon: 'question-circle', label: 'Help', to: '/' },
        ],
        search: { icon: 'search', label: 'Search' },
        account: [
          {
            icon: ['fas', 'user-alt'],
            label: 'My Juno',
            to: '/',
            status: 'online',
          },
          { icon: ['fab', 'weebly'], label: 'Wishlist', to: '/' },
          {
            icon: ['fas', 'shopping-cart'],
            iconColor: '#E89108',
            label: 'Cart',
            to: '/',
          },
        ],
      },
      searchTypes: [
        { id: 'all', value: 'all', label: 'All' },
        { id: 'artists', value: 'artists', label: 'Artists' },
        {
          id: 'releaseTitles',
          value: 'releaseTitles',
          label: 'Release Titles',
        },
        { id: 'labels', value: 'labels', label: 'Labels' },
        { id: 'equipment', value: 'equipment', label: 'Equipment' },
      ],
    },
    footerData: {
      info: [
        { label: 'Ordering', to: '/' },
        { label: 'Ordering Problems', to: '/' },
        { label: 'FAQ', to: '/' },
        { label: 'Contact Us (Customers)', to: '/' },
        { label: 'Contact Us (Suppliers)', to: '/' },
        { label: 'About Juno', to: '/' },
        { label: 'Juno Reviews', to: '/' },
        { label: 'New This Week', to: '/' },
        { label: 'DJ & Studio Store', to: '/' },
        { label: 'My Charts', to: '/' },
        { label: 'Resubmit Card', to: '/' },
        { label: 'Feedback', to: '/' },
        { label: 'Privacy Policy', to: '/' },
        { label: 'Terms and Conditions', to: '/' },
        { label: 'Finance', to: '/' },
        { label: 'Juno Vinyl Distribution', to: '/' },
        { label: 'Juno Marketing and PR department', to: '/' },
        { label: 'Promote your label / releases', to: '/' },
      ],
      departments: [
        { label: 'Juno Reviews', to: '/' },
        { label: 'Gift certificates', to: '/' },
        { label: 'Create a chart', to: '/' },
        { label: 'Represses', to: '/' },
        { label: 'Juno images', to: '/' },
        { label: 'Full label list', to: '/' },
        { label: 'Top Labels', to: '/' },
        { label: 'Portable Juno Player', to: '/' },
      ],
      myJuno: [
        { label: 'My Artists', to: '/' },
        { label: 'My Back-In-Stock Alerts', to: '/' },
        { label: 'My Labels', to: '/' },
        { label: 'My Account', to: '/' },
        { label: 'My Wishlist', to: '/' },
        { label: 'My Charts', to: '/' },
        { label: 'My New Release E-mails', to: '/' },
        { label: 'My Order History', to: '/' },
        { label: 'My Coming Soon Alerts', to: '/' },
      ],
      socialLinks: [
        { icon: ['fab', 'facebook-f'], label: 'Facebook', to: '/' },
        { icon: ['fab', 'twitter'], label: 'Twitter', to: '/' },
        { icon: ['fab', 'instagram'], label: 'Instagram', to: '/' },
        { icon: ['fab', 'soundcloud'], label: 'Soundcloud', to: '/' },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
