// src/components/Accordion/Accordion.tsx
import * as React from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Accordion/Accordion.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var AccordionContext = React.createContext(null);
function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion compound components must be used within <Accordion>");
  return ctx;
}
var AccordionItemContext = React.createContext(null);
function useAccordionItem() {
  const ctx = React.useContext(AccordionItemContext);
  if (!ctx) throw new Error("AccordionTrigger/Content must be used within <AccordionItem>");
  return ctx;
}
var Accordion = React.forwardRef(
  ({ className, type = "single", defaultValue, value, onValueChange, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState(() => {
      if (defaultValue) return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      return [];
    });
    const controlled = value !== void 0;
    const items = controlled ? Array.isArray(value) ? value : value ? [value] : [] : openItems;
    const toggle = React.useCallback(
      (itemValue) => {
        const next = type === "single" ? items.includes(itemValue) ? [] : [itemValue] : items.includes(itemValue) ? items.filter((v) => v !== itemValue) : [...items, itemValue];
        if (!controlled) setOpenItems(next);
        onValueChange?.(type === "single" ? next[0] ?? "" : next);
      },
      [items, type, controlled, onValueChange]
    );
    return /* @__PURE__ */ jsx(AccordionContext.Provider, { value: { openItems: items, toggle }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("divide-y divide-[--si-border-color]", className), ...props, children }) });
  }
);
Accordion.displayName = "Accordion";
var AccordionItem = React.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    const { openItems } = useAccordion();
    const isOpen = openItems.includes(value);
    return /* @__PURE__ */ jsx(AccordionItemContext.Provider, { value: { value, isOpen }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("py-0", className), ...props, children }) });
  }
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { toggle } = useAccordion();
  const { value, isOpen } = useAccordionItem();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => toggle(value),
      className: cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-[--si-heading-color] transition-all hover:text-[--si-primary] [&[aria-expanded=true]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "h-4 w-4 shrink-0 text-[--si-gray-400] transition-transform duration-200",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
          }
        )
      ]
    }
  );
});
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen } = useAccordionItem();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid transition-all duration-200 ease-in-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      ),
      children: /* @__PURE__ */ jsx("div", { ref, className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 text-sm text-[--si-body-color]", className), ...props, children }) })
    }
  );
});
AccordionContent.displayName = "AccordionContent";

// src/components/Alert/Alert.tsx
import * as React2 from "react";
import { cva } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-[--si-body-bg] border-[--si-border-color] text-[--si-body-color]",
        primary: "bg-[--si-primary-faded] border-[--si-primary]/20 text-[--si-primary]",
        success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800/50 dark:text-green-300",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800/50 dark:text-yellow-300",
        danger: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800/50 dark:text-red-300",
        info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800/50 dark:text-blue-300"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Alert = React2.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props })
);
Alert.displayName = "Alert";
var AlertTitle = React2.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
    "h5",
    {
      ref,
      className: cn("mb-1 font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2("p", { ref, className: cn("text-sm leading-relaxed", className), ...props }));
AlertDescription.displayName = "AlertDescription";

// src/components/AspectRatio/AspectRatio.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function AspectRatio({ ratio = 16 / 9, className, children, style, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: cn("relative w-full overflow-hidden", className),
      style: { paddingBottom: `${1 / ratio * 100}%`, ...style },
      ...props,
      children: /* @__PURE__ */ jsx3("div", { className: "absolute inset-0", children })
    }
  );
}
AspectRatio.displayName = "AspectRatio";

