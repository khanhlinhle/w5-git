import ListComment from "./../../components/ListComment/ListComment";
import SideDetail from './../../components/SideDetail/SideDetail';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CreateCommend from "../../components/CreateCommend/CreateComment";
import { useLocation } from "react-router-dom";

const DetailPage = (props) => {
    const location = useLocation();
    const [owner, setOwner] = useState("");
    const [repo, setRepo] = useState("")
    const [issueNumber, setIssueNumber] = useState("")

    useEffect(() => {
        if (location.search != null) {
            console.log("get location " + location);
            console.log(location.pathname);
            console.log(location.search); 
            let theOwner = (new URLSearchParams(window.location.search)).get("owner")
            setOwner(theOwner)
            let theRepo = (new URLSearchParams(window.location.search)).get("repo")
            setRepo(theRepo)
            let theIssueNumber = (new URLSearchParams(window.location.search)).get("issue_number")
            setIssueNumber(theIssueNumber)
            console.log(theIssueNumber); 
        }
    }, [location])

    return (
        <Container className="DetailPage-div">
            <Row>
                <Col xs={9}>
                    <ListComment owner={owner} repo={repo} issue_number={issueNumber} />
                    <CreateCommend />
                </Col>
                <Col xs={3}>
                    <SideDetail owner={owner} repo={repo} issue_number={issueNumber} />
                </Col>
            </Row>
        </Container>
    )
}

export default DetailPage;