"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { structure } from "@/sanity/structure";
import { schema } from "@/sanity/schema";

export default defineConfig({
  name: "default",
  title: "Ayris.Tech CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool({ structure }), visionTool()],
  basePath: "/studio",
  schema: {
    types: schema.types,
  },
});
