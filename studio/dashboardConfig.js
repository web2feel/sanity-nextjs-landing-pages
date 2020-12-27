export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fe82d3e82357578426a402f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-245jrmzo',
                  apiId: '7033e21a-47ab-4246-81db-6c05bf4901e4'
                },
                {
                  buildHookId: '5fe82d3fd3fff9f159fecea6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v5914awa',
                  apiId: '3b01a2db-cca3-43e8-83cd-50f19c53b797'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/web2feel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v5914awa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
