function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vi',
  sobrenome: 'Sanches',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vi', 'Sanches');
pessoa.exibirNome();

export { pessoa };
