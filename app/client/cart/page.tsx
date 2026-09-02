import React from "react";
import NavBar from "@/components/client/layout/nav";

const CartPage = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      <main className="min-h-[80vh] px-10 py-8">
        {/* Heading */}
        <header className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-500">
              Cart
            </h3>

            <p className="text-sm text-gray-50 -mt-1">
              -
            </p>
          </div>
        </header>
      </main>
    </>
  );
};

export default CartPage;
