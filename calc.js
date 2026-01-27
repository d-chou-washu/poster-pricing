var paperType = document.getElementById("paperType");
var posterHeight = document.getElementById("posterHeight");
var posterLength = document.getElementById("posterLength");

const glossy = {
  24: {base: 25, multiplier: 0.075},
  36: {base: 27.5, multiplier: 0.1125},
  42: {base: 30, multiplier: 0.13125}
};

const satin = {
  24: {base: 25, multiplier: 0.062},
  36: {base: 27.5, multiplier: 0.0925},
  42: {base: 30, multiplier: 0.108}
};

const fabric = {
  24: {base: 35, multiplier: 0.195},
  36: {base: 40, multiplier: 0.2325},
  42: {base: 42, multiplier: 0.2713}
};

const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

function calculatePrice() {
  if(document.getElementById("paperType").value === "glossy"){
    document.getElementById("price").value = formatter.format(glossy[document.getElementById("posterHeight").value].base + (glossy[document.getElementById("posterHeight").value].multiplier * document.getElementById("posterLength").value));
  }
  if(document.getElementById("paperType").value === "satin"){
    document.getElementById("price").value = formatter.format(satin[document.getElementById("posterHeight").value].base + (satin[document.getElementById("posterHeight").value].multiplier * document.getElementById("posterLength").value));
  }
  if(document.getElementById("paperType").value === "fabric"){
    document.getElementById("price").value = formatter.format(fabric[document.getElementById("posterHeight").value].base + (fabric[document.getElementById("posterHeight").value].multiplier * document.getElementById("posterLength").value));
  }
   
}
