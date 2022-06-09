import HelloWorld from './HelloWorld';
import Button from './Button';
import SayName from './SayName';
import Perfil from './Perfil';

function App(){
  const lista_pessoas = [
    {
      nome: "DORORO",
      idade: "20"
    },
    {
      nome: "Hyakkimaru",
      idade: "30"
    },
    {
      nome: "Mano",  
      idade:"25"
    },
    {
      nome: "DORORO",
      idade: "20"
    },{
      nome: "DORORO",
      idade: "20"
    },
  ];

    return(
      <div>
        <HelloWorld />
        
        

        { lista_pessoas.map( (pessoa) => {
          return <Perfil foto={pessoa.foto} nome={pessoa.nome} idade={pessoa.idade} />
        } ) }

      </div>
        
    );
}

export default App
