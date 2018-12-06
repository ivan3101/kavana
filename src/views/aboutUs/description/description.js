import React from 'react';
import styled from "styled-components";

const description = ({ className }) => {
    return (
        <div className={className}>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aspernatur consequuntur dolor dolore ea eos est eveniet facere incidunt, laboriosam maxime necessitatibus numquam odit pariatur praesentium, quasi quia quisquam.</span><span>Distinctio minus modi non repellat soluta. Asperiores ea odio quam quibusdam quidem ut? Blanditiis consequuntur, cum dignissimos dolore dolorum eaque exercitationem impedit itaque officia quam qui reprehenderit vel. Laboriosam, voluptatem.</span><span>Assumenda cupiditate impedit natus necessitatibus vero. Accusantium aspernatur magnam optio tenetur. Animi at nam neque optio placeat, quae vitae. Dignissimos distinctio dolorum eaque eveniet facilis libero natus, quam quidem unde!</span><span>Ad aliquam at beatae consectetur delectus distinctio dolor earum enim esse exercitationem hic illum incidunt magnam mollitia natus, nemo odio odit pariatur quasi quia quo repellat repellendus, rerum suscipit velit?</span></p>
        </div>
    );
};

const Description = styled(description)`
  position: absolute;
  right: 40px;
  top: 55%;
  transform: translateY(-45%);
  text-align: justify;
  font-size: 0.85rem;
  width: 600px;
  padding: 1.50rem 0.80rem;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

export default Description;
