/**
 * Spinner Component
 *
 * Displays a centered loading spinner with a simple animation.
 * Can be used to indicate loading states throughout the app.
 */
export default function Spinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}
