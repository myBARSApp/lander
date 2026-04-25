
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Never lose your <span className="text-orange-500">lyrics.</span>
        </h1>
        <p className="text-gray-300">
          The songwriting workspace built for real artists.
        </p>
        <CTAButton>Join the Waitlist</CTAButton>
      </div>
      <div className="mt-12">
        <img src="/placeholder.png" width="300"/>
      </div>
    </section>
  );
}
