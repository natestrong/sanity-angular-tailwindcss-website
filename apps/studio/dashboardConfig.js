export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'natestrong/sanity-angular-tailwindcss-website'
      }
    },
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
                  buildHookId: '60d3853707d33800d444ec97',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-qb8gqhib',
                  apiId: '4c2c8eea-85e3-4696-b096-1c152c5cac1c'
                },
                {
                  buildHookId: '60d38536f07d16009d7e8259',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-9wc42kg3',
                  apiId: '1dbe7d7d-2984-467c-b896-a6ff8af54fb1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/natestrong/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-9wc42kg3.netlify.app', category: 'apps'}
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
