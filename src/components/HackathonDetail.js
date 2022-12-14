import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import dummy from '../data/dummy.json';

const Styled = styled.div`
    color: white;
`

const HackathonDetail = () => {
    const {id} = useParams();
    const [hackathonDetail, setHackathonDetail] = useState([]);

    return(
        <>
            <Styled>
            <div>
                <h2>About {id}</h2>

                <Link to={'/home'} className="linkStyle" style={{textDecoration: 'none', color: 'white'}} >돌아가기(클릭)</Link>
            </div>
            </Styled>
        </>
    )
}

export default HackathonDetail;