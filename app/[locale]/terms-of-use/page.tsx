"use client";

import React from "react";
import { usePathname } from "next/navigation";

const TermsOfUsePage = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const content = {
    tr: {
      title: "Kullanım Koşulları",
      lastUpdated: "Son güncelleme: 15 Haziran 2025",
      sections: [
        {
          title: "1. Koşulların Kabulü",
          content: `Ayris Tech web sitesine ve hizmetlerine erişerek ve bunları kullanarak, bu anlaşmanın hüküm ve koşullarını kabul etmiş ve bunlara bağlı kalmayı kabul etmiş olursunuz. Yukarıdakilere uymayı kabul etmiyorsanız, lütfen bu hizmeti kullanmayın.`
        },
        {
          title: "2. Hizmetlerimiz Hakkında",
          content: `Ayris Tech teknoloji danışmanlığı, yazılım geliştirme, AI çözümleri, blockchain geliştirme ve ilgili dijital hizmetler sunar. Hizmetlerimiz şunları içerir ancak bunlarla sınırlı değildir:
            <ul class="list-disc pl-6 mt-2">
              <li>Web ve mobil uygulama geliştirme</li>
              <li>AI ve makine öğrenmesi çözümleri</li>
              <li>Blockchain ve kripto para projeleri</li>
              <li>UI/UX tasarım hizmetleri</li>
              <li>Oyun geliştirme</li>
              <li>Dijital pazarlama ve SEO</li>
              <li>Teknik danışmanlık ve proje yönetimi</li>
            </ul>`
        },
        {
          title: "3. Kullanım Lisansı",
          content: `Ayris Tech'in web sitesindeki materyallerin bir kopyasını yalnızca kişisel, ticari olmayan geçici görüntüleme için geçici olarak indirme izni verilmiştir. Bu bir lisans verilmesi olup, mülkiyet devri değildir ve bu lisans kapsamında şunları yapamazsınız:
            <ul class="list-disc pl-6 mt-2">
              <li>Materyalleri değiştirmek veya kopyalamak</li>
              <li>Materyalleri herhangi bir ticari amaç için veya halka açık gösterim için kullanmak</li>
              <li>Web sitesindeki herhangi bir yazılımı tersine mühendislik yapmaya çalışmak</li>
              <li>Materyallerden telif hakkı veya diğer mülkiyet notlarını kaldırmak</li>
            </ul>`
        },
        {
          title: "4. Hizmet Koşulları",
          content: `
            <h4 class="font-semibold mb-2">4.1 Proje Katılımı</h4>
            <ul class="list-disc pl-6 mb-4">
              <li>Tüm projeler başlamadan önce imzalı bir anlaşma gerektirir</li>
              <li>Proje kapsamı, zaman çizelgesi ve teslimatlar açıkça tanımlanacaktır</li>
              <li>Proje kapsamındaki değişiklikler ek maliyet ve zamana neden olabilir</li>
            </ul>
            <h4 class="font-semibold mb-2">4.2 Ödeme Koşulları</h4>
            <ul class="list-disc pl-6 mb-4">
              <li>Ödeme koşulları bireysel proje anlaşmalarında belirtilecektir</li>
              <li>Geç ödemeler proje askıya alınmasına neden olabilir</li>
              <li>Geri ödemeler bireysel anlaşmaların koşullarına tabidir</li>
            </ul>
            <h4 class="font-semibold mb-2">4.3 Fikri Mülkiyet</h4>
            <ul class="list-disc pl-6">
              <li>Müşteri kendi tescilli bilgi ve verilerinin sahipliğini elinde tutar</li>
              <li>Ayris Tech genel metodolojiler ve know-how üzerindeki haklarını saklı tutar</li>
              <li>Üçüncü taraf lisansları ve araçları kendi koşullarına tabidir</li>
            </ul>
          `
        },
        {
          title: "5. Kullanıcı Sorumlulukları",
          content: `Şunları kabul ediyorsunuz:
            <ul class="list-disc pl-6 mt-2">
              <li>Doğru ve eksiksiz bilgi sağlamak</li>
              <li>Hesap kimlik bilgilerinin gizliliğini korumak</li>
              <li>Hizmetlerimizi yasadışı veya yetkisiz amaçlar için kullanmamak</li>
              <li>Fikri mülkiyet haklarına saygı göstermek</li>
              <li>Tüm geçerli yasa ve düzenlemelere uymak</li>
            </ul>`
        },
        {
          title: "6. Yasaklı Kullanımlar",
          content: `Hizmetlerimizi şunlar için kullanamazsınız:
            <ul class="list-disc pl-6 mt-2">
              <li>Herhangi bir yasadışı amaç için veya başkalarını yasadışı eylemler yapmaya teşvik etmek</li>
              <li>Uluslararası, federal, il veya eyalet düzenlemelerini, kurallarını, yasalarını veya yerel yönetmelikleri ihlal etmek</li>
              <li>Bizim veya başkalarının fikri mülkiyet haklarını ihlal etmek</li>
              <li>Taciz etmek, kötüye kullanmak, hakaret etmek, zarar vermek, karalamak, iftira atmak, aşağılamak, korkutmak veya ayrımcılık yapmak</li>
              <li>Yanlış veya yanıltıcı bilgi göndermek</li>
            </ul>`
        },
        {
          title: "7. Sorumluluk Sınırlamaları",
          content: `Ayris Tech veya tedarikçileri hiçbir durumda Ayris Tech'in web sitesindeki materyallerin kullanımından veya kullanılamamasından kaynaklanan zararlardan (veri veya kar kaybından kaynaklanan zararlar veya iş kesintisi nedeniyle oluşan zararlar dahil ancak bunlarla sınırlı olmamak üzere) sorumlu olmayacaktır.`
        },
        {
          title: "8. Geçerli Hukuk",
          content: `Bu hüküm ve koşullar Türkiye yasalarına göre yönetilir ve yorumlanır ve o eyaletteki veya konumdaki mahkemelerin münhasır yargı yetkisini geri alınamaz şekilde kabul edersiniz.`
        },
        {
          title: "9. İletişim Bilgileri",
          content: `Bu Kullanım Koşulları hakkında sorularınız varsa, bizimle iletişime geçin:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>E-posta:</strong> legal@ayristech.com</li>
              <li><strong>Adres:</strong> İstanbul, Türkiye</li>
            </ul>`
        }
      ]
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: June 15, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By accessing and using the Ayris Tech website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
        },
        {
          title: "2. About Our Services",
          content: `Ayris Tech provides technology consulting, software development, AI solutions, blockchain development, and related digital services. Our services include but are not limited to:
            <ul class="list-disc pl-6 mt-2">
              <li>Web and mobile application development</li>
              <li>AI and machine learning solutions</li>
              <li>Blockchain and cryptocurrency projects</li>
              <li>UI/UX design services</li>
              <li>Game development</li>
              <li>Digital marketing and SEO</li>
              <li>Technical consulting and project management</li>
            </ul>`
        },
        {
          title: "3. Use License",
          content: `Permission is granted to temporarily download one copy of the materials on Ayris Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            <ul class="list-disc pl-6 mt-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>`
        },
        {
          title: "4. Service Terms",
          content: `
            <h4 class="font-semibold mb-2">4.1 Project Engagement</h4>
            <ul class="list-disc pl-6 mb-4">
              <li>All projects require a signed agreement before commencement</li>
              <li>Project scope, timeline, and deliverables will be clearly defined</li>
              <li>Changes to project scope may result in additional costs and time</li>
            </ul>
            <h4 class="font-semibold mb-2">4.2 Payment Terms</h4>
            <ul class="list-disc pl-6 mb-4">
              <li>Payment terms will be specified in individual project agreements</li>
              <li>Late payments may result in project suspension</li>
              <li>Refunds are subject to the terms of individual agreements</li>
            </ul>
            <h4 class="font-semibold mb-2">4.3 Intellectual Property</h4>
            <ul class="list-disc pl-6">
              <li>Client retains ownership of their proprietary information and data</li>
              <li>Ayris Tech retains rights to general methodologies and know-how</li>
              <li>Third-party licenses and tools are subject to their respective terms</li>
            </ul>
          `
        },
        {
          title: "5. User Responsibilities",
          content: `You agree to:
            <ul class="list-disc pl-6 mt-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Not use our services for illegal or unauthorized purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>`
        },
        {
          title: "6. Prohibited Uses",
          content: `You may not use our services:
            <ul class="list-disc pl-6 mt-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>`
        },
        {
          title: "7. Limitations of Liability",
          content: `In no event shall Ayris Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ayris Tech's website.`
        },
        {
          title: "8. Governing Law",
          content: `These terms and conditions are governed by and construed in accordance with the laws of Turkey, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.`
        },
        {
          title: "9. Contact Information",
          content: `If you have any questions about these Terms of Use, please contact us at:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Email:</strong> legal@ayristech.com</li>
              <li><strong>Address:</strong> Istanbul, Turkey</li>
            </ul>`
        }
      ]
    }
  };

  const t = isEnglish ? content.en : content.tr;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600 mb-8 italic">{t.lastUpdated}</p>
          
          <div className="space-y-8">
            {t.sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;