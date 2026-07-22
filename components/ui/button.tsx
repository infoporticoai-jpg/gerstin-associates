import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-white hover:bg-navy-600 shadow-[0_10px_30px_-12px_rgba(15,34,51,0.55)] hover:-translate-y-0.5",
        accent:
          "bg-accent text-white hover:bg-accent-600 shadow-[0_10px_30px_-12px_rgba(179,30,43,0.55)] hover:-translate-y-0.5",
        outline:
          "border border-navy/25 text-navy hover:border-navy hover:bg-navy/[0.03]",
        ghost: "text-navy hover:bg-navy/[0.05]",
        light:
          "bg-white text-navy hover:bg-cream shadow-sm hover:-translate-y-0.5",
        "outline-light":
          "border border-white/40 text-white hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-sm",
        md: "h-11 px-6 text-[0.95rem] rounded-sm",
        lg: "h-13 px-8 py-3.5 text-base rounded-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  asChild?: boolean;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

/** Link styled as a button — for internal/external navigation. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export { buttonVariants };
