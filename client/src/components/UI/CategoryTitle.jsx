/**
 * Section heading used for labeling categories in the UI.
 *
 * Props:
 * - children: The text or elements to display as the title.
 */
export default function CategoryTitle({ children }) {
  return <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>;
}
