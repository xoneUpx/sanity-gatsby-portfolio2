export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6175bc185d6fd0f6fd67386c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-u9ewqfkb',
                  apiId: 'aa31d0c0-192a-46f6-b787-2cd6b5facd9a'
                },
                {
                  buildHookId: '6175bc18fce61202f356f8d8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-oi44sbxb',
                  apiId: '5cb1995b-5990-4eea-a670-2a04bdeb5081'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xoneUpx/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-oi44sbxb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
