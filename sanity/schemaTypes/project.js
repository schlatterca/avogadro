// schemas/project.js
import { defineField, defineType } from 'sanity'
import slide from './slide'  // Import the slide schema

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titolo',
      description: `Titolo del progetto.`,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Link',
      options: {
        source: 'title',
      },
      description: `Link dal quale sarà possibile raggiungere il progetto (es. www.miosito.it/progetti/LINK).`,
    },


    {
      name: 'homepage_image',
      type: 'image',
      title: 'Immagine in Homepage',
      options: {
          hotspot: true,
      },
      description: `Caricare qui l’immagine di copertina del progetto, da inserire in Homepage.`,
    },
    {
      name: 'homepage_image_mobile',
      type: 'image',
      title: 'Immagine in Homepage (Mobile)',
      options: {
          hotspot: true,
      },
      description: `Immagine in Homepage su schermi mobile.`,
    },
    { name: 'gridSpan',
        title: 'Posizione in Homepage',
        type: 'object',
        fields: [
            {
            name: 'columnStart',
            title: 'Colonna di inizio',
            type: 'number'
            },
            {
            name: 'columnSpan',
            title: 'Larghezza (numero di colonne)',
            type: 'number'
            },
            {
            name: 'rowStart',
            title: 'Riga di inizio',
            type: 'number'
            },
            {
            name: 'rowSpan',
            title: 'Altezza (numero di righe)',
            type: 'number'
            }
        ],
        description: `Posizione dell’articolo all’interno della griglia in Homepage.
            La griglia è composta di 12 colonne. Il numero di righe varia
            in base alla quantità di progetti.`,
        validation: Rule => Rule.required().error('Questo campo è obbligatorio.')
    },





    {
        name: 'citta',
        type: 'string',
        title: 'Città',
        description: `Opzionale: la città di riferimento, da inserire sopra la descrizione del progetto.`,
    },
    {
        name: 'cover_image',
        type: 'image',
        title: 'Copertina',
        options: {
            hotspot: true,
        },
        description: `Caricare qui la prima immagine che comparirà dentro il progetto.`,
    },
    {
        name: 'planimetria',
        type: 'image',
        title: 'Planimetria',
        options: {
            hotspot: true,
        },
        description: `Caricare qui un’immagine della planimetria.`,
    },
    {
        name: 'description',
        type: 'text',
        title: 'Descrizione',
        description: `Breve descrizione del progetto. Inserire <br> per andare a capo.`,
    },
    {
        name: 'altre_info',
        type: 'string',
        title: 'Altre info',
        description: `Opzionale: le informazioni da mostrare sotto alla descrizione,
            all’interno della pagina del progetto (es. “realizzato con…”).`,
    },
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      of: [{ type: 'slide' }],  // Referencing the slide type
    },
  ],
})
