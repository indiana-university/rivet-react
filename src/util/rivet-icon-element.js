/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
/*
BSD 3-Clause License

Copyright (c) 2018, Indiana University
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const packageName = "Rivet Icons";
const elementName = "rvt-react-icon";
const nameAttributeName = "name";
const registeredEventName = "rvtIconRegistered";
const requestUpdateFromEventType = "transitionrun";
const size = 16;
const indexToNameMap = new Map();
const nameToTemplateMap = new Map();

// Until adoptedStyleSheets has wider Safari adoption,
// append a global <style> element in <head>.
// Add a data-rvt-react-icon attribute so users know
// from where the element was generated.
// https://caniuse.com/?search=adoptedStyleSheets
const style = document.createElement("style");
style.setAttribute(`data-${elementName}`, "");
document.head.appendChild(style);

export function registerIcon(name, content) {
  if (!name || typeof name !== "string") {
    throw new Error(`${packageName}: Name must be a string.`);
  }
  const template = document.createElement("template");
  template.innerHTML = content;
  if (template.content.children.length !== 1) {
    throw new Error(
      `${packageName} (${name}): Content must contain one SVG element.`,
    );
  }
  const svg = template.content.firstChild;
  if (svg.nodeName.toLowerCase() !== "svg") {
    throw new Error(`${packageName} (${name}): Content must be a SVG element.`);
  }
  setDefaultAttributes(svg, {
    "aria-hidden": "true",
    fill: "currentColor",
    focusable: "false",
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
  });
  nameToTemplateMap.set(name, template);
  const index = nameToTemplateMap.size;
  indexToNameMap.set(index, name);
  style.sheet.insertRule(`${elementName} { --${name}: ${index}; }`);
  const event = new CustomEvent(registeredEventName, {
    detail: { name },
  });
  document.dispatchEvent(event);
}

class RivetIconElement extends window.HTMLElement {
  #name;
  #requestUpdate = throttleRAF(this.#update.bind(this));

  static get observedAttributes() {
    return [nameAttributeName];
  }

  attributeChangedCallback() {
    this.#requestUpdate();
  }

  connectedCallback() {
    document.addEventListener(registeredEventName, this.#requestUpdate);
    this.addEventListener(requestUpdateFromEventType, this.#requestUpdate);
    this.#requestUpdate();
  }

  disconnectedCallback() {
    document.removeEventListener(registeredEventName, this.#requestUpdate);
    this.removeEventListener(requestUpdateFromEventType, this.#requestUpdate);
  }

  #getNameFromCSS() {
    const svg = this.querySelector("svg");
    if (!svg) {
      return;
    }
    const index = window
      .getComputedStyle(svg)
      .getPropertyValue(`--${nameAttributeName}`);
    return indexToNameMap.get(parseInt(index));
  }

  #update() {
    const name = this.#getNameFromCSS() || this.getAttribute(nameAttributeName);
    if (!nameToTemplateMap.has(name) || this.#name === name) {
      return;
    }
    const content = nameToTemplateMap.get(name).content.cloneNode(true);
    this.replaceChildren(content);
    this.#name = name;
  }
}

window.customElements.get(elementName) ||
  window.customElements.define(elementName, RivetIconElement);

//
// Utilities
//

function setDefaultAttribute(element, name, value) {
  if (!element.hasAttribute(name)) {
    element.setAttribute(name, value);
  }
}

function setDefaultAttributes(element, attributes) {
  Object.entries(attributes).forEach(([name, value]) => {
    setDefaultAttribute(element, name, value);
  });
}

// Call the function at most once per animation frame.
function throttleRAF(fn) {
  let wait = false;
  return function (...args) {
    if (wait) {
      return;
    }
    wait = true;
    window.requestAnimationFrame(() => {
      fn.call(this, ...args);
      wait = false;
    });
  };
}
