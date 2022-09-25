import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { RedocStandalone } from "redoc";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <RedocStandalone
          spec={siteConfig.customFields.apiSpec as object}
          options={{
            hideDownloadButton: true,
            showObjectSchemaExamples: true,
            scrollYOffset: ".navbar", // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
            theme: {
              colors: {
                primary: {
                  main: "#25c2a0",
                },
              },
              typography: {
                fontSize: "var(--ifm-font-size-base)",
                lineHeight: "var(--ifm-line-height-base)",
                fontFamily: "var(--ifm-font-family-base)",
                headings: {
                  fontFamily: "var(--ifm-font-family-base)",
                  fontWeight: "var(--ifm-heading-font-weight)",
                },
                code: {
                  lineHeight: "var(--ifm-pre-line-height)",
                  fontFamily: "var(--ifm-font-family-monospace)",
                },
              },
              rightPanel: {
                backgroundColor: "#52606D",
                servers: {
                  overlay: {
                    backgroundColor: "#323f4b",
                    // textColor: string;
                  },
                  url: {
                    backgroundColor: "#52606d",
                  },
                },
              },
              sidebar: {
                width: "300px", // about the same as the sidebar in the docs area, for consistency
              },
            },
          }}
        />
      </main>
    </Layout>
  );
}
