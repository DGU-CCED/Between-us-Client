import React, {useState, useEffect} from 'react';

const HackathonRow = (props) => {
    const title = props.row.title;
    const startDate = props.row.startDate;
    const endDate = props.row.endDate;
    const img = props.row.img;

    return (
        <li>
            <div className='img'>{img}</div>
            <div className='title'>
                <a href="#">{title}</a>
            </div>
            <div className='content'>
                <span className='date'>
                    {startDate} ~ {endDate}
                </span>
            </div>
        </li>
    );
};

const ListView = () => {
    const [hackathon, setHackathon] = useState(null);

    //useEffect 추가해서 hackathon 정보받아오기
    //사용예시
    /*
    useEffect(() => {
        let apiUrl = 'https://openapi.naver.com/v1/search/news?query=올림픽';
        axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                'X-Naver-Client-Id': NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
            }
        })
        .then(({data}) => {
            setArticles(data.items);
        })
        .catch(e => {
            console.error(e.stack);
        });
    }, []);
    */

    return(
        <ul className='listView'>
            {
                hackathon &&
                hackathon.map((v, inx) => {
                    return <HackathonRow key={inx} row={v} />
                })
            }
        </ul>
    );
};

export default ListView;