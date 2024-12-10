import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ha-light-card')
class HaLightCard extends LitElement {
  @property({ type: Object }) hass: any;
  @property({ type: Object }) config: any;

  static styles = css`
    :host {
      display: block;
    }
    .card {
      padding: 16px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .brightness-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--primary-color, #fdd835);
      transition: height 0.3s ease-in-out;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
    }
    .icon {
      --mdc-icon-size: 24px;
      margin-left: 8px;
    }
  `;

  setConfig(config: any) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
      return html`
        <ha-card>
          <div class="card">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    const isOn = stateObj.state === 'on';
    const brightness = stateObj.attributes.brightness || 0;
    const brightnessPercentage = (brightness / 255) * 100;

    return html`
      <ha-card>
        <div class="card" @click=${this._toggleLight}>
          <div class="brightness-bar" style="height: ${brightnessPercentage}%"></div>
          <div class="content">
            <div>
              <div class="name">${stateObj.attributes.friendly_name || this.config.entity}</div>
              <div class="state">${isOn ? 'ON' : 'OFF'}</div>
            </div>
            <ha-icon
              class="icon"
              icon=${isOn ? 'mdi:lightbulb' : 'mdi:lightbulb-outline'}
            ></ha-icon>
          </div>
        </div>
      </ha-card>
    `;
  }

  _toggleLight() {
    this.hass.callService('light', 'toggle', {
      entity_id: this.config.entity,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-light-card': HaLightCard;
  }
}
