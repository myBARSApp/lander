
import CTAButton from "./CTAButton";

export default function Problem() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold">
        Songwriters write everywhere… <span className="text-orange-500">and lose everything.</span>
      </h2>
      <p className="mt-4 text-gray-400">
        Your ideas are scattered and lost.
      </p>
      <div className="mt-8">
        <CTAButton>Join the Waitlist</CTAButton>
      </div>
    </section>
  );
}
