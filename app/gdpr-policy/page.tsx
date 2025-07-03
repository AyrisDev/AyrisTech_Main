"use client";

import React from "react";
import { usePathname } from "next/navigation";

const GDPRPolicyPage = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const content = {
    tr: {
      title: "GDPR Politikası",
      lastUpdated: "Son güncelleme: 15 Haziran 2025",
      sections: [
        {
          title: "1. GDPR'ye Giriş",
          content: `Genel Veri Koruma Yönetmeliği (GDPR), 25 Mayıs 2018'de Avrupa Birliği (AB) ve Avrupa Ekonomik Alanı (AEA) genelinde yürürlüğe giren kapsamlı bir gizlilik yasasıdır. Ayris Tech olarak, GDPR gerekliliklerine uymaya ve tüm kullanıcılarımızın ve müşterilerimizin kişisel verilerini korumaya kararlıyız.`
        },
        {
          title: "2. Bu Politikanın Kimlere Uygulandığı",
          content: `Bu GDPR Politikası şunlara uygulanır:
            <ul class="list-disc pl-6 mt-2">
              <li>Kişisel verilerini işlediğimiz AB/AEA sakinleri</li>
              <li>Hizmetlerimizi kullanırken AB/AEA'da bulunan kişiler</li>
              <li>Verilerinin AB/AEA faaliyetleriyle bağlantılı olarak işlendiği durumda konum fark etmeksizin müşteri ve kullanıcılarımız</li>
            </ul>`
        },
        {
          title: "3. Kişisel Veri İşleme Yasal Dayanağı",
          content: `GDPR kapsamında, kişisel verilerinizi yalnızca yasal dayanağımız olduğunda işleriz:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Rıza (Madde 6(1)(a)):</strong> İletişim formları aracılığıyla gönüllü olarak bilgi sağladığınızda</li>
              <li><strong>Sözleşme (Madde 6(1)(b)):</strong> Hizmet sunarken sözleşmeli yükümlülüklerimizi yerine getirmek için</li>
              <li><strong>Meşru Menfaat (Madde 6(1)(f)):</strong> Hizmetlerimizi iyileştirmek ve müşterilerle iletişim kurmak için</li>
              <li><strong>Yasal Yükümlülük (Madde 6(1)(c)):</strong> Geçerli yasalara uymak için</li>
            </ul>`
        },
        {
          title: "4. GDPR Kapsamındaki Haklarınız",
          content: `GDPR kapsamında veri sahibi olarak aşağıdaki haklara sahipsiniz:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Erişim Hakkı (Madde 15):</strong> Kişisel verilerinizi işleyip işlemediğimizin teyidini talep etme ve bu verilerin bir kopyasını alma hakkınız</li>
              <li><strong>Düzeltme Hakkı (Madde 16):</strong> Yanlış kişisel verilerin düzeltilmesini talep etme hakkınız</li>
              <li><strong>Silme Hakkı (Madde 17):</strong> "Unutulma hakkı" - belirli koşullar altında kişisel verilerinizin silinmesini talep etme hakkınız</li>
              <li><strong>İşlemeyi Kısıtlama Hakkı (Madde 18):</strong> Belirli koşullar altında verilerinizin nasıl kullanıldığını sınırlama hakkınız</li>
              <li><strong>Veri Taşınabilirliği Hakkı (Madde 20):</strong> Verilerinizi başka bir sorumluya iletme hakkınız</li>
              <li><strong>İtiraz Etme Hakkı (Madde 21):</strong> İşlemeye itiraz etme hakkınız</li>
            </ul>`
        },
        {
          title: "5. Haklarınızı Nasıl Kullanırsınız",
          content: `GDPR haklarınızı kullanmak için:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>E-posta:</strong> privacy@ayristech.com</li>
              <li><strong>İletişim formu:</strong> Web sitemizdeki iletişim formu aracılığıyla</li>
              <li><strong>Yazılı talep:</strong> İstanbul, Türkiye adresimize gönderin</li>
            </ul>
            <p class="mt-4"><strong>Yanıt süresi:</strong> Talebinizi 30 gün içinde yanıtlayacağız. Karmaşık durumlarda, bu süreyi 60 gün daha uzatabiliriz.</p>`
        },
        {
          title: "6. Tasarım ve Varsayılan Olarak Veri Koruma",
          content: `Süreçlerimiz boyunca veri koruma ilkelerini uygularız:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Veri Minimizasyonu:</strong> Yalnızca gerekli kişisel verileri toplar ve işleriz</li>
              <li><strong>Amaç Sınırlaması:</strong> Verileri yalnızca toplandığı amaçlar için kullanırız</li>
              <li><strong>Doğruluk:</strong> Verilerin doğru ve güncel olmasını sağlarız</li>
              <li><strong>Saklama Sınırlaması:</strong> Verileri yalnızca gerekli olduğu sürece saklarız</li>
              <li><strong>Güvenlik:</strong> Uygun teknik ve organizasyonel önlemler uygularız</li>
            </ul>`
        },
        {
          title: "7. Uluslararası Veri Transferleri",
          content: `Kişisel verileri AB/AEA dışına transfer ettiğimizde, şunlar aracılığıyla yeterli koruma sağlarız:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Yeterlilik Kararları:</strong> Avrupa Komisyonu tarafından yeterli kabul edilen ülkelere transferler</li>
              <li><strong>Standart Sözleşme Hükümleri:</strong> AB onaylı sözleşme koşulları</li>
              <li><strong>Rıza:</strong> Transfere açıkça rıza gösterdiğinizde</li>
            </ul>`
        },
        {
          title: "8. Veri İhlali Bildirimi",
          content: `Kişisel veri ihlali durumunda:
            <ul class="list-disc pl-6 mt-2">
              <li>İlgili denetleyici makamı 72 saat içinde bilgilendireceğiz</li>
              <li>İhlal yüksek risk oluşturuyorsa etkilenen kişileri gecikmeksizin bilgilendireceğiz</li>
              <li>Tüm veri ihlallerinin detaylı kayıtlarını tutarız</li>
            </ul>`
        },
        {
          title: "9. Denetleyici Makam",
          content: `GDPR'yi ihlal ettiğimize inanıyorsanız, yerel denetleyici makama şikayette bulunma hakkınız vardır:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Türkiye için:</strong> Kişisel Verileri Koruma Kurumu (KVKK)</li>
              <li><strong>Web sitesi:</strong> www.kvkk.gov.tr</li>
            </ul>`
        },
        {
          title: "10. İletişim Bilgileri",
          content: `GDPR ile ilgili sorularınız için:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>E-posta:</strong> privacy@ayristech.com</li>
              <li><strong>Adres:</strong> İstanbul, Türkiye</li>
              <li><strong>Telefon:</strong> +90 (555) 123 45 67</li>
            </ul>`
        }
      ]
    },
    en: {
      title: "GDPR Policy",
      lastUpdated: "Last updated: June 15, 2025",
      sections: [
        {
          title: "1. Introduction to GDPR",
          content: `The General Data Protection Regulation (GDPR) is a comprehensive privacy law that took effect on May 25, 2018, throughout the European Union (EU) and European Economic Area (EEA). At Ayris Tech, we are committed to complying with GDPR requirements and protecting the personal data of all our users and clients.`
        },
        {
          title: "2. Who This Policy Applies To",
          content: `This GDPR Policy applies to:
            <ul class="list-disc pl-6 mt-2">
              <li>EU/EEA residents whose personal data we process</li>
              <li>Individuals located in the EU/EEA when using our services</li>
              <li>Our clients and users regardless of location when their data is processed in connection with EU/EEA activities</li>
            </ul>`
        },
        {
          title: "3. Legal Basis for Processing Personal Data",
          content: `Under GDPR, we only process your personal data when we have a legal basis to do so:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Consent (Article 6(1)(a)):</strong> When you voluntarily provide information through contact forms</li>
              <li><strong>Contract (Article 6(1)(b)):</strong> To perform our contractual obligations when providing services</li>
              <li><strong>Legitimate Interest (Article 6(1)(f)):</strong> To improve our services and communicate with clients</li>
              <li><strong>Legal Obligation (Article 6(1)(c)):</strong> To comply with applicable laws</li>
            </ul>`
        },
        {
          title: "4. Your Rights Under GDPR",
          content: `As a data subject under GDPR, you have the following rights:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Right of Access (Article 15):</strong> Request confirmation of whether we process your personal data and obtain a copy</li>
              <li><strong>Right to Rectification (Article 16):</strong> Request correction of inaccurate personal data</li>
              <li><strong>Right to Erasure (Article 17):</strong> "Right to be forgotten" - request deletion of your personal data under certain circumstances</li>
              <li><strong>Right to Restrict Processing (Article 18):</strong> Limit how we use your personal data under certain circumstances</li>
              <li><strong>Right to Data Portability (Article 20):</strong> Receive your personal data and transmit it to another controller</li>
              <li><strong>Right to Object (Article 21):</strong> Object to processing based on legitimate interests</li>
            </ul>`
        },
        {
          title: "5. How to Exercise Your Rights",
          content: `To exercise your GDPR rights, you can:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Email:</strong> privacy@ayristech.com</li>
              <li><strong>Contact form:</strong> Through our website contact form</li>
              <li><strong>Written request:</strong> Send to our address in Istanbul, Turkey</li>
            </ul>
            <p class="mt-4"><strong>Response timeframe:</strong> We will respond to your request within 30 days. In complex cases, we may extend this by an additional 60 days.</p>`
        },
        {
          title: "6. Data Protection by Design and Default",
          content: `We implement data protection principles throughout our processes:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Data Minimization:</strong> We only collect and process personal data that is necessary</li>
              <li><strong>Purpose Limitation:</strong> We use personal data only for the purposes for which it was collected</li>
              <li><strong>Accuracy:</strong> We take reasonable steps to ensure personal data is accurate and up-to-date</li>
              <li><strong>Storage Limitation:</strong> We retain personal data only as long as necessary</li>
              <li><strong>Security:</strong> We implement appropriate technical and organizational measures</li>
            </ul>`
        },
        {
          title: "7. International Data Transfers",
          content: `When we transfer personal data outside the EU/EEA, we ensure adequate protection through:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Adequacy Decisions:</strong> Transfers to countries deemed adequate by the European Commission</li>
              <li><strong>Standard Contractual Clauses:</strong> EU-approved contract terms for international transfers</li>
              <li><strong>Consent:</strong> When you explicitly consent to the transfer</li>
            </ul>`
        },
        {
          title: "8. Data Breach Notification",
          content: `In case of a personal data breach:
            <ul class="list-disc pl-6 mt-2">
              <li>We will notify the relevant supervisory authority within 72 hours</li>
              <li>We will inform affected individuals without undue delay if the breach poses a high risk</li>
              <li>We maintain detailed records of all data breaches</li>
            </ul>`
        },
        {
          title: "9. Supervisory Authority",
          content: `You have the right to lodge a complaint with your local supervisory authority if you believe we have violated GDPR:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>For Turkey:</strong> Personal Data Protection Authority (KVKK)</li>
              <li><strong>Website:</strong> www.kvkk.gov.tr</li>
            </ul>`
        },
        {
          title: "10. Contact Information",
          content: `For GDPR-related inquiries:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Email:</strong> privacy@ayristech.com</li>
              <li><strong>Address:</strong> Istanbul, Turkey</li>
              <li><strong>Phone:</strong> +90 (555) 123 45 67</li>
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

export default GDPRPolicyPage;