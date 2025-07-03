export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Menu Title',
      type: 'localeString',
      description: 'The title of the menu (e.g., "Main Menu", "Footer Menu")',
    },
    {
      name: 'identifier',
      title: 'Menu Identifier',
      type: 'string',
      description: 'Unique identifier for this menu (e.g., "main-menu", "footer-menu")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'localeString',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Internal path (e.g., "/about") or external URL',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              description: 'Display order of menu item',
            },
            {
              name: 'isActive',
              title: 'Is Active',
              type: 'boolean',
              initialValue: true,
              description: 'Whether this menu item should be displayed',
            },
            {
              name: 'submenu',
              title: 'Submenu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'submenuItem',
                  title: 'Submenu Item',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'localeString',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: 'openInNewTab',
                      title: 'Open in New Tab',
                      type: 'boolean',
                      initialValue: false,
                    },
                    {
                      name: 'order',
                      title: 'Order',
                      type: 'number',
                    },
                    {
                      name: 'isActive',
                      title: 'Is Active',
                      type: 'boolean',
                      initialValue: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Menu Identifier',
      name: 'identifierAsc',
      by: [{ field: 'identifier', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'identifier',
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Untitled Menu',
        subtitle: subtitle,
      };
    },
  },
};