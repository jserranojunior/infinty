export default () => {
  console.log("ta rolando");

  const data = [
    {
      nome: "lsstar",
      webp: "/static/portfolio/thumbnail/webp/lsstar.webp",
      png: "/static/portfolio/thumbnail/png/lsstar.png",
      tipo: "site",
    },
    {
      nome: "abcp",
      webp: "/static/portfolio/thumbnail/webp/abcp.webp",
      png: "/static/portfolio/thumbnail/png/abcp.png",
      tipo: "site",
    },
    {
      nome: "ajz",
      webp: "/static/portfolio/thumbnail/webp/ajz.webp",
      png: "/static/portfolio/thumbnail/png/ajz.png",
      tipo: "blog",
    },
    {
      nome: "bella",
      webp: "/static/portfolio/thumbnail/webp/bella.webp",
      png: "/static/portfolio/thumbnail/png/bella.png",
      tipo: "blog",
    },
    {
      nome: "bressan",
      webp: "/static/portfolio/thumbnail/webp/bressan.webp",
      png: "/static/portfolio/thumbnail/png/bressan.png",
      tipo: "site",
    },
    {
      nome: "casadelpueblo",
      webp: "/static/portfolio/thumbnail/webp/casadelpueblo.webp",
      png: "/static/portfolio/thumbnail/png/casadelpueblo.png",
      tipo: "blog",
    },
    {
      nome: "espacovitoria",
      webp: "/static/portfolio/thumbnail/webp/espacovitoria.webp",
      png: "/static/portfolio/thumbnail/png/espacovitoria.png",
      tipo: "site",
    },
    {
      nome: "fazao",
      webp: "/static/portfolio/thumbnail/webp/fazao.webp",
      png: "/static/portfolio/thumbnail/png/fazao.png",
      tipo: "blog",
    },
    {
      nome: "fenix",
      webp: "/static/portfolio/thumbnail/webp/fenix.webp",
      png: "/static/portfolio/thumbnail/png/fenix.png",
      tipo: "blog",
    },
    {
      nome: "fso",
      webp: "/static/portfolio/thumbnail/webp/fso.webp",
      png: "/static/portfolio/thumbnail/png/fso.png",
      tipo: "site",
    },
    {
      nome: "papeis",
      webp: "/static/portfolio/thumbnail/webp/papeis.webp",
      png: "/static/portfolio/thumbnail/png/papeis.png",
      tipo: "blog",
    },
    {
      nome: "projetoeducar",
      webp: "/static/portfolio/thumbnail/webp/projetoeducar.webp",
      png: "/static/portfolio/thumbnail/png/projetoeducar.png",
      tipo: "blog",
    },
    {
      nome: "criançamaissaudavel",
      webp: "/static/portfolio/thumbnail/webp/criançamaissaudavel.webp",
      png: "/static/portfolio/thumbnail/png/criançamaissaudavel.png",
      tipo: "blog",
    },
    {
      nome: "maquinas",
      webp: "/static/portfolio/thumbnail/webp/maquinas.webp",
      png: "/static/portfolio/thumbnail/png/maquinas.png",
      tipo: "site",
    },
    {
      nome: "mistersalad",
      webp: "/static/portfolio/thumbnail/webp/mistersalad.webp",
      png: "/static/portfolio/thumbnail/png/mistersalad.png",
      tipo: "site",
    },
    {
      nome: "naturelle",
      webp: "/static/portfolio/thumbnail/webp/naturelle.webp",
      png: "/static/portfolio/thumbnail/png/naturelle.png",
      tipo: "site",
    },
    {
      nome: "nnobre",
      webp: "/static/portfolio/thumbnail/webp/nnobre.webp",
      png: "/static/portfolio/thumbnail/png/nnobre.png",
      tipo: "site",
    },
    {
      nome: "oneello",
      webp: "/static/portfolio/thumbnail/webp/oneello.webp",
      png: "/static/portfolio/thumbnail/png/oneello.png",
      tipo: "site",
    },
    {
      nome: "psd",
      webp: "/static/portfolio/thumbnail/webp/psd.webp",
      png: "/static/portfolio/thumbnail/png/psd.png",
      tipo: "site",
    },
    {
      nome: "sandwich",
      webp: "/static/portfolio/thumbnail/webp/sandwich.webp",
      png: "/static/portfolio/thumbnail/png/sandwich.png",
      tipo: "site",
    },
    {
      nome: "setup",
      webp: "/static/portfolio/thumbnail/webp/setup.webp",
      png: "/static/portfolio/thumbnail/png/setup.png",
      tipo: "site",
    },
    {
      nome: "sindimei",
      webp: "/static/portfolio/thumbnail/webp/sindimei.webp",
      png: "/static/portfolio/thumbnail/png/sindimei.png",
      tipo: "site",
    },
    {
      nome: "sorveteriamadrid",
      webp: "/static/portfolio/thumbnail/webp/sorveteriamadrid.webp",
      png: "/static/portfolio/thumbnail/png/sorveteriamadrid.png",
      tipo: "blog",
    },
    {
      nome: "telecon",
      webp: "/static/portfolio/thumbnail/webp/telecon.webp",
      png: "/static/portfolio/thumbnail/png/telecon.png",
      tipo: "site",
    },
    {
      nome: "temperato",
      webp: "/static/portfolio/thumbnail/webp/temperato.webp",
      png: "/static/portfolio/thumbnail/png/temperato.png",
      tipo: "site",
    },
    {
      nome: "universidadesabor",
      webp: "/static/portfolio/thumbnail/webp/universidadesabor.webp",
      png: "/static/portfolio/thumbnail/png/universidadesabor.png",
      tipo: "blog",
    },
    {
      nome: "vitastiq",
      webp: "/static/portfolio/thumbnail/webp/vitastiq.webp",
      png: "/static/portfolio/thumbnail/png/vitastiq.png",
      tipo: "site",
    },
  ];
  let state = "";

  const portfolioImage = document.getElementById("portfolioimages");
  if (portfolioImage) {
    data.forEach((item) => {
      state += `
        <div class="w-full sm:w-full md:w-1/5 p-2  portfolio" class="${item.tipo}">
          <div class="painel p-1 m-2 shadow-inner rounded-lg bg-gray-700">
            <div class="painel-content">
              <picture>
                <source srcset="${item.webp}" type="image/webp" />
                <source srcset="${item.png}" type="image/png" />
                <img width="100%" height="100" class="rounded-lg" src="${item.png}" alt="${item.nome}" />
              </picture>
            </div>          
          </div>
        </div>`;
    });
    portfolioImage.innerHTML = state;
  }
};
