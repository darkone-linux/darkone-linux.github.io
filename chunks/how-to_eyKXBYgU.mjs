import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_2-dkPZoT.mjs';
import './Code_D0KzgkL3.mjs';
import 'clsx';

/*

## Create a usb key (deprecated)

To create a crypted and portable NixOS system on a usb key:

<Steps>

1. Create a minimal NixOS system

```shell
cd /etc/nixos

# Nix-shell with required tools + root
sudo just create-key-shell

# Launch with the key name + peripheral
# -> IMPORTANT: all data in the peripheral will be lose
# -> This script will prompt the luks password
just create-key-on my-key /dev/sdb

# Quit the nix-shell
exit
```

2. Declare the new host

```yaml
# usr/config.yaml
hosts:
static:
- hostname: "my-key"
name: "My portable system"
profile: "portable"
users: [ "darkone", "gponcon" ]
```

```shell
# Generate, fix, check...
just clean
```

3. Apply the configuration

Launch the usb key system with any machine (click F12 at startup, then choose the usb key). The minimal installation have a special `nix` user used for maintenance.

```shell
# Network check: "my-key" must be accessible
ping my-key

# Register and install the new host
just install my-key
```

</Steps>

*/
const frontmatter = {
  "title": "How-to?",
  "sidebar": {
    "order": 4
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contribute",
    "text": "Contribute"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Comming soon section.</p>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"contribute\">Contribute</h2><a class=\"sl-anchor-link\" href=\"#contribute\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Contribute”</span></a></div>\n<p>Until more details are available, here’s what you can do:</p>\n<ul>\n<li>Share your thoughts or advice and support this project.</li>\n<li>Suggest code or documentation fixes.</li>\n<li>Fork this project and try to use it.</li>\n</ul>"
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
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/en/doc/how-to.mdx/";
const file = "/home/darkone/src/nixos-conf/doc/src/content/docs/en/doc/how-to.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/darkone/src/nixos-conf/doc/src/content/docs/en/doc/how-to.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
