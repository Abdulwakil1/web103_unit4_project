import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import customItemsAPI from "../services/customItemsAPI";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchCars = async () => {
      try {
        const data = await customItemsAPI.getAllCars();
        if (!mounted) return;
        setCars(data ?? []);
      } catch (err) {
        console.error("Error fetching cars:", err);
        if (mounted) setCars([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchCars();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-gray-200">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-[#800020] border-gray-300" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c0c] to-[#181818] py-10 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="flex flex-col gap-10 items-center">
        {cars.map((car) => (
          <motion.article
            key={car.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-gray-600"
            // inline margin to guarantee left/right spacing (overrides external CSS)
            style={{ margin: "1rem 3rem" }} // top-bottom 1rem, left-right 3rem
          >
            {/* HEADER: smaller height (adjusted here) */}
            <header className="bg-black text-white flex items-center gap-4 p-3 h-20 md:h-24">
              {car.image ? (
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-auto object-contain rounded-md"
                />
              ) : (
                <span className="text-3xl md:text-4xl">🚗</span>
              )}

              {/* title slightly smaller */}
              <h2 className="text-white text-sm md:text-base font-semibold">
                {car.name || "Custom Car"}
              </h2>
            </header>

            {/* LOWER SECTION: translucent, always 3 equal columns */}
            <section
              className="bg-black/60 text-white p-6 gap-6 text-sm md:text-base"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", // force 3 equal columns on all sizes
              }}
            >
              {/* LEFT */}
              <div className="flex flex-col justify-center">
                <p className="mb-2">
                  <span className="font-semibold">🖌️ Exterior:</span>{" "}
                  <span className="font-light">
                    {car.selected_option || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">😎 Roof:</span>{" "}
                  <span className="font-light">{car.roof || "N/A"}</span>
                </p>
              </div>

              {/* MIDDLE */}
              <div className="flex flex-col justify-center">
                <p className="mb-2">
                  <span className="font-semibold">🛞 Wheels:</span>{" "}
                  <span className="font-light">{car.wheels || "N/A"}</span>
                </p>
                <p>
                  <span className="font-semibold">💺 Interior:</span>{" "}
                  <span className="font-light">{car.interior || "N/A"}</span>
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-between items-start sm:items-end">
                {/* Force total price white */}
                <div
                  className="text-white text-lg font-semibold mb-3"
                  style={{ color: "#ffffff" }}
                >
                  <span className="mr-2">💰</span>${car.total_price ?? 0}
                </div>
              </div>
            </section>
            {/* DETAILS button — burgundy with invert-to-white hover */}
            <div className="self-end px-6 pb-6">
              <Link
                to={`/customcars/${car.id}`}
                style={{
                  backgroundColor: "rgb(115, 2, 12)",
                  color: "#ffffff",
                  padding: "0.6rem 1.4rem",
                  borderRadius: "0.5rem",
                  border: "1px solid transparent",
                  display: "inline-block",
                  textDecoration: "none", // prevents underline
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#000000";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#ffffff";
                  e.currentTarget.style.textDecoration = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(115, 2, 12)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.textDecoration = "none";
                }}
                className="font-medium"
              >
                DETAILS
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default ViewCars;
