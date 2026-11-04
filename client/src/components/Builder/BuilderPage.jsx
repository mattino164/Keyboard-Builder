import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BuildContext } from "../../context/BuildContext";
import KeyboardPreview from "./KeyboardPreview";
import PartSelector from "./PartSelector";
import PriceSummary from "./PriceSummary";
import { Spinner } from "../UI";
import "../../styles/Builder.css";

// API address for local development and deployment
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function BuilderPage() {
  // Access global build state and total price
  const { build, setBuild, total } = useContext(BuildContext);

  // Local component state
  const [parts, setParts] = useState([]); // All available keyboard parts
  const [loading, setLoading] = useState(true); // Loading state for data fetch
  const [toast, setToast] = useState({ message: "", type: "success" }); // Toast feedback message

  // Fetch all parts from backend API when the component mounts
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        const { data } = await axios.get(`${API_URL}/api/parts`);
        setParts(data);
      } catch (err) {
        console.error("❌ Failed to fetch parts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchParts();
  }, []);

  // Display temporary toast message
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "success" }), 2000);
  };

  // Handle selecting or deselecting a part
  const handleSelect = (category, option, isSelected = false) => {
    if (isSelected) {
      handleRemove(category, option);
      return;
    }

    // Add selected part to the build
    if (category === "accessory") {
      setBuild((prev) => ({
        ...prev,
        accessories: [...prev.accessories, option],
      }));
    } else {
      setBuild((prev) => ({ ...prev, [category]: option }));
    }

    showToast(`${option.name} added`, "success");
  };

  // Handle removing a part from the build
  const handleRemove = (category, part) => {
    setBuild((prev) => {
      const updated = { ...prev };

      if (category === "accessory") {
        updated.accessories = prev.accessories.filter((a) => a.id !== part.id);
      } else {
        updated[category] = null;
      }

      return updated;
    });

    showToast(`${part.name} removed`, "error");
  };

  // Show loading spinner while fetching parts
  if (loading) return <Spinner />;

  // Compile selected parts for price summary
  const selectedParts = [
    build.size,
    build.switchType,
    build.keycap,
    build.cable,
    ...build.accessories,
  ].filter(Boolean);

  return (
    <div className="builder-container">
      {/* Toast notification */}
      {toast.message && (
        <div className={`builder-toast ${toast.type}`}>{toast.message}</div>
      )}

      <h1 className="builder-title">Keyboard Builder</h1>

      <div className="builder-layout">
        {/* Left: Keyboard preview */}
        <div className="builder-left">
          <KeyboardPreview build={build} handleRemove={handleRemove} />
        </div>

        {/* Right: Part selection panels */}
        <div className="builder-right">
          {["size", "switchType", "keycap", "cable", "accessory"].map((cat) => (
            <PartSelector
              key={cat}
              title={`Choose ${cat.charAt(0).toUpperCase() + cat.slice(1)}${
                cat === "accessory" ? "s" : ""
              }`}
              options={parts.filter((p) => p.category === cat)}
              selected={cat === "accessory" ? build.accessories : [build[cat]]}
              onSelect={(option, isSelected) =>
                handleSelect(cat, option, isSelected)
              }
            />
          ))}
        </div>
      </div>

      {/* Bottom: total price summary */}
      <PriceSummary total={total} selectedParts={selectedParts} />
    </div>
  );
}
