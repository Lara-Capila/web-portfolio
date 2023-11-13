import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Spinner from "./Spinner";

const SubmitFormButton = ({ loading }: { loading: boolean }) => {
	return (
		<button
			type="submit"
			data-disabled={loading}
			className="
        bg-primary-500 hover:bg-primary-600 
        text-white font-medium 
        py-2.5 px-5 rounded-lg w-full
        flex items-baseline justify-center gap-3
        group outline-none data-[disabled=true]:bg-primary-300
				data-[disabled=true]:pointer-events-none
      "
		>
			{!loading ? (
				<>
					Enviar
					<PaperAirplaneIcon
						className="
							h-3.5 w-3.5 -rotate-45 opacity-70 transition-all 
							group-hover:translate-x-1 group-hover:-translate-y-1
						"
					/>
				</>
			) : (
				<div className="flex flex-col items-center justify-center w-full h-full select-none">
					<Spinner />
				</div>
			)}
		</button>
	);
};

export default SubmitFormButton;
