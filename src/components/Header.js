import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from './styles/Button.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try it for Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we buid communities. You have a voice, but so does your audience. Create connections with your users as you engage genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get started for Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='mokups' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header;