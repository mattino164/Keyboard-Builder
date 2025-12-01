/**
 * SectionTitle Component
 *
 * Renders a consistent heading style for major sections within the app.
 * Accepts text or elements as children.
 */
export default function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}
