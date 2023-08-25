import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: #242424;
    display: flex;
    align-items: center;
    justify-content: center;


`

export const Content = styled.div`

    width: 100%;
    height: 80%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


`

export const AboutMain = styled.div`
    width: 90%;
    height: 80%;
    
    


`

export const AboutTitle = styled.div`
font-size: 24px;
@media screen and (max-width:900px){
    font-size: 22px;
}
@media screen and (max-width:760px){
    font-size: 16px;
}
`

export const AboutTextFather = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const AboutText = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`

export const TextLine = styled.div`

    display: flex;
    align-items: center;
    font-size: 24px;

    & p{
        margin-left: 30px;
    }
    @media screen and (max-width:900px){
    font-size: 22px;
}
@media screen and (max-width:760px){
    font-size: 16px;
}

`

export const AboutLinks = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & div{
        width: 30%;
        display: flex;
        font-size: 20px;
        justify-content: space-between;
        @media screen and (max-width:900px){
        font-size: 16px;
        width: 50%;
}
        
        & a{
            color: white;
        }
    }
    

    



`

