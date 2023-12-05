import { Row, Col, Button } from 'reactstrap';
import projeto1 from '../images/projeto1.jpg'
import projeto2 from '../images/projeto2.jpg'
function Projetos() {
    return (
        <div>
            <Row className='my-2 text-center'>
                <Col>
                    <h1>Projetos</h1>
                </Col>
            </Row>

            <Row className='m-3'>
                <Col>
                    <h3>Caminhos Solidários</h3>
                </Col>
            </Row>

            <Row className='m-5'>
                <Col>
                    <p>O projeto Caminhos Solidários é uma iniciativa dedicada a oferecer apoio abrangente a refugiados, visando facilitar sua integração e promover a resiliência. Nossa ONG busca fornecer assistência em diversas áreas, incluindo educação, saúde, emprego e suporte psicossocial.</p>
                </Col>
            </Row>

            <Row className='mx-2'>
                <Col>
                    {/* Aqui vai uma imagem */}
                    <img src={projeto1}></img>
                </Col>

                <Col>
                    <h5>Objetivos do projeto</h5><br></br>

                    <ul>
                        <li>Educação Acessível: Implementar programas educacionais adaptados às necessidades dos refugiados, promovendo a aprendizagem de idiomas locais e oferecendo cursos profissionalizantes.</li>
                        <li>Assistência Médica: Estabelecer parcerias com profissionais de saúde para garantir cuidados médicos básicos, vacinações e acesso a serviços de saúde mental.</li>
                        <li>Empregabilidade: Desenvolver programas de capacitação e parcerias com empresas locais para facilitar a colocação no mercado de trabalho dos refugiados.
                        </li>
                        <li>Apoio Psicossocial: Oferecer sessões de aconselhamento e apoio emocional para ajudar os refugiados a lidar com traumas e ajustar-se ao novo ambiente.</li>
                        <li>Integração Comunitária: Promover eventos e atividades que incentivem a interação entre refugiados e a comunidade local, fomentando o entendimento mútuo e combatendo estigmas.
                        </li>
                        <li>Advocacia e Conscientização: Participar ativamente de campanhas para sensibilizar a sociedade sobre a situação dos refugiados e advogar por políticas inclusivas.</li> <br></br>
                        <Button color='danger'>Saiba mais</Button>
                    </ul>

                    
                </Col>


            </Row>





            <Row className='mt-5 mx-3'>
                <Col>
                    <h3>Cultura Unida</h3>
                </Col>
            </Row>

            <Row className='m-5'>
                <Col>
                    <p>O projeto Cultura Unida tem como objetivo celebrar e preservar a rica diversidade cultural dos refugiados, promovendo a integração por meio das artes, música e culinária. Esta iniciativa busca não apenas atender às necessidades práticas, mas também enriquecer a experiência dos refugiados e da comunidade local, fomentando um ambiente de compreensão e respeito mútuo.</p>
                </Col>
            </Row>

            <Row className='m-3'>
                <Col>
                    <h5>Objetivos do projeto</h5>
                </Col>
            </Row>

            <Row className='m-3'>
                <Col>
                    <ul>
                        <li>Festivais Culturais:Organizar eventos anuais que destacam as tradições culturais dos refugiados, proporcionando oportunidades para compartilhar música, dança, arte e culinária.</li>
                        <li>Oficinas de Artes: Estabelecer programas que ofereçam aulas de artes visuais, música e dança, incentivando a expressão criativa e proporcionando uma plataforma para compartilhar tradições culturais.
                        </li>
                        <li>Feiras Gastronômicas: Criar eventos regulares que destacam a culinária dos países de origem dos refugiados, proporcionando não apenas uma experiência gastronômica, mas também promovendo o diálogo intercultural.
                        </li>
                        <li>Troca de Idiomas e Histórias: Facilitar encontros regulares onde membros da comunidade local e refugiados possam compartilhar histórias e aprender uns com os outros, promovendo a compreensão e amizades duradouras.
                        </li>
                        <li>Projetos de Arte Comunitária: Colaborar em murais artísticos ou instalações que representem a união e a diversidade, envolvendo tanto refugiados quanto membros da comunidade local.</li><br></br>
                        <Button color='danger'>Saiba mais</Button>
                    </ul>
                </Col>

                <Col>
                    {/* Aqui vai uma imagem */}
                    <img src={projeto2}></img>
                </Col>
            </Row>

        </div>

    )
}

export default Projetos;