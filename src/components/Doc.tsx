import React from "react";
import { RedocStandalone } from "redoc";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Doc(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <RedocStandalone
      spec={siteConfig.customFields.apiSpec as object}
      options={{
        scrollYOffset: ".navbar", // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
        hideDownloadButton: true,
        showObjectSchemaExamples: true,

        theme: {
          colors: {
            primary: {
              main: "var(--ifm-color-primary)",
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
              backgroundColor: "var(--ifm-code-background)",
            },
          },
          sidebar: {
            width: "300px", // about the same as the sidebar in the docs area, for consistency
          },
          rightPanel: {
            backgroundColor: "#880808",
          },
        },
      }}
    />
  );
}
