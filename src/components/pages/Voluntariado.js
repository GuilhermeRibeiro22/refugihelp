import ItemForm from "../ItemForm";
import { Col, Row, Button } from "reactstrap";

function Voluntariado() {
    return (
        <div>
            <Row className=" my-4 text-center">
                <Col>
                    <h3>Como se tornar um voluntário?</h3>
                </Col>
            </Row>

            <Row className="my-4 text-center">
                <Col>
                <h5>Para se tornar um voluntário, basta preencher esse formulário. Seu perfil será analisado e em até 7 dias terá um retorno!!</h5>
                </Col>
            </Row>

            <Row className="mb-5 mx-3">
                <Col>
                    <ItemForm label="Nome" name="nome" type="text" ph="Digite seu nome..." />
                    <ItemForm label="Email" name="email" type="email" ph="Digite seu email..." />
                    <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone..." />
                    <ItemForm label="Habilidades Relevantes" name="nome" type="textarea" ph="Como tradução, ensino, aconselhamento..." />
                    <ItemForm label="Disponibilidade" name="nome" type="textarea" ph="Dias da semana disponíveis, horários disponíveis, compromissos a longo prazo ou restrições de tempo" />
                    <ItemForm label="Motivação" name="nome" type="textarea" ph="Por que você deseja se tornar voluntário na RefugiHelp?" />
                    <ItemForm label="Conhecimento sobre refugiados" name="nome" type="textarea" ph="O que você entende sobre a situação atual de refugiados globalmente" />
                    <Button color="danger" block>Enviar</Button>
                </Col>
            </Row>
        </div >
    )
}

export default Voluntariado