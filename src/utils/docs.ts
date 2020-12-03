import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export function getDocBySlug(slug: string) {
  console.log(process.cwd())
  const realSlug = slug.replace(/\.md$/, '')
  const docsDirectory = join(process.cwd())
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}
