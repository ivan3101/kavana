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

    return (
        <div className={className}>
            <Category>
                <StyledLink link={'/inicio'}>
                    Inicio
                </StyledLink>
                <StyledLink link={'/blog'}>
                    Blog
                </StyledLink>
                <StyledLink link={'/nosotros'}>
                    Nosotros
                </StyledLink>
                <StyledLink link={'/servicios'}>
                    Servicios
                </StyledLink>
                <StyledLink link={'/contacto'}>
                    Contacto
                </StyledLink>
            </Category>

            <Category>
                <StyledLink link={'/catalogo'}>
                    Catalogo
                </StyledLink>

                <SubCategory>
                    <StyledLink link={'/catalogo/ceramica'}>
                        ceramica
                    </StyledLink>
                    <StyledLink link={'/catalogo/porcelanato'}>
                        porcelanato
                    </StyledLink>
                    <StyledLink link={'/catalogo/piedras-ornamentales'}>
                        piedras ornamentales
                    </StyledLink>
                    <StyledLink link={'/catalogo/mallas-y-decorados'}>
                        mallas y decorados
                    </StyledLink>
                    <StyledLink link={'/catalogo/piezas-de-baño'}>
                        piezas de baño
                    </StyledLink>
                    <StyledLink link={'/catalogo/muebles-de-baño'}>
                        muebles de baño
                    </StyledLink>
                    <StyledLink link={'/catalogo/griferias'}>
                        griferias
                    </StyledLink>
                    <StyledLink link={'/catalogo/accesorios'}>
                        accesorios
                    </StyledLink>
                </SubCategory>
            </Category>

            <Category>
                <StyledLink link={'/comercio-e-industria'}>
                    Comercio é Industria
                </StyledLink>
                <SubCategory>
                    <StyledLink link={'/comercio-e-industria/constructores'}>
                        constructores
                    </StyledLink>
                    <StyledLink link={'/comercio-e-industria/instaladores'}>
                        instaladores
                    </StyledLink>
                    <StyledLink link={'/comercio-e-industria/arquitectos'}>
                        arquitectos
                    </StyledLink>
                    <StyledLink link={'/comercio-e-industria/diseñadores-de-interiores'}>
                        diseñadores de interiores
                    </StyledLink>
                </SubCategory>
            </Category>
        </div>
    );
};

const Links = styled(links)`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export default Links;