// src/components/Avatar/Avatar.tsx
import * as React3 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var avatarVariants = cva2("relative flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-16 w-16 text-xl"
    }
  },
  defaultVariants: { size: "md" }
});
var Avatar = React3.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsx4("span", { ref, className: cn(avatarVariants({ size }), className), ...props })
);
Avatar.displayName = "Avatar";
var AvatarImage = React3.forwardRef(({ className, alt = "", ...props }, ref) => /* @__PURE__ */ jsx4(
  "img",
  {
    ref,
    alt,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "span",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-[--si-secondary] font-semibold text-[--si-gray-600]",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";

// src/components/Badge/Badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "inline-flex items-center gap-1.5 rounded-pill font-semibold transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-[--si-primary-faded] text-[--si-primary]",
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        danger: "bg-red-100 text-red-700",
        info: "bg-blue-100 text-blue-700",
        dark: "bg-[--si-dark] text-white",
        light: "bg-[--si-secondary] text-[--si-gray-700]"
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs",
        md: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsx5("span", { className: cn(badgeVariants({ variant, size }), className), ...props });
}

// src/components/Breadcrumb/Breadcrumb.tsx
import * as React4 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Breadcrumb = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6("nav", { ref, "aria-label": "breadcrumb", className: cn("", className), ...props })
);
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "ol",
    {
      ref,
      className: cn("flex flex-wrap items-center gap-1.5 text-sm text-[--si-gray-500]", className),
      ...props
    }
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  "a",
  {
    ref,
    className: cn(
      "transition-colors hover:text-[--si-heading-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] rounded",
      className
    ),
    ...props
  }
));
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "span",
    {
      ref,
      role: "link",
      "aria-current": "page",
      "aria-disabled": "true",
      className: cn("font-medium text-[--si-heading-color]", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ className, children, ...props }) => /* @__PURE__ */ jsx6("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className), ...props, children: children ?? /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("polyline", { points: "9 18 15 12 9 6" }) }) });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// src/components/Card/Card.tsx
import * as React5 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var Card = React5.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      className: cn(
        "rounded-xl border border-[--si-border-color] bg-[--si-body-bg] shadow-[--si-shadow]",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = React5.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React5.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
    "h3",
    {
      ref,
      className: cn("text-xl font-bold leading-none tracking-tight text-[--si-heading-color]", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7("p", { ref, className: cn("text-sm text-[--si-gray-500]", className), ...props }));
CardDescription.displayName = "CardDescription";
var CardContent = React5.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React5.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/components/Carousel/Carousel.tsx
import * as React6 from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jsx as jsx8 } from "react/jsx-runtime";
var CarouselContext = React6.createContext(null);
function useCarousel() {
  const ctx = React6.useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel parts must be used within <Carousel>");
  return ctx;
}
var Carousel = React6.forwardRef(
  ({
    className,
    defaultIndex = 0,
    loop = false,
    autoPlay = false,
    autoPlayInterval = 4e3,
    children,
    ...props
  }, ref) => {
    const [currentIndex, setCurrentIndex] = React6.useState(defaultIndex);
    const [itemCount, setItemCount] = React6.useState(0);
    const canPrev = loop || currentIndex > 0;
    const canNext = loop || currentIndex < itemCount - 1;
    const prev = React6.useCallback(() => {
      setCurrentIndex(
        (i) => i === 0 ? loop ? itemCount - 1 : 0 : i - 1
      );
    }, [loop, itemCount]);
    const next = React6.useCallback(() => {
      setCurrentIndex(
        (i) => i === itemCount - 1 ? loop ? 0 : itemCount - 1 : i + 1
      );
    }, [loop, itemCount]);
    const goTo = React6.useCallback((index) => {
      setCurrentIndex(Math.max(0, Math.min(index, itemCount - 1)));
    }, [itemCount]);
    React6.useEffect(() => {
      if (!autoPlay || itemCount === 0) return;
      const t = setInterval(next, autoPlayInterval);
      return () => clearInterval(t);
    }, [autoPlay, autoPlayInterval, next, itemCount]);
    return /* @__PURE__ */ jsx8(
      CarouselContext.Provider,
      {
        value: { currentIndex, itemCount, setItemCount, prev, next, goTo, canPrev, canNext, loop },
        children: /* @__PURE__ */ jsx8(
          "div",
          {
            ref,
            className: cn("relative", className),
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React6.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { setItemCount, currentIndex } = useCarousel();
    const items = React6.Children.toArray(children);
    React6.useLayoutEffect(() => {
      setItemCount(items.length);
    }, [items.length, setItemCount]);
    return /* @__PURE__ */ jsx8("div", { ref, className: cn("overflow-hidden", className), ...props, children: /* @__PURE__ */ jsx8(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx8(
      motion.div,
      {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
        transition: { duration: 0.25, ease: "easeInOut" },
        children: items[currentIndex]
      },
      currentIndex
    ) }) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn("w-full", className),
      ...props
    }
  )
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React6.forwardRef(({ className, onClick, ...props }, ref) => {
  const { prev, canPrev } = useCarousel();
  return /* @__PURE__ */ jsx8(
    "button",
    {
      ref,
      type: "button",
      "aria-label": "Previous slide",
      disabled: !canPrev,
      onClick: (e) => {
        prev();
        onClick?.(e);
      },
      className: cn(
        "absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--si-body-bg]/90 shadow border border-[--si-border-color] text-[--si-body-color] transition-all hover:bg-[--si-body-bg] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-40",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": "true", children: /* @__PURE__ */ jsx8("polyline", { points: "15 18 9 12 15 6" }) })
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React6.forwardRef(({ className, onClick, ...props }, ref) => {
  const { next, canNext } = useCarousel();
  return /* @__PURE__ */ jsx8(
    "button",
    {
      ref,
      type: "button",
      "aria-label": "Next slide",
      disabled: !canNext,
      onClick: (e) => {
        next();
        onClick?.(e);
      },
      className: cn(
        "absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--si-body-bg]/90 shadow border border-[--si-border-color] text-[--si-body-color] transition-all hover:bg-[--si-body-bg] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-40",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": "true", children: /* @__PURE__ */ jsx8("polyline", { points: "9 18 15 12 9 6" }) })
    }
  );
});
CarouselNext.displayName = "CarouselNext";
var CarouselIndicators = React6.forwardRef(
  ({ className, ...props }, ref) => {
    const { currentIndex, itemCount, goTo } = useCarousel();
    return /* @__PURE__ */ jsx8(
      "div",
      {
        ref,
        className: cn("absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5", className),
        ...props,
        children: Array.from({ length: itemCount }).map((_, i) => /* @__PURE__ */ jsx8(
          "button",
          {
            type: "button",
            "aria-label": `Go to slide ${i + 1}`,
            onClick: () => goTo(i),
            className: cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === currentIndex ? "w-5 bg-[--si-primary]" : "w-1.5 bg-[--si-gray-300] hover:bg-[--si-gray-400]"
            )
          },
          i
        ))
      }
    );
  }
);
CarouselIndicators.displayName = "CarouselIndicators";

// src/components/Checkbox/Checkbox.tsx
import * as React7 from "react";
import { jsx as jsx9, jsxs as jsxs2 } from "react/jsx-runtime";
var Checkbox = React7.forwardRef(
  ({ className, label, id, ...props }, ref) => {
    const uid = React7.useId();
    const inputId = id ?? uid;
    return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx9(
        "input",
        {
          ref,
          id: inputId,
          type: "checkbox",
          className: cn(
            "h-4 w-4 rounded border-[--si-border-color] accent-[--si-primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ...props
        }
      ),
      label && /* @__PURE__ */ jsx9(
        "label",
        {
          htmlFor: inputId,
          className: "cursor-pointer select-none text-sm font-medium text-[--si-body-color] peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          children: label
        }
      )
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Radio = React7.forwardRef(
  ({ className, label, id, ...props }, ref) => {
    const uid = React7.useId();
    const inputId = id ?? uid;
    return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx9(
        "input",
        {
          ref,
          id: inputId,
          type: "radio",
          className: cn(
            "h-4 w-4 border-[--si-border-color] accent-[--si-primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ...props
        }
      ),
      label && /* @__PURE__ */ jsx9(
        "label",
        {
          htmlFor: inputId,
          className: "cursor-pointer select-none text-sm font-medium text-[--si-body-color] peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          children: label
        }
      )
    ] });
  }
);
Radio.displayName = "Radio";

// src/components/Dropdown/Dropdown.tsx
import * as React8 from "react";
import { AnimatePresence as AnimatePresence2, motion as motion2 } from "framer-motion";
import { jsx as jsx10 } from "react/jsx-runtime";
var DropdownContext = React8.createContext(null);
function useDropdownContext() {
  const ctx = React8.useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown parts must be used within <Dropdown>");
  return ctx;
}
var Dropdown = React8.forwardRef(
  ({ className, align = "start", children, ...props }, ref) => {
    const [open, setOpen] = React8.useState(false);
    const containerRef = React8.useRef(null);
    React8.useEffect(() => {
      const handleClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, []);
    React8.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, []);
    return /* @__PURE__ */ jsx10(DropdownContext.Provider, { value: { open, setOpen }, children: /* @__PURE__ */ jsx10(
      "div",
      {
        ref: (node) => {
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
          containerRef.current = node;
        },
        className: cn("relative inline-block", className),
        "data-align": align,
        ...props
      }
    ) });
  }
);
Dropdown.displayName = "Dropdown";
var DropdownTrigger = React8.forwardRef(({ className, onClick, ...props }, ref) => {
  const { open, setOpen } = useDropdownContext();
  return /* @__PURE__ */ jsx10(
    "button",
    {
      ref,
      type: "button",
      "aria-expanded": open,
      "aria-haspopup": "menu",
      onClick: (e) => {
        setOpen((v) => !v);
        onClick?.(e);
      },
      className: cn("", className),
      ...props
    }
  );
});
DropdownTrigger.displayName = "DropdownTrigger";
var DropdownContent = React8.forwardRef(
  ({ className, align = "start", children, ...props }, ref) => {
    const { open } = useDropdownContext();
    const alignClasses = {
      start: "left-0",
      center: "left-1/2 -translate-x-1/2",
      end: "right-0"
    };
    return /* @__PURE__ */ jsx10(AnimatePresence2, { children: open && /* @__PURE__ */ jsx10(
      motion2.div,
      {
        initial: { opacity: 0, scale: 0.95, y: -4 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -4 },
        transition: { duration: 0.12, ease: "easeOut" },
        className: cn(
          "absolute top-full z-50 mt-1.5 min-w-[10rem] overflow-hidden rounded-lg border border-[--si-border-color] bg-[--si-body-bg] p-1 shadow-[--si-shadow]",
          alignClasses[align]
        ),
        children: /* @__PURE__ */ jsx10("div", { ref, role: "menu", className, ...props, children })
      }
    ) });
  }
);
DropdownContent.displayName = "DropdownContent";
var DropdownItem = React8.forwardRef(({ className, onClick, ...props }, ref) => {
  const { setOpen } = useDropdownContext();
  return /* @__PURE__ */ jsx10(
    "button",
    {
      ref,
      type: "button",
      role: "menuitem",
      onClick: (e) => {
        setOpen(false);
        onClick?.(e);
      },
      className: cn(
        "flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-[--si-body-color] transition-colors hover:bg-[--si-secondary] hover:text-[--si-heading-color] focus-visible:outline-none focus-visible:bg-[--si-secondary] disabled:pointer-events-none disabled:opacity-50",
        className
      ),
      ...props
    }
  );
});
DropdownItem.displayName = "DropdownItem";
var DropdownLabel = React8.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
    "span",
    {
      ref,
      className: cn("px-2.5 py-1.5 text-xs font-semibold text-[--si-gray-500]", className),
      ...props
    }
  )
);
DropdownLabel.displayName = "DropdownLabel";
var DropdownSeparator = React8.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
    "div",
    {
      ref,
      role: "separator",
      className: cn("-mx-1 my-1 h-px bg-[--si-border-color]", className),
      ...props
    }
  )
);
DropdownSeparator.displayName = "DropdownSeparator";

// src/components/Icon/Icon.tsx
import * as React9 from "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx11 } from "react/jsx-runtime";
var iconVariants = cva4("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    }
  },
  defaultVariants: { size: "md" }
});
var Icon = React9.forwardRef(
  ({ name, type = "regular", size, className, ...props }, ref) => {
    const prefix = type === "solid" ? "bxs" : type === "logos" ? "bxl" : "bx";
    return /* @__PURE__ */ jsx11(
      "i",
      {
        ref,
        className: cn(`${prefix} ${prefix}-${name}`, iconVariants({ size }), className),
        "aria-hidden": "true",
        ...props
      }
    );
  }
);
Icon.displayName = "Icon";

// src/components/Input/Input.tsx
import * as React10 from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx12 } from "react/jsx-runtime";
var inputVariants = cva5(
  "flex w-full rounded-lg border bg-[--si-body-bg] text-[--si-body-color] placeholder:text-[--si-gray-400] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-[--si-border-color] hover:border-[--si-gray-400]",
        error: "border-[--si-danger] focus-visible:ring-[--si-danger]"
      },
      inputSize: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base"
      }
    },
    defaultVariants: { variant: "default", inputSize: "md" }
  }
);
var Input = React10.forwardRef(
  ({ className, variant, inputSize, type = "text", ...props }, ref) => /* @__PURE__ */ jsx12(
    "input",
    {
      ref,
      type,
      className: cn(inputVariants({ variant, inputSize }), className),
      ...props
    }
  )
);
Input.displayName = "Input";
var textareaVariants = cva5(
  "flex w-full rounded-lg border bg-[--si-body-bg] px-3 py-2 text-sm text-[--si-body-color] placeholder:text-[--si-gray-400] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[80px]",
  {
    variants: {
      variant: {
        default: "border-[--si-border-color] hover:border-[--si-gray-400]",
        error: "border-[--si-danger] focus-visible:ring-[--si-danger]"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Textarea = React10.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx12(
    "textarea",
    {
      ref,
      className: cn(textareaVariants({ variant }), className),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";
var Label = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
    "label",
    {
      ref,
      className: cn(
        "text-sm font-medium leading-none text-[--si-heading-color] peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  )
);
Label.displayName = "Label";
var FormGroup = React10.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx12("div", { ref, className: cn("space-y-1.5", className), ...props })
);
FormGroup.displayName = "FormGroup";
var FormHint = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12("p", { ref, className: cn("text-xs text-[--si-gray-500]", className), ...props }));
FormHint.displayName = "FormHint";
var FormError = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12("p", { ref, className: cn("text-xs text-[--si-danger]", className), ...props }));
FormError.displayName = "FormError";

// src/components/Modal/Modal.tsx
import * as React11 from "react";
import { createPortal } from "react-dom";
import { AnimatePresence as AnimatePresence3, motion as motion3 } from "framer-motion";
import { jsx as jsx13, jsxs as jsxs3 } from "react/jsx-runtime";
var ModalContext = React11.createContext(null);
var sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-[95vw]"
};
function Modal({
  open,
  onOpenChange,
  children,
  size = "md",
  closeOnOverlayClick = true
}) {
  const [mounted, setMounted] = React11.useState(false);
  React11.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  React11.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  React11.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);
  if (!mounted) return null;
  return createPortal(
    /* @__PURE__ */ jsx13(AnimatePresence3, { children: open && /* @__PURE__ */ jsx13(ModalContext.Provider, { value: { onClose: () => onOpenChange(false) }, children: /* @__PURE__ */ jsxs3("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx13(
        motion3.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.15 },
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: closeOnOverlayClick ? () => onOpenChange(false) : void 0,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx13(
        motion3.div,
        {
          initial: { opacity: 0, scale: 0.95, y: 8 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95, y: 8 },
          transition: { duration: 0.2, ease: "easeOut" },
          role: "dialog",
          "aria-modal": "true",
          className: cn(
            "relative z-10 w-full rounded-xl bg-[--si-body-bg] shadow-[--si-shadow-xl]",
            sizeClasses[size]
          ),
          children
        }
      )
    ] }) }) }),
    document.body
  );
}
Modal.displayName = "Modal";
var ModalHeader = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const ctx = React11.useContext(ModalContext);
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        ref,
        className: cn(
          "flex items-start justify-between gap-4 border-b border-[--si-border-color] p-6",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx13("div", { className: "flex-1", children }),
          ctx && /* @__PURE__ */ jsx13(
            "button",
            {
              type: "button",
              onClick: ctx.onClose,
              "aria-label": "Close dialog",
              className: "rounded-md p-1 text-[--si-gray-500] transition-colors hover:bg-[--si-secondary] hover:text-[--si-heading-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary]",
              children: /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsx13("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsx13("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] })
            }
          )
        ]
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";
var ModalTitle = React11.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
    "h2",
    {
      ref,
      className: cn("text-lg font-bold text-[--si-heading-color]", className),
      ...props
    }
  )
);
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13("p", { ref, className: cn("mt-1 text-sm text-[--si-gray-500]", className), ...props }));
ModalDescription.displayName = "ModalDescription";
var ModalBody = React11.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13("div", { ref, className: cn("p-6", className), ...props })
);
ModalBody.displayName = "ModalBody";
var ModalFooter = React11.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
    "div",
    {
      ref,
      className: cn(
        "flex items-center justify-end gap-3 border-t border-[--si-border-color] p-6",
        className
      ),
      ...props
    }
  )
);
ModalFooter.displayName = "ModalFooter";

