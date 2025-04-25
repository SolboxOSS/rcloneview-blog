import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "RcloneView Support Center",
  tagline:
    "RcloneView is a web-based file manager for Rclone. It provides a user-friendly interface to manage files across various cloud storage services and local storage.",
  favicon: "img/favicon.ico",

  stylesheets: [
    "/assets/css/styles.css", // static/assets/css/styles.css 기준
  ],

  // Set the production url of your site here
  url: "https://rlconeview.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/support/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        /* docs preset을 tutorials 와 guides를 플러그인 방식으로 적용하기 위해 제거함.
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        */
        blog: false, // Blog 설정을 사용하지 않으므로 삭제
        /* 사용하지 않아 삭제        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        */
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  // Tutorials와 guide에 docs 프리셋 적용을 위해 플러그인 추가
  plugins: [
    // Tutorials plugin 등록
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorials",
        sidebarPath: require.resolve("./sidebars.tutorials.ts"),
        editUrl:
          "https://github.com/SolboxOSS/rcloneview-blog/edit/main/tutorials/",
      },
    ],

    // Guides plugin 등록
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars.guides.ts"),
        editUrl:
          "https://github.com/SolboxOSS/rcloneview-blog/edit/main/guides/",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    /* src/theme/Layout/index.tsx 로 대체하므로 삭제함.
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "RcloneView",
      logo: {
        alt: "RcloneView Logo",
        src: "img/logo.svg",
      },
      //

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },

        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },

      ],
    },
*/
    algolia: {
      appId: "2BCJWBRUUE",
      apiKey: "5852e3ef5183ededf4f07a27df662081",
      indexName: "RcloneView", // Algolia에 등록된 인덱스 이름
      //   searchPagePath: "search", // 선택: 별도 검색 페이지 경로
    },

    /* footer 삭제함.
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  */

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
