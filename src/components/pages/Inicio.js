import { Col, Row } from "reactstrap";
import ItemCarousel from "../ItemCarousel";

function Inicio() {
    return (
        <div>
            <Row>
                {/* Aqui vai o carousel */}
                <Col>
                    <ItemCarousel></ItemCarousel>
                </Col>
            </Row>


            <Row>
                {/* Aqui vai o conteúdo */}
                <Col className="text-center my-3">
                    <h1>Iniciativas e Objetivos</h1>
                </Col>
            </Row>

            <Row>
                <Col className="my-3 mx-3">
                    <p>RefugiHelp é uma ONG comprometida em oferecer suporte vital e oportunidades para refugiados em busca de um novo lar. Seu principal objetivo é proporcionar auxílio humanitário, abrangendo desde abrigo até assistência médica, alimentação e educação. A organização visa criar um ambiente seguro e acolhedor para aqueles que foram forçados a fugir de suas terras natais devido a conflitos, perseguições ou desastres.</p><br></br>

                    <p>Além disso, RefugiHelp concentra-se na integração social e econômica dos refugiados. Através de programas de capacitação profissional e parcerias com empresas locais, a ONG busca criar oportunidades de emprego sustentáveis, permitindo que os refugiados reconstruam suas vidas com dignidade e independência.</p><br></br>

                    <p>A conscientização é outro pilar fundamental da atuação da RefugiHelp. A organização procura sensibilizar a comunidade global sobre as questões enfrentadas pelos refugiados, promovendo campanhas educativas e envolvendo a sociedade na construção de soluções solidárias e inclusivas.</p>
                    <br></br>
                    
                    <p>Assim, RefugiHelp se destaca por seu compromisso holístico em abordar as necessidades imediatas dos refugiados, enquanto trabalha para estabelecer as bases de uma integração bem-sucedida e duradoura em suas novas comunidades.</p>
                </Col>
            </Row>
        </div>

    )
}

export default Inicio;