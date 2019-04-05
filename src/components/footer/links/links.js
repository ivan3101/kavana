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
       
       :hover {
        border-bottom: none;
       }
    `;

    return (
        <div className={className}>
            <Category>
                <Link link={'/inicio'}>
                    Inicio
                </Link>
                <Link link={'/blog'}>
                    Blog
                </Link>
                <Link link={'/inicio#servicios'}>
                    Servicios
                </Link>
                <Link link={'/nosotros'}>
                    Nosotros
                </Link>
                <Link link={'/contacto'}>
                    Contacto
                </Link>
            </Category>

            <Category>
                <Link link={'/catalogo'}>
                    Catálogo
                </Link>

                <SubCategory>
                    <Link link={'/catalogo/ceramica-y-porcelanato/1'}>
                        Cerámica y Porcelanatos
                    </Link>
                    <Link link={'/catalogo/materiales-de-instalacion/1'}>
                        Materiales de Construcción
                    </Link>
                    <Link link={'/catalogo/piedras-ornamentales'}>
                        Piedras Ornamentales
                    </Link>
                    <Link link={'/catalogo/mallas-y-decorados'}>
                        Mallas y Decorados
                    </Link>
                    <Link link={'/catalogo/piezas-de-baño'}>
                        Piezas de Baño
                    </Link>
                    <Link link={'/catalogo/muebles-de-baño'}>
                        Muebles de Baño
                    </Link>
                    <Link link={'/catalogo/griferias'}>
                        Griferias
                    </Link>
                    <Link link={'/catalogo/accesorios'}>
                        Accesorios
                    </Link>
                </SubCategory>
            </Category>

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
