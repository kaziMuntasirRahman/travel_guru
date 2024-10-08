const HotelCart = () => {
  return (
    <div className="bg-slate-50 flex justify-between items-center gap-8">
      <img src="images/hotel-1.png" className="h-[188px]" />
      <section className=" flex flex-col gap-3 w-80">
        <h3 className="text-black text-lg font-medium leading-relaxed">Light bright airy stylish apt & safe peaceful stay</h3>
        <div className="text-[#6a6a6a] text-base font-normal flex gap-2.5">
          <p>4 guest</p>
          <p>4 guest</p>
          <p>4 guest</p>
          <p>4 guest</p>
        </div>
        <p className="text-[#6a6a6a] text-base font-normal">
          Wif Air conditioning Kitchen
        </p>
        <p className="text-[#6a6a6a] text-base font-normal">
          Cancellation fexibility availiable
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 mr-5">
            <img src="images/icons/star_1_.png" className="w-4" />
            <h3 className="text-black text-sm font-medium">4.9 (20)</h3>
          </div>
          <h3 className="text-black text-lg font-medium">$34/<span className="font-light">night</span></h3>
          <div className="text-[#898989] text-sm font-light">$167 total</div>
        </div>

      </section>
    </div>
  );
};

export default HotelCart;