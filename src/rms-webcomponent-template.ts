// Copyright 2018 Rodrigo Silveira
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { html, render, TemplateResult } from 'lit-html';

export class RmsWebcomponentTemplate extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes(): string[] {
	return [
		'name'
	];
	}

	connectedCallback() {
		this.upgradeProperties();
		this._render();
	}

	disconnectedCallback() {
	}

	attributeChangedCallback(_name: string, _oldValue: any, _newValue: any) {
		this._render();
	}

	private upgradeProperties() {
		// Support lazy properties https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
		(<any>this).constructor['observedAttributes'].forEach((prop: string) => {
			if (this.hasOwnProperty(prop)) {
				const value = (<any>this)[prop];
				delete (<any>this)[prop];
				(<any>this)[prop] = value;
			}
		});
	}

	get name(): string {
		return this.getAttribute('name');
	}
	set name(value: string) {
		if (value) {
			this.setAttribute('name', value);
		} else {
			this.removeAttribute('name');
		}
	}

	private get styles(): TemplateResult {
		return html`
			<style>
				:host {
					display: inline-block;
					verticalAlign: top;
				}

				:host([hidden]) {
					display: none;
				}

				.content {
				}
			</style>
		`;
	}

	private get template(): TemplateResult {

		return html`
			<div class="content">
				Welcome to &lt;hello-world&gt;
				<ul>
					<li>name: ${this.name}</li>
				</ul>
				<slot></slot>
			</div>
		`;
	}

	private _render() {
		let __this = this;

		// validate attribute
		//
		// add your own logic

		// render the component
		render(this.template, this.shadowRoot);

		// Listen to mouse events
		// this.addEventListener('mousemove', function(event: any) {
		// 	// Note that when this function is called, this points to the target element!
		// 	__this.handleMouseMove(event, this);
		// });
		//
		// // remove mouse listener
		// this.addEventListener('mouseout', function() {
		// 	__this.handleMouseOut();
		// });
	}

	// private handleMouseMove(event, this) {
	// 	// add your own logic
	// }

	// private handleMouseOut(event, this) {
	// 	// add your own logic
	// }
}
window.customElements.define('rms-webcomponent-template', RmsWebcomponentTemplate);
