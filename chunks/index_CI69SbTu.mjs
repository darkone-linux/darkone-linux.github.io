import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_2-dkPZoT.mjs';
import { c as $$Card, d as $$CardGrid } from './Code_D0KzgkL3.mjs';
import 'clsx';

const frontmatter = {
  "title": "Darkone NixOS Framework",
  "description": "A multi-user, multi-host, multi-service configuration",
  "template": "splash",
  "lang": "en",
  "hero": {
    "tagline": "Multi-user. Multi-host. Multi-service.",
    "image": {
      "file": "../../../assets/nix-logo.svg"
    },
    "actions": [{
      "text": "Introduction",
      "link": "/en/doc/introduction/",
      "icon": "right-arrow"
    }, {
      "text": "Project sources",
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
      "set:html": "<ul>\n<li><a href=\"/en/doc/introduction/\">Introduction</a></li>\n<li><a href=\"/en/doc/specifications/\">Specifications</a></li>\n<li><a href=\"/en/doc/user-guide/\">User Guide</a></li>\n<li><a href=\"/en/doc/admin-guide/\">Admin Guide</a></li>\n<li><a href=\"/en/doc/how-to/\">How-to ?</a></li>\n</ul>"
    }), createVNode($$Card, {
      title: "References",
      icon: "open-book",
      "set:html": "<ul>\n<li><a href=\"/en/ref/modules/#mixin-modules\">Mixin Modules</a></li>\n<li><a href=\"/en/ref/modules/#standard-modules\">Standard Modules</a></li>\n<li><a href=\"/en/ref/modules/#home-manager-modules\">Home Manager Modules</a></li>\n</ul>"
    }), createVNode($$Card, {
      title: "Informations",
      icon: "rocket",
      "set:html": "<ul>\n<li><a href=\"/en/changelog/\">Changelog</a></li>\n<li><a href=\"/en/thanks/\">Thanks!</a></li>\n</ul>"
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
const url = "src/content/docs/en/index.mdx/";
const file = "/home/darkone/src/nixos-conf/doc/src/content/docs/en/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/darkone/src/nixos-conf/doc/src/content/docs/en/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
