import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useId,
} from "react";
import type { ReactNode, KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";


/* ------------------ Types ------------------ */

type AccordionType = "single" | "multiple";

type ThemeProps = {
  themeInverse?: boolean;
};

type AccordionContextType = {
  openItems: string[];
  toggleItem: (value: string) => void;
  registerTrigger: (ref: HTMLButtonElement | null) => void;
  focusNext: (current: HTMLButtonElement) => void;
  focusPrev: (current: HTMLButtonElement) => void;
};

/* ------------------ Context ------------------ */

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion components must be used within <Accordion>");
  }
  return ctx;
}

/* ------------------ Root Accordion ------------------ */

type AccordionProps = {
  children: ReactNode;
  type?: AccordionType;
  collapsible?: boolean;
  className?: string;
  themeInverse?: boolean;
};

function AccordionRoot({
  children,
  type = "single",
  collapsible = true,
  className,
  themeInverse,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const triggersRef = useRef<HTMLButtonElement[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(value);
      if (type === "single") {
        if (isOpen) return collapsible ? [] : prev;
        return [value];
      }
      if (isOpen) return collapsible ? prev.filter((v) => v !== value) : prev;
      return [...prev, value];
    });
  };

  const registerTrigger = (ref: HTMLButtonElement | null) => {
    if (ref && !triggersRef.current.includes(ref)) {
      triggersRef.current.push(ref);
    }
  };

  const focusNext = (current: HTMLButtonElement) => {
    const i = triggersRef.current.indexOf(current);
    const next = triggersRef.current[i + 1] || triggersRef.current[0];
    next?.focus();
  };

  const focusPrev = (current: HTMLButtonElement) => {
    const i = triggersRef.current.indexOf(current);
    const prev =
      triggersRef.current[i - 1] ||
      triggersRef.current[triggersRef.current.length - 1];
    prev?.focus();
  };

  const childrenWithTheme = React.Children.map(children, (child) =>
    React.isValidElement<ThemeProps>(child)
      ? React.cloneElement(child, { themeInverse })
      : child
  );


  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, registerTrigger, focusNext, focusPrev }}
    >
      <div className={clsx("space-y-2", className)}>{childrenWithTheme}</div>
    </AccordionContext.Provider>
  );
}

/* ------------------ Item ------------------ */

type AccordionItemProps = {
  value: string;
  children: ReactNode;
} & ThemeProps;

function AccordionItem({ value, children, themeInverse }: AccordionItemProps) {
  const id = useId();

  return (
    <div
      className={clsx(
        "border rounded-[var(--radius-md)] overflow-hidden",
        themeInverse
          ? "bg-white/10 border-white/20"
          : "bg-surface border-border"
      )}
    >

    {React.Children.map(children, (child) =>
      React.isValidElement<{ value?: string; itemId?: string; themeInverse?: boolean }>(child)
        ? React.cloneElement(child, { value, itemId: id, themeInverse })
        : child
    )}
      
    </div>
  );
}

/* ------------------ Trigger ------------------ */

type AccordionTriggerProps = {
  children: ReactNode;
  value?: string;
  itemId?: string;
} & ThemeProps;

function AccordionTrigger({
  children,
  value,
  itemId,
  themeInverse,
}: AccordionTriggerProps) {
  const { openItems, toggleItem, registerTrigger, focusNext, focusPrev } =
    useAccordion();
  const ref = useRef<HTMLButtonElement>(null);
  const isOpen = value ? openItems.includes(value) : false;

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusNext(ref.current);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusPrev(ref.current);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        value && toggleItem(value);
        break;
    }
  };

  return (
    <button
      ref={(node) => {
        ref.current = node;
        registerTrigger(node);
      }}
      onClick={() => value && toggleItem(value)}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-controls={`content-${itemId}`}
      id={`trigger-${itemId}`}
      className={clsx(
        "w-full flex items-center justify-between px-4 py-3 text-left font-medium transition",
        themeInverse
          ? "bg-white/5 hover:bg-white/10 text-white"
          : "bg-surface hover:bg-muted text-default",
        "focus:outline-none focus:ring-2 focus:ring-primary"
      )}
    >
      <div className="flex items-center">{children}</div>
      <ChevronDown
        size={18}
        className={clsx("transition-transform duration-200", isOpen && "rotate-180")}
      />
    </button>
  );
}

/* ------------------ Content ------------------ */

type AccordionContentProps = {
  children: ReactNode;
  value?: string;
  itemId?: string;
} & ThemeProps;

function AccordionContent({
  children,
  value,
  itemId,
  themeInverse,
}: AccordionContentProps) {
  const { openItems } = useAccordion();
  const isOpen = value ? openItems.includes(value) : false;

  return (
    <div
      id={`content-${itemId}`}
      role="region"
      aria-labelledby={`trigger-${itemId}`}
      className={clsx(
        "px-4 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 py-3" : "max-h-0"
      )}
    >
      <div
        className={clsx(
          "text-sm",
          themeInverse ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------ Combine sub-components ------------------ */

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});