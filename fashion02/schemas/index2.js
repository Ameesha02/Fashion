export const schemaTypes = [({
    name: 'product',
    title: 'banner',
    type: 'document',
    fields: [
        ({
            name: 'image',
            title: 'Image',
            type: 'array',
            of:[{type:'image'}],
            options: {
              hotspot: true,
            },
          }),
     ({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
     ({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      })
     ,
     
     ({
        name: 'price',
        title: 'Price',
        type: 'number',
      }),
      ({
        name: 'detail',
        title: 'Detail',
        type: 'string',
      }),
    //  ({
    //     name: 'bio',
    //     title: 'Bio',
    //     type: 'array',
    //     of: [
    //       {
    //         title: 'Block',
    //         type: 'block',
    //         styles: [{title: 'Normal', value: 'normal'}],
    //         lists: [],
    //       },
    //     ],
    //   }),
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  })]