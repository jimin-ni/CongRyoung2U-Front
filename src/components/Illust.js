import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import SelectModal from './IllustModal';

const IllustContainer = styled.div`
    height: 357px;
    width: 357px;
    background-color: #EAEAEA;
`
const IllustBoxContainer = styled.div`
    margin: 30px 30px 30px 100px;
    float:left
`

function Illust() {

    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    
    return (
        <div>
            <IllustBoxContainer>
                <IllustContainer onClick={showModal}>
                    <div>일러스트</div>
                </IllustContainer>
                일러스트 이름
            </IllustBoxContainer>
            {modalOpen && <SelectModal setModalOpen={setModalOpen} />}
        </div>
    );
};

export default Illust;


