import { useState } from "react";
import { Card, CategoryTitle } from "../UI";
import "../../styles/Builder.css";

/**
 * PartSelector
 * -------------
 * Displays a collapsible list of selectable keyboard parts (e.g., keycaps, switches, etc.).
 * Users can expand/collapse each category and choose or remove parts.
 */
export default function PartSelector({
  title,
  options,
  selected = [],
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false); // Controls collapse state of section

  /**
   * Handles part selection and deselection logic.
   * If the part is already selected, clicking it removes it; otherwise, it adds it.
   */
  const handleCardClick = (option) => {
    const isSelected = selected.some((s) => s?.id === option.id);
    onSelect(option, isSelected);
  };

  return (
    <div className="partSelector-section">
      {/* Section header with toggle arrow */}
      <button
        type="button"
        className="partSelector-header"
        onClick={() => setIsOpen((prev) => !prev)}>
        <CategoryTitle>{title}</CategoryTitle>
        <span className="partSelector-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Collapsible part grid */}
      {isOpen && (
        <div className="partSelector-grid">
          {options.map((option) => {
            const isSelected = selected.some((s) => s?.id === option.id);

            return (
              <Card
                key={option.id}
                className={`part-card ${
                  isSelected ? "selected" : "hoverable"
                }`}>
                {/* Clickable overlay */}
                <button
                  type="button"
                  className="card-click-area"
                  onClick={() => handleCardClick(option)}
                  aria-pressed={isSelected}
                />

                {/* Part image and info */}
                <img
                  src={option.image}
                  alt={option.name}
                  className="part-image"
                />
                <div className="mt-2 text-center">
                  <p className="font-medium">{option.name}</p>
                  <p className="text-sm text-gray-500">${option.price}</p>
                </div>

                {/* Hover overlay */}
                <div className="part-hover-info">
                  {option.description && <p>{option.description}</p>}
                  {option.type && (
                    <p>
                      <strong>Type:</strong> {option.type}
                    </p>
                  )}
                  {option.sound && (
                    <p>
                      <strong>Sound:</strong> {option.sound}
                    </p>
                  )}
                  {option.theme && (
                    <p>
                      <strong>Theme:</strong> {option.theme}
                    </p>
                  )}
                  {option.style && (
                    <p>
                      <strong>Style:</strong> {option.style}
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
