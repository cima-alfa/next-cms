"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PanelProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title?: string;
  Icon?: unknown;
}

export default function PrimaryNavLink({
  href,
  title,
  Icon,
  className,
  ...rest
}: PanelProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      title={title}
      className="
                grid gap-1 grid-cols-[3rem_auto] h-[3rem] 
                bg-slate-300 dark:bg-slate-700 rounded font-semibold text-[.925rem] transition-colors 
                hover:bg-sky-300 active:!bg-sky-400 hover:text-slate-950 dark:hover:bg-sky-700 dark:active:!bg-sky-600 dark:hover:text-slate-50
                [&[data-current]]:bg-sky-300 [&[data-current]]:text-slate-950 dark:[&[data-current]]:bg-sky-700 dark:[&[data-current]]:text-slate-50
                "
      data-current={pathname === href ? "" : null}
      {...rest}
    >
      <span className="grid place-self-center justify-items-center w-1/2 aspect-square">
        {!!Icon && (Icon as React.ReactNode)}
      </span>
      <span className="self-center">{title}</span>
    </Link>
  );
}
