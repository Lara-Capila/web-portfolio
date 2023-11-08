import Link from "next/link";

export interface NavLinkProps {
	href: string;
	title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
	return (
		<Link
			href={href}
			className="
        blcok py-2 px-3 pr-4
        text-grayText sm:text-xl md:p-0
        rounded hover:text-white
      "
		>
			{title}
		</Link>
	);
};

export default NavLink;
