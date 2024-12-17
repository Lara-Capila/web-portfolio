"use client";

import { GithubLink } from "@components/GithubLink";
import { LinkedinLink } from "@components/LinkedinLink";
import Title from "@components/ui/Title";
import { WhatsAppLink } from "@components/WhatsAppLink";
import { useSectionInView } from "../../hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Contato");

  return (
    <section
      ref={ref}
      id="contact"
      className="grid my-12 md:my-12 gap-4 relative pt-[110px]"
    >
      <div>
        <Title>Vamos nos conectar!</Title>
        <p className="mb-4 sm:max-w-md max-w-xs text-lg">
          Minha caixa de entrada está sempre aberta. Se você tiver alguma
          pergunta ou apenas quiser dizer olá, farei o meu melhor para
          responder!
        </p>
        <div className="socials flex items-center flex-row gap-4">
          <GithubLink />
          <LinkedinLink />
          <WhatsAppLink />
        </div>
      </div>
    </section>
  );
};

export default Contact;