// src/components/Pagination/Pagination.tsx
import * as React12 from "react";
import { jsx as jsx14, jsxs as jsxs4 } from "react/jsx-runtime";
function generatePages(page, total, siblings) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const left = Math.max(2, page - siblings);
  const right = Math.min(total - 1, page + siblings);
  const pages = [1];
  if (left > 2) pages.push("...");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push("...");
  pages.push(total);
  return pages;
}
var Pagination = React12.forwardRef(
  ({ className, page, totalPages, onPageChange, siblingCount = 1, ...props }, ref) => {
    const pages = generatePages(page, totalPages, siblingCount);
    return /* @__PURE__ */ jsx14("nav", { ref, role: "navigation", "aria-label": "pagination", className: cn("", className), ...props, children: /* @__PURE__ */ jsxs4("ul", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(
        PaginationPrevious,
        {
          disabled: page <= 1,
          onClick: () => onPageChange(page - 1)
        }
      ) }),
      pages.map(
        (p, i) => p === "..." ? /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(PaginationEllipsis, {}) }, `ellipsis-${i}`) : /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(
          PaginationButton,
          {
            isActive: p === page,
            onClick: () => onPageChange(p),
            "aria-label": `Page ${p}`,
            "aria-current": p === page ? "page" : void 0,
            children: p
          }
        ) }, p)
      ),
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(
        PaginationNext,
        {
          disabled: page >= totalPages,
          onClick: () => onPageChange(page + 1)
        }
      ) })
    ] }) });
  }
);
Pagination.displayName = "Pagination";
var PaginationButton = React12.forwardRef(
  ({ className, isActive, ...props }, ref) => /* @__PURE__ */ jsx14(
    "button",
    {
      ref,
      type: "button",
      className: cn(
        "inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-[--si-primary] text-white" : "text-[--si-body-color] hover:bg-[--si-secondary]",
        className
      ),
      ...props
    }
  )
);
PaginationButton.displayName = "PaginationButton";
var PaginationPrevious = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs4(
  "button",
  {
    ref,
    type: "button",
    "aria-label": "Go to previous page",
    className: cn(
      "inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-[--si-body-color] transition-colors hover:bg-[--si-secondary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx14("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": "true", children: /* @__PURE__ */ jsx14("polyline", { points: "15 18 9 12 15 6" }) }),
      /* @__PURE__ */ jsx14("span", { children: "Prev" })
    ]
  }
));
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs4(
  "button",
  {
    ref,
    type: "button",
    "aria-label": "Go to next page",
    className: cn(
      "inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-[--si-body-color] transition-colors hover:bg-[--si-secondary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx14("span", { children: "Next" }),
      /* @__PURE__ */ jsx14("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": "true", children: /* @__PURE__ */ jsx14("polyline", { points: "9 18 15 12 9 6" }) })
    ]
  }
));
PaginationNext.displayName = "PaginationNext";
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsx14(
    "span",
    {
      "aria-hidden": "true",
      className: cn("inline-flex h-9 w-9 items-center justify-center text-sm text-[--si-gray-500]", className),
      ...props,
      children: "\u2026"
    }
  );
}
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/Progress/Progress.tsx
import * as React13 from "react";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx15 } from "react/jsx-runtime";
var progressIndicatorVariants = cva6("h-full w-full flex-1 transition-all duration-300", {
  variants: {
    variant: {
      primary: "bg-[--si-primary]",
      success: "bg-[--si-success]",
      warning: "bg-[--si-warning]",
      danger: "bg-[--si-danger]",
      info: "bg-[--si-info]"
    }
  },
  defaultVariants: { variant: "primary" }
});
var Progress = React13.forwardRef(
  ({ className, variant, value = 0, max = 100, ...props }, ref) => /* @__PURE__ */ jsx15(
    "div",
    {
      ref,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": max,
      "aria-valuenow": value,
      className: cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-[--si-secondary]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx15(
        "div",
        {
          className: cn(progressIndicatorVariants({ variant })),
          style: { transform: `translateX(-${100 - value / max * 100}%)` }
        }
      )
    }
  )
);
Progress.displayName = "Progress";

// src/components/Select/Select.tsx
import * as React14 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var Select = React14.forwardRef(
  ({ className, inputSize = "md", error = false, ...props }, ref) => /* @__PURE__ */ jsx16(
    "select",
    {
      ref,
      className: cn(
        "flex w-full appearance-none rounded-lg border bg-[--si-body-bg] text-[--si-body-color] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        error ? "border-[--si-danger] focus-visible:ring-[--si-danger]" : "border-[--si-border-color] hover:border-[--si-gray-400]",
        inputSize === "sm" && "h-8 px-3 text-xs",
        inputSize === "md" && "h-10 px-3 text-sm",
        inputSize === "lg" && "h-12 px-4 text-base",
        className
      ),
      ...props
    }
  )
);
Select.displayName = "Select";

// src/components/Separator/Separator.tsx
import * as React15 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var Separator = React15.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx17(
    "div",
    {
      ref,
      role: decorative ? "none" : "separator",
      "aria-orientation": decorative ? void 0 : orientation,
      className: cn(
        "shrink-0 bg-[--si-border-color]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = "Separator";

// src/components/Skeleton/Skeleton.tsx
import * as React16 from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var Skeleton = React16.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
    "div",
    {
      ref,
      className: cn("animate-pulse rounded-md bg-[--si-secondary]", className),
      ...props
    }
  )
);
Skeleton.displayName = "Skeleton";

// src/components/Spinner/Spinner.tsx
import * as React17 from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx19, jsxs as jsxs5 } from "react/jsx-runtime";
var spinnerVariants = cva7(
  "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12"
      }
    },
    defaultVariants: { size: "md" }
  }
);
var Spinner = React17.forwardRef(
  ({ className, size, label = "Loading...", ...props }, ref) => /* @__PURE__ */ jsxs5("span", { ref, role: "status", ...props, children: [
    /* @__PURE__ */ jsx19("span", { className: cn(spinnerVariants({ size }), className), "aria-hidden": "true" }),
    /* @__PURE__ */ jsx19("span", { className: "sr-only", children: label })
  ] })
);
Spinner.displayName = "Spinner";

// src/components/Switch/Switch.tsx
import * as React18 from "react";
import { jsx as jsx20, jsxs as jsxs6 } from "react/jsx-runtime";
var Switch = React18.forwardRef(
  ({ className, label, id, size = "md", ...props }, ref) => {
    const uid = React18.useId();
    const inputId = id ?? uid;
    const trackSizes = {
      sm: "h-4 w-8",
      md: "h-5 w-10",
      lg: "h-6 w-12"
    };
    const thumbSizes = {
      sm: "h-3 w-3 peer-checked:translate-x-4",
      md: "h-4 w-4 peer-checked:translate-x-5",
      lg: "h-5 w-5 peer-checked:translate-x-6"
    };
    return /* @__PURE__ */ jsxs6("label", { htmlFor: inputId, className: "inline-flex cursor-pointer items-center gap-2.5", children: [
      /* @__PURE__ */ jsxs6("span", { className: "relative inline-flex", children: [
        /* @__PURE__ */ jsx20(
          "input",
          {
            ref,
            id: inputId,
            type: "checkbox",
            role: "switch",
            className: cn("peer sr-only", className),
            ...props
          }
        ),
        /* @__PURE__ */ jsx20(
          "span",
          {
            className: cn(
              "rounded-full bg-[--si-gray-300] transition-colors duration-200 peer-checked:bg-[--si-primary] peer-focus-visible:ring-2 peer-focus-visible:ring-[--si-primary] peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              trackSizes[size]
            )
          }
        ),
        /* @__PURE__ */ jsx20(
          "span",
          {
            className: cn(
              "absolute left-0.5 top-0.5 rounded-full bg-white shadow transition-transform duration-200",
              thumbSizes[size]
            )
          }
        )
      ] }),
      label && /* @__PURE__ */ jsx20("span", { className: "select-none text-sm font-medium text-[--si-body-color]", children: label })
    ] });
  }
);
Switch.displayName = "Switch";

