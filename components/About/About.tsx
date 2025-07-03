"use client";

import { useState } from "react";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  CheckCircle,
  Globe,
} from "lucide-react";

interface AboutProps {
  language?: "tr" | "en";
}

export default function About({ language = "tr" }: AboutProps) {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    tr: {
      title: "Hakkımızda",
      subtitle: "Teknoloji ile geleceği şekillendiriyoruz",
      description:
        "AyrisTech olarak, 2024 yılından bu yana teknoloji dünyasında yenilikçi çözümler sunmaktayız. Müşterilerimizin dijital dönüşüm yolculuğunda yanlarında olarak, onların vizyonlarını gerçeğe dönüştürüyoruz.",

      tabs: {
        mission: {
          title: "Misyonumuz",
          content:
            "Teknolojinin gücüyle işletmelerin potansiyelini ortaya çıkarmak ve dijital dünyada başarılı olmalarını sağlamak.",
        },
        vision: {
          title: "Vizyonumuz",
          content:
            "Türkiye'nin önde gelen teknoloji şirketi olarak, global pazarda tanınan bir marka haline gelmek.",
        },
        values: {
          title: "Değerlerimiz",
          content:
            "İnovasyon, kalite, müşteri memnuniyeti ve sürekli gelişim ilkelerimizle hareket ediyoruz.",
        },
      },

      stats: [
        { number: "50+", label: "Tamamlanan Proje" },
        { number: "25+", label: "Mutlu Müşteri" },
        { number: "3+", label: "Yıllık Deneyim" },
        { number: "8+", label: "Teknoloji Alanı" },
      ],

      services: {
        title: "Hizmetlerimiz",
        items: [
          "AI & Machine Learning Çözümleri",
          "Blockchain Teknolojileri",
          "Full-Stack Web Geliştirme",
          "Mobil Uygulama Geliştirme",
          "UI/UX Tasarım",
          "Unity Oyun Geliştirme",
          "Sosyal Medya Yönetimi",
          "Steam Oyun Yayıncılığı",
        ],
      },

      team: {
        title: "Ekibimiz",
        description:
          "Deneyimli ve tutkulu bir ekiple, her projede mükemmelliği hedefliyoruz.",
        roles: [
          "Full-Stack Developers",
          "UI/UX Designers",
          "AI/ML Engineers",
          "Blockchain Developers",
          "Mobile App Developers",
          "Game Developers",
        ],
      },
    },

    en: {
      title: "About Us",
      subtitle: "Shaping the future with technology",
      description:
        "As AyrisTech, we have been providing innovative solutions in the technology world since 2024. We stand by our customers on their digital transformation journey and turn their visions into reality.",

      tabs: {
        mission: {
          title: "Our Mission",
          content:
            "To unleash the potential of businesses through the power of technology and ensure their success in the digital world.",
        },
        vision: {
          title: "Our Vision",
          content:
            "To become a globally recognized brand as Turkey's leading technology company.",
        },
        values: {
          title: "Our Values",
          content:
            "We act with the principles of innovation, quality, customer satisfaction and continuous improvement.",
        },
      },

      stats: [
        { number: "50+", label: "Completed Projects" },
        { number: "25+", label: "Happy Clients" },
        { number: "3+", label: "Years Experience" },
        { number: "8+", label: "Tech Areas" },
      ],

      services: {
        title: "Our Services",
        items: [
          "AI & Machine Learning Solutions",
          "Blockchain Technologies",
          "Full-Stack Web Development",
          "Mobile App Development",
          "UI/UX Design",
          "Unity Game Development",
          "Social Media Management",
          "Steam Game Publishing",
        ],
      },

      team: {
        title: "Our Team",
        description:
          "With an experienced and passionate team, we aim for excellence in every project.",
        roles: [
          "Full-Stack Developers",
          "UI/UX Designers",
          "AI/ML Engineers",
          "Blockchain Developers",
          "Mobile App Developers",
          "Game Developers",
        ],
      },
    },
  };

  const { title, subtitle, description, tabs, stats, services, team } =
    content[language];

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8 border-b">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 font-medium transition-colors duration-300 border-b-2 ${
                    activeTab === key
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-600 border-transparent hover:text-blue-600"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="text-center">
              <div className="mb-6">
                {activeTab === "mission" && (
                  <Target className="w-16 h-16 text-blue-600 mx-auto" />
                )}
                {activeTab === "vision" && (
                  <Globe className="w-16 h-16 text-blue-600 mx-auto" />
                )}
                {activeTab === "values" && (
                  <Award className="w-16 h-16 text-blue-600 mx-auto" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs[activeTab as keyof typeof tabs].title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {tabs[activeTab as keyof typeof tabs].content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {services.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.items.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {team.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8">{team.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.roles.map((role, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Lightbulb className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
