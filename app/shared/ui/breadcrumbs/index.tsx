import { clsx } from "clsx";
import type React from "react";
import { Link, type LinkProps } from "react-router";

export function Breadcrumbs(props: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-x-2 text-sm/6"
      {...props}
    />
  );
}

export function BreadcrumbHome() {
  return (
    <Link to="/" className="min-w-0 shrink-0 text-gray-950 dark:text-white">
      Compass
    </Link>
  );
}

export function Breadcrumb({
  to,
  children,
  className,
}: {
  to?: LinkProps["to"];
  children: React.ReactNode;
  className?: string;
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={clsx(
          className,
          "min-w-0 truncate text-gray-950 dark:text-white",
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <span
      className={clsx(
        className,
        "min-w-0 truncate text-gray-950 last:text-gray-600 dark:last:text-gray-400",
      )}
    >
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <span className={clsx(className, "text-gray-950/25 dark:text-white/25")}>
      /
    </span>
  );
}
