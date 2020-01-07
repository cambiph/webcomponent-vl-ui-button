import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";import{VlLinkElement}from"/node_modules/vl-ui-link/vl-link.js";import{VlPillElement}from"/node_modules/vl-ui-pill/vl-pill.js";import{VlInputAddonElement}from"/node_modules/vl-ui-input-addon/vl-input-addon.js";export class VlButton extends(NativeVlElement(HTMLButtonElement)){static get _observedAttributes(){return[]}static get _observedClassAttributes(){return["disabled","error","block","large","wide","narrow","secondary","tertiary","loading"]}connectedCallback(){this.classList.add("vl-button"),setTimeout(()=>{this._setIconClass()})}get _classPrefix(){return"vl-button--"}get _stylePath(){return"/node_modules/vl-ui-button/style.css"}_setIconClass(){const t=this.querySelector('[is="vl-icon"]');if(t){let e="";e+=t.hasAttribute("before")?"-before":"",e+=t.hasAttribute("after")?"-after":"",this.classList.add(this._classPrefix+"icon"+e),t.classList.add("vl-button__icon"),e&&t.classList.add("vl-button__icon-"+e),t.classList.remove("vl-icon--before"),t.classList.remove("vl-icon--after")}}};export class VlButtonLink extends(VlLinkElement(HTMLButtonElement)){};export class VlButtonPill extends(VlPillElement(NativeVlElement(HTMLButtonElement))){constructor(){super(),this.classList.add("vl-pill"),this.classList.add("vl-pill--clickable")}get _stylePath(){return"/node_modules/vl-ui-button/style.css"}};export class VlButtonInputAddon extends(VlInputAddonElement(NativeVlElement(HTMLButtonElement))){};define("vl-button",VlButton,{extends:"button"}),define("vl-button-link",VlButtonLink,{extends:"button"}),define("vl-button-pill",VlButtonPill,{extends:"button"}),define("vl-button-input-addon",VlButtonInputAddon,{extends:"button"});