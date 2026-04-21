import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Sant Gadge Seva Award 2026 — Honoring Selfless Service";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Sant Gadge Seva Award 2026 — recognizing unsung heroes in social service & healthcare. 10 May 2026, Sukanta Sadan, Barrackpore, Kolkata."
    );
  }, []);

  return (
    <iframe
      src="/sant-gadge-award.html"
      title="Sant Gadge Seva Award 2026"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-top-navigation-by-user-activation"
      style={{ border: "none", width: "100vw", height: "100vh", display: "block" }}
    />
  );
};

export default Index;
