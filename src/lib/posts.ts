export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	content: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { data: {}, content: raw };

	const data: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const colonIdx = line.indexOf(':');
		if (colonIdx === -1) continue;
		const key = line.slice(0, colonIdx).trim();
		let value = line.slice(colonIdx + 1).trim();
		// Strip surrounding quotes
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		data[key] = value;
	}
	return { data, content: match[2].trim() };
}

// Eagerly import all markdown files in src/lib/posts/ as raw strings.
// To add a new post, simply drop a .md file in that directory.
const rawFiles = import.meta.glob<string>('./posts/*.md', { query: '?raw', import: 'default', eager: true });

export const posts: Post[] = Object.entries(rawFiles)
	.map(([path, raw]) => {
		const slug = path.split('/').pop()!.replace('.md', '');
		const { data, content } = parseFrontmatter(raw);
		return {
			slug,
			title: data.title,
			date: data.date,
			description: data.description,
			content
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

