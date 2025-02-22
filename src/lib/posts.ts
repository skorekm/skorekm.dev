export type Post = {
  slug: string
  date: string
  title: string
  excerpt: string
  content: string
  tags: string[]
}

export const posts: Post[] = [
  {
    slug: "art-of-minimalism",
    date: "January 1, 2024",
    title: "The Art of Minimalism in Digital Design",
    excerpt:
      "Exploring how minimalism in digital design can enhance user experience and create more meaningful interactions. This post delves into the principles of minimalistic design and its impact on modern web development.",
    content: `
      Minimalism in digital design is more than just a visual aesthetic—it's a fundamental approach to creating meaningful user experiences. By stripping away unnecessary elements and focusing on essential components, designers can create interfaces that are both beautiful and functional.

      The principles of minimalistic design have evolved significantly in the digital age. What started as a response to overcrowded interfaces has become a sophisticated approach to digital communication. Through careful consideration of spacing, typography, and interaction design, minimalism helps users focus on what truly matters.

      Modern web development has embraced minimalism not just for its visual appeal, but for its practical benefits. Simplified interfaces often lead to faster load times, better user engagement, and improved conversion rates. By prioritizing content and functionality, minimalistic design helps create websites that are both elegant and effective.
    `,
    tags: ["design", "minimalism", "ux"],
  },
  {
    slug: "finding-balance-in-typography",
    date: "January 2, 2024",
    title: "Finding Balance in Typography",
    excerpt:
      "A deep dive into the world of typography and how it shapes our digital reading experience. Understanding the subtle art of choosing and pairing fonts for maximum impact and readability.",
    content: `
      Typography is the cornerstone of digital communication, serving as both an art form and a practical tool for conveying information. The right typographic choices can dramatically improve readability, user engagement, and overall user experience.

      Choosing the perfect font combination requires understanding both the technical aspects of typography and the psychological impact different typefaces have on readers. From serif to sans-serif, each font family brings its own character and functionality to the design.

      Modern web typography has evolved to embrace both aesthetics and performance. With variable fonts and improved rendering technologies, designers now have more tools than ever to create beautiful, readable text that works across all devices and platforms.
    `,
    tags: ["typography", "design", "readability"],
  },
  {
    slug: "power-of-white-space",
    date: "January 3, 2024",
    title: "The Power of White Space",
    excerpt:
      "Exploring the psychological impact of white space in design and how it can be used to create more effective and engaging user interfaces.",
    content: `
      White space, also known as negative space, is one of the most powerful tools in a designer's arsenal. It's not just about leaving empty spaces—it's about creating breathing room that helps users process information more effectively.

      The psychological impact of white space cannot be understated. Proper use of spacing can reduce cognitive load, improve focus, and create a sense of sophistication in digital interfaces. It's the invisible force that guides users through their journey.

      In modern web design, white space has become increasingly important as users deal with more information than ever before. By carefully crafting the spacing between elements, designers can create interfaces that are both beautiful and functional.
    `,
    tags: ["whitespace", "design", "psychology"],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

