import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span>DECKARD</span>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Deckard',
        };
    },
    project: {
        link: 'https://github.com/SoBold/DECKARD',
    },
    docsRepositoryBase: 'https://github.com/SoBold/DECKARD-DOC',
    footer: {
        text: 'DECKARD Docs | SoBold',
    },
};

export default config;
