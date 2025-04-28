import React, { useEffect } from "react";
import OriginalLayout from "@theme-original/Layout";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Layout({ children, ...props }) {
  const customCss = useBaseUrl("/assets/css/styles.css");
  const logoImage = useBaseUrl("/img/logo_allWhite.svg");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => AOS.init());
    }
  }, []);

  return (
    <>
      <Head>
        {/* Font Awesome icons */}
        <script
          src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"
          crossOrigin="anonymous"
        ></script>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Core theme CSS */}
        <link href="/css/styles.css?v=20250425" rel="stylesheet" />
        <link href="/css/new.css" rel="stylesheet" />

        {/* AOS (scroll animation) */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>

        {/* Custom Theme CSS */}
        <link rel="stylesheet" href={customCss} />
      </Head>

      {/* Navbar (fixed) */}
      <div className="custom-theme">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          id="mainNav"
          style={{ zIndex: 9999 }}
        >
          <div className="newNav_container">
            <a className="navbar-brand" href="/index.html">
              <img
                alt="RcloneView logo"
                className="logo_white"
                src={logoImage}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                Menu{" "}
                <i
                  className="fas fa-bars ms-2"
                  style={{ fontSize: "26px" }}
                ></i>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/src/pricing.html">
                    Plus
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/src/download.html">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/support/">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://forum.rcloneview.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Docusaurus Main Layout */}
      <OriginalLayout {...props}>
        <div>{children}</div>
      </OriginalLayout>
    </>
  );
}
