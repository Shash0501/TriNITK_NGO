import React from "react";

const Index = () => {
  return (
    <div className="bg-[#FF0000] w-full h-[600px] px-[300px] flex items-center text-white justify-start">
      <div className="flex flex-col">
        <span className="text-[100px]">Donate</span>
        <span className="text-2xl">For a better world</span>
        <p className="pt-4">
          {" "}
          lojf jdhfksjdhf ksjdhf ksdjhf ksjdf ksjdf ksjdfh skdjf ksdjf kjdf ks
        </p>

        <div className = "pt-8 flex flex-row gap-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-3xl">
            Button
          </button>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-3xl">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
