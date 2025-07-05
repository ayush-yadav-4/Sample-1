# TrustSend - Secure P2P Payment Insurance Platform

TrustSend is a cutting-edge fintech platform that provides AI-powered insurance for peer-to-peer payments, protecting users from fraud and transaction risks.

## 🚀 Features

- **Real-Time Transaction Coverage**: Instant insurance protection for each transaction
- **Dynamic Pricing Model**: Risk-adjusted insurance fees based on transaction safety
- **AI-Powered Fraud Detection**: Advanced algorithms to mitigate transaction risks
- **Seamless API Integration**: Easy integration with P2P and insurance platforms
- **User Authentication**: Secure signup/signin with JWT tokens
- **Blog Management**: Full-featured blog system for content marketing
- **Admin Dashboard**: Complete admin panel for managing content and users
- **Responsive Design**: Mobile-first design with dark mode support

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: Custom JWT-based auth system
- **Database**: MongoDB with native driver
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/trustsend.git
   cd trustsend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Update the values in `.env.local`:
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/trustsend
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Local MongoDB
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `trustsend`
3. The application will automatically create collections as needed

### MongoDB Atlas (Recommended for production)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and update `MONGODB_URI` in `.env.local`

## 🔐 Authentication

The application uses a custom JWT-based authentication system:

- **Signup**: `/signup` - Create new user accounts
- **Signin**: `/signin` - User authentication
- **Admin**: `/admin` - Admin panel access

### Default Admin Credentials
- Username: `admin`
- Password: `admin123`

**⚠️ Important**: Change these credentials in production!

## 📝 Blog System

The platform includes a full-featured blog system:

- **Public Blog**: `/blogs` - View published blog posts
- **Admin Management**: `/admin/blogs` - Create, edit, and manage blog posts
- **Rich Content**: Support for HTML content, tags, and featured images
- **SEO Friendly**: Slug-based URLs and meta tags

## 🎨 UI Components

Built with shadcn/ui components:
- Responsive design
- Dark mode support
- Accessible components
- Consistent styling

## 📱 Pages Structure

\`\`\`
/                 - Landing page with hero section
/how-it-works     - Feature explanations
/pricing          - Pricing plans (For Users)
/investors        - Investor information
/partnership      - Partnership opportunities
/blogs            - Blog listing page
/blogs/[slug]     - Individual blog posts
/contact          - Contact information
/signup           - User registration
/signin           - User authentication
/admin            - Admin dashboard
/admin/blogs      - Blog management
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
\`\`\`env
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
NEXTAUTH_URL=https://your-domain.com
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-secure-admin-password
\`\`\`

## 🔧 Development

### Available Scripts
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

### Project Structure
\`\`\`
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── admin/          # Admin pages
│   ├── blogs/          # Blog pages
│   └── ...             # Other pages
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   └── ...            # Custom components
├── lib/               # Utility functions
│   ├── auth.ts        # Authentication logic
│   ├── mongodb.ts     # Database connection
│   └── ...            # Other utilities
└── public/            # Static assets
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email info@trustsend.ai or join our community discussions.

## 🔒 Security

- All passwords are hashed using bcryptjs
- JWT tokens for secure authentication
- Environment variables for sensitive data
- Input validation and sanitization
- HTTPS recommended for production

---

Built with ❤️ by the TrustSend team
