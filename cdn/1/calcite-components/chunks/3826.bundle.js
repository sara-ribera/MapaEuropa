/*! For license information please see 3826.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3826],{236:(e,t,n)=>{n.d(t,{V:()=>i});var a=n(9113);const i=({scale:e,status:t,icon:n,message:i})=>(0,a.h)("div",{class:"validation-container"},(0,a.h)("calcite-input-message",{icon:n,scale:e,status:t},i))},3849:(e,t,n)=>{function a(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>a})},3826:(e,t,n)=>{n.r(t),n.d(t,{calcite_input_date_picker:()=>w});var a=n(9113),i=n(3174),s=n(7146),r=n(255),o=n(4300),l=n(2627),c=n(3287),u=n(493),h=n(8545),d=n(3213),p=n(3041),m=n(8065),f=n(4583),g=n(9321),v=n(344),b=n(236);n(8220),n(9046);const I="input-wrapper",D="input",y="toggle-icon",w=class{constructor(e){(0,a.r)(this,e),this.calciteInputDatePickerChange=(0,a.c)(this,"calciteInputDatePickerChange",6),this.calciteInputDatePickerBeforeClose=(0,a.c)(this,"calciteInputDatePickerBeforeClose",6),this.calciteInputDatePickerClose=(0,a.c)(this,"calciteInputDatePickerClose",6),this.calciteInputDatePickerBeforeOpen=(0,a.c)(this,"calciteInputDatePickerBeforeOpen",6),this.calciteInputDatePickerOpen=(0,a.c)(this,"calciteInputDatePickerOpen",6),this.calciteInternalInputInputHandler=e=>{const t=e.target,n=t.value,a=this.parseNumerals(n),s=this.formatNumerals(a);t.value=s;const{year:r}=(0,i.a)(n,this.localeData);if(r&&r.length<4)return;const o=(0,i.b)(n,this.localeData);(0,i.i)(o,this.min,this.max)&&(this.datePickerActiveDate=o)},this.calciteInternalInputBlurHandler=()=>{this.commitValue()},this.dialogId=`date-picker-dialog--${(0,g.g)()}`,this.focusOnOpen=!1,this.userChangedValue=!1,this.openTransitionProp="opacity",this.valueAsDateChangedExternally=!1,this.placeholderTextId=`calcite-input-date-picker-placeholder-${(0,g.g)()}`,this.onInputWrapperPointerDown=()=>{this.currentOpenInput=this.focusedInput},this.onInputWrapperClick=e=>{const{range:t,endInput:n,startInput:a,currentOpenInput:i}=this,s=e.currentTarget.getAttribute("data-position");e.composedPath().find((e=>e.classList?.contains(y)))&&("start"===s?a:n).setFocus(),t&&this.open&&i!==s||(this.open=!this.open)},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,r.f)(t,e):null},this.setTransitionEl=e=>{this.transitionEl=e},this.setStartInput=e=>{this.startInput=e},this.setEndInput=e=>{this.endInput=e},this.blurHandler=()=>{this.open=!1},this.keyDownHandler=e=>{const{defaultPrevented:t,key:n}=e;t||("Enter"===n?(this.commitValue(),this.shouldFocusRangeEnd()?this.endInput?.setFocus():this.shouldFocusRangeStart()&&this.startInput?.setFocus(),(0,o.s)(this)&&(e.preventDefault(),this.restoreInputFocus())):"ArrowDown"===n?(this.open=!0,this.focusOnOpen=!0,e.preventDefault()):"Escape"===n&&(this.open=!1,e.preventDefault(),this.restoreInputFocus()))},this.startInputFocus=()=>{this.focusedInput="start"},this.endInputFocus=()=>{this.focusedInput="end"},this.setFloatingEl=e=>{this.floatingEl=e,(0,r.c)(this,this.referenceEl,this.floatingEl)},this.setStartWrapper=e=>{this.startWrapper=e,this.setReferenceEl()},this.setEndWrapper=e=>{this.endWrapper=e,this.setReferenceEl()},this.setDatePickerRef=e=>{this.datePickerEl=e,(0,f.c)(this,{focusTrapEl:e,focusTrapOptions:{initialFocus:!1,setReturnFocus:!1}})},this.handleDateChange=e=>{this.range||(e.stopPropagation(),this.setValue(e.target.valueAsDate),this.localizeInputValues(),this.restoreInputFocus())},this.handleDateRangeChange=e=>{if(!this.range)return;e.stopPropagation();const t=e.target.valueAsDate;this.setRangeValue(t),this.localizeInputValues(),this.restoreInputFocus()},this.setInputValue=(e,t="start")=>{const n=this[`${t}Input`];n&&(n.value=e)},this.setRangeValue=e=>{if(!this.range)return;const{value:t}=this,n=Array.isArray(t),a=Array.isArray(e),s=a?e[0]:null;let r=a?(0,i.c)(s):"";r&&(r=this.getNormalizedDate(r));const o=a?e[1]:null;let l=a?(0,i.c)(o):"";l&&(l=this.getNormalizedDate(l));const c=r||l?[r,l]:"";if(c===t)return;this.userChangedValue=!0,this.value=c,this.valueAsDate=c?(0,i.g)(c):void 0;const u=this.calciteInputDatePickerChange.emit();u&&u.defaultPrevented&&(this.value=t,n?(this.setInputValue(t[0],"start"),this.setInputValue(t[1],"end")):(this.value=t,this.setInputValue(t)))},this.setValue=e=>{if(this.range)return;const t=this.value;let n=(0,i.c)(e);n=this.getNormalizedDate(n),n!==t&&(this.userChangedValue=!0,this.valueAsDate=n?(0,i.e)(n):void 0,this.value=n||"",this.calciteInputDatePickerChange.emit().defaultPrevented&&(this.value=t,this.setInputValue(t)))},this.commonDateSeparators=[".","-","/"],this.formatNumerals=e=>e?e.split("").map((e=>this.commonDateSeparators?.includes(e)?this.localeData?.separator:c.n?.includes(e)?d.n?.numberFormatter?.format(Number(e)):e)).join(""):"",this.parseNumerals=e=>e?e.split("").map((e=>c.n.includes(e)?d.n.delocalize(e):e)).join(""):"",this.disabled=!1,this.focusTrapDisabled=!1,this.form=void 0,this.readOnly=!1,this.value="",this.flipPlacements=void 0,this.headingLevel=void 0,this.valueAsDate=void 0,this.messageOverrides=void 0,this.messages=void 0,this.minAsDate=void 0,this.maxAsDate=void 0,this.min=void 0,this.max=void 0,this.open=!1,this.validationMessage=void 0,this.validationIcon=void 0,this.name=void 0,this.numberingSystem=void 0,this.scale="m",this.status="idle",this.placement=r.d,this.range=!1,this.required=!1,this.overlayPositioning="absolute",this.proximitySelectionDisabled=!1,this.layout="horizontal",this.datePickerActiveDate=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.focusedInput="start",this.localeData=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,f.d)(this):(0,f.a)(this))}handleDisabledAndReadOnlyChange(e){e||(this.open=!1)}valueWatcher(e){if(!this.userChangedValue){let t;t=Array.isArray(e)?(0,i.g)(e):e?(0,i.e)(e):void 0,this.valueAsDateChangedExternally||t===this.valueAsDate||(this.valueAsDate=t),this.localizeInputValues()}this.userChangedValue=!1}valueAsDateWatcher(e){this.datePickerActiveDate=e;const t=this.range&&Array.isArray(e)?[(0,i.c)(e[0]),(0,i.c)(e[1])]:(0,i.c)(e);this.value!==t&&(this.valueAsDateChangedExternally=!0,this.value=t,this.valueAsDateChangedExternally=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}onMinChanged(e){e&&(this.minAsDate=(0,i.e)(e))}onMaxChanged(e){e&&(this.maxAsDate=(0,i.e)(e))}openHandler(){(0,p.o)(this),this.disabled||this.readOnly?this.open=!1:this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}calciteDaySelectHandler(){this.shouldFocusRangeStart()||this.shouldFocusRangeEnd()||(this.open=!1)}async setFocus(){await(0,h.c)(this),this.el.focus()}async reposition(e=!1){const{floatingEl:t,referenceEl:n,placement:a,overlayPositioning:i,filteredFlipPlacements:s}=this;return(0,r.r)(this,{floatingEl:t,referenceEl:n,overlayPositioning:i,placement:a,flipPlacements:s,type:"menu"},e)}connectedCallback(){(0,l.c)(this),(0,d.c)(this);const{open:e}=this;if(e&&this.openHandler(),Array.isArray(this.value))this.valueAsDate=(0,i.g)(this.value);else if(this.value)try{this.valueAsDate=(0,i.e)(this.value)}catch(e){this.warnAboutInvalidValue(this.value),this.value=""}else this.valueAsDate&&(this.range?this.setRangeValue(this.valueAsDate):Array.isArray(this.valueAsDate)||(this.value=(0,i.c)(this.valueAsDate)));this.min&&(this.minAsDate=(0,i.e)(this.min)),this.max&&(this.maxAsDate=(0,i.e)(this.max)),(0,u.c)(this),(0,o.c)(this),(0,m.c)(this),this.setFilteredPlacements(),this.reposition(!0),d.n.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.open&&(0,p.o)(this),(0,r.c)(this,this.referenceEl,this.floatingEl)}async componentWillLoad(){(0,h.s)(this),await Promise.all([this.loadLocaleData(),(0,m.s)(this)]),this.onMinChanged(this.min),this.onMaxChanged(this.max)}componentDidLoad(){(0,h.a)(this),this.localizeInputValues(),this.reposition(!0)}disconnectedCallback(){(0,f.d)(this),(0,l.d)(this),(0,u.d)(this),(0,o.d)(this),(0,r.a)(this,this.referenceEl,this.floatingEl),(0,d.d)(this),(0,m.d)(this)}componentDidRender(){(0,l.u)(this)}render(){const{disabled:e,effectiveLocale:t,messages:n,numberingSystem:i,readOnly:c}=this;return d.n.numberFormatOptions={numberingSystem:i,locale:t,useGrouping:!1},(0,a.h)(a.H,{onBlur:this.blurHandler,onKeyDown:this.keyDownHandler},(0,a.h)(l.I,{disabled:this.disabled},this.localeData&&(0,a.h)("div",{class:"input-container"},(0,a.h)("div",{class:I,"data-position":"start",onClick:this.onInputWrapperClick,onPointerDown:this.onInputWrapperPointerDown,ref:this.setStartWrapper},(0,a.h)("calcite-input-text",{"aria-autocomplete":"none","aria-controls":this.dialogId,"aria-describedby":this.placeholderTextId,"aria-expanded":(0,s.t)(this.open),"aria-haspopup":"dialog",class:{[D]:!0,"no-bottom-border":"vertical"===this.layout&&this.range},disabled:e,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.startInputFocus,placeholder:this.localeData?.placeholder,readOnly:c,role:"combobox",scale:this.scale,status:this.status,ref:this.setStartInput}),!this.readOnly&&this.renderToggleIcon(this.open&&"start"===this.focusedInput),(0,a.h)("span",{"aria-hidden":"true",class:"assistive-text",id:this.placeholderTextId},"Date Format: ",this.localeData?.placeholder)),(0,a.h)("div",{"aria-hidden":(0,s.t)(!this.open),"aria-label":n.chooseDate,"aria-live":"polite","aria-modal":"true",class:{"menu-container":!0,"menu-container--active":this.open},id:this.dialogId,role:"dialog",ref:this.setFloatingEl},(0,a.h)("div",{class:{"calendar-wrapper":!0,"calendar-wrapper--end":"end"===this.focusedInput,[r.F.animation]:!0,[r.F.animationActive]:this.open},ref:this.setTransitionEl},(0,a.h)("calcite-date-picker",{activeDate:this.datePickerActiveDate,activeRange:this.focusedInput,headingLevel:this.headingLevel,max:this.max,maxAsDate:this.maxAsDate,messageOverrides:this.messageOverrides,min:this.min,minAsDate:this.minAsDate,numberingSystem:i,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,scale:this.scale,tabIndex:this.open?void 0:-1,valueAsDate:this.valueAsDate,ref:this.setDatePickerRef}))),this.range&&"horizontal"===this.layout&&(0,a.h)("div",{class:"horizontal-arrow-container"},(0,a.h)("calcite-icon",{flipRtl:!0,icon:"arrow-right",scale:(0,v.g)(this.scale)})),this.range&&"vertical"===this.layout&&"s"!==this.scale&&(0,a.h)("div",{class:"vertical-arrow-container"},(0,a.h)("calcite-icon",{icon:"arrow-down",scale:(0,v.g)(this.scale)})),this.range&&(0,a.h)("div",{class:I,"data-position":"end",onClick:this.onInputWrapperClick,onPointerDown:this.onInputWrapperPointerDown,ref:this.setEndWrapper},(0,a.h)("calcite-input-text",{"aria-autocomplete":"none","aria-controls":this.dialogId,"aria-expanded":(0,s.t)(this.open),"aria-haspopup":"dialog",class:{[D]:!0,"border-top-color-one":"vertical"===this.layout&&this.range},disabled:e,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.endInputFocus,placeholder:this.localeData?.placeholder,readOnly:c,role:"combobox",scale:this.scale,status:this.status,ref:this.setEndInput}),!this.readOnly&&this.renderToggleIcon(this.open&&"end"===this.focusedInput))),(0,a.h)(o.H,{component:this}),this.validationMessage?(0,a.h)(b.V,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}renderToggleIcon(e){return(0,a.h)("span",{class:y,tabIndex:-1},(0,a.h)("calcite-icon",{icon:e?"chevron-up":"chevron-down",scale:(0,v.g)(this.scale)}))}setReferenceEl(){const{focusedInput:e,layout:t,endWrapper:n,startWrapper:a}=this;this.referenceEl="end"===e||"vertical"===t?n||a:a||n,requestAnimationFrame((()=>(0,r.c)(this,this.referenceEl,this.floatingEl)))}onLabelClick(){this.setFocus()}onBeforeOpen(){this.calciteInputDatePickerBeforeOpen.emit()}onOpen(){(0,f.a)(this,{onActivate:()=>{this.focusOnOpen&&(this.datePickerEl.setFocus(),this.focusOnOpen=!1)}}),this.calciteInputDatePickerOpen.emit()}onBeforeClose(){this.calciteInputDatePickerBeforeClose.emit()}onClose(){this.calciteInputDatePickerClose.emit(),(0,f.d)(this),this.restoreInputFocus(),this.focusOnOpen=!1,this.datePickerEl.reset()}commitValue(){const{focusedInput:e,value:t}=this,n=this[`${e}Input`].value,a=(0,i.b)(n,this.localeData),s=(0,i.c)(a),r=Array.isArray(t);if(this.range)if(r){if(s===t["start"===e?0:1])return;a?(this.setRangeValue(["start"===e?a:(0,i.e)(t[0]),"end"===e?a:(0,i.e)(t[1])]),this.localizeInputValues()):this.setRangeValue(["end"===e&&(0,i.e)(t[0]),"start"===e&&(0,i.e)(t[1])])}else a&&(this.setRangeValue(["start"===e?a:(0,i.e)(t[0]),"end"===e?a:(0,i.e)(t[1])]),this.localizeInputValues());else{if(s===t)return;this.setValue(a),this.localizeInputValues()}}async loadLocaleData(){d.n.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.localeData=await(0,i.f)(this.effectiveLocale),this.localizeInputValues()}shouldFocusRangeStart(){const e=this.value[0];return!(!this.value[1]||e||"end"!==this.focusedInput||!this.startInput)}shouldFocusRangeEnd(){const e=this.value[0],t=this.value[1];return!(!e||t||"start"!==this.focusedInput||!this.endInput)}restoreInputFocus(){this.range?("start"===this.focusedInput?this.startInput:this.endInput).setFocus():this.startInput.setFocus()}localizeInputValues(){const e=(0,i.h)(this.range?Array.isArray(this.valueAsDate)&&this.valueAsDate[0]||void 0:this.valueAsDate,this.minAsDate,this.maxAsDate),t=this.range?(0,i.h)(Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||void 0,this.minAsDate,this.maxAsDate):null,n={numberingSystem:(0,d.b)(this.numberingSystem)},a=e&&e.toLocaleDateString(this.effectiveLocale,n),s=t&&t.toLocaleDateString(this.effectiveLocale,n);this.setInputValue(a??"","start"),this.setInputValue((this.range&&s)??"","end")}warnAboutInvalidValue(e){console.warn(`The specified value "${e}" does not conform to the required format, "YYYY-MM-DD".`)}getNormalizedDate(e){if(!e)return"";if(!function(e){if(!e)return!1;const{year:t}=(0,i.d)(e);return Number(t)<100}(e))return e;const{day:t,month:n,year:a}=(0,i.d)(e);return`${function(e){const t=(new Date).getFullYear();return 100*Math.floor(t/100)+e}(Number(a))}-${n}-${t}`}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],valueAsDate:["valueAsDateWatcher"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],min:["onMinChanged"],max:["onMaxChanged"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"],effectiveLocale:["loadLocaleData"]}}};w.style=":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calendar-wrapper{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-z-index);margin-inline:1px;background-color:var(--calcite-color-foreground-1);padding-inline:0.625rem;inset-inline-start:0}.menu-container{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}"},344:(e,t,n)=>{function a(e){return"l"===e?"m":"s"}async function i(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>i,g:()=>a})},4300:(e,t,n)=>{n.d(t,{H:()=>x,a:()=>b,c:()=>m,d:()=>v,f:()=>f,i:()=>I,r:()=>p,s:()=>d});var a=n(7146),i=n(9113);const s=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"],r="hidden-form-input";function o(e){return"checked"in e}const l=new WeakMap,c=new WeakSet;function u(e){"status"in e&&(e.status="idle"),"validationIcon"in e&&(e.validationIcon=!1),"validationMessage"in e&&(e.validationMessage="")}function h(e){const t=e?.target,n=t?.parentElement,a=n?.nodeName?.toLowerCase(),i=a?.split("-");if(i.length<2||"calcite"!==i[0])return;var r,o;if(e?.preventDefault(),r=n,o=t?.validationMessage,"status"in r&&(r.status="invalid"),"validationIcon"in r&&!r.validationIcon&&(r.validationIcon=!0),"validationMessage"in r&&!r.validationMessage&&(r.validationMessage=o),n?.validationMessage!==t?.validationMessage)return;const l=function(e){return`${e.split("-").map(((e,t)=>0===t?e:`${e[0].toUpperCase()}${e.slice(1)}`)).join("")}${s.includes(e)?"Input":"Change"}`}(a);n.addEventListener(l,(()=>u(n)),{once:!0})}function d(e){const{formEl:t}=e;return!!t&&(t.addEventListener("invalid",h,!0),t.requestSubmit(),t.removeEventListener("invalid",h,!0),requestAnimationFrame((()=>{const e=t.querySelectorAll("[status=invalid]");for(const t of e)if(t?.validationMessage){t?.setFocus();break}})),!0)}function p(e){e.formEl?.reset()}function m(e){const{el:t,value:n}=e,i=f(e);if(!i||function(e,t){if((0,a.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let i=!1;return e.addEventListener(n,(e=>{i=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(i,t))return;e.formEl=i,e.defaultValue=n,o(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||g).bind(e);i.addEventListener("reset",s),l.set(e.el,s),c.add(t)}function f(e){const{el:t,form:n}=e;return n?(0,a.q)(t,{id:n}):(0,a.c)(t,"form")}function g(){u(this),o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function v(e){const{el:t,formEl:n}=e;if(!n)return;const a=l.get(t);n.removeEventListener("reset",a),l.delete(t),e.formEl=null,c.delete(t)}function b(e,t){e.defaultValue=t}const I="calciteInternalHiddenInputInput",D=e=>{e.target.dispatchEvent(new CustomEvent(I,{bubbles:!0}))},y=e=>e.removeEventListener("input",D);function w(e,t,n){const{defaultValue:a,disabled:i,form:s,name:r,required:l}=e;t.defaultValue=a,t.disabled=i,t.name=r,t.required=l,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const x=({component:e})=>(function(e){const{el:t,formEl:n,name:a,value:i}=e,{ownerDocument:s}=t,o=t.querySelectorAll(`input[slot="${r}"]`);if(!n||!a)return void o.forEach((e=>{y(e),e.remove()}));const l=Array.isArray(i)?i:[i],c=[],u=new Set;let h;o.forEach((t=>{const n=l.find((e=>e==t.value));null!=n?(u.add(n),w(e,t,n)):c.push(t)})),l.forEach((t=>{if(u.has(t))return;let n=c.pop();n||(n=s.createElement("input"),n.slot=r),h||(h=s.createDocumentFragment()),h.append(n),n.addEventListener("input",D),w(e,n,t)})),h&&t.append(h),c.forEach((e=>{y(e),e.remove()}))}(e),(0,i.h)("slot",{name:r}))},2627:(e,t,n)=>{n.d(t,{I:()=>D,c:()=>v,d:()=>b,u:()=>d});var a=n(3849),i=n(9113);const s=/firefox/i.test((0,a.g)()),r=s?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){const t=e.target;if(s&&!r.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const c=["mousedown","mouseup","click"];function u(e){const t=e.target;s&&!r.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function d(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void p(e);f(e),e.el.removeAttribute("aria-disabled")}function p(e){if(e.el.click=o,s){const t=function(e){return e.el.parentElement||e.el}(e),n=r.get(e.el);return n!==t&&(g(n),r.set(e.el,t)),void m(r.get(e.el))}m(e.el)}function m(e){e&&(e.addEventListener("pointerdown",l,h),c.forEach((t=>e.addEventListener(t,u,h))))}function f(e){if(delete e.el.click,s)return g(r.get(e.el)),void r.delete(e.el);g(e.el)}function g(e){e&&(e.removeEventListener("pointerdown",l,h),c.forEach((t=>e.removeEventListener(t,u,h))))}function v(e){e.disabled&&s&&p(e)}function b(e){s&&f(e)}const I={container:"interaction-container"};function D({disabled:e},t){return(0,i.h)("div",{class:I.container,inert:e},...t)}},493:(e,t,n)=>{n.d(t,{a:()=>w,b:()=>o,c:()=>f,d:()=>g,g:()=>b,l:()=>r});var a=n(7146),i=n(344);const s="calciteInternalLabelClick",r="calciteInternalLabelConnected",o="calciteInternalLabelDisconnected",l="calcite-label",c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap,p=new Set,m=e=>{const{id:t}=e,n=t&&(0,a.q)(e,{selector:`${l}[for="${t}"]`});if(n)return n;const i=(0,a.c)(e,l);return!i||function(e,t){let n;const a="custom-element-ancestor-check",i=a=>{a.stopImmediatePropagation();const i=a.composedPath();n=i.slice(i.indexOf(t),i.indexOf(e))};e.addEventListener(a,i,{once:!0}),t.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),e.removeEventListener(a,i);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(i,e)?null:i};function f(e){if(!e)return;const t=m(e.el);if(u.has(t)&&t===e.labelEl||!t&&p.has(e))return;const n=y.bind(e);if(t){e.labelEl=t;const a=c.get(t)||[];a.push(e),c.set(t,a.sort(v)),u.has(e.labelEl)||(u.set(e.labelEl,I),e.labelEl.addEventListener(s,I)),p.delete(e),document.removeEventListener(r,h.get(e)),d.set(e,n),document.addEventListener(o,n)}else p.has(e)||(n(),document.removeEventListener(o,d.get(e)))}function g(e){if(!e)return;if(p.delete(e),document.removeEventListener(r,h.get(e)),document.removeEventListener(o,d.get(e)),h.delete(e),d.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,u.get(e.labelEl)),u.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(v)),e.labelEl=null}function v(e,t){return(0,a.k)(e.el,t.el)?-1:1}function b(e){return e.label||e.labelEl?.textContent?.trim()||""}function I(e){const t=e.detail.sourceEvent.target,n=c.get(this),a=n.find((e=>e.el===t));if(n.includes(a))return;const i=n[0];i.disabled||i.onLabelClick(e)}function D(){p.has(this)&&f(this)}function y(){p.add(this);const e=h.get(this)||D.bind(this);h.set(this,e),document.addEventListener(r,e)}async function w(e){if(await(0,i.c)(e),c.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of p)if(e.el===t){f(e);break}}))}},8065:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>d,s:()=>l,u:()=>u});var a=n(9113),i=n(3213);const s={};function r(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await c(e,e.effectiveLocale),o(e)}async function c(e,t){const{el:n}=e,o=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return s[n]||(s[n]=fetch((0,a.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||r(),e.json()))).catch((()=>r()))),s[n]}((0,i.g)(t,"t9n"),o)}async function u(e,t){e.defaultMessages=await c(e,t),o(e)}function h(e){e.onMessagesChange=p}function d(e){e.onMessagesChange=void 0}function p(){o(this)}},3174:(e,t,n)=>{n.d(t,{a:()=>d,b:()=>l,c:()=>p,d:()=>m,e:()=>o,f:()=>x,g:()=>E,h:()=>r,i:()=>s,j:()=>I,k:()=>f,l:()=>b,m:()=>u,n:()=>v,o:()=>c,p:()=>g,s:()=>D});var a=n(9113),i=n(3213);function s(e,t,n){if(!e)return;const a=e.getTime(),i=!(t instanceof Date)||a>=t.getTime(),s=!(n instanceof Date)||a<=n.getTime();return i&&s}function r(e,t,n){if(!(e instanceof Date))return null;const a=e.getTime(),i=t instanceof Date&&a<t.getTime(),s=n instanceof Date&&a>n.getTime();return i?t:s?n:e}function o(e,t=!1){if(e instanceof Date)return e;if(!e||"string"!=typeof e)return null;const n=e.split(/[: T-]/).map(parseFloat),a=new Date(n[0],(n[1]||1)-1,n[2]||1);if(a.setFullYear(n[0]),isNaN(a.getTime()))throw new Error(`Invalid ISO 8601 date: "${e}"`);return t?D(a):a}function l(e,t){if(!t)return null;const{separator:n}=t,a=function(e,t){const{day:n,month:a,year:i}=d(e,t);return{day:parseInt(n),month:parseInt(a)-1,year:parseInt(i)}}(e,t),{day:i,month:s}=a,r=c(a.year,t),o=new Date(r,s,i);o.setFullYear(r);const l=i>0,u=s>-1,h=!isNaN(o.getTime()),p=e.split(n).filter((e=>e)).length>2,m=r.toString().length>0;return l&&u&&h&&p&&m?o:null}function c(e,t){return h(e,t,"read")}function u(e,t){return h(e,t,"write")}function h(e,t,n){return"buddhist"!==t["default-calendar"]?e:e+543*("read"===n?-1:1)}function d(e,t){const{separator:n,unitOrder:a}=t,s=b(a),r=e.split(n).map((e=>i.n.delocalize(e)));return{day:r[s.indexOf("d")],month:r[s.indexOf("m")],year:r[s.indexOf("y")]}}function p(e){return e instanceof Date?new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]:""}function m(e){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}function f(e,t){return e instanceof Date&&t instanceof Date&&e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function g(e){const t=e.getMonth(),n=new Date(e);return n.setMonth(t-1),t===n.getMonth()?new Date(e.getFullYear(),t,0):n}function v(e){const t=e.getMonth(),n=new Date(e);return n.setMonth(t+1),(t+2)%7==n.getMonth()%7?new Date(e.getFullYear(),t+2,0):n}function b(e){const t=e.toLowerCase();return["d","m","y"].sort(((e,n)=>t.indexOf(e)-t.indexOf(n)))}function I(e,t){return(e.getTime()-t.getTime())/864e5}function D(e){return e.setHours(23,59,59,999),e}const y={},w={};async function x(e){const t=(0,i.g)(e);if(y[t])return y[t];w[t]||(w[t]=fetch((0,a.a)(`./assets/date-picker/nls/${t}.json`)).then((e=>e.json())).catch((()=>(console.error(`Translations for "${t}" not found or invalid, falling back to english`),x("en")))));const n=await w[t];return y[t]=n,n}function E(e){return e.map(((e,t)=>o(e,1===t)))}}}]);