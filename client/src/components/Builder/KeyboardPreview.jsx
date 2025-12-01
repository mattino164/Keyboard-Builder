import { Card, SectionTitle } from "../UI";

/**
 * Displays a live visual preview of the keyboard being built.
 * Layers are stacked in the order: size → switches → keycaps → cable → accessories.
 */
export default function KeyboardPreview({ build = {}, handleRemove }) {
  // Safely extract parts from build context
  const { size, switchType, keycap, cable, accessories = [] } = build;

  // Construct layered image data for preview (only include selected parts)
  const layers = [
    {
      part: size,
      category: "size",
      image: size?.image || "/assets/sizes/60Key.png", // fallback image
    },
    { part: switchType, category: "switchType", image: switchType?.image },
    { part: keycap, category: "keycap", image: keycap?.image },
    { part: cable, category: "cable", image: cable?.image },
    ...accessories.map((a) => ({
      part: a,
      category: "accessory",
      image: a.image,
    })),
  ].filter((l) => l.part); // remove any empty layers

  return (
    <Card className="keyboard-preview-card">
      <SectionTitle>Keyboard Preview</SectionTitle>

      <div className="keyboard-preview">
        {/* Render each selected part as a stacked layer */}
        {layers.map(({ part, category, image }, idx) => (
          <div key={`${category}-${idx}`} className="keyboard-layer">
            <img
              src={image}
              alt={part.name}
              className="keyboard-layer-img"
              loading="lazy"
            />

            {/* Remove button for individual layer */}
            <button
              onClick={() => handleRemove(category, part)}
              className="remove-btn"
              aria-label={`Remove ${part.name}`}>
              ❌
            </button>
          </div>
        ))}

        {/* Placeholder shown when no parts are selected */}
        {layers.length === 0 && (
          <p className="preview-placeholder">Start adding parts to preview</p>
        )}
      </div>
    </Card>
  );
}
