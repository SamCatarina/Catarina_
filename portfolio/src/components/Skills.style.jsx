import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;

    & p{

        width: 2px;
        height: 60%;
        background-color: #CB88FF;

    }
    @media screen and (max-width:760px){
        flex-direction: column;
        height: auto;
        padding-bottom: 40px;
}

`
export const Column = styled.div`

    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

 
`
export const ColumnTitle = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    font-size: 20px;


    & p{
        width: 40%;
        height: 2px;
        background-color: #CB88FF ;
        margin-top: 7px;
    }

    @media screen and (max-width:760px){
        font-size: 18px;
        & p{
            width: 100%;
        }
}


`
export const ColumnSkills = styled.div`

    margin-top: 60px;

    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width:900px){
        margin-top: 30px;
        width: 100%;
}

`
export const Skill = styled.div`
    display: flex;
    font-size: 20px;
    margin-bottom: 20px;

    & h{
        margin-left: 10px;
    }

    @media screen and (max-width:760px){
        font-size: 16px;
}

    
`