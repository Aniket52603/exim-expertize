import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="bg-ink2 py-10 text-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center text-sm sm:flex-row sm:justify-between sm:text-left lg:max-w-7xl lg:px-10 lg:text-base">
        <Logo dark className="h-14" />
        <p>© {new Date().getFullYear()} Exim Expertize, Ahmedabad. All rights reserved.</p>
      </div>
    </footer>
  );
}
