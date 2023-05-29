let amigo = {
    nome: 'José',
    peso: 78.9,
    sexo:'M',
    engordar(p=0){
        console.log('engordou')
         this.peso += p

 }}
 amigo.engordar(3)
 console.log(`${amigo.nome} pesa ${amigo.peso} kg`)