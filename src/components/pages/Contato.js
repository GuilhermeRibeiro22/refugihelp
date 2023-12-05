import { Button, Col, Row } from "reactstrap";
import ItemForm from '../ItemForm';
import atendente from '../images/atendente.jpg';


function Contato() {
    return (
        <div>
            <Row className="my-sm-4">
                <Col>
                    <h1 className="display-4 text-center">Fale Conosco</h1>
                </Col>
            </Row>

            <Row className="mb-4 mx-3">
                <Col>
                    <ItemForm label="Nome" name="nome" type="text" ph="Digite seu nome..." />
                    <ItemForm label="Email" name="email" type="email" ph="Digite seu email..." />
                    <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone..." />
                    <ItemForm label="Assunto" name="assunto" type="text" ph="Informe o assunto da sua mensagem" />
                    <ItemForm label="Mensagem" name="nome" type="textarea" ph="Digite a mensagem que será encaminhada a nossa equipe" />
                    <Button color="danger" block>Enviar</Button>
                </Col>

                <Col>
                    <img src={atendente} className="rounded-circle d-block mx-auto" alt="atendente"></img>
                </Col>
            </Row>
        </div>

    )
}

export default Contato;