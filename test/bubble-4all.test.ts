import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Bubble4all } from '../src/Bubble4all.js';
import '../src/bubble-4all.js';

describe('Bubble4all', () => {
  it('can override the icon via attribute', async () => {
    const el = await fixture<Bubble4all>(html`<bubble-4all icon="attribute icon"></bubble-4all>`);

    expect(el.icon).to.equal('attribute icon');
  });

  it('can override the iconHovered via attribute', async () => {
    const el = await fixture<Bubble4all>(html`<bubble-4all iconHovered="attribute iconHovered"></bubble-4all>`);

    expect(el.iconHovered).to.equal('attribute iconHovered');
  });

  it('can override the ariaLabelOpen via attribute', async () => {
    const el = await fixture<Bubble4all>(html`<bubble-4all ariaLabelOpen="attribute ariaLabelOpen"></bubble-4all>`);

    expect(el.ariaLabelOpen).to.equal('attribute ariaLabelOpen');
  });

  it('can override the ariaLabelClose via attribute', async () => {
    const el = await fixture<Bubble4all>(html`<bubble-4all ariaLabelClose="attribute ariaLabelClose"></bubble-4all>`);

    expect(el.ariaLabelClose).to.equal('attribute ariaLabelClose');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<Bubble4all>(html`<bubble-4all></bubble-4all>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
