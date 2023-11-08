import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const SubmitFormButton = () => {
	return (
		<button
			type="submit"
			className="
        bg-primary-500 hover:bg-primary-600 
        text-white font-medium 
        py-2.5 px-5 rounded-lg w-full
        flex items-baseline justify-center gap-3
        group outline-none
      "
		>
			Enviar
			<PaperAirplaneIcon className="h-3.5 w-3.5 -rotate-45 opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
		</button>
	);
};

export default SubmitFormButton;
