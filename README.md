# AyrisTech - Technology Solutions Company

<div align="center">
  <img src="./public/ayris_tech_logo.png" alt="AyrisTech Logo" width="200"/>
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
  ![Sanity](https://img.shields.io/badge/Sanity-3.91.0-F03E2F?style=flat-square&logo=sanity)
</div>

## About AyrisTech

AyrisTech is a Turkish technology company established in 2024, specializing in cutting-edge technology solutions. We help businesses unleash their potential through the power of technology and ensure their success in the digital world.

### 🎯 Our Mission

To unleash the potential of businesses through the power of technology and ensure their success in the digital world.

### 🚀 Our Vision

To become a globally recognized brand as Turkey's leading technology company.

### 💼 Our Values

- **Innovation**: Embracing cutting-edge technologies
- **Quality**: Delivering excellence in every project
- **Customer Satisfaction**: Putting clients first
- **Continuous Improvement**: Always evolving and growing

## 🛠️ Our Services

### 1. 🤖 AI Solutions

- Machine Learning model development
- Natural Language Processing (NLP)
- Computer Vision & Image Recognition
- Chatbots & Virtual Assistants
- Predictive Analytics
- Recommendation Systems
- AI-powered automation

**Technologies**: Python, TensorFlow, PyTorch, OpenAI GPT, AWS SageMaker

### 2. ⛓️ Blockchain Solutions

- NFT Marketplace development
- Smart Contract development
- DeFi Protocol development
- Cryptocurrency wallets
- DAO (Decentralized Organizations)

**Technologies**: Ethereum, Solidity, Web3.js, Polygon, Binance Smart Chain

### 3. 🌐 Full-Stack Web Development

- Frontend to backend development
- Modern web technologies
- Responsive design
- Progressive web apps

### 4. 📱 Mobile App Development

- iOS and Android native apps
- AI-powered mobile applications
- Cross-platform development

### 5. 🎮 Unity Game Development

- 2D/3D game development
- Mobile games
- VR/AR experiences
- Interactive experiences
- Multiplayer games

### 6. 🎯 Steam Game Publishing

- Game publishing on Steam platform
- Marketing and distribution services
- Community management

### 7. 🎨 UI/UX Design

- User experience design
- Modern interface design
- User-centered design approach

### 8. 📈 Social Media Management

- Social media strategy
- Content creation
- Brand management
- Digital marketing

## 📊 Our Stats

- **50+** Completed Projects
- **25+** Happy Clients
- **3+** Years Experience
- **8+** Technology Areas

## 🛠️ Technical Stack

### Frontend & Framework

- **Next.js 15** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Content Management

- **Sanity CMS** for content management
- **Sanity Studio** for content editing
- Support for localized content (Turkish/English)

### Backend & Database

- **Supabase** for backend services
- **Sanity** as headless CMS
- **TypeScript** for type safety

### Key Features

- ✅ **Multilingual support** (Turkish/English)
- ✅ **Responsive design** across all devices
- ✅ **SEO optimization** with metadata management
- ✅ **Project portfolio** with categorized case studies
- ✅ **Blog system** for content marketing
- ✅ **Contact forms** and business inquiries
- ✅ **Service-specific landing pages**

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository

```bash
git clone https://github.com/ayrisdev/AyrisTech_Main.git
cd ayristech
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Runs the app in development mode with Turbopack
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check code quality

## 🏗️ Project Structure

```
ayristech/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Internationalized routes
│   ├── services/                # Service pages
│   │   ├── ai-solutions/
│   │   ├── blockchain-solutions/
│   │   ├── fullstack-web-development/
│   │   ├── mobile-app-development/
│   │   ├── unity-game-development/
│   │   ├── steam-game-publishing/
│   │   ├── ui-ux-design/
│   │   └── social-media-management/
│   ├── projects/                # Project portfolio
│   ├── blog/                    # Blog system
│   ├── contact/                 # Contact page
│   └── about/                   # About page
├── components/                   # Reusable components
├── sanity/                      # Sanity CMS configuration
├── lib/                         # Utility functions
├── hooks/                       # Custom React hooks
├── content/                     # Static content (policies, terms)
└── public/                      # Static assets
```

## 🌐 Internationalization

The website supports both Turkish and English languages using `next-intl`:

- **Turkish**: `/tr/` routes
- **English**: `/en/` routes

Content is managed through Sanity CMS with localized fields for both languages.

## 📝 Content Management

### Sanity CMS Schema

The project uses Sanity CMS with the following schema types:

- **Projects**: Portfolio items with categories, images, and statistics
- **Services**: Service descriptions with icons and ordering
- **Blog Posts**: Multilingual blog content
- **Contact**: Contact form submissions
- **Page Content**: Dynamic page content management

### Accessing Sanity Studio

Visit `/studio` to access the Sanity Studio for content management.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📞 Contact

- **Website**: [ayristech.com](https://ayristech.com)
- **Email**: info@ayristech.com
- **Location**: Turkey

## 📄 License

This project is proprietary and confidential. All rights reserved by AyrisTech.

---

<div align="center">
  <p>Made with ❤️ by AyrisTech Team</p>
  <p>© 2024 AyrisTech. All rights reserved.</p>
</div>
