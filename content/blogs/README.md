# Blog Content

Add your blog posts as `.md` (Markdown) files in this directory.

## File Format

Each blog post should have frontmatter metadata at the top:

```markdown
---
title: "Your Blog Post Title"
date: "2025-12-05"
author: "Author Name"
excerpt: "A brief summary of the blog post (150-200 characters)"
image: "/path-to-image.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Blog Content Here

Write your blog content in Markdown format...
```

## Required Fields

- **title**: The blog post title
- **date**: Publication date (YYYY-MM-DD format)
- **author**: Author name
- **excerpt**: Short description for listing page
- **image**: Featured image path (from /public folder)
- **tags**: Array of tags/categories

## Markdown Features Supported

- Headings (# ## ###)
- Bold (**text**)
- Italic (*text*)
- Links [text](url)
- Images ![alt](url)
- Code blocks ```language```
- Lists (ordered and unordered)
- Blockquotes

## File Naming

Use kebab-case for filenames:
- ✅ `getting-started-with-python.md`
- ✅ `devsecops-best-practices.md`
- ❌ `Getting Started with Python.md`

The filename becomes the URL slug: `/blog/getting-started-with-python`

## Adding a New Blog Post

1. Create a new `.md` file in this directory
2. Add frontmatter metadata
3. Write your content in Markdown
4. Rebuild the site: `npm run build`
5. The blog will automatically appear on `/blog` page

## Example

See existing blog posts in this directory for examples.
