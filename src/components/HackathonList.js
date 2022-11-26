import React, {useState} from 'react';
import styled from 'styled-components';
import { Route, Link, useNavigate } from 'react-router-dom';
import { Card } from 'reactstrap';

import dummy from '../data/dummy.json';

const Styled = styled.div`
    color: white;
    .hackathonList{
        list-style: none;
        margin-bottom: 10vh;
    }
    .linkStyle{
        text-decoration: none;
    }
`;

const HackathonList = () =>{
    const [posts, setPosts] = useState([
        {id: 1, title: "더미111", date: "2022-11-25"},
        {id: 2, title: "더미222", date: "2022-11-26"},
        {id: 3, title: "더미333", date: "2022-11-27"},
    ]);

    const navigate = useNavigate();

    // const hackathonList = posts.map((post) => {
    //     return(
    //         <li key={post.id} className="hackathonList">
    //             <p>{post.title}</p>
    //             <p>{post.date}</p>
    //             <Link to={'/hackathon/detail/'+post.id} className="linkStyle" style={{textDecoration: 'none', color: 'white'}} >이동 테스트...(클릭)</Link>
    //         </li>
    //     );
    // });

    const dummyHackathon = dummy.data.map((item, index) => {
        return(
            <li key={index} className="hackathonList">
                <p>{item.name}</p>
                <p>{item.start_date} ~ {item.end_date}</p>
                <p>{item.content}</p>
                {/* <p>개발자 : {item.developer} PM : {item.pm} 디자이너 : {item.designer}</p> */}
                <Link to={'/hackathon/detail/'+item.id} className="linkStyle" style={{textDecoration: 'none', color: 'white'}} >이동 테스트...(클릭)</Link>
            </li>
        );
    });

    return (
        <>
        <Styled>
            {/* {hackathonList} */}
            {dummyHackathon}
        </Styled>
        </>
    )
}

export default HackathonList;