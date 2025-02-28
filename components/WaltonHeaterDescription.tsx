"use client"; // Only needed if you are in the App Router (app/ directory)

import React from "react";

const WaltonHeaterDescription: React.FC = () => {
  return (
    <section className="w-full bg-white py-8">
      {/* Enhanced container padding for mobile */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl">
          Walton Room Heater | Model: WRH-PTC20X
        </h1>

        {/* Product Specifications */}
        <div className="mb-8 space-y-1">
          <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <dt className="inline font-semibold text-gray-700">Brand:</dt>{" "}
              <dd className="inline text-gray-800">Walton</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">Model:</dt>{" "}
              <dd className="inline text-gray-800">WRH-PTC20X</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">Type:</dt>{" "}
              <dd className="inline text-gray-800">Room Heater</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">
                Rated Power:
              </dt>{" "}
              <dd className="inline text-gray-800">1500 Watts</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">
                Power Supply:
              </dt>{" "}
              <dd className="inline text-gray-800">220-240V, 50 Hz</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">
                Area Coverage:
              </dt>{" "}
              <dd className="inline text-gray-800">
                Up to 215-270 sq ft (20-25 m²)
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">Weight:</dt>{" "}
              <dd className="inline text-gray-800">2.2 kg</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">Color:</dt>{" "}
              <dd className="inline text-gray-800">Black or Silver</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-gray-700">Origin:</dt>{" "}
              <dd className="inline text-gray-800">Bangladesh</dd>
            </div>
          </dl>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
            Features
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              <strong>PTC Ceramic Heating Element:</strong> Provides efficient
              and rapid heating.
            </li>
            <li>
              <strong>Double Heating System:</strong> Allows adjustment of heat
              output to suit user preferences.
            </li>
            <li>
              <strong>Fan for Heated Air Circulation:</strong> Ensures the
              distribution of warm air throughout the room.
            </li>
            <li>
              <strong>Overheat Protection:</strong> Shuts off the heater to
              prevent overheating.
            </li>
            <li>
              <strong>Safety Tip-Over Switch:</strong> Turns off the heater if
              it is accidentally knocked over.
            </li>
            <li>
              <strong>Adjustable Thermostat:</strong> Enables users to control
              the heat level for comfort.
            </li>
            <li>
              <strong>Cool Touch Exterior:</strong> Maintains a safe temperature
              around the casing in case of excessive heat.
            </li>
            <li>
              <strong>Uniform PTC Element:</strong> Provides precise temperature
              control for optimal comfort.
            </li>
          </ul>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
            Applications
          </h2>
          <p className="text-gray-700">
            Ideal for small to medium-sized rooms, providing efficient and
            adjustable warmth during colder seasons.
          </p>
        </div>

        {/* Note */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
            Note
          </h2>
          <p className="text-gray-700">
            Ensure the heater is on a stable, flat surface during operation.
            Regularly inspect the heater for signs of wear or damage. Follow the
            manufacturer's guidelines for safe use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaltonHeaterDescription;