// src/components/Table/Table.tsx
import * as React19 from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var Table = React19.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx21(
    "table",
    {
      ref,
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) })
);
Table.displayName = "Table";
var TableHeader = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21("thead", { ref, className: cn("[&_tr]:border-b [&_tr]:border-[--si-border-color]", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
var TableFooter = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "tfoot",
  {
    ref,
    className: cn("border-t border-[--si-border-color] bg-[--si-secondary]/50 font-medium", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React19.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
    "tr",
    {
      ref,
      className: cn(
        "border-b border-[--si-border-color] transition-colors hover:bg-[--si-secondary]/50 data-[state=selected]:bg-[--si-secondary]",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "th",
  {
    ref,
    className: cn(
      "h-11 px-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[--si-gray-500] [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "td",
  {
    ref,
    className: cn(
      "px-4 py-3 align-middle text-[--si-body-color] [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-[--si-gray-500]", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

// src/components/Tabs/Tabs.tsx
import * as React20 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var TabsContext = React20.createContext(null);
function useTabsContext() {
  const ctx = React20.useContext(TabsContext);
  if (!ctx) throw new Error("Tabs compound components must be used within <Tabs>");
  return ctx;
}
var Tabs = React20.forwardRef(
  ({ className, defaultValue = "", value, onValueChange, children, ...props }, ref) => {
    const [activeTab, setActiveTabState] = React20.useState(defaultValue);
    const controlled = value !== void 0;
    const current = controlled ? value : activeTab;
    const setActiveTab = React20.useCallback(
      (v) => {
        if (!controlled) setActiveTabState(v);
        onValueChange?.(v);
      },
      [controlled, onValueChange]
    );
    return /* @__PURE__ */ jsx22(TabsContext.Provider, { value: { activeTab: current, setActiveTab }, children: /* @__PURE__ */ jsx22("div", { ref, className: cn("", className), ...props, children }) });
  }
);
Tabs.displayName = "Tabs";
var TabsList = React20.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
    "div",
    {
      ref,
      role: "tablist",
      className: cn(
        "inline-flex items-center rounded-lg bg-[--si-secondary] p-1",
        className
      ),
      ...props
    }
  )
);
TabsList.displayName = "TabsList";
var TabsTrigger = React20.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === value;
    return /* @__PURE__ */ jsx22(
      "button",
      {
        ref,
        type: "button",
        role: "tab",
        "aria-selected": isActive,
        onClick: () => setActiveTab(value),
        className: cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isActive ? "bg-[--si-body-bg] text-[--si-heading-color] shadow-sm" : "text-[--si-gray-600] hover:text-[--si-heading-color]",
          className
        ),
        ...props,
        children
      }
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = React20.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    const { activeTab } = useTabsContext();
    if (activeTab !== value) return null;
    return /* @__PURE__ */ jsx22(
      "div",
      {
        ref,
        role: "tabpanel",
        className: cn("mt-4 focus-visible:outline-none", className),
        ...props,
        children
      }
    );
  }
);
TabsContent.displayName = "TabsContent";

// src/components/Toast/Toast.tsx
import * as React21 from "react";
import { createPortal as createPortal2 } from "react-dom";
import { AnimatePresence as AnimatePresence4, motion as motion4 } from "framer-motion";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx23, jsxs as jsxs7 } from "react/jsx-runtime";
var ToastContext = React21.createContext(null);
function useToast() {
  const ctx = React21.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
var positionClasses = {
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-right": "top-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end"
};
function ToastProvider({
  children,
  position = "bottom-right",
  maxToasts = 5
}) {
  const [toasts, setToasts] = React21.useState([]);
  const [mounted, setMounted] = React21.useState(false);
  React21.useEffect(() => {
    setMounted(true);
  }, []);
  const toast = React21.useCallback(
    (data) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      setToasts((prev) => {
        const next = [{ ...data, id }, ...prev];
        return next.slice(0, maxToasts);
      });
      return id;
    },
    [maxToasts]
  );
  const dismiss = React21.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxs7(ToastContext.Provider, { value: { toast, dismiss }, children: [
    children,
    mounted && createPortal2(
      /* @__PURE__ */ jsx23(
        "div",
        {
          className: cn(
            "pointer-events-none fixed z-[100] flex flex-col gap-2",
            positionClasses[position]
          ),
          "aria-live": "polite",
          "aria-atomic": "false",
          children: /* @__PURE__ */ jsx23(AnimatePresence4, { mode: "popLayout", children: toasts.map((t) => /* @__PURE__ */ jsx23(ToastItem, { data: t, onDismiss: dismiss }, t.id)) })
        }
      ),
      document.body
    )
  ] });
}
ToastProvider.displayName = "ToastProvider";
var toastVariants = cva8(
  "pointer-events-auto flex w-full min-w-[280px] max-w-sm items-start gap-3 rounded-xl border p-4 shadow-[--si-shadow-lg]",
  {
    variants: {
      variant: {
        default: "bg-[--si-body-bg] border-[--si-border-color] text-[--si-body-color]",
        success: "bg-green-50 border-green-200 text-green-900 dark:bg-green-900/30 dark:border-green-800/50 dark:text-green-200",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-900/30 dark:border-yellow-800/50 dark:text-yellow-200",
        danger: "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/30 dark:border-red-800/50 dark:text-red-200",
        info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-200"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var iconsByVariant = {
  success: /* @__PURE__ */ jsx23("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-5 w-5 shrink-0 text-green-600", "aria-hidden": "true", children: /* @__PURE__ */ jsx23("polyline", { points: "20 6 9 17 4 12" }) }),
  warning: /* @__PURE__ */ jsxs7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-5 w-5 shrink-0 text-yellow-600", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx23("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ jsx23("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ jsx23("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }),
  danger: /* @__PURE__ */ jsxs7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-5 w-5 shrink-0 text-red-600", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx23("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx23("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx23("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  ] }),
  info: /* @__PURE__ */ jsxs7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-5 w-5 shrink-0 text-blue-600", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx23("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx23("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx23("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] })
};
function ToastItem({ data, onDismiss }) {
  const { id, title, description, variant = "default", duration = 4e3, action } = data;
  React21.useEffect(() => {
    if (duration === Infinity) return;
    const t = setTimeout(() => onDismiss(id), duration);
    return () => clearTimeout(t);
  }, [id, duration, onDismiss]);
  return /* @__PURE__ */ jsxs7(
    motion4.div,
    {
      layout: true,
      initial: { opacity: 0, y: 12, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
      transition: { duration: 0.2, ease: "easeOut" },
      className: cn(toastVariants({ variant })),
      role: "status",
      "aria-live": "polite",
      children: [
        iconsByVariant[variant],
        /* @__PURE__ */ jsxs7("div", { className: "flex-1 space-y-0.5", children: [
          title && /* @__PURE__ */ jsx23("p", { className: "text-sm font-semibold", children: title }),
          description && /* @__PURE__ */ jsx23("p", { className: "text-sm opacity-90", children: description }),
          action && /* @__PURE__ */ jsx23("div", { className: "mt-2", children: action })
        ] }),
        /* @__PURE__ */ jsx23(
          "button",
          {
            type: "button",
            onClick: () => onDismiss(id),
            "aria-label": "Dismiss notification",
            className: "shrink-0 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current",
            children: /* @__PURE__ */ jsxs7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx23("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              /* @__PURE__ */ jsx23("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
            ] })
          }
        )
      ]
    }
  );
}
var Toast = React21.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx23("div", { ref, className: cn(toastVariants({ variant }), className), ...props })
);
Toast.displayName = "Toast";

// src/components/Tooltip/Tooltip.tsx
import * as React22 from "react";
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
var TooltipContext = React22.createContext(null);
function useTooltipContext() {
  const ctx = React22.useContext(TooltipContext);
  if (!ctx) throw new Error("Tooltip parts must be used within <TooltipProvider>");
  return ctx;
}
function TooltipProvider({ children, delay = 300 }) {
  const [open, setOpen] = React22.useState(false);
  return /* @__PURE__ */ jsx24(TooltipContext.Provider, { value: { open, setOpen, delay }, children });
}
TooltipProvider.displayName = "TooltipProvider";
function Tooltip({ content, side = "top", delay = 300, className, children }) {
  const [open, setOpen] = React22.useState(false);
  const timer = React22.useRef(null);
  const show = () => {
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  };
  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  return /* @__PURE__ */ jsxs8(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        children,
        open && /* @__PURE__ */ jsx24(
          "span",
          {
            role: "tooltip",
            className: cn(
              "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-[--si-dark] px-2.5 py-1.5 text-xs font-medium text-white shadow-lg",
              sideClasses[side],
              className
            ),
            children: content
          }
        )
      ]
    }
  );
}
Tooltip.displayName = "Tooltip";
var TooltipTrigger = React22.forwardRef(({ className, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
  const { setOpen, delay } = useTooltipContext();
  const timer = React22.useRef(null);
  const show = () => {
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  };
  return /* @__PURE__ */ jsx24(
    "button",
    {
      ref,
      type: "button",
      className: cn("", className),
      onMouseEnter: (e) => {
        show();
        onMouseEnter?.(e);
      },
      onMouseLeave: (e) => {
        hide();
        onMouseLeave?.(e);
      },
      onFocus: (e) => {
        show();
        onFocus?.(e);
      },
      onBlur: (e) => {
        hide();
        onBlur?.(e);
      },
      ...props
    }
  );
});
TooltipTrigger.displayName = "TooltipTrigger";
var TooltipContent = React22.forwardRef(
  ({ className, side = "top", ...props }, ref) => {
    const { open } = useTooltipContext();
    if (!open) return null;
    const sideClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };
    return /* @__PURE__ */ jsx24(
      "span",
      {
        ref,
        role: "tooltip",
        className: cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-[--si-dark] px-2.5 py-1.5 text-xs font-medium text-white shadow-lg",
          sideClasses[side],
          className
        ),
        ...props
      }
    );
  }
);
TooltipContent.displayName = "TooltipContent";

