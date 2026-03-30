import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

/* ------------------ Context ------------------ */

type AccordionType = "single" | "multiple";

type AccordionContextType = {
  openItems: string[]; // unified as array
  toggleItem: (value: string) => void;
  type: AccordionType;
  collapsible: boolean;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion components must be used within <Accordion>");
  }
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

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(value);

      // SINGLE MODE
      if (type === "single") {
        if (isOpen) {
          return collapsible ? [] : prev;
        }
        return [value];
      }

      // MULTIPLE MODE
      if (isOpen) {
        return collapsible ? prev.filter((v) => v !== value) : prev;
      }

      return [...prev, value];
    });
  };

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, type, collapsible }}
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
  const { openItems, toggleItem } = useAccordion();

  const isOpen = value ? openItems.includes(value) : false;

  return (
    <button
      onClick={() => value && toggleItem(value)}
      className={clsx(
        "w-full flex items-center justify-between px-4 py-3 text-left",
        "bg-surface hover:bg-muted transition",
        "font-medium"
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
  const isOpen = value ? openItems.includes(value) : false;

  return (
    <div
      className={clsx(
        "px-4 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 py-3" : "max-h-0"
      )}
    >
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}