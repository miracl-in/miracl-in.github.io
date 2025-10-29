# Miraclin Technologies - Static Website

A static frontend version of the Miraclin Technologies LMS application built with Next.js.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🚀 Static site generation for fast loading
- 📱 Mobile-friendly navigation
- ✨ Smooth animations and hover effects
- 🎯 Professional landing page sections
- 💼 Course showcase
- 📝 Student testimonials
- 📞 Contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

To create a static export:

```bash
npm run build
npm run export
# or
yarn build
yarn export
```

The static files will be generated in the `out/` directory.

## Project Structure

```
staticWeb/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Navbar.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero section
│   ├── FeaturesSection.tsx # Features grid
│   ├── HowItWorksSection.tsx # Process steps
│   ├── WhyChooseUsSection.tsx # Advantages
│   ├── AboutSection.tsx   # Company info
│   ├── CourseSection.tsx  # Course showcase
│   ├── FeedbackSection.tsx # Testimonials
│   ├── CTASection.tsx     # Call to action
│   └── Footer.tsx         # Footer
├── public/                # Static assets
└── package.json           # Dependencies
```

## Customization

### Colors & Branding

The design uses a blue-to-purple gradient theme. To customize:

1. Update the gradient colors in Tailwind classes:
   - `from-blue-600 to-purple-600`
   - `from-blue-700 to-purple-700`

2. Modify the logo in `components/Navbar.tsx` and `components/Footer.tsx`

### Content

- **Courses**: Edit the `courses` array in `components/CourseSection.tsx`
- **Testimonials**: Update the `feedbacks` array in `components/FeedbackSection.tsx`
- **Company Info**: Modify `components/AboutSection.tsx`
- **Features**: Edit arrays in respective section components

### Styling

- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Animations: CSS transitions and transforms

## Deployment

This static site can be deployed to:

- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Upload the `out/` folder contents
- **Any static hosting service**

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact Miraclin Technologies.