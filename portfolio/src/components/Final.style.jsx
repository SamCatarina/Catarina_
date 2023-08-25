import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    height: 50vh;
    font-size: 24px;
    padding-top: 50px;
    padding-left: 20px;
    margin-bottom: 20px;

    & div{
        display: flex;
        width: 100%;
        height: 50%;
        margin-top: 50px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
       
    }
    @media screen and (max-width:760px){
        font-size: 16px;
        height: 30vh;
}


`