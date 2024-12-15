"use client";

import { GithubLink } from "@components/GithubLink";
import { LinkedinLink } from "@components/LinkedinLink";
import { InputField } from "@components/ui/form/InputField";
import Title from "@components/ui/Title";
import { WhatsAppLink } from "@components/WhatsAppLink";
import { AnimatePresence, motion } from "framer-motion";
import { Syne } from "next/font/google";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSectionInView } from "../../hooks/useSectionInView";

const syne = Syne({ subsets: ["latin"] });

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
  } = useForm<FormData>({
    defaultValues,
  });

  const { ref } = useSectionInView("Contato");

  const formRef = useRef<HTMLFormElement>(null);

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

    if (response.status === 200) {
      setEmailSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative pt-[110px]"
    >
      <div className="mb-6">
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

      <div className="overflow-y-hidden card px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="flex items-center h-full gap-2 w-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className={`back w-full flex flex-col gap-3 grow-[2] basis-0`}
              >
                <div className="flex gap-1 flex-col">
                  <InputField
                    id="userName"
                    errors={errors}
                    {...register("userName", {
                      required: "I need to know your name",
                      pattern: {
                        value: /^[a-zA-Z][a-zA-Z0-9]{2,}/,
                        message: "Please enter a valid name.",
                      },
                    })}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <InputField
                    id="userEmail"
                    errors={errors}
                    type="email"
                    {...register("userEmail", {
                      required: "Enter a correct email address",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provide a valid email address",
                      },
                    })}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <label
                    htmlFor="userMessage"
                    className="opacity-70 text-sm lg:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="userMessage"
                    {...register("userMessage", {
                      required: "I'll appreciate what you have to say.",
                    })}
                    rows={4}
                    cols={50}
                    className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                  />
                  {errors?.userMessage && (
                    <span className="text-red-400 text-xs">
                      {errors?.userMessage?.message as string}
                    </span>
                  )}
                </div>
                <button
                  className={`rounded-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5 ${syne.className} font-bold uppercase mt-4`}
                >
                  Enviar
                </button>
              </form>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
