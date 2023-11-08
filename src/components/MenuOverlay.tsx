import NavLink, { NavLinkProps } from "./NavLink";

const MenuOverlay = ({ navLinks }: { navLinks: NavLinkProps[] }) => {
	return (
		<ul className="flex flex-col py-4 items-center">
			{navLinks.map((link, index) => (
				<li key={index}>
					<NavLink href={link.href} title={link.title} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
