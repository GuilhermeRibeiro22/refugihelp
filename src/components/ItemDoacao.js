import { Card, CardBody, CardTitle, CardText, Button, Tooltip} from "reactstrap";
import {useState, useId} from 'react';


function ItemDoacao({img, titulo, descricao}) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const idUnico = useId().replaceAll(/:/g, "");
    return (
        <div className="">
            <Card
            className="mb-4 mx-auto bg-black text-white"
                
                style={{
                    width: '18rem',
                    minHeight: '425px'
                }}
            >
                <img
                    alt={titulo}
                    src={img}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>
                
                    <CardText id={idUnico}>
                        {descricao.substring(0, 90)}{descricao.length >= 90 && '...'}
                        <Tooltip
                            isOpen={tooltipOpen}
                            target={idUnico}
                            toggle={toggle}>
                            {descricao}
                        </Tooltip>

                    
                    </CardText>

                    <Button className="bg-danger p-2">Doe Agora</Button>
                    
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemDoacao;