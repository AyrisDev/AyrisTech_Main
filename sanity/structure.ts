import { StructureBuilder } from "sanity/desk";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title("İçerik")
    .items([
      S.listItem()
        .title("Sayfa İçerikleri")
        .child(
          S.documentList()
            .title("Sayfa İçerikleri")
            .filter('_type == "pageContent"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("pageContent")
            )
        ),
      S.divider(),
      S.listItem()
        .title("Menüler")
        .child(
          S.documentList()
            .title("Menüler")
            .filter('_type == "menu"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("menu")
            )
        ),
      S.divider(),
      S.listItem()
        .title("Hizmetler")
        .child(
          S.list()
            .title("Hizmetler Yönetimi")
            .items([
              S.listItem()
                .title("Hizmetler Sayfası")
                .child(
                  S.documentList()
                    .title("Hizmetler Sayfası")
                    .filter('_type == "servicesPage"')
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("servicesPage")
                    )
                ),
              S.listItem()
                .title("Hizmet Listesi")
                .child(
                  S.documentList()
                    .title("Hizmet Listesi")
                    .filter('_type == "service"')
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("service")
                    )
                ),
              S.listItem()
                .title("Hizmet Detayları")
                .child(
                  S.documentList()
                    .title("Hizmet Detayları")
                    .filter('_type == "serviceDetail"')
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("serviceDetail")
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Projeler")
        .child(
          S.documentList()
            .title("Projeler")
            .filter('_type == "project"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("project")
            )
        ),
      S.listItem()
        .title("Unique Approach")
        .child(
          S.documentList()
            .title("Unique Approach")
            .filter('_type == "uniqueApproach"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("uniqueApproach")
            )
        ),
      S.divider(),
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog Yönetimi")
            .items([
              S.listItem()
                .title("Tüm Blog Yazıları")
                .child(
                  S.documentList()
                    .title("Tüm Blog Yazıları")
                    .filter('_type == "blogPost"')
                    .defaultOrdering([
                      { field: "publishedAt", direction: "desc" },
                    ])
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("blogPost")
                    )
                ),
              S.listItem()
                .title("Yayınlanan Yazılar")
                .child(
                  S.documentList()
                    .title("Yayınlanan Yazılar")
                    .filter('_type == "blogPost" && isPublished == true')
                    .defaultOrdering([
                      { field: "publishedAt", direction: "desc" },
                    ])
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("blogPost")
                    )
                ),
              S.listItem()
                .title("Taslak Yazılar")
                .child(
                  S.documentList()
                    .title("Taslak Yazılar")
                    .filter('_type == "blogPost" && isPublished == false')
                    .defaultOrdering([
                      { field: "_updatedAt", direction: "desc" },
                    ])
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("blogPost")
                    )
                ),
              S.listItem()
                .title("Öne Çıkan Yazılar")
                .child(
                  S.documentList()
                    .title("Öne Çıkan Yazılar")
                    .filter('_type == "blogPost" && isFeatured == true')
                    .defaultOrdering([
                      { field: "publishedAt", direction: "desc" },
                    ])
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("blogPost")
                    )
                ),
              S.divider(),
              S.listItem()
                .title("Kategoriye Göre")
                .child(
                  S.list()
                    .title("Kategoriler")
                    .items([
                      S.listItem()
                        .title("Teknoloji")
                        .child(
                          S.documentList()
                            .title("Teknoloji Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "technology"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("AI & Machine Learning")
                        .child(
                          S.documentList()
                            .title("AI & ML Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "ai-ml"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("Blockchain")
                        .child(
                          S.documentList()
                            .title("Blockchain Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "blockchain"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("Web Geliştirme")
                        .child(
                          S.documentList()
                            .title("Web Geliştirme Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "web-development"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("Mobil Geliştirme")
                        .child(
                          S.documentList()
                            .title("Mobil Geliştirme Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "mobile-development"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("UI/UX Tasarım")
                        .child(
                          S.documentList()
                            .title("UI/UX Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "ui-ux"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("Oyun Geliştirme")
                        .child(
                          S.documentList()
                            .title("Oyun Geliştirme Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "game-development"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("Dijital Pazarlama")
                        .child(
                          S.documentList()
                            .title("Dijital Pazarlama Yazıları")
                            .filter(
                              '_type == "blogPost" && category == "digital-marketing"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                      S.listItem()
                        .title("Genel")
                        .child(
                          S.documentList()
                            .title("Genel Yazılar")
                            .filter(
                              '_type == "blogPost" && category == "general"'
                            )
                            .defaultOrdering([
                              { field: "publishedAt", direction: "desc" },
                            ])
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),
      S.listItem()
        .title("İletişim Formu")
        .child(
          S.documentList()
            .title("İletişim Formu")
            .filter('_type == "contact"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("contact")
            )
        ),
    ]);
