import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    height: 100vh;
    padding-top: 8%;
    display: flex;
    
    @media screen and (max-width:760px){
        flex-direction: column;
        height: auto;
        align-items: center;
    }


`

export const ImageSpace = styled.div`

    width: 50%;
    display: flex;
    justify-content: flex-end;
    
    
    & img{
        width: 70%;
        height: fit-content;
        margin-right: 10%;
    }
    @media screen and (max-width:900px){
        width: 65%;
    }
    @media screen and (max-width:760px){
        width: 80%;
    }

`

export const InfoSpace = styled.div`
    
    width: 50%;
    margin-top: 50px;
    
`

export const Line = styled.div`  
width: 100%; 
display: flex; 
justify-content: ${ props => props.pos };   
& p { 
    width: ${props => props.wid}; 
    height: 2px;
    background-color:#CB88FF ;

}
@media screen and (max-width:760px){
    & p{
        display: none;
    }
}
`

export const TextResume = styled.div`

    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & div{
        & p{
            padding-top: 10%;
            font-size: 24px;
        }
        @media screen and (max-width:760px){
        & p{
            font-size: 18px;

        }
        text-align: center;
        margin-top: 30px;

    }
        
    }
    

`

export const ContactIcons = styled.div`
    
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    & div{
        font-size: 35px;
        width: 50%;
        display:flex;
        justify-content: space-between;

        & a{
            color: black;
        }

    }

    @media screen and (max-width:900px){
        width: 95vw;
        position: absolute;
        left: 0;
        
    }
    @media screen and (max-width:760px){
        display: none;
    }

`
export const ContactIconsMobile = styled.div`

    display: none;
    width: 100%;
    height: 35%;
    margin-top: 50px;
    margin-bottom: 40px;
   

    & div{
        font-size: 35px;
        width: 50%;
        display:flex;
        justify-content: space-between;

        & a{
            color: black;
        }

    }
    @media screen and (max-width:760px){

        display:flex;
        align-items: center;
        justify-content: center;

    }




`




