import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-brand-50: #EEF2FF;
        --color-brand-100: #E0E7FF;
        --color-brand-200: #c7d2fe;
        --color-brand-300: #a5b4fc;
        --color-brand-400: #818cf8;
        --color-brand-500: #6366f1;
        --color-brand-600: #4f46e5;
        --color-brand-700: #4338ca;
        --color-brand-800: #3730a3;
        --color-brand-900: #312e81;

        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;
        --color-grey-950: #030712;

        --color-blue-100: #e0f2fe;
        --color-blue-700: #0369a1;
        --color-green-100: #dcfce7;
        --color-green-700: #15803d;
        --color-yellow-100: #fef9c3;
        --color-yellow-700: #a16207;
        --color-silver-100: #e5e7eb;
        --color-silver-700: #374151;

        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        --backdrop-color: rgba(255, 255, 255, 0.1);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0 10px 38px rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 38px 52px rgba(0, 0, 0, 0.12);

        --border-radius-xs: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;
        --image-grayscale: 0;
        --image-opacity: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: background-color 0.25s, border 0.25s;
    }
    *:disabled {
        cursor: not-allowed;
    }
    body {
        font-family: "Poppins", sans-serif;
        color: var(--color-grey-700);
        min-height: 100vh;
        font-size: 26px;
        line-height: 1.5;
        transition: background-color 0.25s, color 0.25s;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;