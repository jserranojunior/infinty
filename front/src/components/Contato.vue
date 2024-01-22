<template>
    <section id="contato" class="wall-contato">
  <div class="py-12 lg:py-20 px-44">
    <div class="flex justify-center">
      <div class="w-full ">
        <h2 class="text-3xl lg:text-5xl text-center">Contato</h2>
      </div>
    </div>

    <div class="w-full my-6 lg:my-20 ">
      <div class="flex flex-wrap justify-between my-6 lg:my-40 2xl:w-2/3 3xl:w-1/2 mx-auto">
        <div class="w-full lg:w-1/2 text-2xl pr-0 lg:pr-12">
          <div class="flex">
            <div class="w-full">
              <i class="fa-solid fa-user-group text-4xl lg:text-7xl mb-4 gradient-text"></i>
              <p>
                Deixe-nos ajudar a traçar uma estratégia personalizada que
                impulsione o seu sucesso online.
              </p><br />

              <p>
                Juntos, vamos transformar suas metas em resultados tangíveis.
              </p>

              <p>Vamos começar essa jornada de sucesso hoje mesmo?</p>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 justify-between">
            <div class="w-1/3 text-center">
              <i class="text-4xl fa-brands fa-facebook-f text-blue-800 font-bold hover:text-blue-700 cursor-pointer"></i>
            </div>
            <div class="w-1/3 text-center">
              <i class="text-4xl fa-brands fa-instagram  text-red-800 font-bold hover:text-red-700 cursor-pointer"></i>
            </div>
            <div class="w-1/3 text-center">
              <i class="text-4xl fa-brands fa-whatsapp  text-green-800 font-bold hover:text-green-700 cursor-pointer"></i>
            </div>
          </div>
        </div>
      
    <div class="w-full lg:w-1/2 lg:pl-12 text-2xl mt-12 lg:mt-0 ">
      <p>
        Preencha o formulário abaixo e solicite o contato de um de nossos
        especialista.
      </p>
      <form class="form-control w-full mt-4">
        <input
          class="input input-bordered w-full bg-white my-2 text-gray-900"
          type="text"
          placeholder="Nome*:"
        />
        <input
          class="input input-bordered w-full bg-white my-2 text-gray-900"
          type="text"
          placeholder="Empresa*:"
        />
        <input
          class="input input-bordered w-full bg-white my-2 text-gray-900"
          type="text"
          placeholder="Whatsapp*:"
        />
      

        <textarea id="message" rows="4" class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg " placeholder="Mensagem*:"></textarea>

<div class="btn-sm btn btn-info mt-2">SOLICITAR CONTATO</div>
      </form>
    </div>
  </div>
  </div>
  </div>
</section>
</template>

<style>
    .gradient-text {
      background: linear-gradient(to right, #3d40ff, #e00b0b); /* Seu gradiente de cores */
      -webkit-background-clip: text;
      color: transparent;
    }
  </style>