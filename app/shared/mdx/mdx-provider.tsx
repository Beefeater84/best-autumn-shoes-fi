import theme from "@/application/styles/syntax-theme.json";
import { MDXProvider } from "@mdx-js/react";
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import React, { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

type ReactNode = React.ReactNode;

function getTextContent(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (typeof node === "object" && "props" in node) {
    return getTextContent(
      (node as { props: { children: ReactNode } }).props.children,
    );
  }

  return "";
}

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

let highlighter: any = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      langs: ["javascript", "css", "html", "typescript"],
      themes: [theme],
    });
  }
  return highlighter;
}

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [html, setHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function highlight() {
      try {
        const highlighterInstance = await getHighlighter();
        const out = highlighterInstance.codeToHtml(code, {
          lang,
          theme: theme.name,
          transformers: [
            transformerColorizedBrackets({
              themes: {
                "Tailwind CSS": [
                  "var(--color-purple-200)",
                  "var(--color-cyan-300)",
                  "var(--color-blue-300)",
                  "var(--color-emerald-300)",
                  "var(--color-pink-300)",
                  "var(--color-amber-200)",
                ],
              },
            }),
          ],
        });
        setHtml(out);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHtml(`<pre><code>${code}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    }

    highlight();
  }, [code, lang]);

  if (isLoading) {
    return (
      <pre className="rounded bg-gray-100 p-4">
        <code>{code}</code>
      </pre>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

const IMAGE_DIMENSION_REGEX = /^[^|]+\|\d+x\d+$/;

const components = {
  h1: ({ children }: { children: ReactNode }) => {
    const id = generateId(getTextContent(children));
    return <h1 id={id}>{children}</h1>;
  },
  h2: ({ children }: { children: ReactNode }) => {
    const id = generateId(getTextContent(children));
    return <h2 id={id}>{children}</h2>;
  },
  h3: ({ children }: { children: ReactNode }) => {
    const id = generateId(getTextContent(children));
    return <h3 id={id}>{children}</h3>;
  },
  h4: ({ children }: { children: ReactNode }) => {
    const id = generateId(getTextContent(children));
    return <h4 id={id}>{children}</h4>;
  },
  img: ({ alt, ...props }: { alt?: string; src?: string }) => {
    const schemePlaceholder = encodeURIComponent("{scheme}");
    let width, height;

    if (alt && IMAGE_DIMENSION_REGEX.test(alt)) {
      [width, height] = alt.split("|")[1].split("x").map(Number);
      alt = alt.split("|")[0];
    }

    if (props.src?.includes(schemePlaceholder)) {
      return (
        <>
          <img
            {...props}
            alt={alt}
            width={width}
            height={height}
            src={props.src.replace(schemePlaceholder, "light")}
            className="dark:hidden"
          />
          <img
            {...props}
            alt={alt}
            width={width}
            height={height}
            src={props.src.replace(schemePlaceholder, "dark")}
            className="not-dark:hidden"
          />
        </>
      );
    } else {
      return <img {...props} alt={alt} width={width} height={height} />;
    }
  },
  pre: (props: { children: ReactNode }) => {
    const child = React.Children.only(props.children);
    if (!child || typeof child !== "object" || !("props" in child)) {
      return <pre>{props.children}</pre>;
    }

    const { children: code, className } = child.props;
    const lang = className ? className.replace("language-", "") : "";

    return <CodeBlock code={code} lang={lang} />;
  },
};

export function AppMDXProvider({ children }: { children: ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
