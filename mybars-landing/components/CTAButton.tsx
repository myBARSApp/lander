
export default function CTAButton({ children }) {
  return (
    <a href="https://waitlister.me/p/mybars-app?timestamp=1777140581758" target="_blank">
      <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-lg font-semibold">
        {children}
      </button>
    </a>
  );
}
