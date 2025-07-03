"use client";

import React from "react";
import { usePathname } from "next/navigation";

const PrivacyPolicyPage = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const content = {
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son güncelleme: 15 Haziran 2025",
      sections: [
        {
          title: "1. Giriş",
          content: `Ayris Tech ("biz," "bizim," veya "bize") olarak, gizliliğinizi korumaya ve kişisel bilgilerinizi sorumlu bir şekilde ele almaya kararlıyız. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklar.`
        },
        {
          title: "2. Topladığımız Bilgiler",
          content: `
            <h4 class="font-semibold mb-2">2.1 Bize Sağladığınız Bilgiler</h4>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>İletişim Bilgileri:</strong> Bizimle iletişime geçtiğinizde veya hizmetlerimizi talep ettiğinizde adınız, e-posta adresiniz, telefon numaranız</li>
              <li><strong>Proje Bilgileri:</strong> Proje gereksinimleriniz, iş ihtiyaçlarınız ve teknik özellikler hakkında detaylar</li>
              <li><strong>İletişim Kayıtları:</strong> E-postalar ve toplantı notları dahil sizinle yaptığımız iletişim kayıtları</li>
            </ul>
            <h4 class="font-semibold mb-2">2.2 Otomatik Olarak Toplanan Bilgiler</h4>
            <ul class="list-disc pl-6">
              <li><strong>Web Sitesi Kullanım Verisi:</strong> Ziyaret edilen sayfalar, sitede geçirilen süre, yönlendirme kaynakları</li>
              <li><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri, işletim sistemi</li>
              <li><strong>Çerezler ve Benzer Teknolojiler:</strong> Çerez Politikamızda detaylandırıldığı gibi</li>
            </ul>
          `
        },
        {
          title: "3. Bilgilerinizi Nasıl Kullanırız",
          content: `Kişisel bilgilerinizi şunlar için kullanırız:
            <ul class="list-disc pl-6 mt-2">
              <li>Hizmetlerimizi sağlamak ve geliştirmek</li>
              <li>Projeler ve hizmetler hakkında sizinle iletişim kurmak</li>
              <li>Sorularınızı ve destek taleplerinizi yanıtlamak</li>
              <li>Proje güncellemeleri ve teknik iletişim göndermek</li>
              <li>Kullanıcı deneyimini iyileştirmek için web sitesi kullanımını analiz etmek</li>
              <li>Yasal yükümlülüklere uymak</li>
            </ul>`
        },
        {
          title: "4. İşleme Yasal Dayanağı (GDPR)",
          content: `GDPR kapsamında, kişisel verilerinizi şu temellerde işleriz:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Rıza:</strong> Bilgileri gönüllü olarak sağladığınızda</li>
              <li><strong>Sözleşme:</strong> Hizmet anlaşmalarımızı yerine getirmek için</li>
              <li><strong>Meşru Menfaat:</strong> Hizmetlerimizi geliştirmek ve müşterilerle iletişim kurmak için</li>
              <li><strong>Yasal Yükümlülük:</strong> Geçerli yasalara uymak için</li>
            </ul>`
        },
        {
          title: "5. Veri Güvenliği",
          content: `Kişisel bilgilerinizi yetkisiz erişim, değiştirme, açıklama veya imha etmeye karşı korumak için uygun teknik ve organizasyonel önlemler uygularız.`
        },
        {
          title: "6. Haklarınız (GDPR)",
          content: `GDPR kapsamında şu haklara sahipsiniz:
            <ul class="list-disc pl-6 mt-2">
              <li>Kişisel verilerinize erişim</li>
              <li>Yanlış verileri düzeltme</li>
              <li>Verilerinizi silme (unutulma hakkı)</li>
              <li>İşlemeyi kısıtlama</li>
              <li>Veri taşınabilirliği</li>
              <li>İşlemeye itiraz etme</li>
              <li>Rızayı geri çekme</li>
            </ul>`
        },
        {
          title: "7. Bizimle İletişim",
          content: `Gizlilikle ilgili sorular için veya haklarınızı kullanmak için bizimle iletişime geçin:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>E-posta:</strong> privacy@ayristech.com</li>
              <li><strong>Adres:</strong> İstanbul, Türkiye</li>
            </ul>`
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 15, 2025",
      sections: [
        {
          title: "1. Introduction",
          content: `At Ayris Tech ("we," "our," or "us"), we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services.`
        },
        {
          title: "2. Information We Collect",
          content: `
            <h4 class="font-semibold mb-2">2.1 Information You Provide to Us</h4>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number when you contact us or request our services</li>
              <li><strong>Project Information:</strong> Details about your project requirements, business needs, and technical specifications</li>
              <li><strong>Communication Records:</strong> Records of our communications with you, including emails and meeting notes</li>
            </ul>
            <h4 class="font-semibold mb-2">2.2 Information Automatically Collected</h4>
            <ul class="list-disc pl-6">
              <li><strong>Website Usage Data:</strong> Pages visited, time spent on site, referral sources</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system</li>
              <li><strong>Cookies and Similar Technologies:</strong> As detailed in our Cookies Policy</li>
            </ul>
          `
        },
        {
          title: "3. How We Use Your Information",
          content: `We use your personal information to:
            <ul class="list-disc pl-6 mt-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send project updates and technical communications</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>`
        },
        {
          title: "4. Legal Basis for Processing (GDPR)",
          content: `Under GDPR, we process your personal data based on:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Consent:</strong> When you voluntarily provide information</li>
              <li><strong>Contract:</strong> To fulfill our service agreements</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and communicate with clients</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>`
        },
        {
          title: "5. Data Security",
          content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
        },
        {
          title: "6. Your Rights (GDPR)",
          content: `Under GDPR, you have the right to:
            <ul class="list-disc pl-6 mt-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase your data (right to be forgotten)</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>`
        },
        {
          title: "7. Contact Us",
          content: `For privacy-related questions or to exercise your rights, contact us at:
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

export default PrivacyPolicyPage;