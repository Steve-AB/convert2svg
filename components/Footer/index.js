import React from 'react'
import * as S from './styled'

const Test = props => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <S.Container>
            <S.WidthLimit>
                <span>
                    © {year} - <a href="https://vincentwill.com/" target="_blank" rel="noopener">Vincent Will</a>
                </span>
                <a href="/privacy" target="_blank" rel="noopener">
                    Privacy Policy
                </a>
            </S.WidthLimit>
        </S.Container>
    )
}

export default Test
