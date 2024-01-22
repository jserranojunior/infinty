<template>
  <section id="" class="bg-cover bg-center welcome pb-20 h-screen">
    <div
      class="flex flex-wrap sm:justify-center lg:justify-between px-6 header mx-0 lg:mx-8"
    >
      <nav class="navbar mt-20">
        <div class="navbar-start">
          <div class="btn btn-ghost normal-case text-4xl">
            <img
              width="25"
              height="25"
              class="mr-2"
              src="/static/logo/logo.png"
              alt="Logo da infinity!"
            />
            Infinity
          </div>
        </div>
        <div class="navbar-end flex  ">
          <div class="dropdown justify-end text-right mx-auto lg:hidden ">
            <label
              tabindex="0"
              class="text-right btn btn-info text-black ml-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </label>

            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              <li><a>Home</a></li>
              <li><a href="#servicos">Serviços/Produtos</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <!--     <li><a href="#portfolio">Portfólio</a></li> -->
              <li><a href="#quemsomos">Quem Somos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div class=" xs:hidden lg:flex text-xl">
            <ul
  class="menu menu-horizontal px-1 flex text-white">
  <li><a>Home</a></li>
              <li><a href="#servicos">Serviços/Produtos</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <!--     <li><a href="#portfolio">Portfólio</a></li> -->
              <li><a href="#quemsomos">Quem Somos</a></li>
              <li><a href="#contato">Contato</a></li>
  </ul>
          </div>
        </div>
      </nav>
    </div>

    <div>
      <div class="flex flex-wrap justify-between pt-28 lg:pt-40">
        <div class="w-full sm:w-full  lg:w-1/2">
          <div class="flex flex-wrap">
            <div
              class="relative overflow-hidden rounded-lg shadow-lg mx-auto lg:ml-20"
            >
              <div
                class="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg p-6"
              >
                <h1 class="text-2xl lg:text-4xl font-bold mb-4">
                  Revolucionando e moldando o futuro<br />
                  digital dos nossos clientes de forma<br />
                  abrangente e personalizada.
                  <br />
                </h1>
                <h2 class="text-md lg:text-xl">
                  Juntos, desenvolvemos uma estratégia sob medida<br />
                  para o sucesso contínuo no mercado de trabalho digital.
                </h2>
              </div>
            </div>
          </div>
          <div
            class="flex mt-12 sm:pb-6 lg:pb-44 mx-auto lg:ml-20 text-center lg:text-left"
          >
            <div class="w-full">
              <div class="btn btn-info normal-case text-lg">
                Entre em contato
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-full  lg:w-1/2">
          <img
            width="400"
            height="400"
            class="mx-auto my-auto w-1/3 sm:w-1/3 md:w-1/4"
            src="../assets/imgs/wallpapers/foguete.png"
            alt="Logo da infinity!"
          />
        </div>
      </div>
    </div>
  </section>
</template>


