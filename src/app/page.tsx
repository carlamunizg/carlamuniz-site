"use client";

import Image from "next/image";

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <Image
          src="/icons/check_icon.svg"
          width={20}
          height={20}
          alt="Check"
          className="mt-1 flex-shrink-0"
        />
        <span className="text-[14px] text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
);

export default function Home() {
  const card_1 = [
    "1 encontro remoto para entender o sono do recém-nascido com duração de 1h30 a 2h (via Google Meet);",
    "5 dias de suporte via WhatsApp;",
    "Plano personalizado baseado na sua rotina.",
    "Estratégias práticas e personalizadas, baseadas na Neurociência;",
    "Acompanhamento emocional e respeitoso;",
    "Suporte via WhatsApp de segunda a sexta, das 9h às 18h;",
  ];

  const card_2 = [
    "3 encontros remotos para entender toda a rotina da criança, com duração de 1h30 a 2h (via Google Meet);",
    "45 dias de suporte via WhatsApp;",
    "Anamnese e avaliação completa do sono;",
    "Plano de ação pós-consultoria;",
    "Ajustes semanais e orientações práticas.",
    "Estratégias práticas e personalizadas, baseadas na Neurociência;",
    "Acompanhamento emocional e respeitoso;",
    "Suporte via WhatsApp de segunda a sexta, das 9h às 18h;",
  ];

  const card_3 = [
    "1 encontro remoto para entender as mudanças da rotina, com duração de 1h30 a 2h (via Google Meet);",
    "10 dias de suporte via WhatsApp;",
    "Plano atualizado com estratégias para a nova fase.",
    "Estratégias práticas e personalizadas, baseadas na Neurociência;",
    "Acompanhamento emocional e respeitoso;",
    "Suporte via WhatsApp de segunda a sexta, das 9h às 18h;",
  ];

  return (
    <div>
      {/* Seção 1 - Hero */}
      {/* Mobile version */}
      <section
        className="h-[750px] flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-[10px] lg:hidden"
        style={{ backgroundImage: "url(images/bebe_mobile.svg)" }}
      >
        <div className="mx-[374px] xxl:mx-0 xxl:px-8 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-[60px] font-normal text-black text-center leading-normal mb-4">
            Consultora do Sono Infantil
          </h1>
          <h1 className="text-[16px] font-normal font-pergola text-black mb-4 text-center">
            Ajudando pais a melhorarem o sono dos seus filhos com
            <br />
            orientações personalizadas e acolhedoras.
          </h1>
          <a
            href="https://wa.me/5561998970108"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[246px] text-center h-[46px] bg-[#4CAF50] text-white rounded-full hover:bg-[#358438] transition-colors flex items-center justify-center gap-2 px-[22px] py-[14px]"
          >
            <svg
              className="w-4 h-4 mb-[3px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Vamos conversar
          </a>
        </div>
      </section>

      {/* Desktop version */}
      <section
        className="h-[750px] flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-[50px] hidden lg:flex"
        style={{ backgroundImage: "url(images/bebe.svg)" }}
      >
        <div className="mx-[374px] xxl:mx-0 xxl:px-8 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-[100px] font-normal text-black text-center leading-normal mb-4">
            Consultora do Sono Infantil
          </h1>
          <h1 className="text-[24px] font-normal font-pergola text-black mb-4 text-center">
            Ajudando pais a melhorarem o sono dos seus filhos com
            <br />
            orientações personalizadas e acolhedoras.
          </h1>
          <a
            href="https://wa.me/5561998970108"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[246px] text-center h-[46px] bg-[#4CAF50] text-white rounded-full hover:bg-[#358438] transition-colors flex items-center justify-center gap-2 px-[22px] py-[14px]"
          >
            <svg
              className="w-4 h-4 mb-[3px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Vamos conversar
          </a>
        </div>
      </section>

      {/* Seção 2 - Sobre */}
      <section
        id="quem-sou-eu"
        className="lg:mt-[154px] mt-[50px] lg:mb-[50px] mb-[50px] bg-white flex items-center justify-center"
      >
        <div className="lg:mx-[100px] mx-[50px] xxl:mx-0 xxl:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-[128px]">
          {/* Foto à esquerda */}
          <Image
            src="images/carlastroke.svg"
            width={300}
            height={400}
            alt="Carla Muniz"
            title="Carla Muniz"
            priority
            className="cursor-pointer w-[300px] h-[400px] lg:w-auto lg:h-auto flex hidden lg:block"
          />

          {/* Textos à direita */}
          <div className="flex flex-col max-w-[600px] lg:max-w-none">
            <span className="h-[32px] bg-blush_cl-100 text-brown_cl-500 rounded-full text-[16px] font-medium mb-6 px-6 py-1 flex items-center justify-center w-fit mx-auto lg:mx-0">
              Quem sou eu
            </span>
            <h2 className="text-[40px] lg:text-[64px] font-bold text-gray-900 mb-8 text-center lg:text-left">
              Prazer, me chamo <br /> Carla Muniz
            </h2>
            <div className="flex justify-center lg:hidden">
              <Image
                src="images/carlastroke.svg"
                width={300}
                height={400}
                alt="Carla Muniz"
                title="Carla Muniz"
                priority
                className="block lg:hidden cursor-pointer w-[300px] h-[400px] lg:w-auto lg:h-auto flex mb-10"
              />
            </div>
            <p className="text-lg text-gray-700 max-w-[600px] mb-6 text-center lg:text-left">
              Atuei por 25 anos como pedagoga e fonoaudióloga, sempre voltada
              para ajudar crianças com dificuldades de aprendizagem. Após me
              aposentar em 2023, descobri uma nova paixão: a Neurociência do
              Sono Infantil. A pós-graduação nessa área reacendeu em mim o
              propósito de transformar vidas por meio do cuidado e do
              conhecimento. Desde então, mergulhei de vez nesse universo e,
              hoje, me dedico exclusivamente à consultoria de sono infantil,
              ajudando famílias a viverem dias mais leves e noites mais
              tranquilas. Ofereço orientação, conhecimento e acolhimento desde a
              gestação, acreditando que um sono saudável começa em um ambiente
              seguro, previsível e afetuoso — dentro e fora da barriga.
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Image
                src="images/reconhecimento.svg"
                width={110}
                height={110}
                alt="Reconhecimento"
                title="Reconhecimento"
                className="cursor-pointer w-full max-w-[110px] mx-auto lg:mx-0"
              />
              <Image
                src="images/neurociencia.svg"
                width={110}
                height={110}
                alt="neurocienci"
                title="neurocienci"
                priority
                className="cursor-pointer w-full max-w-[110px] mx-auto lg:mx-0"
              />
              <Image
                src="images/Selo_Profissional_Certificada.svg"
                width={110}
                height={110}
                alt="selo profissional"
                title="selo profissional"
                priority
                className="cursor-pointer w-full max-w-[110px] mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Serviços */}
      <section
        id="sobre-consultoria"
        className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center mx-[50px] lg:mx-[100px] xxl:mx-0 xxl:px-8 py-20"
      >
        {/* Coluna da esquerda */}
        <div
          id="como-posso-te-ajudar"
          className="flex flex-col items-start text-left max-w-md self-start lg:sticky lg:top-24 ml-8 xll:ml-[500px]"
        >
          <span className="h-[32px] bg-blush_cl-100 text-brown_cl-500 rounded-full text-[16px] font-medium mb-6 px-6 py-1 flex items-center justify-center w-fit">
            Sobre a consultoria
          </span>
          <h1 className="text-[64px] font-bold text-gray-900 mb-8 leading-tight">
            Como posso te ajudar
          </h1>
          <h2 className="text-[24px] font-normal text-gray-800 w-full">
            Entenda melhor como funciona
          </h2>
        </div>

        {/* Coluna da direita - cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_1.svg"
                width={48}
                height={48}
                alt="Ícone Consultoria Personalizada"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Sobre a consultoria
            </h3>
            <p className="text-[16px] text-gray-600">
              Um serviço personalizado que oferece suporte e orientação com
              segurança para os pais, visando melhorar o sono do bebê e o
              bem-estar da família.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_2.svg"
                width={48}
                height={48}
                alt="Ícone Avaliação do Sono"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Primeiro contato
            </h3>
            <p className="text-[16px] text-gray-600">
              Você entra em contato via WhatsApp para conhecer a consultoria e
              tirar dúvidas iniciais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_3.svg"
                width={48}
                height={48}
                alt="Ícone Plano de Ação"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Questionário inicial
            </h3>
            <p className="text-[16px] text-gray-600">
              Após o primeiro contato e efetivação do pagamento inicial, será
              encaminhado um formulário para entender a rotina do bebê e os
              desafios enfrentados, permitindo uma análise detalhada da
              situação.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_4.svg"
                width={48}
                height={48}
                alt="Ícone Acompanhamento"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Duração da consultoria
            </h3>
            <p className="text-[16px] text-gray-600">
              O tempo de acompanhamento será definido conforme o pacote
              contratado:
            </p>
            <ul className="text-[16px] text-gray-600 mt-2">
              <li>• Baby Start - 5 dias (gestantes)</li>
              <li>
                • Bê-a-bá do Sono - 45 dias (crianças à partir de 4 meses)
              </li>
              <li>• Flow-Up do Sono - 10 dias (apoio pós consultoria)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_5.svg"
                width={48}
                height={48}
                alt="Ícone Acolhimento"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Plano personalizado
            </h3>
            <p className="text-[16px] text-gray-600">
              Na consultoria, você receberá um plano feito sob medida, com base
              na idade da criança, rotina da casa e necessidades específicas.
              Com uma abordagem humanizada e embasada na neurociência,
              construirei junto com você uma rotina de sono possível, respeitosa
              e eficaz. O plano é adaptado ao longo do acompanhamento, com
              orientações práticas e suporte constante.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_6.svg"
                width={48}
                height={48}
                alt="Ícone Educação"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Acompanhamento diário
            </h3>
            <p className="text-[16px] text-gray-600">
              Para as mamães, o progresso da sua criança será acompanhado de
              forma diária e personalizada, com todo o suporte que você precisa
              para se sentir segura nas decisões e ajustes da rotina do sono.
              Para as futuras mamães, você receberá orientações baseadas em
              neurociência e práticas gentis para já iniciar a jornada com mais
              segurança: sono do recém-nascido, preparo emocional, ambiente do
              sono e como lidar com os primeiros meses de forma mais leve
              (exterogestação).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_7.svg"
                width={48}
                height={48}
                alt="Ícone Suporte Familiar"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Todos os benefícios
            </h3>
            <p className="text-[16px] text-gray-600">
              A Consultoria do Sono Infantil é um cuidado que começa ainda na
              gestação, preparando o terreno emocional e informativo para a
              chegada do bebê. Para mães de crianças que enfrentam dificuldades
              para dormir, oferecemos estratégias personalizadas, embasadas na
              neurociência, que respeitam o ritmo da família e promovem noites
              mais tranquilas. E para quem já passou pela consultoria, temos
              acompanhamento evolutivo com foco nas novas fases da infância,
              porque o sono muda, e o suporte também precisa mudar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/icons/icon_8.svg"
                width={48}
                height={48}
                alt="Ícone Resultados Garantidos"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">
              Orientações futuras
            </h3>
            <p className="text-[16px] text-gray-600">
              Ao fim da consultoria, você recebe instruções para lidar com
              mudanças futuras na rotina do bebê, promovendo autonomia e
              segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4 - Pacotes de Atendimento */}
      <section
        id="pacotes-atendimento"
        className="min-h-[100px] flex flex-col items-center py-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), linear-gradient(126deg, rgba(227, 165, 162, 0.24) 0%, rgba(159, 115, 113, 0.24) 100%)",
        }}
      >
        {/* Header da seção */}
        <div className="flex flex-col mb-16 max-w-7xl mx-auto px-8 w-full">
          <span className="h-[32px] bg-blush_cl-100 text-brown_cl-500 rounded-full text-[16px] font-medium mb-6 px-6 py-1 flex items-center justify-center w-fit">
            Pacotes de atendimento
          </span>
          <h1 className="text-[56px] md:text-[56px] lg:text-[64px] font-bold text-gray-900 mb-8 leading-tight">
            Meus atendimentos
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-8 items-start">
          {/* Card 1 */}
          <div
            className="relative rounded-lg overflow-hidden h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('images/card_at_1.svg')" }}
          >
            <div className="relative z-10 p-8 flex flex-col">
              <p className="text-[14px] text-gray-700 mb-2">
                Ideal para futuras mamães
              </p>

              <h3 className="text-[24px] font-bold text-gray-900 mb-12">
                BABY START{" "}
              </h3>
              <h4 className="text-[16px] font-semibold text-gray-800 mb-4">
                Leveza e segurança desde o início da maternidade..
              </h4>
              <a
                href="https://wa.me/5561998970108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black border-solid border-2 border-gray-300 rounded-full hover:text-white hover:border-pink_cl-980 hover:bg-pink_cl-980 transition-colors py-3 mb-2 font-medium flex items-center justify-center"
              >
                Tenho interesse
              </a>
              <hr className="my-6" />
              <CheckList items={card_1} />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-lg overflow-hidden h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('images/card_at_2.svg')" }}
          >
            <div className="relative z-10 p-8 flex flex-col">
              <p className="text-[14px] text-gray-700 mb-2">
                Transforme a rotina do sono do seu bebê
              </p>

              <h3 className="text-[24px] font-bold text-gray-900 mb-12">
                BÊ-A-BÁ DO SONO{" "}
              </h3>
              <h4 className="text-[16px] font-semibold text-gray-800 mb-4">
                Ideal para mudanças duradouras com acompanhamento contínuo
              </h4>
              <a
                href="https://wa.me/5561998970108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-pink_cl-500 text-white rounded-full hover:bg-pink_cl-980 hover:border-pink_cl-980 transition-colors py-3 mb-2 font-medium flex items-center justify-center"
              >
                Tenho interesse
              </a>
              <hr className="my-6" />
              <CheckList items={card_2} />
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative rounded-lg overflow-hidden h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('images/card_at_3.svg')" }}
          >
            <div className="relative z-10 p-8 flex flex-col">
              <p className="text-[14px] text-gray-700 mb-2">
                Apoio pós consultoria
              </p>

              <h3 className="text-[24px] font-bold text-gray-900 mb-12">
                FLOW-UP DO SONO{" "}
              </h3>
              <h4 className="text-[16px] font-semibold text-gray-800 mb-4">
                Apoio durante regressões, entrada na creche, início da fala e
                outras fases
              </h4>
              <a
                href="https://wa.me/5561998970108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black rounded-full border-solid border-2 hover:border-pink_cl-980 hover:text-white border-gray-300 hover:bg-pink_cl-980 transition-colors py-3 mb-2 font-medium flex items-center justify-center"
              >
                Tenho interesse
              </a>
              <hr className="my-6" />
              <CheckList items={card_3} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Contato */}
      <section className="min-h-[800px]flex flex-col items-center justify-center py-20">
        {/* Header da seção */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-8">
          <h2 className="text-[32px] font-bold text-gray-900">
            Dormir bem é um direito seu e do seu filho.
          </h2>
          <p className="text-[32px] text-pink_cl-500 text-bold">
            Vamos transformar o sono por aí?
          </p>
        </div>

        {/* Card */}
        <div className="max-w-7xl mx-auto px-8 w-full ">
          <div className="bg-pink_cl-500 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col mdd:flex-row items-center">
              {/* Conteúdo */}
              <div className="flex-[2] p-14 order-2 mdd:order-1">
                <h2 className="text-[32px] font-bold text-blush_cl-900 mb-6">
                  Estarei ao seu lado para ajudar a construir noites{" "}
                  <span className="text-white">
                    mais calmas e dias mais leves.
                  </span>
                </h2>
                <div className="flex-[1] mb-4 order-1 md:block mdd:hidden ">
                  <Image
                    src="images/bebe_dormindo.svg"
                    width={436}
                    height={269}
                    alt="Bebê dormindo"
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <p className="text-[16px] text-blush_cl-900 mb-8">
                  Ao escolher a consultoria de sono, você investe no bem-estar
                  da sua <br className="hidden mdd:block" /> família. Com
                  orientação empática e estratégias da neurociência.
                </p>
                <a
                  href="https://wa.me/5561998970108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[247px] bg-[#4CAF50] h-[56px] text-white px-8 py-4 rounded-full hover:bg-[#358438] transition-colors text-lg font-medium flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Vamos Conversar
                </a>
              </div>

              {/* Imagem */}
              <div className="flex-[1] p-14 order-1 hidden mdd:block">
                <Image
                  src="images/bebe_dormindo.svg"
                  width={436}
                  height={269}
                  alt="Bebê dormindo"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
