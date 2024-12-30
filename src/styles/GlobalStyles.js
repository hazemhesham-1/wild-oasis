import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        &, &.light-mode {
            --color-grey-0: #FFF;
            --color-grey-50: #F9FAFB;
            --color-grey-100: #F3F4F6;
            --color-grey-200: #E5E7EB;
            --color-grey-300: #D1D5DB;
            --color-grey-400: #9CA3AF;
            --color-grey-500: #6B7280;
            --color-grey-600: #4B5563;
            --color-grey-700: #374151;
            --color-grey-800: #1F2937;
            --color-grey-900: #111827;

            --color-blue-100: #E0F2FE;
            --color-blue-700: #0369A1;
            --color-green-100: #DCFCE7;
            --color-green-700: #15803D;
            --color-yellow-100: #FEF9C3;
            --color-yellow-700: #A16207;
            --color-silver-100: #E5E7EB;
            --color-silver-700: #374151;
            --color-indigo-100: #E0E7FF;
            --color-indigo-700: #4338CA;

            --color-red-100: #FEE2E2;
            --color-red-700: #B91C1C;
            --color-red-800: #991B1B;

            --backdrop-color: rgba(255, 255, 255, 0.1);

            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
            --shadow-md: 0 10px 38px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 38px 52px rgba(0, 0, 0, 0.12);

            --image-grayscale: 0;
            --image-opacity: 100%;
        }

        &.dark-mode {
            --color-grey-0: #18212F;
            --color-grey-50: #111827;
            --color-grey-100: #1F2937;
            --color-grey-200: #374151;
            --color-grey-300: #4B5563;
            --color-grey-400: #6B7280;
            --color-grey-500: #9CA3AF;
            --color-grey-600: #D1D5DB;
            --color-grey-700: #E5E7EB;
            --color-grey-800: #F3F4F6;
            --color-grey-900: #F9FAFB;

            --color-blue-100: #075985;
            --color-blue-700: #E0F2FE;
            --color-green-100: #166534;
            --color-green-700: #DCFCE7;
            --color-yellow-100: #854D0E;
            --color-yellow-700: #FEF9C3;
            --color-silver-100: #374151;
            --color-silver-700: #F3F4F6;
            --color-indigo-100: #3730A3;
            --color-indigo-700: #E0E7FF;

            --color-red-100: #FEE2E2;
            --color-red-700: #B91C1C;
            --color-red-800: #991B1B;

            --backdrop-color: rgba(0, 0, 0, 0.3);

            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
            --shadow-md: 0 10px 38px rgba(0, 0, 0, 0.3);
            --shadow-lg: 0 38px 52px rgba(0, 0, 0, 0.4);

            --image-grayscale: 10%;
            --image-opacity: 90%;
        }

        --color-brand-50: #EEF2FF;
        --color-brand-100: #E0E7FF;
        --color-brand-200: #C7D2FE;
        --color-brand-300: #A5B4FC;
        --color-brand-400: #818CF8;
        --color-brand-500: #6366F1;
        --color-brand-600: #4F46E5;
        --color-brand-700: #4338CA;
        --color-brand-800: #3730A3;
        --color-brand-900: #312E81;

        --border-radius-xs: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: background-color 0.25s, border 0.25s;
    }
    body {
        font-family: "Poppins", sans-serif;
        color: var(--color-grey-700);
        min-height: 100vh;
        font-size: 18px;
        line-height: 1.5;
        transition: background-color 0.25s, color 0.25s;
    }
    button {
        cursor: pointer;
    }
    button, input, select, textarea {
        color: inherit;
        font: inherit;
    }
    button:focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--color-brand-600);
        outline-offset: -1px;
    }
    *:disabled {
        cursor: not-allowed;
    }
    input:disabled, select:disabled {
        background-color: var(--color-grey-200);
        color: var(--color-grey-500);
    }
    ul {
        list-style-type: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    img {
        max-width: 100%;
        filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
    }
`;

export default GlobalStyles;