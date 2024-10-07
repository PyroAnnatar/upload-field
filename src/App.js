import React from "react";

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#E9F0FE] flex justify-center items-center">
      <div className="bg-white md:w-2/4 rounded-lg shadow-[0_0_35px_rgba(30,119,204,0.3)] flex flex-col justify-center gap-8 h-3/5 p-8">
        <div className="rounded-xl border-[3px] border-[#1E77CC] border-dashed flex flex-col justify-center items-center grow cursor-pointer p-8">
          <img
            src="/ri_upload-cloud-fill.png"
            alt="Upload"
            className="w-[100px]"
          />

          <p className="text-black text-3xl">Browse Files to Upload</p>
        </div>

        <div className="bg-[#E9F0FE] rounded-xl flex justify-between items-center py-3 px-4">
          <img
            src="/bxs_file-image.png"
            alt="Image symbol"
            className="w-[35px]"
          />

          <span className="flex items-center justify-center text-2xl">
            No selected file -{" "}
            <img
              src="/ic_baseline-delete.png"
              alt="Delete symbol"
              className="w-[35px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
