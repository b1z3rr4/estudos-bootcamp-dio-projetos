class ContaBancario {
    constructor (agencia, numero, tipo, saldo){
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this.saldo = saldo;
    }
  
    get Saldo(){
      return this._saldo;
    }
  
    set Saldo(valor){
      this._saldo = valor;
    }
  
    sacar(valor){
      if(valor > this._saldo){
        return "Operação negada!"
      }
      this._saldo = this._saldo - valor;
      return this._saldo;
    }
  
    depositar(valor){
      this._saldo = this._saldo + valor;
      return this._saldo;
    }
  }
  
  class ContaCorrente extends ContaBancario {
    constructor (agencia, numero, cartaoCredito){
      super(agencia, numero);
      this.tipo = 'corrente';
      this._cartaoCredito = cartaoCredito;
    }
  
    getCartaoCredito(){
      return this._cartaoCredito;
    }
  
    setCartaoCredito(valor){
      this._cartaoCredito = valor;
    }
  }
  
  class ContaPoupança extends ContaBancario {
    constructor (agencia, numero){
      super(agencia, numero);
      this.tipo = 'poupança';
    }
  }
  
  class ContaUniversitária extends ContaBancario {
    constructor (agencia, numero){
      super(agencia, numero, saldo);
      this.tipo = 'universitária';
    }
  
  
    sacar(valor){
      if (valor > 500){
        return "Operação negada!"
      }
      this._saldo = this._saldo - valor;
      return this._saldo;
    }
  }