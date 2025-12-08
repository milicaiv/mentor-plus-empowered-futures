import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl text-base font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:shadow-hover hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:shadow-hover hover:-translate-y-0.5",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/5 hover:-translate-y-0.5",
        secondary:
          "bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 hover:-translate-y-0.5",
        ghost: "hover:bg-muted/80 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // MENTORA PLUS specific variants
        // Yellow CTA - Primary action button
        highlight:
          "bg-highlight text-highlight-foreground shadow-glow hover:-translate-y-1 hover:brightness-105 btn-glow font-bold",
        // Purple accent button
        accent:
          "bg-accent text-accent-foreground shadow-soft hover:shadow-hover hover:-translate-y-0.5 hover:brightness-105",
        // Hero primary CTA
        hero:
          "bg-highlight text-highlight-foreground shadow-glow hover:-translate-y-1.5 hover:brightness-105 btn-glow text-lg px-10 py-5 font-bold",
        // Hero secondary outline
        heroOutline:
          "border-2 border-primary/40 bg-card/90 backdrop-blur-sm text-primary hover:bg-primary/5 hover:-translate-y-1.5 text-lg px-10 py-5 font-semibold",
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-10 rounded-xl px-5 text-sm",
        lg: "h-14 rounded-2xl px-9 text-lg",
        xl: "h-16 rounded-3xl px-12 text-xl",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
