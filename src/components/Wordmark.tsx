export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <a
      href="#top"
      className="group flex min-w-0 items-baseline gap-2"
      aria-label="Heaven Furniture Mart — back to top"
    >
      <span
        className={
          tone === "light"
            ? "font-serif text-[1.375rem] leading-none tracking-tight text-ivory sm:text-2xl"
            : "font-serif text-[1.375rem] leading-none tracking-tight text-brown sm:text-2xl"
        }
      >
        Heaven
      </span>
      <span
        className={
          tone === "light"
            ? "eyebrow hidden text-ivory/60 lg:inline"
            : "eyebrow hidden text-muted-foreground lg:inline"
        }
      >
        Furniture Mart
      </span>
    </a>
  );
}
