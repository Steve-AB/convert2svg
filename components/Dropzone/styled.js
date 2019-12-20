import styled, { css } from 'styled-components'
import { Paper, Button } from '@material-ui/core'
import { gradient, greenBlue } from '../../styles/constants'

export const Container = styled.div`
    background: #fff;
    position: relative;
    width: 90%;
    max-width: 800px;
    height: 300px;
    padding: 50px;
    margin: 25px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px dashed gray;
    text-align: center;
    color: gray;
    z-index: 20;
    transition: all .3s ease-out;
    box-shadow: 0 0 0 1px rgba(255,255,255,.05), inset 0 0 .25em 0 rgba(0,0,0,.25);

    ${props => props.isDragActive && css`
        background: ${gradient};
        color: #fff;
    `}

    svg {
        width: 100px;
        height: auto;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const UploadButton = styled(Button)`
    padding: 10px 30px !important;
    background: ${greenBlue} !important;
`