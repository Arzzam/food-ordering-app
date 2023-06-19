import React from "react";

const Checkout = (props) => {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-row w-[50%] justify-between items-center">
        <label htmlFor="name">Your Name</label>
        <input
          className="bg-white border border-slate-400 rounded-lg focus:ring-red-900 focus:border-red-950 focus:outline-none transition-all p-1"
          type="text"
          id="name"
        />
      </div>
      <div className="flex flex-row w-[50%] justify-between items-center">
        <label htmlFor="street">Street</label>
        <input
          className="bg-white border border-slate-400 rounded-lg focus:ring-red-900 focus:border-red-950 focus:outline-none transition-all p-1"
          type="text"
          id="street"
        />
      </div>
      <div className="flex flex-row w-[50%] justify-between items-center">
        <label htmlFor="pin">Pincode</label>
        <input
          className="bg-white border border-slate-400 rounded-lg focus:ring-red-900 focus:border-red-950 focus:outline-none transition-all p-1"
          type="text"
          id="pin"
        />
      </div>
      <div className="flex flex-row w-[50%] justify-between items-center">
        <label htmlFor="city">City</label>
        <input
          className="bg-white border border-slate-400 rounded-lg focus:ring-red-900 focus:border-red-950 focus:outline-none transition-all p-1"
          type="text"
          id="city"
        />
      </div>
      <button
        type="submit"
        className="text-[#8a2b06] border border-[#8a2b06] w-[25%] rounded-full px-8 py-2 hover:bg-[#5a1a01] hover:text-white self-center"
      >
        Confirm
      </button>
    </form>
  );
};

export default Checkout;
