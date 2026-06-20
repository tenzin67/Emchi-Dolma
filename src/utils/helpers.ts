`/**
 * Format a date to a human-readable string
 */
export function formatDate(date: Date | string, locale = 'en-AU'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Truncate text to a given character length, adding ellipsis
 */
export function truncateText(text: string, length = 150): string {
  if (text.length <= length) return text;
  return text.slice(0, length).replace(/\s+\S*$/, '') + '…';
}

/**
 * Convert a string to a URL-safe slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get a readable reading time estimate from content string
 */
export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
