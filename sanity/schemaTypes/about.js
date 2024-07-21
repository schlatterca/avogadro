import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titolo',
    },
    defineField({
      name: 'text_top',
      title: 'Testo in alto',
      type: 'blockContent',
    }),
    defineField({
      name: 'text_bottom',
      title: 'Testo in basso',
      type: 'blockContent',
    }),
    defineField({
      name: 'cover_image',
      type: 'image',
      title: 'Immagine',
      options: {
        hotspot: true,
      },
    }),
  ],
})
