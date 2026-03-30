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

/* ------------------ Context ------------------ */

type AccordionType = "single" | "multiple";

type AccordionContextType = {
  openItems: string[];
  toggleItem: (value: string) => void;
  registerTrigger: (ref: HTMLButtonElement | null) => void;
  focusNext: (current: HTMLButtonElement) => void;
  focusPrev: (current: HTMLButtonElement) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Must be used within Accordion");
  return ctx;
}

/* ------------------ Root ------------------ */

type AccordionProps = {
  children: ReactNode;
  type?: AccordionType;
  collapsible?: boolean;
  className?: string;
};

export function Accordion({
  children,
  type = "single",
  collapsible = true,
  className,
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

      if (isOpen) {
        return collapsible ? prev.filter((v) => v !== value) : prev;
      }

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

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, registerTrigger, focusNext, focusPrev }}
    >
      <div className={clsx("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

/* ------------------ Item ------------------ */

type AccordionItemProps = {
  value: string;
  children: ReactNode;
};

export function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <div className="border border-border rounded-[var(--radius-md)] overflow-hidden bg-surface">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { value })
          : child
      )}
    </div>
  );
}

/* ------------------ Trigger ------------------ */

type AccordionTriggerProps = {
  children: ReactNode;
  value?: string;
};

export function AccordionTrigger({
  children,
  value,
}: AccordionTriggerProps) {
  const {
    openItems,
    toggleItem,
    registerTrigger,
    focusNext,
    focusPrev,
  } = useAccordion();

  const ref = useRef<HTMLButtonElement>(null);
  const id = useId();

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
      aria-controls={`content-${id}`}
      id={`trigger-${id}`}
      className={clsx(
        "w-full flex items-center justify-between px-4 py-3 text-left",
        "bg-surface hover:bg-muted transition",
        "font-medium focus:outline-none focus:ring-2 focus:ring-primary"
      )}
    >
      <div className="flex items-center">{children}</div>

      <ChevronDown
        size={18}
        className={clsx(
          "transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

/* ------------------ Content ------------------ */

type AccordionContentProps = {
  children: ReactNode;
  value?: string;
};

export function AccordionContent({
  children,
  value,
}: AccordionContentProps) {
  const { openItems } = useAccordion();
  const id = useId();

  const isOpen = value ? openItems.includes(value) : false;

  return (
    <div
      id={`content-${id}`}
      role="region"
      aria-labelledby={`trigger-${id}`}
      className={clsx(
        "px-4 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 py-3" : "max-h-0"
      )}
    >
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}