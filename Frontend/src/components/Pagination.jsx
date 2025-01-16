import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ onPrevious, onNext, disablePrevious, disableNext }) => (
  <div className="flex gap-4 mt-10 dm-serif-display justify-center">
    <button
      onClick={onPrevious}
      disabled={disablePrevious}
      className={`flex items-center gap-2 border-[1px] px-3 py-1 border-[#9A3131] text-black  ${
        disablePrevious ? "opacity-50 border-gray-700 cursor-not-allowed" : ""
      }`}
    >
      <ChevronLeft className="w-4 h-4" />
      Previous
    </button>

    <button
      onClick={onNext}
      disabled={disableNext}
      className={`flex items-center gap-2 border-[1px] px-3 py-1 border-[#9A3131] text-black  ${
        disableNext ? "opacity-50 border-gray-700 cursor-not-allowed" : ""
      }`}
    >
      Next
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);
export default Pagination;
