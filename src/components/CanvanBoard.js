import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Link, useNavigate } from 'react-router-dom';
import { Card } from 'reactstrap';

import dummy from '../data/dummy.json';

const Styled = styled.div`
  color: white;
  .hackathonList {
    list-style: none;
    margin-bottom: 10vh;
  }
  .linkStyle {
    text-decoration: none;
  }
`;

const CanvanBoard = () => {
  const [posts, setPosts] = useState([
    {
      todos: [
        { id: 11, content: '투두랍니다' },
        { id: 12, content: '저도 투두랍니다' },
        { id: 13, content: '저도 투두요' },
      ],
      inProgress: [
        { id: 21, content: '진행중에 있던 아이입니다' },
        { id: 22, content: '진행 중에 있던 아이입니다 222' },
        { id: 23, content: '저도 진행 중에...333' },
      ],
      completed: [
        { id: 31, content: '완료된 태스크입니다' },
        { id: 32, content: '완료된 태스크입니다222' },
        { id: 33, content: '완료된 태스크입니다333' },
      ],
    },
  ]);

  const navigate = useNavigate();

  return (
    <div>
      <p>asdf</p>
    </div>
  );

  // 드랍 위치가 ul일 경우, 마우스 위치가 가장 가까운 li를 찾아서 리턴해준다
  const getHoveredElement = (ul, y) => {
    let closestLi = { offset: Number.NEGATIVE_INFINITY, element: null };
    ul.childNodes.forEach((node) => {
      const box = node.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closestLi.offset) {
        closestLi.offset = offset;
        closestLi.element = node;
      }
    });

    return closestLi.element;
  };

  const beforeOrAfter = (element, y) => {
    let box;
    if (element.tagName !== 'LI') {
      box = getHoveredElement(element, y).getBoundingClientRect();
    } else {
      box = element.getBoundingClientRect();
    }

    const offset = y - box.top - box.height / 2;
    return offset < 0
      ? { where: 'before', id: Number(element.id) }
      : { where: 'after', id: Number(element.id) };
  };

  const handleDrop = (e) => {
    const itemId = Number(e.dataTransfer.getData('itemId'));
    const from = e.dataTransfer.getData('listName');
    const to =
      e.target.tagName === 'LI' ? e.target.parentElement.id : e.target.id;
    const { where, id: hoveredElementId } = beforeOrAfter(e.target, e.clientY);
    const updatedList = {};
    const movingData = updatedList[from].filter((el) => el.id === itemId);
    let newFrom = updatedList[from].filter((el) => el.id !== itemId);

    let newTo;

    // 다른 리스트로의 이동일 경우
    if (from !== to) {
      newTo = updatedList[to].reduce((acc, el) => {
        if (el.id === hoveredElementId) {
          if (where === 'before') return [...acc, ...movingData, el];
          if (where === 'after') return [...acc, el, ...movingData];
        }

        return [...acc, el];
      }, []);

      updatedList[from] = newFrom;
      updatedList[to] = newTo;

      // 같은 리스트 내 이동일 경우
    } else {
      newFrom = updatedList[from].filter((el) => el.id !== itemId);
      newTo = newFrom.reduce((acc, el) => {
        if (el.id === hoveredElementId) {
          if (where === 'before') return [...acc, ...movingData, el];
          if (where === 'after') return [...acc, el, ...movingData];
        }

        return [...acc, el];
      }, []);
      updatedList[to] = newTo;
    }

    // 마지막으로 상태를 업데이트해주는 함수
  };
};

export default CanvanBoard;
