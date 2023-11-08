import { ReactNode } from "react";

interface SectionHeadingProps {
	children: ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
	return <h2 className="text-4xl font-bold text-white mb-16">{children}</h2>;
};

export default SectionHeading;
