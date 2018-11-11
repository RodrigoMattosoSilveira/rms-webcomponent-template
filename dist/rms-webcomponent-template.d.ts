export declare class RmsWebcomponentTemplate extends HTMLElement {
    constructor();
    static readonly observedAttributes: string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any): void;
    private upgradeProperties();
    name: string;
    private readonly styles;
    private readonly template;
    private _render();
}
