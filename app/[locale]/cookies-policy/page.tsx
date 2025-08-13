"use client";

import React from "react";
import { usePathname } from "next/navigation";

const CookiesPolicyPage = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const content = {
    tr: {
      title: "Çerez Politikası",
      lastUpdated: "Son güncelleme: 15 Haziran 2025",
      sections: [
        {
          title: "1. Çerezler Nedir?",
          content: `Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınızda veya mobil cihazınızda saklanan küçük metin dosyalarıdır. Web sitelerinin daha verimli çalışmasını ve daha iyi bir kullanıcı deneyimi sağlamasının yanı sıra web sitesi sahiplerine bilgi sağlamak için yaygın olarak kullanılırlar.`
        },
        {
          title: "2. Çerezleri Nasıl Kullanırız",
          content: `Ayris Tech çerezleri şunlar için kullanır:
            <ul class="list-disc pl-6 mt-2">
              <li>Tercihlerinizi ve ayarlarınızı hatırlamak</li>
              <li>Web sitesi trafiğini ve kullanım kalıplarını analiz etmek</li>
              <li>Web sitesi işlevselliğini ve kullanıcı deneyimini iyileştirmek</li>
              <li>Kişiselleştirilmiş içerik ve hizmetler sağlamak</li>
              <li>Sosyal medya özelliklerini etkinleştirmek</li>
              <li>İlgili reklamları sunmak</li>
            </ul>`
        },
        {
          title: "3. Kullandığımız Çerez Türleri",
          content: `
            <h4 class="font-semibold mb-2">3.1 Temel Çerezler</h4>
            <p class="mb-4">Bu çerezler web sitesinin düzgün çalışması için gereklidir. Web sitesi bu çerezler olmadan düzgün çalışamaz.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Oturum yönetimi çerezleri</li>
              <li>Güvenlik çerezleri</li>
              <li>Yük dengeleme çerezleri</li>
            </ul>
            
            <h4 class="font-semibold mb-2">3.2 Performans Çerezleri</h4>
            <p class="mb-4">Bu çerezler web sitemizin nasıl çalıştığını iyileştirmemize yardımcı olur.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Google Analytics çerezleri</li>
              <li>Sayfa yükleme hızı izleme</li>
              <li>Hata takip çerezleri</li>
            </ul>
            
            <h4 class="font-semibold mb-2">3.3 İşlevsellik Çerezleri</h4>
            <p class="mb-4">Bu çerezler gelişmiş, daha kişisel özellikler sağlar.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Dil tercihi çerezleri</li>
              <li>Tema seçimi çerezleri</li>
              <li>Form otomatik doldurma çerezleri</li>
            </ul>
            
            <h4 class="font-semibold mb-2">3.4 Hedefleme/Reklam Çerezleri</h4>
            <p class="mb-4">Bu çerezler size daha uygun reklamları sunmak için kullanılır.</p>
            <ul class="list-disc pl-6">
              <li>Google Ads çerezleri</li>
              <li>Sosyal medya reklam çerezleri</li>
              <li>Yeniden hedefleme çerezleri</li>
            </ul>
          `
        },
        {
          title: "4. Üçüncü Taraf Çerezleri",
          content: `Aşağıdaki amaçlar için üçüncü taraf hizmet sağlayıcılarının web sitemizde çerez ayarlamasına izin verebiliriz:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Google Analytics:</strong> Web sitesi trafiğini analiz etmek için</li>
              <li><strong>Hotjar:</strong> Kullanıcı deneyimini iyileştirmek için</li>
              <li><strong>Facebook Pixel:</strong> Sosyal medya reklamcılığı için</li>
              <li><strong>Google Ads:</strong> Çevrimiçi reklam kampanyaları için</li>
            </ul>`
        },
        {
          title: "5. Çerez Yönetimi ve Kontrolü",
          content: `Çerezleri yönetmek için birkaç seçeneğiniz vardır:
            <h4 class="font-semibold mt-4 mb-2">Tarayıcı Ayarları</h4>
            <p class="mb-2">Çoğu web tarayıcısı ayarları aracılığıyla çerezleri kontrol etmenize olanak tanır:</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Tüm çerezleri engelleme</li>
              <li>Üçüncü taraf çerezleri engelleme</li>
              <li>Mevcut çerezleri silme</li>
              <li>Belirli web siteleri için tercihler belirleme</li>
            </ul>
            
            <h4 class="font-semibold mb-2">Çıkış Araçları</h4>
            <p class="mb-2">Şu adresleri ziyaret ederek hedefli reklamcılıktan çıkabilirsiniz:</p>
            <ul class="list-disc pl-6">
              <li>Digital Advertising Alliance: www.aboutads.info/choices</li>
              <li>Network Advertising Initiative: www.networkadvertising.org/choices</li>
              <li>European Interactive Digital Advertising Alliance: www.youronlinechoices.eu</li>
            </ul>`
        },
        {
          title: "6. Çerez Saklama",
          content: `Farklı çerezlerin farklı saklama süreleri vardır:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Oturum çerezleri:</strong> Tarayıcınızı kapattığınızda silinir</li>
              <li><strong>Kalıcı çerezler:</strong> Son kullanma tarihlerine kadar veya siz silene kadar kalır</li>
              <li><strong>Üçüncü taraf çerezleri:</strong> Üçüncü tarafın saklama politikası tarafından yönetilir</li>
            </ul>`
        },
        {
          title: "7. Bizimle İletişim",
          content: `Çerez kullanımımız hakkında sorularınız varsa, bizimle iletişime geçin:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>E-posta:</strong> privacy@ayristech.com</li>
              <li><strong>Adres:</strong> İstanbul, Türkiye</li>
            </ul>`
        }
      ]
    },
    en: {
      title: "Cookies Policy",
      lastUpdated: "Last updated: June 15, 2025",
      sections: [
        {
          title: "1. What Are Cookies?",
          content: `Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience, as well as to provide information to the website owners.`
        },
        {
          title: "2. How We Use Cookies",
          content: `Ayris Tech uses cookies to:
            <ul class="list-disc pl-6 mt-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality and user experience</li>
              <li>Provide personalized content and services</li>
              <li>Enable social media features</li>
              <li>Deliver relevant advertisements</li>
            </ul>`
        },
        {
          title: "3. Types of Cookies We Use",
          content: `
            <h4 class="font-semibold mb-2">3.1 Essential Cookies</h4>
            <p class="mb-4">These cookies are necessary for the website to function properly. The website cannot function properly without these cookies.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Session management cookies</li>
              <li>Security cookies</li>
              <li>Load balancing cookies</li>
            </ul>
            
            <h4 class="font-semibold mb-2">3.2 Performance Cookies</h4>
            <p class="mb-4">These cookies help us improve how our website works.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Google Analytics cookies</li>
              <li>Page load speed monitoring</li>
              <li>Error tracking cookies</li>
            </ul>
            
            <h4 class="font-semibold mb-2">3.3 Functionality Cookies</h4>
            <p class="mb-4">These cookies provide enhanced, more personal features.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Language preference cookies</li>
              <li>Theme selection cookies</li>
              <li>Form auto-fill cookies</li>
            </ul>
            
            <h4 class="font-semibold mb-2">3.4 Targeting/Advertising Cookies</h4>
            <p class="mb-4">These cookies are used to deliver advertisements that are more relevant to you.</p>
            <ul class="list-disc pl-6">
              <li>Google Ads cookies</li>
              <li>Social media advertising cookies</li>
              <li>Retargeting cookies</li>
            </ul>
          `
        },
        {
          title: "4. Third-Party Cookies",
          content: `We may allow third-party service providers to set cookies on our website for the following purposes:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Google Analytics:</strong> To analyze website traffic</li>
              <li><strong>Hotjar:</strong> To improve user experience</li>
              <li><strong>Facebook Pixel:</strong> For social media advertising</li>
              <li><strong>Google Ads:</strong> For online advertising campaigns</li>
            </ul>`
        },
        {
          title: "5. Cookie Management and Control",
          content: `You have several options to manage cookies:
            <h4 class="font-semibold mt-4 mb-2">Browser Settings</h4>
            <p class="mb-2">Most web browsers allow you to control cookies through their settings:</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            
            <h4 class="font-semibold mb-2">Opt-Out Tools</h4>
            <p class="mb-2">You can opt out of targeted advertising by visiting:</p>
            <ul class="list-disc pl-6">
              <li>Digital Advertising Alliance: www.aboutads.info/choices</li>
              <li>Network Advertising Initiative: www.networkadvertising.org/choices</li>
              <li>European Interactive Digital Advertising Alliance: www.youronlinechoices.eu</li>
            </ul>`
        },
        {
          title: "6. Cookie Retention",
          content: `Different cookies have different retention periods:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain until their expiration date or until you delete them</li>
              <li><strong>Third-party cookies:</strong> Governed by the third party's retention policy</li>
            </ul>`
        },
        {
          title: "7. Contact Us",
          content: `If you have questions about our use of cookies, please contact us at:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Email:</strong> privacy@ayristech.com</li>
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

export default CookiesPolicyPage;