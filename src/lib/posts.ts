import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/** Frontmatter fields required in every blog post. */
export interface PostFrontmatter {
    title: string;
    date: string; // YYYY-MM-DD
    summary: string;
    tags: string[];
    sources: string[];
}

export interface Post {
    slug: string;
    frontmatter: PostFrontmatter;
    content: string; // raw MDX body (without frontmatter)
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * List every .mdx post in content/blog/, sorted newest-first.
 * Files starting with _ (e.g. _template.mdx) are excluded.
 */
export function getAllPosts(): Post[] {
    if (!fs.existsSync(POSTS_DIR)) return [];

    const files = fs.readdirSync(POSTS_DIR).filter(
        (f) => f.endsWith('.mdx') && !f.startsWith('_'),
    );

    const posts: Post[] = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
        const { data, content } = matter(raw);

        return {
            slug,
            frontmatter: data as PostFrontmatter,
            content,
        };
    });

    // Newest first
    posts.sort(
        (a, b) =>
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime(),
    );

    return posts;
}

/**
 * Get a single post by its slug (filename without .mdx).
 * Returns null if not found.
 */
export function getPostBySlug(slug: string): Post | null {
    const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filepath)) return null;

    const raw = fs.readFileSync(filepath, 'utf-8');
    const { data, content } = matter(raw);

    return {
        slug,
        frontmatter: data as PostFrontmatter,
        content,
    };
}
