// schemas/project.js
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'vision',
    type: 'document',
    title: 'Vision',
    fields: [
        {
        name: 'title',
        type: 'string',
        title: 'Titolo',
        },
        {
        name: 'slides',
        type: 'array',
        title: 'Slides',
        of: [{ 
            name: 'slides',
            type: 'object',
            title: 'Slides',
            fields: [
                {
                name: 'title',
                type: 'string',
                title: 'Titolo sezione',
                },
                {
                name: 'image',
                type: 'image',
                title: 'Immagine',
                options: {
                    hotspot: true,
                    },
                },
                {
                name: 'image_mobile',
                type: 'image',
                title: 'Immagine_mobile',
                options: {
                    hotspot: true,
                    },
                },
                {
                    name: 'description',
                    type: 'text',
                    title: 'Descrizione',
                    description: `Breve descrizione.`,
                },
            ]
            }],
        },
    ]
})
