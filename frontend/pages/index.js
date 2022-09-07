import { useState } from "react";
import { Alert, Button, Input, InputGroup, InputGroupText, Row, Col } from "reactstrap";
import RestaurantList from "../components/RestaurantList";


const index = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="continer-fluid">
            <Row>
                <Col>
                    <div className="search">
                        <InputGroup>
                            <InputGroupText>探す</InputGroupText>
                            <Input
                                placeholder="レストラン名を入力して下さい"
                                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
                        </InputGroup>
                    </div>
                </Col>
            </Row>
            <RestaurantList search={query} />
            <style jsx>
                {`
                    .search {
                        margin: 20px;
                        width: 500px;
                    }
                `}
            </style>
        </div>
    );
}

export default index;