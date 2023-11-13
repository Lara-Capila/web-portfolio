import { FC } from "react";

interface Props {
	color?: string;
	customBorder?: number;
}

const Spinner: FC<Props> = ({ color, customBorder }) => (
	<div className="flex justify-center items-center">
		<div
			className={`
        inline-block h-5 w-5
        animate-spin rounded-full
        border-solid border-current border-r-transparent
        align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]
        customBorder ? border-${customBorder} : border-4`}
			role="status"
			style={{ color: color ?? "#fff" }}
		>
			<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
				Carregando...
			</span>
		</div>
	</div>
);

export default Spinner;
