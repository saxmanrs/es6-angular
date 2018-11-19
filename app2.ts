class Carro{

    private modelo: string
    private numeroDePortas:number
    private velocidade:number = 0

    
    constructor(modelo:string,numeroDePortas:number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas

    }

    public acelerar(): void{
        this.velocidade =  this.velocidade + 10 


    }

    public parar(): void{
        this.velocidade = 0


    }
    public velocidadeAtual(): number{

        return this.velocidade

    }


}

class Concessionaria{

    private endereco:string
    private listaDeCarros:any



    public constructor(endereco:string,listaDeCarros:any)
{

        this.endereco = endereco
        this.listaDeCarros = listaDeCarros


}

    public forneceEndereco():string{
            return this.endereco

    }

    public mostrarListadeCarros():any{

                return this.listaDeCarros

        
    }


}

class Pessoa{


private nome: string
private carro:any
private carroPreferido:string


constructor(nome:string,carro:any,carroPreferido:string){

    this.carro = carro
    this.carroPreferido = carroPreferido
    this.nome = nome

}


public dizerNome (): string{

    return this.nome

}
public dizerCarroPreferido(): string{

    return this.carroPreferido


}

public comprarCarro(carro : any):void{

    return this.carro

}

public dizerCarroQueTem(carro : any):any{

return this.carro


    }

 
}

let pessoa = new Pessoa('Edilson','Nenhum','Fiat PUNTO')
console.log(pessoa)