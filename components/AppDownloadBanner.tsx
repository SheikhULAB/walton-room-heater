import React from "react";
import { Truck, ShoppingBag, Megaphone } from "lucide-react";

const AppDownloadBanner: React.FC = () => {
  return (
    <section className="w-[88%] mx-auto bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white">
      {/* Adjusted vertical padding: py-2 at base, py-3 at md, py-4 at lg */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-2 sm:flex-row md:py-3 lg:py-4">
        {/* Heading text with Roboto (700), color #fff, size 16px, line-height 21px */}
        <h2
          className="text-center sm:text-left"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "21px",
            color: "#FFFFFF",
          }}
        >
          Download Our App &amp; Get Exclusive Deals
        </h2>

        {/* Buttons row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
          {/* Button: Try Free Delivery */}
          <button
            className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-2 transition hover:bg-gray-100 md:px-4 md:py-2"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "22px",
              color: "#7155E5",
            }}
          >
            <Truck className="h-4 w-4" />
            Try Free Delivery
          </button>

          {/* Button: Shop Now */}
          <button
            className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-2 transition hover:bg-gray-100 md:px-4 md:py-2"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "22px",
              color: "#7155E5",
            }}
          >
            <ShoppingBag className="h-4 w-4" />
            Shop Now
          </button>

          {/* Button: Campaigns */}
          <button
            className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-2 transition hover:bg-gray-100 md:px-4 md:py-2"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "22px",
              color: "#7155E5",
            }}
          >
            <Megaphone className="h-4 w-4" />
            Campaigns
          </button>

          {/* Google Play badge */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="/images/google-play.svg"
              alt="Get it on Google Play"
              className="h-8 w-auto md:h-10"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
