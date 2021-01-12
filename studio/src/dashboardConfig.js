export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ffd2e49790ebf6e793b2ee3',
                  title: 'Sanity Studio',
                  name: 'gatsby-studio-vfycovw4',
                  apiId: '4652e5cc-7a7a-4846-a37a-11a68311a931'
                },
                {
                  buildHookId: '5ffd2e49860cdd70ca2e33b4',
                  title: 'Blog Website',
                  name: 'gatsby-web-k3prb57r',
                  apiId: 'a90942d2-c0e1-445f-b867-4d179489e88e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prokopious/Gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-web-k3prb57r.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
