export const layout = "layouts/post.vto";
export const type = "post";

// URL propre : /journal/<nom-du-fichier>/
export function url(page) {
  return `/journal/${page.data.basename}/`;
}
