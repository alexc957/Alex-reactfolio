// Internal articles have been split into two pieces:
//   src/data/internalArticles.js  — metadata manifest (slug, title, date, description, image, keywords)
//   public/articles/*.md           — markdown body fetched at runtime
//
// External articles are now in:
//   src/data/externalArticles.js   — {title, date, description, image, link}
//
// To add a new internal article:
//   1. Add an entry to internalArticles.js with a unique slug
//   2. Create public/articles/{slug}.md with the article body in Markdown
//
// To add a new external article:
//   1. Add an entry to externalArticles.js with a link field (URL starting with http)
