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

(function () {
    var _classDecorators = [customElement('ha-light-card')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = LitElement;
    var _hass_decorators;
    var _hass_initializers = [];
    var _hass_extraInitializers = [];
    var _config_decorators;
    var _config_initializers = [];
    var _config_extraInitializers = [];
    _classThis = /** @class */ (function (_super) {
        __extends(HaLightCard_1, _super);
        function HaLightCard_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hass = __runInitializers(_this, _hass_initializers, void 0);
            _this.config = (__runInitializers(_this, _hass_extraInitializers), __runInitializers(_this, _config_initializers, void 0));
            __runInitializers(_this, _config_extraInitializers);
            return _this;
        }
        HaLightCard_1.prototype.setConfig = function (config) {
            if (!config.entity) {
                throw new Error('You need to define an entity');
            }
            this.config = config;
        };
        HaLightCard_1.prototype.render = function () {
            if (!this.hass || !this.config) {
                return html(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
            }
            var stateObj = this.hass.states[this.config.entity];
            if (!stateObj) {
                return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <ha-card>\n          <div class=\"card\">\n            Entity not found: ", "\n          </div>\n        </ha-card>\n      "], ["\n        <ha-card>\n          <div class=\"card\">\n            Entity not found: ", "\n          </div>\n        </ha-card>\n      "])), this.config.entity);
            }
            var isOn = stateObj.state === 'on';
            var brightness = stateObj.attributes.brightness || 0;
            var brightnessPercentage = (brightness / 255) * 100;
            return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <ha-card>\n        <div class=\"card\" @click=", ">\n          <div class=\"brightness-bar\" style=\"height: ", "%\"></div>\n          <div class=\"content\">\n            <div>\n              <div class=\"name\">", "</div>\n              <div class=\"state\">", "</div>\n            </div>\n            <ha-icon\n              class=\"icon\"\n              icon=", "\n            ></ha-icon>\n          </div>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card>\n        <div class=\"card\" @click=", ">\n          <div class=\"brightness-bar\" style=\"height: ", "%\"></div>\n          <div class=\"content\">\n            <div>\n              <div class=\"name\">", "</div>\n              <div class=\"state\">", "</div>\n            </div>\n            <ha-icon\n              class=\"icon\"\n              icon=", "\n            ></ha-icon>\n          </div>\n        </div>\n      </ha-card>\n    "])), this._toggleLight, brightnessPercentage, stateObj.attributes.friendly_name || this.config.entity, isOn ? 'ON' : 'OFF', isOn ? 'mdi:lightbulb' : 'mdi:lightbulb-outline');
        };
        HaLightCard_1.prototype._toggleLight = function () {
            this.hass.callService('light', 'toggle', {
                entity_id: this.config.entity,
            });
        };
        return HaLightCard_1;
    }(_classSuper));
    __setFunctionName(_classThis, "HaLightCard");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _hass_decorators = [property({ type: Object })];
        _config_decorators = [property({ type: Object })];
        __esDecorate(null, null, _hass_decorators, { kind: "field", name: "hass", static: false, private: false, access: { has: function (obj) { return "hass" in obj; }, get: function (obj) { return obj.hass; }, set: function (obj, value) { obj.hass = value; } }, metadata: _metadata }, _hass_initializers, _hass_extraInitializers);
        __esDecorate(null, null, _config_decorators, { kind: "field", name: "config", static: false, private: false, access: { has: function (obj) { return "config" in obj; }, get: function (obj) { return obj.config; }, set: function (obj, value) { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.styles = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    :host {\n      display: block;\n    }\n    .card {\n      padding: 16px;\n      display: flex;\n      flex-direction: column;\n      cursor: pointer;\n    }\n    .brightness-bar {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      background-color: var(--primary-color, #fdd835);\n      transition: height 0.3s ease-in-out;\n    }\n    .content {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      z-index: 1;\n    }\n    .icon {\n      --mdc-icon-size: 24px;\n      margin-left: 8px;\n    }\n  "], ["\n    :host {\n      display: block;\n    }\n    .card {\n      padding: 16px;\n      display: flex;\n      flex-direction: column;\n      cursor: pointer;\n    }\n    .brightness-bar {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      background-color: var(--primary-color, #fdd835);\n      transition: height 0.3s ease-in-out;\n    }\n    .content {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      z-index: 1;\n    }\n    .icon {\n      --mdc-icon-size: 24px;\n      margin-left: 8px;\n    }\n  "])));
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return _classThis;
})();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
