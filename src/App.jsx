import { createGlobalStyle } from 'styled-components';
import styled, { keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gradient-primary: linear-gradient(
      120deg,
      rgba(3, 0, 44, 1) 4%,
      rgba(38, 27, 163, 1) 45%,
      rgba(9, 112, 176, 1) 79%,
      rgba(0, 148, 179, 1) 100%
    );
    --gradient-header: linear-gradient(
      90deg,
      #9572fc 0%,
      #43e7ad 50.52%,
      #e2d45c 100%
    );
    --text-color: white;
    --secondary-text-color: #a1a1aa;
  }

  body {
    height: auto;
    background: url("https://i.redd.it/1asyzovvrn8a1.gif") no-repeat center center/cover;
    font-family: 'Inter', sans-serif;
    line-height: 160%;
    animation: fadeIn 1.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Header = styled.header`
  padding-top: 32px;
  height: calc(120px + 32px);
`;

const ProfilePic = styled.div`
  width: 120px;
  margin: auto;
  background-image: var(--gradient-header);
  border-radius: 50%;
  display: flex;
  padding: 4px;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${fromTop} 0.7s 0.2s backwards;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const Main = styled.main`
  max-width: 580px;
  width: 90%;
  margin: 32px auto;
  display: grid;
  gap: 24px;
  animation: ${fadeInUp} 0.8s ease-in-out;
`;

const Section = styled.section`
  color: var(--text-color);
  padding-top: 4px;
  border-radius: 10px;
  animation: ${fromBottom} 0.7s backwards;

  &:nth-child(1) {
    animation-delay: 0;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  div {
    padding: 32px;
    padding-top: 24px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }

    h2 {
      letter-spacing: -0.47px;
      animation: ${fadeInRight} 0.7s backwards;
    }

    p {
      letter-spacing: -0.18px;
      animation: ${fadeInLeft} 0.7s backwards;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;

    li {
      transition: transform 0.3s, filter 0.3s;
      list-style: none;

      &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 0.75rem blue);
      }

      img {
        width: 90px;
        border-radius: 8px;
        animation: ${zoomIn} 0.5s ease-in-out;
      }
    }
  }

  .channel-list img {
    border-radius: 50%;
    width: 70px;
    border: 1px solid #443e54;
    animation: ${zoomIn} 0.5s ease-in-out;
  }

   .social-list img {
   heaght: 10px;
   width: 70px;
   }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <ProfilePic>
          <img src="https://avatars.githubusercontent.com/u/128432655?s=400&u=be6e856db4cef69e32775097067c764cffceccb3&v=4" alt="minha foto de perfil" />
        </ProfilePic>
      </Header>

      <Main>
        <Section>
          <div>
            <h2>Meus jogos</h2>
            <p>Os games que eu mais curto jogar!</p>
            <ul className="games-list">
              <li><a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/22380/Fallout_New_Vegas/"><img src="https://static-cdn.jtvnw.net/ttv-boxart/23453_IGDB-144x192.jpg" alt="Imagem do jogo Fallout New Vegas" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/"><img src="https://static-cdn.jtvnw.net/ttv-boxart/504508_IGDB-144x192.jpg" alt="Imagem do jogo Disco Elysium" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/414340/Hellblade_Senuas_Sacrifice/"><img src="https://static-cdn.jtvnw.net/ttv-boxart/461410_IGDB-144x192.jpg" alt="Imagem do jogo Hellblade" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/8870/BioShock_Infinite/"><img src="https://static-cdn.jtvnw.net/ttv-boxart/29099_IGDB-144x192.jpg" alt="Imagem do jogo Bioshock" /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/774361/Blasphemous/"><img src="https://static-cdn.jtvnw.net/ttv-boxart/502914_IGDB-144x192.jpg" alt="Imagem do jogo Blasphemous" /></a></li>
            </ul>
          </div>
        </Section>

        <Section>
          <div>
            <h2>Canais e streamers</h2>
            <p>Lista de canais e transmissões que não perco!</p>
            <ul className="channel-list">
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/maykbrito"><img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png" alt="Imagem de perfil do canal do Mayk Brito" /></a></li>
            </ul>
          </div>
        </Section>

        <Section>
          <div>
            <h2>Minhas redes</h2>
            <p>Se conecte comigo agora mesmo!</p>
            <ul className="social-list">
              <li><a target="_blank" rel="noopener noreferrer" href="#"><img src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-uc6feurl.png" alt="Ícone do Instagram" /></a></li>
            </ul>
          </div>
        </Section>
      </Main>
    </>
  );
};

export default App;
