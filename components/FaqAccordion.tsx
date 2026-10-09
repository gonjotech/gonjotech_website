"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface FaqAccordionProps {
  items: FAQItem[];
  showCategories?: boolean;
}

export default function FaqAccordion({ items, showCategories = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Services", "Engagement", "Support"];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {showCategories && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {filteredItems.map((item, index) => {
          const isOpen = openIndex === index;
          const id = `faq-content-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div
              key={item.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#0d162b] border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                  : "bg-[#0b1222]/80 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => toggleItem(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 rounded-2xl"
              >
                <span className="flex items-center gap-3 font-semibold text-white text-base sm:text-lg">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-cyan-400" : "text-slate-500"}`} />
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={id}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
