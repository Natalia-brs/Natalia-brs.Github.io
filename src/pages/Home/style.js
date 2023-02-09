import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePort from '../../img/HomePort.png';

export const Wrapper = styled.div`
 margin: 0;
 padding: 0;
 box-sizing: border-box;
`;

export const NavBar = styled.nav`
 width: 400px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 text-decoration: none;
`;

export const Header = styled.header`
 display: flex;
 justify-content: center;
 background-color: rgb(224, 225, 233);
 height: 100px;
 width: 100vw;
 background-position: center;
 background-repeat: no-repeat;
 box-shadow:  0 0 2.5em black;
 `;

export const MyIcon = styled.img`
 width: 400px;
 background: linear-gradient(90deg, hsla(208, 7%, 55%, 1) 0%, hsla(191, 5%, 40%, 1) 100%);

 animation: profile-animate 8s ease-in-out infinite 0.75s;

@keyframes profile-animate{

 0% {
     border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

 50%{
     border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

 100%{
     border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
`;

MyIcon.defaultProps = {
  src: HomePort,
};

export const DivImg = styled.div`
 display: flex;
 height:400px;
 justify-content:center;
`;

export const SectionHome = styled.section`
 height: calc(100vh - 100px);
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 justify-content: center;
 align-content: center;
`;

export const DescriptionDiv = styled.div`
 height: 400px;
 width: 650px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 line-height: 0;
 background: rgba(91, 115, 187, 0.08);
 border-radius: 16px;
 box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
 backdrop-filter: blur(4.6px);
 -webkit-backdrop-filter: blur(4.6px);
 border: 1px solid rgba(91, 115, 187, 0.04);
 box-shadow: 
 rgba(0, 0, 0, 0.25) 0px 14px 28px, 
 rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: rgb(17, 0, 28);
 font-size: 1.1rem;
`;
