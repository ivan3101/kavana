import React from 'react';
import styled from "styled-components";
import Category from "./category/category";
import StyledLink from "../../link/link";

const links = ({ className }) => {

    const SubCategory = styled.div`
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.80rem;
      padding-left: 10px;
      height: auto;
      width: auto;
      
    `;

    const Link = styled(StyledLink)`
       border-bottom: none;
       font-weight: bold;
       color: #fff;
       text-decoration: underline;

       :hover {
        border-bottom: none;
       }
    `;

    return (
        <div className={className}>

            <Category>
                <Link link={'/unete'}>
                    Únete a nuestra red de Aliados
                </Link>
                <SubCategory>
                    <Link link={'/unete/constructores'}>
                        Constructores
                    </Link>
                    <Link link={'/unete/instaladores'}>
                        Instaladores
                    </Link>
                    <Link link={'/unete/arquitectos'}>
                        Arquitectos
                    </Link>
                    <Link link={'/unete/diseñadores-de-interiores'}>
                        Diseñadores de Interiores
                    </Link>
                </SubCategory>
            </Category>
        </div>
    );
};

const Links = styled(links)`
  display: flex;
  flex-direction: row;
  gap: 50px;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default Links;
