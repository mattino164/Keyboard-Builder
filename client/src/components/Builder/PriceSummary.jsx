import { Card, SectionTitle } from "../UI";

/**
 * Displays the current build's selected parts and their total price.
 *
 * Props:
 * - total (number): Sum of all selected parts' prices.
 * - selectedParts (array): List of parts currently selected in the build.
 */
export default function PriceSummary({ total, selectedParts }) {
  return (
    <Card className="price-summary-card">
      <SectionTitle>Price Summary</SectionTitle>

      {/* Show message if no parts are selected */}
      {selectedParts.length === 0 ? (
        <p className="text-gray-500 text-sm mt-2">No parts selected yet.</p>
      ) : (
        <ul className="price-list">
          {selectedParts.map((part) => (
            <li key={part.id} className="price-item">
              <span>{part.name}</span>
              <span>${part.price}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Display total cost */}
      <div className="price-total">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </Card>
  );
}
