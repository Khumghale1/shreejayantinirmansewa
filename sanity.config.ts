import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './app/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Construction Company',

  projectId: 'z1g1o05i',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
