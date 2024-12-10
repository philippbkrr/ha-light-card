import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

if (!customElements.get('ha-light-card')) {
  customElements.define('ha-light-card', class HaLightCard extends LitElement {
    static get properties() {
      return {
        hass: { type: Object },
        config: { type: Object }
      };
    }

    setConfig(config) {
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

    static get styles() {
      return css`
        :host {
          display: block;
        }
        .card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .brightness-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: var(--primary-color, #fdd835);
          opacity: 0.3;
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
    }
  });
}
