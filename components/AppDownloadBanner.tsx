import React from "react";
import { Truck, Percent, Megaphone } from "lucide-react";

const AppDownloadBanner: React.FC = () => {
  return (
    <section className="w-[88%] mx-auto bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-2 md:py-3 lg:py-4">
        {/* 
          On small screens (below md):
            - flex-col: Heading on top, buttons below
            - Hide Google Play
          On md and up:
            - flex-row: Heading on the left, buttons in the middle, 
              Google Play on the right
        */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          
          {/* Heading with flame emoji and responsive typography */}
          <h2
            className="
              flex items-center gap-1
              text-center md:text-left
              text-white
              text-[12px] leading-[16px]
              md:text-[16px] md:leading-[21px]
              font-bold
            "
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
            }}
          >
            <span role="img" aria-label="fire">
              🔥
            </span>
            Download Our App &amp; Get Exclusive Deals!
          </h2>

          {/* Buttons row */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            {/* Button: Free Delivery */}
            <button
              className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 transition hover:bg-gray-100 md:px-4 md:py-2"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "22px",
                color: "#7155E5",
              }}
            >
              <Truck className="h-3 w-3 md:h-4 md:w-4" />
              Free Delivery
            </button>

            {/* Button: Coupons */}
            <button
              className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 transition hover:bg-gray-100 md:px-4 md:py-2"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "22px",
                color: "#7155E5",
              }}
            >
              <Percent className="h-3 w-3 md:h-4 md:w-4" />
              Coupons
            </button>

            {/* Button: Campaigns */}
            <button
              className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 transition hover:bg-gray-100 md:px-4 md:py-2"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "22px",
                color: "#7155E5",
              }}
            >
              <Megaphone className="h-3 w-3 md:h-4 md:w-4" />
              Campaigns
            </button>

            {/* Google Play badge (hidden on small screens) */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center"
            >
              <img
                src="/images/google-play.svg"
                alt="Get it on Google Play"
                className="h-8 w-auto md:h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
