import { type SchemaTypeDefinition } from "sanity";

import { contact } from "./contact";
import localeString from "./localeString";
import { localeText } from "./localeText";
import { pageContent } from "./pageContent";
import { presenterType } from "./presenterType";
import { project } from "./project";
import { service } from "./service";
import { serviceDetail } from "./serviceDetail";
import { servicesPage } from "./servicesPage";
import { uniqueApproach } from "./uniqueApproach";

import { blogPost } from "./blogPost";
import menu from "./menu";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contact,
    localeString,
    localeText,
    pageContent,
    presenterType,
    project,
    service,
    serviceDetail,
    servicesPage,
    uniqueApproach,

    blogPost,
    menu,
  ],
};
