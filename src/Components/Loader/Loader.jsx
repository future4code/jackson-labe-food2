import React from 'react'
import App from '../../App'
import useLoader from '../../Hooks/useLoader'
import { ImgIf, ImgU, ImgT, ImgRe, Span, ImgArrow, ImgTitle, Main } from './styled'
import logoTitle from '../../Assets/Imgs/logoTitle.png'
import iF from '../../Assets/Imgs/if.png'
import u from '../../Assets/Imgs/u.png'
import t from '../../Assets/Imgs/t.png'
import re from '../../Assets/Imgs/re.png'
import logoArrow from '../../Assets/Imgs/logoArrow.png'


export default function Loader() {
    const { done } = useLoader()
    return (
        <>
            {/* Recebe ternário para o App */}
            {!done ? <Main>
                <Span>
                    <ImgIf src={iF} alt="" srcset={iF} />
                    <ImgU src={u} alt="" srcset={u} />
                    <ImgT src={t} alt="" srcset={t} />
                    <ImgU src={u} alt="" srcset={u} />
                    <ImgRe src={re} alt="" srcset={re} />
                </Span>
                <ImgArrow src={logoArrow} alt="" srcset={logoArrow} />
                <ImgTitle src={logoTitle} alt="" srcset={logoTitle} />
                <ImgArrow src={logoArrow} alt="" srcset={logoArrow} />
            </Main> : <App />}

        </>
    )
}