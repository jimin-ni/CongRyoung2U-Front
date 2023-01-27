import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const ModalStyles = styled('container')`
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    width: 1000px;
    height: 600px;
    padding: 100px;

    z-index: 1000;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #252A34;
    color: white;
    border-radius: 40px;
    box-shadow: 2px 2px 2px 2px gray;
`
const XButStyle = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 30px;
`

const PlayButStyle = styled.button`
    position: fixed;
    bottom: 48px;
    background-color: #08D9D6;
    border-radius: 60px;
    width: 350px;
    height: 63px;
    border: 0px;
    
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #EEEEEE;
`

const PlayButton = styled.div`
    padding: 20px;
    width: 90px;
    height: 15px;
    border-radius: 30px;
    background: #08D9D6;
    position: fixed;
    bottom: 48px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`

const IllustContainer = styled.img`
    height: 630px;
    width: 630px;
    background-color: #EAEAEA;
    float: left;
    margin: 0px 30px 0px 0px;
`

const ModalBasic = ({setModalOpen, data}) => {

    const closeModal = () => {
    setModalOpen(false);
    };

    
    return (
        <ModalStyles>
            <div>
                <IllustContainer src={data.image}/>
                <XButStyle onClick={closeModal}>X</XButStyle>
                <div>
                    <h1>{data.name}</h1>
                    <div>{data.desc}</div>
                </div>
                <PlayButStyle><FaPlay /></PlayButStyle>
            </div>
        </ModalStyles>
    );
}

export default ModalBasic;