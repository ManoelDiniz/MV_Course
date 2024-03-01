import styled from "styled-components";


export const Container = styled.main`
    width:100%;
    
    margin: 0 auto;
    margin-top:120px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:Center;

`
export const Title = styled.h2`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:32px;
    width:450px;
    margin-bottom:20px;
    line-height:44px;

    color:#FFFFFF;

`
export const Wrapper = styled.div`
    max-width:1050px;
`
export const Column = styled.div`
    flex:1;
`
export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-item:center;
    margin-top:20px;
`
export const EsqueciText = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:14px;        
    line-height:19px;
    color:#E5E044;
`
export const CriarText = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:14px;        
    line-height:19px;
    color:#E23DD7;
    &:hover{
        cursor:pointer;
        color:darkblue;
    }
`
export const TitleLogin = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:32px;
    width:320px;
    margin-bottom:20px;
    line-height:44px;    

`
export const SubtitleLogin = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:400;
    font-size:18px;
    width:320px;
    margin-bottom:35px;
    line-height:25px;    

`
