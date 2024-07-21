// schemas/slide.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'slide',
  type: 'object',
  title: 'Slide',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Numero sezione',
    },

    {
      name: 'justify',
      type: 'string',
      title: 'Allinea contenuti',
      options: {
        list: [
          { title: 'a sinistra', value: 'sinistra' },
          { title: 'a destra', value: 'destra' },
          { title: 'al centro', value: 'centro' },
          { title: 'giustifica', value: 'giustifica' },
        ],
        initialValue: 'sinistra',
      },
      validation: Rule => Rule.required().error('Questo campo è obbligatorio.'),
    },

    {
      name: 'fixed_height',
      type: 'string',
      title: 'Altezza fissa',
      options: {
        list: [
          { title: 'auto', value: 'auto' },
          { title: '60%', value: '60%' },
          { title: '70%', value: '70%' },
          { title: '80%', value: '80%' },
          { title: 'max', value: 'max' },
        ],
        initialValue: 'auto',
      },
    },

    defineField({
      name: 'images',
      type: 'array',
      title: 'Immagini',
      of: [

              /* {
                type: 'image',
                options: {
                  hotspot: true,
                },
              }, */


              {
                name: 'imageWithOption',
                type: 'object',
                title: 'Image with Option',
                fields: [
                  defineField({
                    name: 'image',
                    type: 'image',
                    title: 'Immagine',
                    options: {
                      hotspot: true,
                    },
                  }),
                  defineField({
                    name: 'image_2',
                    type: 'image',
                    title: 'Immagine 2 (opzionale, se l’immagine cambia)',
                    options: {
                      hotspot: true,
                    },
                  }),
                  defineField({
                    name: 'image_3',
                    type: 'image',
                    title: 'Immagine 3 (opzionale, se l’immagine cambia)',
                    options: {
                      hotspot: true,
                    },
                  }),
                  defineField({
                    name: 'image_width',
                    type: 'string',
                    title: 'Larghezza Immagine',
                    options: {
                      list: [
                        { title: '15%', value: '15%' },
                        { title: '20%', value: '20%' },
                        { title: '25%', value: '25%' },
                        { title: '30%', value: '30%' },
                        { title: '35%', value: '35%' },
                        { title: '40%', value: '40%' },
                        { title: '45%', value: '45%' },
                        { title: '50%', value: '50%' },
                        { title: '55%', value: '55%' },
                        { title: '60%', value: '60%' },
                        { title: '65%', value: '65%' },
                      ],
                      initialValue: '15%',
                      //layout: 'radio',
                    },
                    validation: Rule => Rule.required().error('Questo campo è obbligatorio.'),
                  }),
                  {
                    name: 'margin_left',
                    type: 'string',
                    title: 'Margine sinistro',
                    options: {
                      list: [
                        { title: 'nessuno', value: 'left-0' },
                        { title: 'minimo', value: 'left-20' },
                        { title: 'doppio', value: 'left-40' },
                        { title: 'massimo', value: 'left-max' },
                      ],
                      initialValue: 'left-0',
                    },
                  },
                  {
                    name: 'margin_right',
                    type: 'string',
                    title: 'Margine Destro',
                    options: {
                      list: [
                        { title: 'nessuno', value: 'right-0' },
                        { title: 'minimo', value: 'right-20' },
                        { title: 'doppio', value: 'right-40' },
                        { title: 'massimo', value: 'right-max' },
                      ],
                      initialValue: 'right-0',
                    },
                  },
                  {
                    name: 'margin_top',
                    type: 'string',
                    title: 'Margine Superiore',
                    options: {
                      list: [
                        { title: 'nessuno', value: 'top-0' },
                        { title: 'minimo', value: 'top-20' },
                        { title: 'massimo', value: 'top-max' },
                      ],
                      initialValue: 'top-auto',
                    },
                  },
                  {
                    name: 'margin_bottom',
                    type: 'string',
                    title: 'Margine Inferiore',
                    options: {
                      list: [
                        { title: 'nessuno', value: 'bottom-0' },
                        { title: 'minimo', value: 'bottom-20' },
                        { title: 'massimo', value: 'bottom-max' },
                      ],
                      initialValue: 'bottom-auto',
                    },
                  },
                ],
              },

      ],
    }),
  ],
})
