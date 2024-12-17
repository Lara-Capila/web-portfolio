import { Syne } from "next/font/google";
import Spinner from "./Spinner";

const syne = Syne({ subsets: ["latin"] });

const SubmitFormButton = ({ loading }: { loading: boolean }) => {
  return (
    <button
      type="submit"
      data-disabled={loading}
      className={`rounded-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5 ${syne.className} font-bold uppercase mt-4`}
    >
      {!loading ? (
        "Enviar"
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full select-none">
          <Spinner />
        </div>
      )}
    </button>
  );
};

export default SubmitFormButton;
