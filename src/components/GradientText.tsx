const GradientText = ({ text, margin }: { text: string; margin?: string }) => (
	<span
		className={`
			${margin} font-semibold text-transparent 
			bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600
		`}
	>
		{text}
	</span>
);

export default GradientText;
