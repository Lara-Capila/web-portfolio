import Link from "next/link";
import { HugeiconsWhatsapp } from "./icons/WhatsAppIcon";

export const WhatsAppLink = () => {
  return (
    <Link target="_blank" href="https://wa.me/5531989201693">
      <HugeiconsWhatsapp />
    </Link>
  );
};
