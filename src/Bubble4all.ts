import { css, html, LitElement, } from 'lit';
import { property, state } from 'lit/decorators.js';

const logoBase64 = "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NDQ3ZS1hMGYwLTdiMDEyMmI5ZTE0ZSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MWZhNzExMi1lZGJkLTRlMGUtYjg2ZC05ZWEyODY1NmQ0Y2IiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZTM3NDA0NS00ZjI1LTQ1ZTUtOWQ2Ny03OGJiZWM3MGQ1NmEiCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09Ik1hYyBPUyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MzY4MTU2NTE5NzQ2OTMiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1OjAxOjE0VDAxOjQ3OjMxKzAxOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNTowMToxNFQwMTo0NzozMSswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1OTkzZjcyLTg4NzEtNDc5My04ZWJiLTJmMmJhODI4YTAxZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTAxLTE0VDAxOjQ3OjMxKzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

const logoBase64Hovered = "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NGYxMC05YmJhLWEzMDA5YjQ3NzIxNSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YTVlMjVlZi0yOTJiLTQ5MWItYTRhOS03MTFlOTM3ZjkzMmEiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YjAxN2UwYS00OTIxLTRlZWItOTdkMS1iMmRlMzk3YzExZjYiCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09Ik1hYyBPUyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MzY4MTU2NTk2MjM5NDYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1OjAxOjE0VDAxOjQ3OjM5KzAxOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNTowMToxNFQwMTo0NzozOSswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUzOWY3OWIzLWU2NGQtNGQwMC05YTFiLWNkZDI4NDc3MmQ1NSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTAxLTE0VDAxOjQ3OjM5KzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

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
      animation-iteration-count: 5;
      animation-name: bounce;
      
    }

    :host button.bubble-4all-trigger:hover {
      background-image: var(--bg_hovered);
    }

    :host div.bubble-4all-container {
      width: calc(100vw - 0.5rem - 0.5rem);
      min-width: 100%;
      max-width: 392px;
      height: calc(100vh - 1rem - 1rem);
      min-height: 100%;
      max-height: 714px;
      display: flex
      flex-direction: column;
      min-width: 0px;
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

  @property() ariaLabelOpen?: string;
  @property() ariaLabelClose?: string;
  @property() icon?: string;
  @property() iconHovered?: string;
  @property() bounce?: boolean;
  @property() bgColor?: string;

  @state()
  private _isOpen = false;
  private _hasBeenOpened = false;

  __toggle() {
    this._isOpen = !this._isOpen;
    this._hasBeenOpened = true;
  }

  render() {
    return this._isOpen
      ? html`
          <div class="bubble-4all-container">
            <div class="bubble-4all-container-actions">
              <button @click=${this.__toggle} aria-label=${this.ariaLabelClose ?? "Close bubble"}>
                <svg color="#111111" viewBox="0 0 32 32"><path d="M24.1818182,21 C24.6336875,21 25,21.4477153 25,22 C25,22.5522847 24.6336875,23 24.1818182,23 L7.81818182,23 C7.36631248,23 7,22.5522847 7,22 C7,21.4477153 7.36631248,21 7.81818182,21 L24.1818182,21 Z"></path></svg>
              </button>
            </div>
            <slot></slot>
          </div>`
      : html`
          <button @click=${this.__toggle} aria-label=${this.ariaLabelOpen ?? "Open bubble"} class="bubble-4all-trigger" style=${this.icon ? `--bg: url('${this.icon}'); --bg_hovered: url('${this.iconHovered ?? this.icon}')` : `--bg: url('data:image/png;base64,${logoBase64}'); --bg_hovered: url('data:image/png;base64,${logoBase64Hovered}'); animation-iteration-count: ${this._hasBeenOpened || !this.bounce ? 0 : 5}; ${this.bgColor ? `background-color: ${this.bgColor}` : ''}`}>
          </button>
        `;
  }
}
