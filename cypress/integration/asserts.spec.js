/// <reference types="cypress"/>

it('Teste com asserts de Igualdade..', () => {
    const a = 1;
    expect(a).equal(1);
    expect(a, `Deveria ser: `).equal(1);
    expect(a).to.be.equal(1);
    expect(`a`).not.be.equal('b');
})

it('Teste com asserts de Veracidade..', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;

})

it('Teste com asserts de Igualdade de objeto..', () => {
    const obj = {
        a: 1,
        b: 2
    }
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    //expect(obj).to.be.equal({a: 1, b: 2}); // vai dar erro
    expect(obj).to.be.deep.equal({a: 1, b: 2});
    expect(obj).eql({a: 1, b: 2});
    expect(obj).include({a: 1}); //verificar se no objeto existe incluido a propriedade "a: 1"
    expect(obj).to.have.property('a');
    expect(obj).to.have.property('a', 1);
    expect(obj).not.be.empty;
    expect({}).to.be.empty;
})  

it('Teste com asserts em Arrays..', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).not.be.empty
    expect({}).to.be.empty
})

it('Teste com asserts de Tipos..', () => {
    const num = 1;
    const str = ('string');

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('Teste com checagem em Strings..', () => {
    const str = 'String de teste';
    
    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15); //verifica se o tamanho da string é 15
    expect(str).to.contains('de'); //verifica se na string contem a palavra "de"
    expect(str).to.match(/String/);
    expect(str).to.match(/ˆString/); //verifica se a string comeca com a palavra "String"
    expect(str).to.match(/teste$/); //verifica se a string termina com a palavra "teste"
    expect(str).to.match(/.{15}/); //verifica o tamanho da string
    expect(str).to.match(/\w+/); //verifica se existem só palavras
    expect(str).to.match(/\D+/); //verifica que nao contem numeros
})

it('Teste com checagem em Numeros..', () => {
    const number = 4;
    const floatNumber = 5.123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3); //verifica se o valor esta acima de 3
    expect(number).to.be.below(7); //verifica se o valor esta abaixo de 7
    expect(floatNumber).to.be.equal(5.123);
    expect(floatNumber).to.closeTo(5.1, 0.1); //verifica se o valor esta proximo de "5.1"
    expect(floatNumber).to.be.above(5); //verifica se o valor esta acima de 5
})