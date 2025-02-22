import fs from "fs";
import path from "path";
import matter from "gray-matter";


/**
 * A function that loads the MDX content for a specific file based on its `id`.
 *
 * Example usage:
 * If `contentType = 'case-studies'` and `id = 'unicef-hope'`, it will load `unicef-hope.mdx` from the src/content/case-studies directory.
 */
export const getMdxById = async (contentType: string, id: string) => {
  const mdxDirectory = path.join(
    process.cwd(),
    'src/content/',
    contentType,
  );

  const fullPath = path.join(mdxDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
};