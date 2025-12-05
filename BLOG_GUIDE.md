# Blog System Guide

## ✅ Setup Complete!

Your markdown-based blog system is now live and working!

## 📁 Structure

```
content/blogs/          → Your blog posts (.md files)
lib/blog.ts            → Blog utility functions
app/blog/page.tsx      → Blog listing page
app/blog/[slug]/       → Dynamic blog detail pages
```

## 📝 How to Add a New Blog Post

### Step 1: Create a Markdown File

Create a new `.md` file in `content/blogs/` directory:

```bash
content/blogs/your-blog-title.md
```

### Step 2: Add Frontmatter

Every blog post must start with frontmatter (metadata):

```markdown
---
title: "Your Blog Post Title"
date: "2025-12-05"
author: "Miraclin Technologies"
excerpt: "A brief summary of your blog post (150-200 characters)"
image: "/hero-image.jpeg"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Blog Content Starts Here

Write your content in Markdown format...
```

### Step 3: Write Content

Use standard Markdown syntax:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered list
2. Item 2

[Link text](https://example.com)

![Image alt text](/path-to-image.jpg)

\`\`\`python
# Code block
print("Hello World")
\`\`\`
```

### Step 4: Build & Deploy

```bash
npm run build
```

The blog will automatically:
- Appear on `/blog` listing page
- Generate a detail page at `/blog/your-blog-title`
- Be included in sitemap.xml

## 🎨 Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | Blog post title | "Getting Started with Python" |
| `date` | ✅ Yes | Publication date (YYYY-MM-DD) | "2025-12-05" |
| `author` | ✅ Yes | Author name | "Miraclin Technologies" |
| `excerpt` | ✅ Yes | Short description | "Learn Python basics..." |
| `image` | ✅ Yes | Featured image path | "/hero-image.jpeg" |
| `tags` | ✅ Yes | Array of tags | ["Python", "Tutorial"] |

## 📂 File Naming Convention

Use **kebab-case** (lowercase with hyphens):

✅ Good:
- `getting-started-with-python.md`
- `devsecops-best-practices.md`
- `cloud-computing-career-guide.md`

❌ Bad:
- `Getting Started with Python.md`
- `DevSecOps_Best_Practices.md`
- `cloud computing guide.md`

The filename becomes the URL slug:
- `getting-started-with-python.md` → `/blog/getting-started-with-python`

## 🖼️ Adding Images

1. Place images in `/public` folder
2. Reference them in markdown:

```markdown
![Alt text](/your-image.jpg)
```

Or in frontmatter:
```yaml
image: "/your-image.jpg"
```

## 📋 Example Blog Posts

Check these examples in `content/blogs/`:
- `getting-started-with-python.md`
- `devsecops-best-practices.md`
- `cloud-computing-career-guide.md`

## 🚀 Features

✅ Automatic blog listing page
✅ Dynamic detail pages
✅ SEO metadata (title, description, OpenGraph)
✅ Tags/categories
✅ Automatic sitemap generation
✅ Responsive design
✅ Code syntax highlighting
✅ Markdown rendering

## 🔧 Customization

### Change Blog Styling

Edit `app/blog/[slug]/page.tsx` - look for the `prose` classes:

```tsx
className="prose prose-lg max-w-none prose-headings:text-gray-900..."
```

### Modify Blog Card Layout

Edit `app/blog/page.tsx` - modify the grid and card structure.

## 📊 Current Blogs

Your site currently has **3 sample blogs**:
1. Getting Started with Python Programming
2. DevSecOps Best Practices for 2025
3. Cloud Computing Career Guide: AWS vs Azure in 2025

## 🎯 Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 URLs

- Blog listing: `https://miracl.in/blog`
- Blog detail: `https://miracl.in/blog/[slug]`

## ✨ That's It!

Just create `.md` files in `content/blogs/` and rebuild. The system handles everything else automatically!
