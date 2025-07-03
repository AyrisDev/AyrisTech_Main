import { type SchemaTypeDefinition } from "sanity";

import { service } from "./schemaTypes/service";
import { project } from "./schemaTypes/project";
import { contact } from "./schemaTypes/contact";
import { pageContent } from "./schemaTypes/pageContent";
import { uniqueApproach } from "./schemaTypes/uniqueApproach";
import menu from "./schemaTypes/menu";
import localeString from "./schemaTypes/localeString";
import { blogPost } from "./schemaTypes/blogPost";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    service,
    project,
    contact,
    pageContent,
    localeString,
    menu,
    uniqueApproach,
    blogPost,
  ],
};
