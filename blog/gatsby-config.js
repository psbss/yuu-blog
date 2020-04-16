module.exports = {
  siteMetadata: {
    title: `Inquisitiveness`,
    author: {
      name: `Yuki Uehara`,
      summary: `20歳なのに東京に行くと25歳と言われる地方学生エンジニア`,
    },
    description: `地方で生活している学生の日々勉強した内容や参加したイベント情報など`,
    siteUrl: `https://blog.ue-y.me/`,
    social: {
      twitter: `psnzbss`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
          resolve: `gatsby-remark-sns-images`,
            options: {
              output: {
                directory: '',
                fileName: 'thumbnail.png'
              },
              image: {
                width: 1200,
                height: 630,
                backgroundColor: '#15202B',
              },
              style: {
                title: {
                  fontFamily: 'Noto Sans CJK JP',
                  fontColor: '#1DA1F2',
                  fontWeight: 'bold',
                  fontSize: 64,
                  paddingTop: 100,
                  paddingBottom: 200,
                  paddingLeft: 150,
                  paddingRight: 150,
                },
                author: {
                  fontFamily: 'Noto Sans CJK JP',
                  fontColor: '#DDDDDD',
                  fontWeight: '400',
                  fontSize: 42,
                }
              },
              meta: {
                title: '',
                author: 'Yuki Uehara(@psnzbss)'
              },
              fontFile: [
                {
                  path: require.resolve('./src/utils/fonts/NotoSansCJKjp-Bold.otf'),
                  family: 'Noto Sans CJK JP',
                  weight: 'bold',
                },
                {
                  path: require.resolve('./src/utils/fonts/NotoSansCJKjp-Regular.otf'),
                  family: 'Noto Sans CJK JP',
                  weight: '400',
                },
              ],
              iconFile: require.resolve('./content/assets/siteicon.png'),
              timeout: 10000,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-114688805-9`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inquisitiveness`,
        short_name: `Inquisitiveness`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1950b0`,
        display: `minimal-ui`,
        icon: `content/assets/siteicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.ue-y.me`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-use-dark-mode`,
  ],
}
