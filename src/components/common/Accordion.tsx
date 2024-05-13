import React, { useState } from "react";
import "@/assets/styles/components/common/accordion.scss";


interface AccordionProps {
  id: string;
  name: string;
  title: string | "Accordion";
  children: React.ReactNode | null;
  open?: boolean;
}
function Accordion({
  id,
  name = "accordion",
  title = "Title",
  children = "contenido",
  open,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(Boolean(open));

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="accordion">
        <div className="tab">
          <input
            type="checkbox"
            name={name}
            id={id}
            checked={isOpen}
            onChange={() => toggleAccordion()}
          />
          <label htmlFor={id} className="tab__label">
            {title}
          </label>
          <div className={`tab__content ${isOpen ? "open" : ""}`}>
            <p>{children}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordion;
