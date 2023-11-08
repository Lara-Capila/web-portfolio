import { motion } from "framer-motion";

const TabButton = ({
	active,
	selectTab,
	children,
}: {
	active: boolean;
	selectTab: any;
	children: string;
}) => {
	const buttonClasses = active ? "text-white" : "text-grayText";

	const variants = {
		default: { width: 0 },
		active: { width: "calc(100% - 0.75rem)" },
	};

	return (
		<button onClick={selectTab}>
			<p
				className={`mr-3 font-semibold hover:text-white text-lg ${buttonClasses}`}
			>
				{children}
			</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={variants}
				className="h-0.5 bg-primary-500 mt-0.5 mr-3"
			></motion.div>
		</button>
	);
};

export default TabButton;