// src/components/Button/Button.tsx
import * as React23 from "react";
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
var buttonVariants = cva9(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[--si-primary] text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] hover:brightness-110 focus-visible:ring-[--si-primary]",
        secondary: "bg-[--si-secondary] text-[--si-dark] hover:bg-gray-200 focus-visible:ring-gray-300",
        outline: "border-2 border-[--si-primary] text-[--si-primary] bg-transparent hover:bg-[--si-primary] hover:text-white focus-visible:ring-[--si-primary]",
        ghost: "text-[--si-primary] bg-transparent hover:bg-[--si-primary-faded]",
        danger: "bg-[--si-danger] text-white hover:brightness-110 focus-visible:ring-[--si-danger]",
        dark: "bg-[--si-dark] text-white hover:brightness-125 focus-visible:ring-[--si-dark]",
        light: "bg-white text-[--si-dark] shadow-sm hover:shadow focus-visible:ring-gray-300"
      },
      size: {
        sm: "h-8 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-15 px-10 text-lg",
        icon: "h-10 w-10 p-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = React23.forwardRef(
  ({ className, variant, size, loading, iconLeft, iconRight, children, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsxs9(
      "button",
      {
        ref,
        className: cn(buttonVariants({ variant, size }), className),
        disabled: disabled ?? loading,
        ...props,
        children: [
          loading ? /* @__PURE__ */ jsxs9(
            "svg",
            {
              className: "h-4 w-4 animate-spin",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx25("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsx25("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
              ]
            }
          ) : iconLeft,
          children,
          !loading && iconRight
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/HeroSection/HeroSection.tsx
import * as React24 from "react";
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx26, jsxs as jsxs10 } from "react/jsx-runtime";
var sectionCva = cva10("relative w-full overflow-hidden", {
  variants: {
    variant: {
      saas: "bg-[--si-body-bg] pt-20 pb-16 lg:pt-28 lg:pb-24",
      agency: "bg-[--si-dark] pt-24 pb-20 lg:pt-36 lg:pb-32",
      app: "pt-20 pb-16 lg:pt-28 lg:pb-24",
      financial: "bg-[--si-body-bg] pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[--si-border-color]",
      minimal: "bg-[--si-body-bg] pt-24 pb-20 lg:pt-32 lg:pb-28"
    }
  },
  defaultVariants: { variant: "saas" }
});
var headlineCva = cva10("font-extrabold tracking-tight leading-[1.1]", {
  variants: {
    variant: {
      saas: "text-4xl sm:text-5xl lg:text-6xl text-[--si-heading-color]",
      agency: "text-5xl sm:text-6xl lg:text-8xl text-white",
      app: "text-4xl sm:text-5xl lg:text-6xl text-[--si-heading-color]",
      financial: "text-4xl sm:text-5xl text-[--si-heading-color]",
      minimal: "text-5xl sm:text-6xl lg:text-7xl text-[--si-heading-color] text-center"
    }
  },
  defaultVariants: { variant: "saas" }
});
var subCva = cva10("mt-5 text-lg lg:text-xl leading-relaxed", {
  variants: {
    variant: {
      saas: "text-[--si-body-color] max-w-xl",
      agency: "text-gray-300 max-w-2xl mx-auto text-center",
      app: "text-[--si-body-color] max-w-xl",
      financial: "text-[--si-body-color] max-w-xl",
      minimal: "text-[--si-body-color] max-w-2xl mx-auto text-center"
    }
  },
  defaultVariants: { variant: "saas" }
});
var CENTERED = ["agency", "minimal"];
function MediaBlock({
  media,
  variant
}) {
  const cls = cn(
    "w-full rounded-[--si-border-radius-xl] shadow-[--si-shadow-xl] overflow-hidden",
    variant === "app" && "max-w-xs mx-auto"
  );
  if (media.type === "video") {
    return /* @__PURE__ */ jsx26(
      "video",
      {
        className: cls,
        src: media.src,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        "aria-label": media.alt
      }
    );
  }
  if (media.type === "lottie") {
    return /* @__PURE__ */ jsx26(
      "div",
      {
        className: cn(
          cls,
          "aspect-video bg-[--si-gray-100] flex items-center justify-center"
        ),
        children: /* @__PURE__ */ jsx26("span", { className: "text-[--si-gray-400] text-sm", children: "Lottie animation" })
      }
    );
  }
  return /* @__PURE__ */ jsx26("img", { className: cls, src: media.src, alt: media.alt ?? "", loading: "lazy" });
}
var HeroSection = React24.forwardRef(
  ({
    variant = "saas",
    badge,
    headline,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    media,
    className,
    ...props
  }, ref) => {
    const centered = CENTERED.includes(variant);
    return /* @__PURE__ */ jsxs10("section", { ref, className: cn(sectionCva({ variant }), className), ...props, children: [
      variant === "saas" && /* @__PURE__ */ jsx26(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl",
          style: {
            background: "radial-gradient(circle, var(--si-primary) 0%, transparent 70%)"
          }
        }
      ),
      variant === "app" && /* @__PURE__ */ jsx26(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 bg-gradient-to-br from-[--si-primary-faded] via-transparent to-transparent pointer-events-none"
        }
      ),
      variant === "agency" && /* @__PURE__ */ jsx26(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-0 opacity-10",
          style: {
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }
        }
      ),
      /* @__PURE__ */ jsx26("div", { className: "relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", children: centered ? (
        /* ── Centered layout: agency, minimal ── */
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center text-center", children: [
          badge && /* @__PURE__ */ jsx26(Badge, { variant: variant === "agency" ? "dark" : "primary", className: "mb-5", children: badge }),
          /* @__PURE__ */ jsx26("h1", { className: headlineCva({ variant }), children: headline }),
          /* @__PURE__ */ jsx26("p", { className: subCva({ variant }), children: subheadline }),
          /* @__PURE__ */ jsxs10("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx26(
              "a",
              {
                href: ctaPrimary.href,
                className: cn(
                  buttonVariants({
                    variant: variant === "agency" ? "light" : "primary",
                    size: "lg"
                  })
                ),
                children: ctaPrimary.label
              }
            ),
            ctaSecondary && /* @__PURE__ */ jsx26(
              "a",
              {
                href: ctaSecondary.href,
                className: cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  variant === "agency" && "text-white hover:bg-white/10"
                ),
                children: ctaSecondary.label
              }
            )
          ] }),
          media && variant !== "minimal" && /* @__PURE__ */ jsx26("div", { className: "mt-16 w-full max-w-4xl", children: /* @__PURE__ */ jsx26(MediaBlock, { media, variant }) })
        ] })
      ) : (
        /* ── Two-column layout: saas, app, financial ── */
        /* @__PURE__ */ jsxs10("div", { className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex flex-col", children: [
            badge && /* @__PURE__ */ jsx26(Badge, { variant: "primary", className: "mb-5 self-start", children: badge }),
            /* @__PURE__ */ jsx26("h1", { className: headlineCva({ variant }), children: headline }),
            /* @__PURE__ */ jsx26("p", { className: subCva({ variant }), children: subheadline }),
            /* @__PURE__ */ jsxs10("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsx26(
                "a",
                {
                  href: ctaPrimary.href,
                  className: cn(buttonVariants({ variant: "primary", size: "lg" })),
                  children: ctaPrimary.label
                }
              ),
              ctaSecondary && /* @__PURE__ */ jsx26(
                "a",
                {
                  href: ctaSecondary.href,
                  className: cn(buttonVariants({ variant: "outline", size: "lg" })),
                  children: ctaSecondary.label
                }
              )
            ] })
          ] }),
          media && /* @__PURE__ */ jsx26("div", { className: "relative", children: /* @__PURE__ */ jsx26(MediaBlock, { media, variant }) })
        ] })
      ) })
    ] });
  }
);
HeroSection.displayName = "HeroSection";

// src/components/FeaturesGrid/FeaturesGrid.tsx
import * as React25 from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx27, jsxs as jsxs11 } from "react/jsx-runtime";
var sectionCva2 = cva11("relative w-full py-16 lg:py-24", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var gridCva = cva11("grid gap-6 lg:gap-8", {
  variants: {
    columns: {
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    }
  },
  defaultVariants: { columns: 3 }
});
var iconWrapCva = cva11("mb-4 flex items-center justify-center", {
  variants: {
    iconStyle: {
      boxed: "h-14 w-14 rounded-xl bg-[--si-primary-faded]",
      circle: "h-14 w-14 rounded-full bg-[--si-primary-faded]",
      flat: "h-10 w-10"
    }
  },
  defaultVariants: { iconStyle: "boxed" }
});
var FeaturesGrid = React25.forwardRef(
  ({
    className,
    variant,
    badge,
    headline,
    subheadline,
    columns = 3,
    features,
    iconStyle = "boxed",
    ...props
  }, ref) => {
    const isDark = variant === "dark";
    return /* @__PURE__ */ jsx27("section", { ref, className: cn(sectionCva2({ variant }), className), ...props, children: /* @__PURE__ */ jsxs11("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs11("div", { className: "mx-auto mb-12 max-w-2xl text-center lg:mb-16", children: [
        badge && /* @__PURE__ */ jsx27(Badge, { variant: isDark ? "light" : "primary", className: "mb-4", children: badge }),
        /* @__PURE__ */ jsx27(
          "h2",
          {
            className: cn(
              "mb-4 text-3xl font-bold lg:text-4xl",
              isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: headline
          }
        ),
        subheadline && /* @__PURE__ */ jsx27(
          "p",
          {
            className: cn(
              "text-base lg:text-lg",
              isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"
            ),
            children: subheadline
          }
        )
      ] }),
      /* @__PURE__ */ jsx27("div", { className: cn(gridCva({ columns })), children: features.map((feature, i) => /* @__PURE__ */ jsx27(FeatureCard, { feature, iconStyle, isDark }, i)) })
    ] }) });
  }
);
FeaturesGrid.displayName = "FeaturesGrid";
function FeatureCard({ feature, iconStyle, isDark }) {
  return /* @__PURE__ */ jsxs11("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx27("div", { className: cn(iconWrapCva({ iconStyle })), children: /* @__PURE__ */ jsx27(Icon, { name: feature.icon, size: "2xl", className: "text-[--si-primary]" }) }),
    /* @__PURE__ */ jsx27(
      "h3",
      {
        className: cn(
          "mb-2 text-lg font-semibold",
          isDark ? "text-white" : "text-[--si-heading-color]"
        ),
        children: feature.title
      }
    ),
    /* @__PURE__ */ jsx27(
      "p",
      {
        className: cn(
          "text-sm leading-relaxed",
          isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"
        ),
        children: feature.description
      }
    )
  ] });
}

