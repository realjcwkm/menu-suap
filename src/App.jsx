import Title from './Title';
import Button from './Button';
import SayName from './SayName';
import Noticia from './Noticia';

function App() {
    const lista_noticias = [
        {
            hour: "28/05/2022 09:01",
            description: "Estão abertas as inscrições para projetos de ensino"
        },        
        {
            hour: "28/05/2022 09:00",
            description: "Estão abertas as inscrições para projetos de pesquisa"
        },
        {
            hour: "27/05/2022 13:32",
            description: "Manutenção do Sistema SUAP acontece nesta sexta-feira(27)"
        },
    ];

    return (
        <div>
            <Title />

            {lista_noticias.map((noticia) => {
                return <Noticia horario={noticia.hour} desc={noticia.description} />
            })}

        </div>

    );
}

export default App
