import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_2-dkPZoT.mjs';
import './Code_D0KzgkL3.mjs';
import 'clsx';

const frontmatter = {
  "title": "FAQ",
  "sidebar": {
    "order": 5
  },
  "lang": "fr"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contribuer",
    "text": "Contribuer"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Plus d’informations bientôt.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"contribuer\">Contribuer</h2><a class=\"sl-anchor-link\" href=\"#contribuer\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section intitulée « Contribuer »</span></a></div>\n<p>En attendant que davantage de détails soient disponibles, voici ce que vous pouvez faire :</p>\n<ul>\n<li>Partager vos idées ou vos conseils et soutenir ce projet.</li>\n<li>Suggérer des corrections de code ou de documentation.</li>\n<li>Créer un fork de ce projet et essayer de l’utiliser.</li>\n</ul>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/fr/doc/how-to.mdx/";
const file = "/home/darkone/src/nixos-conf/doc/src/content/docs/fr/doc/how-to.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/darkone/src/nixos-conf/doc/src/content/docs/fr/doc/how-to.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