// src/components/PricingSection/PricingSection.tsx
import * as React26 from "react";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx28, jsxs as jsxs12 } from "react/jsx-runtime";
var sectionCva3 = cva12("relative w-full py-16 lg:py-24", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var PricingSection = React26.forwardRef(
  ({
    className,
    variant = "light",
    badge,
    headline,
    subheadline,
    plans,
    annualDiscount = "Save 20%",
    ...props
  }, ref) => {
    const [annual, setAnnual] = React26.useState(false);
    const isDark = variant === "dark";
    const colsClass = plans.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto" : plans.length === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return /* @__PURE__ */ jsx28("section", { ref, className: cn(sectionCva3({ variant }), className), ...props, children: /* @__PURE__ */ jsxs12("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs12("div", { className: "mx-auto mb-12 max-w-2xl text-center lg:mb-14", children: [
        badge && /* @__PURE__ */ jsx28(Badge, { variant: isDark ? "light" : "primary", className: "mb-4", children: badge }),
        /* @__PURE__ */ jsx28(
          "h2",
          {
            className: cn(
              "mb-4 text-3xl font-bold lg:text-4xl",
              isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: headline
          }
        ),
        subheadline && /* @__PURE__ */ jsx28(
          "p",
          {
            className: cn(
              "text-base lg:text-lg",
              isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"
            ),
            children: subheadline
          }
        )
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "mb-10 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx28(
          "span",
          {
            className: cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-[--si-primary]" : isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: "Monthly"
          }
        ),
        /* @__PURE__ */ jsx28(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": annual,
            onClick: () => setAnnual((v) => !v),
            className: cn(
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--si-primary] focus-visible:ring-offset-2",
              annual ? "bg-[--si-primary]" : "bg-[--si-gray-300]"
            ),
            children: /* @__PURE__ */ jsx28(
              "span",
              {
                className: cn(
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out",
                  annual ? "translate-x-5" : "translate-x-0"
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs12(
          "span",
          {
            className: cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              annual ? "text-[--si-primary]" : isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: [
              "Annual",
              annualDiscount && /* @__PURE__ */ jsx28(Badge, { variant: "success", size: "sm", children: annualDiscount })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx28("div", { className: cn("grid gap-6 lg:gap-8", colsClass), children: plans.map((plan, i) => /* @__PURE__ */ jsx28(PricingCard, { plan, annual, isDark }, i)) })
    ] }) });
  }
);
PricingSection.displayName = "PricingSection";
function PricingCard({ plan, annual, isDark }) {
  const price = annual ? plan.price.annual : plan.price.monthly;
  const cardCls = cn(
    "relative flex flex-col rounded-[--si-border-radius-xl] p-8 transition-shadow",
    plan.highlighted ? "bg-[--si-primary] text-white shadow-[--si-shadow-xl]" : isDark ? "bg-white/5 border border-white/10" : "bg-[--si-body-bg] border border-[--si-border-color] shadow-[--si-shadow]"
  );
  const textMuted = plan.highlighted ? "text-white/75" : isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]";
  const textHeading = plan.highlighted || isDark ? "text-white" : "text-[--si-heading-color]";
  const dividerCls = cn("border-t", plan.highlighted ? "border-white/20" : "border-[--si-border-color]");
  return /* @__PURE__ */ jsxs12("div", { className: cardCls, children: [
    plan.badge && /* @__PURE__ */ jsx28("div", { className: "mb-4", children: /* @__PURE__ */ jsx28(Badge, { variant: plan.highlighted ? "light" : "primary", size: "sm", children: plan.badge }) }),
    /* @__PURE__ */ jsx28("h3", { className: cn("mb-1 text-xl font-bold", textHeading), children: plan.name }),
    /* @__PURE__ */ jsx28("p", { className: cn("mb-6 text-sm leading-relaxed", textMuted), children: plan.description }),
    /* @__PURE__ */ jsxs12("div", { className: "mb-6 flex items-end gap-1", children: [
      /* @__PURE__ */ jsx28("span", { className: cn("text-sm font-medium", textMuted), children: plan.currency }),
      /* @__PURE__ */ jsx28("span", { className: cn("text-5xl font-extrabold leading-none", textHeading), children: price }),
      /* @__PURE__ */ jsxs12("span", { className: cn("mb-1 text-sm", textMuted), children: [
        "/",
        annual ? "yr" : "mo"
      ] })
    ] }),
    /* @__PURE__ */ jsx28(
      "a",
      {
        href: plan.cta.href,
        className: cn(
          buttonVariants({ variant: plan.highlighted ? "light" : "primary", size: "md" }),
          "mb-8 w-full justify-center"
        ),
        children: plan.cta.label
      }
    ),
    /* @__PURE__ */ jsx28("hr", { className: cn("mb-6", dividerCls) }),
    /* @__PURE__ */ jsx28("ul", { className: "flex flex-col gap-3", children: plan.features.map((feature, i) => /* @__PURE__ */ jsxs12("li", { className: "flex items-start gap-2.5", children: [
      /* @__PURE__ */ jsx28(
        "svg",
        {
          className: cn(
            "mt-0.5 h-4 w-4 flex-shrink-0",
            plan.highlighted ? "text-white" : "text-[--si-primary]"
          ),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx28(
            "path",
            {
              fillRule: "evenodd",
              d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
              clipRule: "evenodd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx28("span", { className: cn("text-sm", textMuted), children: feature })
    ] }, i)) })
  ] });
}

// src/components/TestimonialsCarousel/TestimonialsCarousel.tsx
import * as React27 from "react";
import { AnimatePresence as AnimatePresence5, motion as motion5 } from "framer-motion";
import { cva as cva13 } from "class-variance-authority";
import { Fragment, jsx as jsx29, jsxs as jsxs13 } from "react/jsx-runtime";
var sectionCva4 = cva13("relative w-full py-16 lg:py-24", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var slideVariants = {
  enter: (d) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0 })
};
function Stars({
  rating,
  isDark
}) {
  return /* @__PURE__ */ jsx29("div", { className: "mb-5 flex gap-1", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx29(
    "svg",
    {
      className: cn(
        "h-4 w-4",
        i < rating ? "text-[--si-warning]" : isDark ? "text-white/20" : "text-[--si-gray-300]"
      ),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx29("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
    },
    i
  )) });
}
function Initials({ name, isDark }) {
  const letters = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  return /* @__PURE__ */ jsx29(
    "span",
    {
      className: cn(
        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold",
        isDark ? "bg-white/10 text-white" : "bg-[--si-primary]/10 text-[--si-primary]"
      ),
      children: letters
    }
  );
}
function TestimonialCard({ item, isDark, elevated }) {
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      className: cn(
        "flex h-full flex-col rounded-[--si-border-radius-xl] p-8",
        isDark ? "border border-white/10 bg-white/5" : elevated ? "border border-[--si-border-color] bg-[--si-body-bg] shadow-[--si-shadow-xl]" : "border border-[--si-border-color] bg-[--si-body-bg] shadow-[--si-shadow]"
      ),
      children: [
        item.rating !== void 0 && /* @__PURE__ */ jsx29(Stars, { rating: item.rating, isDark }),
        /* @__PURE__ */ jsxs13(
          "blockquote",
          {
            className: cn(
              "mb-6 flex-1 text-base leading-relaxed",
              isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: [
              "\u201C",
              item.quote,
              "\u201D"
            ]
          }
        ),
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-3", children: [
          item.avatar ? /* @__PURE__ */ jsx29(
            "img",
            {
              src: item.avatar,
              alt: item.author,
              className: "h-10 w-10 flex-shrink-0 rounded-full object-cover"
            }
          ) : /* @__PURE__ */ jsx29(Initials, { name: item.author, isDark }),
          /* @__PURE__ */ jsxs13("div", { children: [
            /* @__PURE__ */ jsx29(
              "p",
              {
                className: cn(
                  "text-sm font-semibold",
                  isDark ? "text-white" : "text-[--si-heading-color]"
                ),
                children: item.author
              }
            ),
            /* @__PURE__ */ jsxs13("p", { className: cn("text-xs", isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"), children: [
              item.role,
              item.company && `, ${item.company}`
            ] })
          ] })
        ] })
      ]
    }
  );
}
function SectionHeader({ badge, headline, subheadline, isDark }) {
  return /* @__PURE__ */ jsxs13("div", { className: "mx-auto mb-12 max-w-2xl text-center lg:mb-14", children: [
    badge && /* @__PURE__ */ jsx29(Badge, { variant: isDark ? "light" : "primary", className: "mb-4", children: badge }),
    /* @__PURE__ */ jsx29(
      "h2",
      {
        className: cn(
          "mb-4 text-3xl font-bold lg:text-4xl",
          isDark ? "text-white" : "text-[--si-heading-color]"
        ),
        children: headline
      }
    ),
    subheadline && /* @__PURE__ */ jsx29(
      "p",
      {
        className: cn(
          "text-base lg:text-lg",
          isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"
        ),
        children: subheadline
      }
    )
  ] });
}
var TestimonialsCarousel = React27.forwardRef(
  ({
    className,
    variant = "light",
    layout = "carousel",
    badge,
    headline,
    subheadline,
    testimonials,
    ...props
  }, ref) => {
    const [current, setCurrent] = React27.useState(0);
    const [direction, setDirection] = React27.useState(1);
    const isDark = variant === "dark";
    const total = testimonials.length;
    const go = React27.useCallback(
      (next) => {
        const normalized = (next + total) % total;
        setDirection(next >= current ? 1 : -1);
        setCurrent(normalized);
      },
      [current, total]
    );
    if (layout === "grid") {
      const colsCls = total <= 2 ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      return /* @__PURE__ */ jsx29("section", { ref, className: cn(sectionCva4({ variant }), className), ...props, children: /* @__PURE__ */ jsxs13("div", { className: "container mx-auto px-4 lg:px-8", children: [
        /* @__PURE__ */ jsx29(SectionHeader, { badge, headline, subheadline, isDark }),
        /* @__PURE__ */ jsx29("div", { className: cn("grid gap-6 lg:gap-8", colsCls), children: testimonials.map((item, i) => /* @__PURE__ */ jsx29(
          TestimonialCard,
          {
            item,
            isDark,
            elevated: total === 3 && i === 1
          },
          i
        )) })
      ] }) });
    }
    const navBtnCls = cn(
      "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition-colors",
      isDark ? "border-white/10 bg-white/5 text-white hover:bg-white/10" : "border-[--si-border-color] bg-[--si-body-bg] text-[--si-heading-color] hover:bg-[--si-secondary-bg]"
    );
    return /* @__PURE__ */ jsx29("section", { ref, className: cn(sectionCva4({ variant }), className), ...props, children: /* @__PURE__ */ jsxs13("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx29(SectionHeader, { badge, headline, subheadline, isDark }),
      /* @__PURE__ */ jsxs13("div", { className: "relative mx-auto max-w-2xl", children: [
        /* @__PURE__ */ jsx29("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx29(AnimatePresence5, { custom: direction, mode: "wait", children: /* @__PURE__ */ jsx29(
          motion5.div,
          {
            custom: direction,
            variants: slideVariants,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: { duration: 0.3, ease: "easeInOut" },
            children: /* @__PURE__ */ jsx29(TestimonialCard, { item: testimonials[current], isDark, elevated: true })
          },
          current
        ) }) }),
        total > 1 && /* @__PURE__ */ jsxs13(Fragment, { children: [
          /* @__PURE__ */ jsx29(
            "button",
            {
              type: "button",
              "aria-label": "Previous testimonial",
              onClick: () => go(current - 1),
              className: cn(navBtnCls, "-left-5 lg:-left-14"),
              children: /* @__PURE__ */ jsx29("svg", { className: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx29("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) })
            }
          ),
          /* @__PURE__ */ jsx29(
            "button",
            {
              type: "button",
              "aria-label": "Next testimonial",
              onClick: () => go(current + 1),
              className: cn(navBtnCls, "-right-5 lg:-right-14"),
              children: /* @__PURE__ */ jsx29("svg", { className: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx29("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) })
            }
          )
        ] })
      ] }),
      total > 1 && /* @__PURE__ */ jsx29("div", { className: "mt-8 flex justify-center gap-2", role: "tablist", "aria-label": "Testimonial navigation", children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ jsx29(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": i === current,
          "aria-label": `Testimonial ${i + 1}`,
          onClick: () => go(i),
          className: cn(
            "h-2 rounded-full transition-all duration-300",
            i === current ? "w-6 bg-[--si-primary]" : isDark ? "w-2 bg-white/20 hover:bg-white/40" : "w-2 bg-[--si-gray-300] hover:bg-[--si-gray-500]"
          )
        },
        i
      )) })
    ] }) });
  }
);
TestimonialsCarousel.displayName = "TestimonialsCarousel";

// src/components/CTABanner/CTABanner.tsx
import * as React28 from "react";
import { cva as cva14 } from "class-variance-authority";
import { Fragment as Fragment2, jsx as jsx30, jsxs as jsxs14 } from "react/jsx-runtime";
var sectionCva5 = cva14("relative w-full overflow-hidden py-16 lg:py-24", {
  variants: {
    variant: {
      primary: "bg-[--si-primary]",
      dark: "bg-[--si-dark]",
      gradient: "bg-gradient-to-br from-[--si-primary] to-[#4338ca]"
    }
  },
  defaultVariants: { variant: "primary" }
});
var headlineCva2 = cva14(
  "font-extrabold tracking-tight leading-tight text-white text-3xl sm:text-4xl lg:text-5xl",
  {
    variants: {
      variant: {
        primary: "",
        dark: "",
        gradient: ""
      }
    },
    defaultVariants: { variant: "primary" }
  }
);
var subCva2 = cva14("mt-4 text-lg max-w-2xl mx-auto", {
  variants: {
    variant: {
      primary: "text-white/80",
      dark: "text-[--si-gray-400]",
      gradient: "text-white/80"
    }
  },
  defaultVariants: { variant: "primary" }
});
var CTABanner = React28.forwardRef(
  ({ className, variant = "primary", headline, subheadline, ctaPrimary, ctaSecondary, ...props }, ref) => /* @__PURE__ */ jsxs14("section", { ref, className: cn(sectionCva5({ variant }), className), ...props, children: [
    variant === "gradient" && /* @__PURE__ */ jsxs14(Fragment2, { children: [
      /* @__PURE__ */ jsx30(
        "span",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        }
      ),
      /* @__PURE__ */ jsx30(
        "span",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx30("h2", { className: cn(headlineCva2({ variant })), children: headline }),
      subheadline && /* @__PURE__ */ jsx30("p", { className: cn(subCva2({ variant })), children: subheadline }),
      /* @__PURE__ */ jsxs14("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx30("a", { href: ctaPrimary.href, className: cn(buttonVariants({ variant: "light", size: "lg" })), children: ctaPrimary.label }),
        ctaSecondary && /* @__PURE__ */ jsx30(
          "a",
          {
            href: ctaSecondary.href,
            className: cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "text-white hover:bg-white/10"
            ),
            children: ctaSecondary.label
          }
        )
      ] })
    ] })
  ] })
);
CTABanner.displayName = "CTABanner";

