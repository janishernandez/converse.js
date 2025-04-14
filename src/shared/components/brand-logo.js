import { api } from '@converse/headless/core';
import { CustomElement } from './element.js';
import { html } from 'lit';


export class ConverseBrandLogo extends CustomElement {

    render () { // eslint-disable-line class-methods-use-this
        const is_fullscreen = api.settings.get('view_mode') === 'fullscreen';
        return html`
            <a class="brand-heading" href="https://cloud.bitwebservices.com" target="_blank" rel="noopener">
                <span class="brand-name-wrapper ${is_fullscreen ? 'brand-name-wrapper--fullscreen' : ''}">
                    
                    <span class="brand-name">
                        <span class="brand-name__text">Water</span>
                        ${is_fullscreen
                            ? html`
                                <p class="byline"></p>
                            `
                            : ''}
                    </span>
                </span>
            </a>
        `;
    }
}

api.elements.define('converse-brand-logo', ConverseBrandLogo);
