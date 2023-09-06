export function filePath() {
  return function (tree, file) {
    const filepath = file.history[0]
    file.data.astro.frontmatter.filePath = filepath
  }
}
