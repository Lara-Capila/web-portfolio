"use client";

import { GithubLink } from "@components/GithubLink";
import { LinkedinLink } from "@components/LinkedinLink";
import Title from "@components/ui/Title";
import { WhatsAppLink } from "@components/WhatsAppLink";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSectionInView } from "../../hooks/useSectionInView";

interface FormData {
  userName?: string;
  userEmail?: string;
  userMessage?: string;
}

const defaultValues: FormData = {
  userEmail: undefined,
  userMessage: undefined,
  userName: undefined,
};

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    getValues,
  } = useForm<FormData>({
    defaultValues,
    mode: "onBlur",
  });

  const { ref } = useSectionInView("Contato");

  const formRef = useRef<HTMLFormElement>(null);
  console.log(getValues());

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const bodyData = {
      email: data.userEmail,
      subject: `${data.userName} enviou uma mensagem através do portifólio`,
      message: data.userMessage,
    };

    const JSONdata = JSON.stringify(bodyData);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      toast.error(
        "Ocorreu um erro ao enviar a mensagem. Peço que tente novamente ou entre em contato através dos outros canais.",
        {
          position: "bottom-right",
        }
      );
      setLoading(false);
      return;
    }

    if (response.status === 200) {
      toast.success("Mensagem enviada com sucesso!", {
        position: "bottom-right",
      });

      reset();
      setEmailSubmitted(true);
      setLoading(false);
      return;
    }

    toast.error(
      "Ocorreu um erro ao enviar a mensagem. Peço que tente novamente ou entre em contato através dos outros canais.",
      {
        position: "bottom-right",
      }
    );
    setLoading(false);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="grid my-12 md:my-12 gap-4 relative pt-[110px]"
    >
      <div>
        <Title>Vamos nos conectar!</Title>
        <p className="mb-4 sm:max-w-md max-w-xs text-lg mt-6">
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
