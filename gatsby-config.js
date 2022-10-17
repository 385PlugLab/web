module.exports = {
  siteMetadata: {
    title: `PLUG-LAB.COM`,
    siteUrl: `https://plug-lab.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Plug-Lab Theme`,
        short_name: `PlugLab`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
