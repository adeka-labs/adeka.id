import { css, Global } from '@emotion/react';

import React from 'react';

const Styles = () => {
  return (
    <Global
      styles={css`
        body,
        html,
        a {
          font-family: 'Ubuntu', sans-serif;
        }

        body {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          background: #fff;
          overflow-x: hidden;
        }

        a:hover {
          color: #000;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Ubuntu', sans-serif;
          color: #0a1f44;
          font-size: 2.575rem;
          line-height: 3.0625rem;

          @media only screen and (max-width: 414px) {
            font-size: 1.625rem;
          }
        }

        p {
          color: #343d48;
          font-size: 1.125rem;
        }

        h1 {
          font-weight: 600;
        }

        a {
          text-decoration: none;
          outline: none;
          color: #2e186a;

          :hover {
            color: rgb(255, 130, 92);
          }
        }

        *:focus {
          outline: none;
        }
      `}
    />
  );
};

export default Styles;
