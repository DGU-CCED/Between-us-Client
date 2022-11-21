import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TabList from '../../components/TabList';
import "./Home.css"

function Home() {
    return(
        <div class="home-container">
            <div class="home_select"><TabList /></div>
            
            <div class="test">Hi</div>
        </div>
    );
}

export default Home;