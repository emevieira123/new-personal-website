import { Link } from 'react-scroll';
import { DataMenu } from '../../utils/DataMenu';
import styled from 'styled-components';

export function Menu() {
  return (
    <ContainerMenu>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <h2 style={{ color: 'white' }}>{'<'}</h2>
        <h3 style={{ color: '#08adff' }}>VieiraDevCode</h3>
        <h2 style={{ color: 'white' }}>{'/>'}</h2>
      </div>

      <ContainerItems>
        {
          DataMenu.map((item) => (
            <Link
              key={item.id}
              activeClass='active'
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href='#'
            // onClick={() => { }}
            >
              {item.title}
            </Link>
          ))
        }
      </ContainerItems>

      {/* Essa div é necessária para a estilização do menu */}
      <div style={{ width: '11.4rem'}} />
    </ContainerMenu>
  )
}

const ContainerMenu = styled.div`
  width: 100%;
  height: 3rem;
  margin: 0;
  top: 0;
  padding: 0 5rem;
  background: #111111;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  border-bottom: 1px solid #222;
`;

const ContainerItems = styled.div`
  /* margin-right: 10rem; */
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.125rem;


    :focus {
      outline: none;
    }
  }

  a:hover {
    border-bottom: 2px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to right, #08fbff, #08adff);
    transition: all 0.3s;
  }
`;
