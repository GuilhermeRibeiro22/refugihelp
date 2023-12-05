import { Col, Row } from "reactstrap";
import ItemDoacao from "../ItemDoacao";
import professor from '../images/professor.jpg'
import abraco from '../images/abraco.jpg'
import felizes from '../images/felizes.jpg'


function Doações() {
    return (
        <div>
            <Row className="my-5 text-center">
                <Col>
                    {/* Aqui vai o título */}
                    <h1>Doações</h1>
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <ItemDoacao titulo='R$ 40' descricao='Com esse valor, 1 refugiado recebe aulas de português e capacitação profisional.' img={professor} />
                </Col>

                <Col>
                    <ItemDoacao titulo='R$ 60' descricao='Com este valor, 3 refugiados recebem aulas de português, são capacitados profissionalmente e contam com auxílio para realocação profissional.' img={abraco} />
                </Col>

                <Col>
                    <ItemDoacao titulo='R$ 150' descricao='Com este valor, uma turma de 8 refugiados recebe aulas de português, é capacitada profissionalmente e conta com auxílio para realocação profissional.' img={felizes}/>
                </Col>
            </Row>

            <Row className="m-4">
                <Col>
                    <h5>Celebrando nosso primeiro ano de atividades, convido você a se unir a uma causa significativa. Nós estamos iniciando uma campanha de doação para fazer a diferença nas vidas daqueles que buscaram refúgio e esperança. Sua contribuição é uma expressão de solidariedade e compaixão, guiada pelo poder transformador da ajuda humanitária. Juntos, podemos construir um futuro mais brilhante para aqueles que enfrentam desafios inimagináveis.</h5>
                </Col>
            </Row>
        </div>
    )
}

export default Doações;