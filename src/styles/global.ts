import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme['panel-background']};
    color: ${props => props.theme['navy-text']};
    font-family: "Open Sans", sans-serif;
  }
  
  :root {
      --main-text-color: #043b59;
  }

  .purple-text {
      color: #47267a;
  }

  .magenta-text {
      color: #ee0a71;
  }

  .teal-text {
      color: #43bfa7;
  }

  .navy-text {
      color: #043b59;
  }

  .page-header {
      font-size: 4rem;
  }

  .sub-header {
      font-size: 3rem;
  }

  .hello {
      font-size: 2.5rem;
      font-weight: bolder;
  }

  .page-content {
      font-size: 1.5rem;
  }

  .mb-minus {
      margin-bottom: -1rem;
  }

  .mb-1 {
      margin-bottom: 1rem;
  }

  .mb-2 {
      margin-bottom: 2rem;
  }

  .rounded-circle {
      border-radius: 50% !important;
  }

  .profile-image {
      max-width: 30rem;
      max-height: 30rem;
  }

  .single-page-link {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 1rem;
      font-size: 0.9rem;
      cursor: pointer;
      text-decoration: none;
      color: var(--main-text-color);
  }

  .footer-name {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 1rem;
  }

  .fade-in {
      animation: fade 0.9s ease-in;
  }

  .bold {
      font-weight: bolder;
  }

  .italic {
      font-style: italic;
  }

  .text-left {
      text-align: left;
  }

  .text-right {
      text-align: right;
  }

  @keyframes fade {
      0% {
          opacity: 0;
      }
  }

  *:focus {
      outline: none;
  }

  @media (max-width: 680px) {
      .section {
          flex-direction: column;
      }
      .mobile {
          font-size: 50px;
          text-align: center;
      }
      .summary {
          font-size: 19px;
          text-align: center;
      }
  }

  .flex-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .section > div {
      flex: 1 1;
  }

  .email {
      display: flex;
      justify-content: center;
      padding: 20px;
  }

  .sent {
      text-align: center;
  }

  .scroll-into-margin {
      scroll-margin-top: 100px;
  }

  .email-form-container {
      width: 100%;
  }

  .email-text-box {
      height: 150px;
      border: 1px solid var(--main-text-color);
  }

  .border-rounded {
      border-radius: 15px;
  }

  @media (max-width: 680px) {
      .email { flex-direction: column; }
      .email-form-container {
          margin-bottom: 20px;
      }
  }

  .right { margin-right: 0; margin-left: auto; }

  .btn-submit {
      background: none;
      color: var(--main-text-color);
      font-size: 1.25rem;
      border: 0;
      cursor: pointer;
      transition: all 0.3s ease;
  }

  .btn-submit:hover { color: var(--main-text-color); }

  textarea, input {
      font-family: "Open Sans", sans-serif !important;
      font-size: 1.25rem;
      display: block;
      background: transparent !important;
      width: 100%;
      padding: 5px;
  }

`;
