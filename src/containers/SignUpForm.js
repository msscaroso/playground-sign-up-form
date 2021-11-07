import BgIntroDesktop from "./bg-intro-desktop.png"

import styled from "styled-components";
import FormComponent from "./Form";

function SignUpForm() {

    return (
        <>
            <BackgroundImage
                src={BgIntroDesktop}
                alt="Background IMage"
            />
            <Container>
                <Intro>
                    <Title>
                        Learn to code by watching others
                    </Title>
                    <Paragraph>
                        See how experienced developers solve problems in real-time. Watching scripted tutorials is
                        great,
                        but understanding how developers think is invaluable.
                    </Paragraph>
                </Intro>
                <FormComponent/>
            </Container>
        </>
    )
}


const BackgroundImage = styled.img`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`

const Intro = styled.div`
  color: white;
  font-size: 16px;
  height: 27.5vh;
  width: 37.5vw;

  margin-left: 11.79vw;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  line-height: 55px;
  letter-spacing: -0.520833px;

`

const Paragraph = styled.p`
  padding-right: 3.57vw;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`


export default SignUpForm;