// src/components/StatsSection/StatsSection.tsx
import * as React29 from "react";
import { cva as cva15 } from "class-variance-authority";
import { jsx as jsx31, jsxs as jsxs15 } from "react/jsx-runtime";
var sectionCva6 = cva15("w-full py-16 lg:py-24", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var valueCva = cva15("text-5xl font-extrabold tracking-tight", {
  variants: {
    variant: {
      light: "text-[--si-heading-color]",
      dark: "text-white",
      gray: "text-[--si-heading-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var labelCva = cva15("mt-2 text-sm font-medium uppercase tracking-widest", {
  variants: {
    variant: {
      light: "text-[--si-body-color]",
      dark: "text-[--si-gray-400]",
      gray: "text-[--si-body-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var dividerCva = cva15("hidden h-16 w-px self-center lg:block", {
  variants: {
    variant: {
      light: "bg-[--si-border-color]",
      dark: "bg-white/10",
      gray: "bg-[--si-border-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var cardCva = cva15("rounded-2xl p-8 text-center shadow-sm", {
  variants: {
    variant: {
      light: "bg-[--si-card-bg] border border-[--si-border-color]",
      dark: "bg-white/5",
      gray: "bg-[--si-body-bg] border border-[--si-border-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var StatsSection = React29.forwardRef(
  ({ className, variant = "light", layout = "row", stats, headline, ...props }, ref) => {
    const isDark = variant === "dark";
    return /* @__PURE__ */ jsx31("section", { ref, className: cn(sectionCva6({ variant }), className), ...props, children: /* @__PURE__ */ jsxs15("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      headline && /* @__PURE__ */ jsx31(
        "h2",
        {
          className: cn(
            "mb-12 text-center text-2xl font-bold",
            isDark ? "text-white" : "text-[--si-heading-color]"
          ),
          children: headline
        }
      ),
      layout === "row" ? /* @__PURE__ */ jsx31("div", { className: "flex flex-wrap items-start justify-around gap-8", children: stats.map((stat, i) => /* @__PURE__ */ jsxs15(React29.Fragment, { children: [
        i > 0 && /* @__PURE__ */ jsx31("div", { className: cn(dividerCva({ variant })) }),
        /* @__PURE__ */ jsxs15("div", { className: "min-w-[140px] flex-1 text-center", children: [
          /* @__PURE__ */ jsxs15("p", { className: cn(valueCva({ variant })), children: [
            stat.value,
            stat.suffix && /* @__PURE__ */ jsx31("span", { className: "text-[--si-primary]", children: stat.suffix })
          ] }),
          /* @__PURE__ */ jsx31("p", { className: cn(labelCva({ variant })), children: stat.label })
        ] })
      ] }, i)) }) : /* @__PURE__ */ jsx31("div", { className: "grid grid-cols-2 gap-6 md:grid-cols-4", children: stats.map((stat, i) => /* @__PURE__ */ jsxs15("div", { className: cn(cardCva({ variant })), children: [
        /* @__PURE__ */ jsxs15("p", { className: cn(valueCva({ variant })), children: [
          stat.value,
          stat.suffix && /* @__PURE__ */ jsx31("span", { className: "text-[--si-primary]", children: stat.suffix })
        ] }),
        /* @__PURE__ */ jsx31("p", { className: cn(labelCva({ variant })), children: stat.label })
      ] }, i)) })
    ] }) });
  }
);
StatsSection.displayName = "StatsSection";

// src/components/FAQAccordion/FAQAccordion.tsx
import * as React30 from "react";
import { cva as cva16 } from "class-variance-authority";
import { jsx as jsx32, jsxs as jsxs16 } from "react/jsx-runtime";
var sectionCva7 = cva16("w-full py-16 lg:py-24", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var triggerCva = cva16("", {
  variants: {
    variant: {
      light: "",
      dark: "text-white hover:text-[--si-primary] [&[aria-expanded=true]]:text-white",
      gray: ""
    }
  },
  defaultVariants: { variant: "light" }
});
var contentCva = cva16("", {
  variants: {
    variant: {
      light: "",
      dark: "text-[--si-gray-400]",
      gray: ""
    }
  },
  defaultVariants: { variant: "light" }
});
var accordionCva = cva16("", {
  variants: {
    variant: {
      light: "divide-[--si-border-color]",
      dark: "divide-white/10",
      gray: "divide-[--si-border-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var FAQAccordion = React30.forwardRef(
  ({ className, variant = "light", badge, headline, items, ...props }, ref) => {
    const isDark = variant === "dark";
    return /* @__PURE__ */ jsx32("section", { ref, className: cn(sectionCva7({ variant }), className), ...props, children: /* @__PURE__ */ jsxs16("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs16("div", { className: "mb-12 text-center", children: [
        badge && /* @__PURE__ */ jsx32(Badge, { variant: isDark ? "light" : "primary", className: "mb-4", children: badge }),
        /* @__PURE__ */ jsx32(
          "h2",
          {
            className: cn(
              "text-3xl font-bold lg:text-4xl",
              isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: headline
          }
        )
      ] }),
      /* @__PURE__ */ jsx32(
        Accordion,
        {
          type: "single",
          className: cn("divide-y", accordionCva({ variant })),
          children: items.map((item, i) => /* @__PURE__ */ jsxs16(AccordionItem, { value: `faq-${i}`, children: [
            /* @__PURE__ */ jsx32(
              AccordionTrigger,
              {
                className: cn(
                  "py-5 text-base font-semibold",
                  isDark ? "text-white hover:text-[--si-primary]" : "text-[--si-heading-color] hover:text-[--si-primary]",
                  triggerCva({ variant })
                ),
                children: item.question
              }
            ),
            /* @__PURE__ */ jsx32(
              AccordionContent,
              {
                className: cn(
                  "text-base leading-relaxed",
                  isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]",
                  contentCva({ variant })
                ),
                children: item.answer
              }
            )
          ] }, i))
        }
      )
    ] }) });
  }
);
FAQAccordion.displayName = "FAQAccordion";

// src/components/LogoCloud/LogoCloud.tsx
import * as React31 from "react";
import { cva as cva17 } from "class-variance-authority";
import { jsx as jsx33, jsxs as jsxs17 } from "react/jsx-runtime";
var sectionCva8 = cva17("w-full py-12 lg:py-20", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var headlineCva3 = cva17("mb-10 text-center text-sm font-semibold uppercase tracking-widest", {
  variants: {
    variant: {
      light: "text-[--si-body-color]",
      dark: "text-[--si-gray-400]",
      gray: "text-[--si-body-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var logoCva = cva17(
  "transition-all duration-200 grayscale hover:grayscale-0 hover:opacity-100",
  {
    variants: {
      variant: {
        light: "opacity-50",
        dark: "opacity-40 brightness-200",
        gray: "opacity-50"
      }
    },
    defaultVariants: { variant: "light" }
  }
);
var LogoCloud = React31.forwardRef(
  ({ className, variant = "light", headline, logos, ...props }, ref) => /* @__PURE__ */ jsx33("section", { ref, className: cn(sectionCva8({ variant }), className), ...props, children: /* @__PURE__ */ jsxs17("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    headline && /* @__PURE__ */ jsx33("p", { className: cn(headlineCva3({ variant })), children: headline }),
    /* @__PURE__ */ jsx33("div", { className: "flex flex-wrap items-center justify-center gap-8 lg:gap-12", children: logos.map((logo) => {
      const img = /* @__PURE__ */ jsx33(
        "img",
        {
          src: logo.src,
          alt: logo.name,
          className: cn("h-8 w-auto object-contain lg:h-10", logoCva({ variant }))
        }
      );
      return logo.href ? /* @__PURE__ */ jsx33(
        "a",
        {
          href: logo.href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": logo.name,
          children: img
        },
        logo.name
      ) : /* @__PURE__ */ jsx33("span", { children: img }, logo.name);
    }) })
  ] }) })
);
LogoCloud.displayName = "LogoCloud";

// src/components/FooterSection/FooterSection.tsx
import * as React32 from "react";
import { cva as cva18 } from "class-variance-authority";
import { jsx as jsx34, jsxs as jsxs18 } from "react/jsx-runtime";
var sectionCva9 = cva18("w-full", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg] border-t border-[--si-border-color]",
      dark: "bg-[--si-dark]"
    }
  },
  defaultVariants: { variant: "dark" }
});
var headingCva = cva18("mb-4 text-sm font-semibold uppercase tracking-widest", {
  variants: {
    variant: {
      light: "text-[--si-heading-color]",
      dark: "text-white"
    }
  },
  defaultVariants: { variant: "dark" }
});
var linkCva = cva18(
  "text-sm transition-colors duration-150 hover:text-[--si-primary]",
  {
    variants: {
      variant: {
        light: "text-[--si-body-color]",
        dark: "text-[--si-gray-400]"
      }
    },
    defaultVariants: { variant: "dark" }
  }
);
var taglineCva = cva18("mt-2 text-sm", {
  variants: {
    variant: {
      light: "text-[--si-body-color]",
      dark: "text-[--si-gray-400]"
    }
  },
  defaultVariants: { variant: "dark" }
});
var bottomBarCva = cva18("border-t py-6 text-sm", {
  variants: {
    variant: {
      light: "border-[--si-border-color] text-[--si-body-color]",
      dark: "border-white/10 text-[--si-gray-400]"
    }
  },
  defaultVariants: { variant: "dark" }
});
var socialIconMap = {
  twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  github: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  youtube: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
};
function SocialIcon({ platform, href }) {
  const d = socialIconMap[platform.toLowerCase()];
  return /* @__PURE__ */ jsx34(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": platform,
      className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[--si-gray-400] transition-all hover:bg-[--si-primary] hover:text-white",
      children: /* @__PURE__ */ jsx34("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-4 w-4", "aria-hidden": "true", children: d ? /* @__PURE__ */ jsx34("path", { d }) : /* @__PURE__ */ jsx34("circle", { cx: "12", cy: "12", r: "10" }) })
    }
  );
}
var FooterSection = React32.forwardRef(
  ({ className, variant = "dark", logo, tagline, columns, social, copyright, ...props }, ref) => /* @__PURE__ */ jsx34("footer", { ref, className: cn(sectionCva9({ variant }), className), ...props, children: /* @__PURE__ */ jsxs18("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs18("div", { className: "grid grid-cols-2 gap-8 py-12 lg:grid-cols-5 lg:py-16", children: [
      /* @__PURE__ */ jsxs18("div", { className: "col-span-2 lg:col-span-1", children: [
        logo && /* @__PURE__ */ jsx34("img", { src: logo, alt: "Logo", className: "mb-4 h-8 w-auto" }),
        !logo && /* @__PURE__ */ jsx34("div", { className: "mb-4 text-lg font-bold text-[--si-primary]", children: "Silicon" }),
        tagline && /* @__PURE__ */ jsx34("p", { className: cn(taglineCva({ variant })), children: tagline }),
        social && social.length > 0 && /* @__PURE__ */ jsx34("div", { className: "mt-6 flex gap-3", children: social.map((s) => /* @__PURE__ */ jsx34(SocialIcon, { ...s }, s.platform)) })
      ] }),
      columns.map((col) => /* @__PURE__ */ jsxs18("div", { children: [
        /* @__PURE__ */ jsx34("h3", { className: cn(headingCva({ variant })), children: col.title }),
        /* @__PURE__ */ jsx34("ul", { className: "space-y-3", children: col.links.map((link) => /* @__PURE__ */ jsx34("li", { children: /* @__PURE__ */ jsx34("a", { href: link.href, className: cn(linkCva({ variant })), children: link.label }) }, link.href)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsx34("div", { className: cn(bottomBarCva({ variant })), children: /* @__PURE__ */ jsx34("p", { children: copyright }) })
  ] }) })
);
FooterSection.displayName = "FooterSection";

// src/components/HowItWorksSteps/HowItWorksSteps.tsx
import * as React33 from "react";
import { cva as cva19 } from "class-variance-authority";
import { jsx as jsx35, jsxs as jsxs19 } from "react/jsx-runtime";
var sectionCva10 = cva19("relative w-full py-16 lg:py-24", {
  variants: {
    variant: {
      light: "bg-[--si-body-bg]",
      dark: "bg-[--si-dark]",
      gray: "bg-[--si-secondary-bg]"
    }
  },
  defaultVariants: { variant: "light" }
});
var stepNumberCva = cva19(
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold ring-2",
  {
    variants: {
      variant: {
        light: "bg-[--si-primary-faded] text-[--si-primary] ring-[--si-primary-faded]",
        dark: "bg-[--si-primary]/20 text-[--si-primary] ring-[--si-primary]/30",
        gray: "bg-[--si-primary-faded] text-[--si-primary] ring-[--si-primary-faded]"
      }
    },
    defaultVariants: { variant: "light" }
  }
);
var connectorCva = cva19("hidden lg:block absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-px", {
  variants: {
    variant: {
      light: "bg-[--si-border-color]",
      dark: "bg-white/10",
      gray: "bg-[--si-border-color]"
    }
  },
  defaultVariants: { variant: "light" }
});
var HowItWorksSteps = React33.forwardRef(
  ({ className, variant = "light", badge, headline, subheadline, steps, ...props }, ref) => {
    const isDark = variant === "dark";
    return /* @__PURE__ */ jsx35("section", { ref, className: cn(sectionCva10({ variant }), className), ...props, children: /* @__PURE__ */ jsxs19("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs19("div", { className: "mx-auto mb-12 max-w-2xl text-center lg:mb-16", children: [
        badge && /* @__PURE__ */ jsx35(Badge, { variant: isDark ? "light" : "primary", className: "mb-4", children: badge }),
        /* @__PURE__ */ jsx35(
          "h2",
          {
            className: cn(
              "mb-4 text-3xl font-bold lg:text-4xl",
              isDark ? "text-white" : "text-[--si-heading-color]"
            ),
            children: headline
          }
        ),
        subheadline && /* @__PURE__ */ jsx35(
          "p",
          {
            className: cn(
              "text-base lg:text-lg",
              isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"
            ),
            children: subheadline
          }
        )
      ] }),
      /* @__PURE__ */ jsx35("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((step, i) => /* @__PURE__ */ jsxs19("div", { className: "relative flex flex-col items-center text-center", children: [
        i < steps.length - 1 && /* @__PURE__ */ jsx35("div", { className: cn(connectorCva({ variant })) }),
        /* @__PURE__ */ jsx35("div", { className: cn(stepNumberCva({ variant })), children: step.icon ? /* @__PURE__ */ jsx35(Icon, { name: step.icon, size: "lg" }) : /* @__PURE__ */ jsx35("span", { children: step.step }) }),
        /* @__PURE__ */ jsxs19("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsx35(
            "h3",
            {
              className: cn(
                "mb-2 text-base font-semibold",
                isDark ? "text-white" : "text-[--si-heading-color]"
              ),
              children: step.title
            }
          ),
          /* @__PURE__ */ jsx35(
            "p",
            {
              className: cn(
                "text-sm leading-relaxed",
                isDark ? "text-[--si-gray-400]" : "text-[--si-body-color]"
              ),
              children: step.description
            }
          )
        ] })
      ] }, i)) })
    ] }) });
  }
);
HowItWorksSteps.displayName = "HowItWorksSteps";
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  CTABanner,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
  FAQAccordion,
  FeaturesGrid,
  FooterSection,
  FormError,
  FormGroup,
  FormHint,
  HeroSection,
  HowItWorksSteps,
  Icon,
  Input,
  Label,
  LogoCloud,
  Modal,
  ModalBody,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Pagination,
  PaginationButton,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
  PricingSection,
  Progress,
  Radio,
  Select,
  Separator,
  Skeleton,
  Spinner,
  StatsSection,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TestimonialsCarousel,
  Textarea,
  Toast,
  ToastProvider,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  alertVariants,
  avatarVariants,
  badgeVariants,
  buttonVariants,
  cn,
  iconVariants,
  inputVariants,
  progressIndicatorVariants,
  spinnerVariants,
  textareaVariants,
  toastVariants,
  useToast
};
//# sourceMappingURL=index.mjs.map