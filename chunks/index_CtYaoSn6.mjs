import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_2-dkPZoT.mjs';
import { c as $$Card, d as $$CardGrid } from './Code_D0KzgkL3.mjs';
import 'clsx';

const frontmatter = {
  "title": "Darkone NixOS Framework",
  "description": "Une configuration NixOS pour un cloud souverain, libre et sécurisé.",
  "template": "splash",
  "lang": "fr",
  "hero": {
    "tagline": "Mon cloud souverain, libre et sécurisé.",
    "image": {
      "file": "../../../assets/nix-logo.svg"
    },
    "actions": [{
      "text": "Introduction",
      "link": "/doc/introduction/",
      "icon": "right-arrow"
    }, {
      "text": "Code source du projet",
      "link": "https://github.com/darkone-linux/darkone-nixos-framework",
      "icon": "external",
      "variant": "minimal",
      "attrs": {
        "target": "_blank"
      }
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "Documentation",
      icon: "information",
      "set:html": "<ul>\n<li><a href=\"/fr/doc/introduction/\">Présentation du projet</a></li>\n<li><a href=\"/fr/doc/user-guide/\">Guide de l’utilisateur</a></li>\n<li><a href=\"/fr/doc/admin-guide/\">Guide de l’administrateur</a></li>\n<li><a href=\"/fr/doc/specifications/\">Specifications</a></li>\n<li><a href=\"/fr/doc/how-to/\">Foire aux Questions</a></li>\n</ul>"
    }), createVNode($$Card, {
      title: "References (en)",
      icon: "open-book",
      "set:html": "<ul>\n<li><a href=\"/ref/modules/#mixin-modules\">Modules Mixins</a></li>\n<li><a href=\"/ref/modules/#standard-modules\">Modules Standards</a></li>\n<li><a href=\"/ref/modules/#home-manager-modules\">Modules Home Manager</a></li>\n</ul>"
    }), createVNode($$Card, {
      title: "Informations",
      icon: "rocket",
      "set:html": "<ul>\n<li><a href=\"/fr/changelog/\">Notes de versions</a></li>\n<li><a href=\"/thanks/\">Merci ! (en)</a></li>\n</ul>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/fr/index.mdx/";
const file = "/home/darkone/src/nixos-conf/doc/src/content/docs/fr/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/darkone/src/nixos-conf/doc/src/content/docs/fr/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
