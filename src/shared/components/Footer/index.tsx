import { styled } from "styled-components";

export function Footer() {
  return (
    <ContainerFooter>
      <span>© VieiraDevCode - 2023. Todos os Direitos Reservados</span>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  min-height: 4rem;
  border-top: 1px solid #333333;
  background: #111111;

  img {
    width: 2.5rem;
  }
  span {
    color: #FFFFFF;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
