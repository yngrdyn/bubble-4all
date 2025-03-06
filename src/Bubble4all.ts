import { css, html, LitElement, } from 'lit';
import { property, state } from 'lit/decorators.js';
import { logoBase64, logoBase64Hovered } from './logo.js';

export class Bubble4all extends LitElement {
  static styles = css`
    :host, :host * {
      box-sizing: border-box;
    }
    :host {
      z-index: 2147483639;
      position: fixed;
      bottom: 1rem;
      right: 0.5rem;
      display: block;
    }

    :host button.bubble-4all-trigger {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 0;
      box-shadow: rgba(0, 0, 0, 0.125) 0px 0.362176px 0.941657px -1px, rgba(0, 0, 0, 0.18) 0px 3px 7.8;
      border-radius: 50%;
      background-color: var(--bubble-4all-primary-color, #0059E1);
      background-repeat: no-repeat;
      background-image: var(--bg);
      background-size: 32px;
      background-position: center center;
      cursor: pointer;
      background-blend-mode: hard-light;
      animation-duration: 2000ms;
      transform-origin: center bottom;
      animation-iteration-count: infinite;
      animation-name: bounce;
      
    }

    :host button.bubble-4all-trigger:hover {
      background-image: var(--bg_hovered);
    }

    :host div.bubble-4all-container {
      width: calc(100vw - 0.5rem - 0.5rem);
      min-width: 100%;
      max-width: max(392px, 25vw);
      height: calc(100vh - 1rem - 1rem);
      min-height: 100%;
      max-height: 714px;
      display: flex
      flex-direction: column;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0.48px 2.41px -0.38px, rgba(0, 0, 0, 0.17) 0px 4px 20px -0.75px;
      overflow: hidden;
      isolation: isolate;
      border-radius: 16px;
      background: rgb(248, 248, 248);
      position: relative;
    }

    :host div.bubble-4all-container-actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0.8em;
      position: absolute;
      top: 0;
      right: 0;
    }

    :host div.bubble-4all-container-actions button {
      margin: 0px;
      padding: 0px;
      display: flex;
      align-items: center;
      border: 0px;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      background: transparent;
      cursor: pointer;
    }

    :host div.bubble-4all-container-actions button:hover {
      background: revert;
    }

    ::slotted(div) {
      max-width: 100%;
    }

    @keyframes bounce {
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -16px, 0) scaleY(1.05);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -8px, 0) scaleY(1.001);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(1);
  }

  90% {
    transform: translate3d(0, -2px, 0) scaleY(1.02);
  }
}
  `;

  constructor() {
    super();
    this.__onOutsideDocClick = this.__onOutsideDocClick.bind(this);
  }

  @property() ariaLabelOpen?: string;
  @property() ariaLabelClose?: string;
  @property() icon?: string;
  @property() iconHovered?: string;
  @property() bounce?: boolean;
  @property() bgColor?: string;

  @state() private _isOpen = false;
  @state() private _ariaLabel = '';
  @state() private _backgroundVariables = '';
  @state() private _backgroundColor = '';
  @state() private _animationIterationCount: string | number = 0;

  __toggle() {
    if (!this._isOpen) {
      this.__stopBounce()
    }

    this._isOpen = !this._isOpen;
  }

  __startBounce() {
    this._animationIterationCount = 'infinite'
    setTimeout(() => {
      this._animationIterationCount = 0
    }, 10000)
  }

  __stopBounce() {
    this._animationIterationCount = 0
  }

  __handleBounce() {
    if (this._animationIterationCount !== 0) {
      this.__stopBounce()
    } else {
      this.__startBounce()
    }
  }

  __onOutsideDocClick(event: any) {
    if (this._isOpen && !event.composedPath().includes(this)) {
      this._isOpen = false;
    }
  }

  firstUpdated() {
    this._backgroundVariables = this.icon
      ? `--bg: url('${this.icon}'); --bg_hovered: url('${this.iconHovered ?? this.icon}')`
      : `--bg: url('data:image/png;base64,${logoBase64}'); --bg_hovered: url('data:image/png;base64,${logoBase64Hovered}');`;
    this._backgroundColor = this.bgColor ?? '';
    if (this.bounce) {
      this.__startBounce()
    }
    setInterval(() => {
      if(!this._isOpen) {
        this.__handleBounce();
      }
    }, 120000);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.__onOutsideDocClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.__onOutsideDocClick);
    super.disconnectedCallback();
  }

  render() {
    return this._isOpen
      ? html`
          <div class="bubble-4all-container">
            <div class="bubble-4all-container-actions">
              <button @click=${this.__toggle} aria-label=${this._ariaLabel}>
                <svg color="#111111" viewBox="0 0 32 32">
                  <path d="M24.1818182,21 C24.6336875,21 25,21.4477153 25,22 C25,22.5522847 24.6336875,23 24.1818182,23 L7.81818182,23 C7.36631248,23 7,22.5522847 7,22 C7,21.4477153 7.36631248,21 7.81818182,21 L24.1818182,21 Z"></path>
                </svg>
              </button>
            </div>
            <slot></slot>
          </div>`
      : html`
          <button
            @click=${this.__toggle}
            aria-label=${this._ariaLabel}
            class="bubble-4all-trigger"
            style=${`
              ${this._backgroundVariables};
              animation-iteration-count: ${this._animationIterationCount};
              background-color:${this._backgroundColor}
            `}
          />
        `;
  }
}
