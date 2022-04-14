// nomeclatura de classes
class Calculo {
  constructor(altura, largura){
    this.altura = altura;
    this.largura = largura;
  }

  get area(){
    return this.calculoArea();
  }

  calculoArea(){
    return this.altura * this.largura;
  }
}

let areaCalculoResult = new Calculo(20, 20);
console.log(areaCalculoResult.area);


class Ponto {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  static distancia(a, b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy)
  }
}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10)

console.log(p1.distancia)
console.log(p2.distancia)

console.log(Ponto.distancia(p1, p2))