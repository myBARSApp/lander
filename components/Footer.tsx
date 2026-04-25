
import CTAButton from "./CTAButton";

export default function Footer() {
  return (
    <footer className="text-center py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold">
        Never lose your <span className="text-orange-500">lyrics.</span>
      </h2>
      <div className="mt-6">
        <CTAButton>Join the Waitlist</CTAButton>
      </div>
      <p className="text-gray-500 mt-10">
        © 2025 myBars App Inc.
      </p>
    </footer>
  );
}
