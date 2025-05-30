// etapa 1 

let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log(tarefas);

tarefas.push('jogar videogame' , ' limpar pc') // adicionando ao array

console.log(tarefas);


// Etapa 2: Removendo a Última Tarefa com .pop

console.log(tarefas);

tarefas.pop() // removendo ultima tarefa

console.log(tarefas);


// Etapa 3: Adicionando uma Tarefa no Início

console.log(tarefas);

tarefas.unshift('estudar python') // adicionando ao início

console.log(tarefas);

// Etapa 4: Removendo a Primeira Tarefa

console.log(tarefas);

tarefas.shift() // removendo do início

console.log(tarefas);

// Etapa 5: Verificando se uma Tarefa Existe

console.log(tarefas);

if ( tarefas.includes('Ir à academia') ) // removendo do início 
{ console.log('A tarefa "Ir à academia" está na sua lista de tarefas.');}
else{
 console.log('A tarefa "Ir à academia" está na sua lista de tarefas.');}

 //  if para um cindição, se estiver no array, diga que sim, se não, diga que não


// Etapa 6: Transformando a Lista em String

console.log(tarefas)

tarefas.join(', ') // transformando em string e separando por virgulas

console.log(tarefas)

