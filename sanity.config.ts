'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {
  presentationTool,
  defineDocuments,
  defineLocations,
} from "sanity/presentation";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import schema from './src/sanity/schemas'
import { pageStructure } from '@/sanity/plugins/settings'
import settings from '@/sanity/schemas/singletons/settings'
import navigation from '@/sanity/schemas/singletons/navigation'
import footer from '@/sanity/schemas/singletons/footer'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/",
            filter: `_type == "page" && isHomePage == true`
          },
          {
            route: "/:slug",
            filter: `_type == "page" && slug.current == $slug && (isHomePage == false || isHomePage == null)`
          }
        ]),
        locations: {
          settings: defineLocations({
            message: "This document is used on all pages",
            tone: "caution"
          }),
          navigation: defineLocations({
            message: "This document is used on all pages",
            tone: "caution"
          }),
          footer: defineLocations({
            message: "This document is used on all pages",
            tone: "caution"
          })
        }
      },
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),
    structureTool({ structure: pageStructure([settings, navigation, footer]) }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
