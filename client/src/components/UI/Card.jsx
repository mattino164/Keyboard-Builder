/**
 * Reusable container component for grouping related content.
 *
 * Props:
 * - children: The content to display inside the card.
 * - className: Optional extra CSS classes for customization.
 */
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
}
