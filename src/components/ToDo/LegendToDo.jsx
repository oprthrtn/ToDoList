import React from "react";
import { Card, Button } from "react-bootstrap";

const LegendToDo = function(){
    return(
        <Card>
            <Card.Body>
                <strong className="row m-0">Приоритеты элементов ToDo:</strong>
                <div className="mt-4">
                    <Button variant="light" className="border-dark me-2"><strong>ОБЫЧНЫЙ</strong></Button>
                    <Button variant="warning" className="border-dark me-2"><strong>ВАЖНЫЙ</strong></Button>
                    <Button variant="danger" className="border-dark me-2"><strong>КРИТИЧНЫЙ</strong></Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default LegendToDo;