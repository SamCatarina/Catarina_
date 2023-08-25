import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
    height: 100vh;
    background-color: #242424;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 24px;
    & h{
        margin-left: 50px;
        margin-top: 50px;
    }
    @media screen and (max-width:760px){
        height: auto;
        font-size: 16px;

        & h{
            font-size: 16px;
        }
        & p{
            font-size: 16px;
        }
}

`

export const ProjectsWrap = styled.div`

    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 50px;
    padding-right: 50px;
    @media screen and (max-width:760px){
        flex-direction: column;
        margin-bottom: 80px;
}
`

export const Project = styled.div`

    width: 20%;
    height: 70%;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & img{
       height: 40%;
    }
    & div{
        font-size: 20px;
    }
    @media screen and (max-width:760px){
        & img{
            width: 250px;
            margin-top: 20px;
        }
        & div{
            font-size: 16px;
            margin-top: 20px;
        }
        margin-top: 80px;
        width: 80%;
}

`