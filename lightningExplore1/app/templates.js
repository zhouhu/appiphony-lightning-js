Ember.TEMPLATES["_datepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"slds-form--stacked\">\n	<div class=\"slds-form-element\">\n		<label class=\"slds-form-element__label\" for=\"date\">Date Picker Label</label>\n		<div class=\"slds-form-element__control\">\n			<div class=\"slds-input-has-icon slds-input-has-icon--right\">\n				<svg aria-hidden=\"true\" class=\"slds-input__icon slds-icon-text-default\">\n					<use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/utility-sprite/svg/symbols.svg#event\"></use>\n				</svg>\n				<input id=\"date\" class=\"slds-input\" type=\"text\" placeholder=\"Pick a Date\" label=\"Date Picker Label\" />\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/sf-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "iconLeft", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "iconRight", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--left\">\n            <use ");
  hashContexts = {'xlink:href': depth0};
  hashTypes = {'xlink:href': "STRING"};
  options = {hash:{
    'xlink:href': ("iconUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></use>\n        </svg>\n        <span data-qa-label=\"buttonLabel\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "buttonLabel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </span>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <span data-qa-label=\"buttonLabel\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "buttonLabel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </span>\n        <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--right\">\n            <use ");
  hashContexts = {'xlink:href': depth0};
  hashTypes = {'xlink:href': "STRING"};
  options = {hash:{
    'xlink:href': ("iconUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></use>\n        </svg>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <span data-qa-label=\"buttonLabel\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "buttonLabel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </span>\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "hasIcons", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["components/sf-datepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		<div class=\"slds-dropdown slds-dropdown--left slds-datepicker\" aria-hidden=\"false\" data-selection=\"single\">\n			<div class=\"slds-datepicker__filter slds-grid\">\n				<div class=\"slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4\">\n					<div class=\"slds-align-middle\">\n						<button class=\"slds-button slds-button--icon-container\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickNextOrPrevMonth", "prev", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n							<svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--small\">\n								<use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/utility-sprite/svg/symbols.svg#left\"></use>\n							</svg>\n							<span class=\"slds-assistive-text\">Previous Month</span>\n						</button>\n					</div>\n					<h2 id=\"month\" class=\"slds-align-middle\" aria-live=\"assertive\" aria-atomic=\"true\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.convertNumberToMonth || (depth0 && depth0.convertNumberToMonth)),stack1 ? stack1.call(depth0, "selectedMonth", options) : helperMissing.call(depth0, "convertNumberToMonth", "selectedMonth", options))));
  data.buffer.push("</h2>\n					<div class=\"slds-align-middle\">\n						<button class=\"slds-button slds-button--icon-container\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickNextOrPrevMonth", "next", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n							<svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--small\">\n								<use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/utility-sprite/svg/symbols.svg#right\"></use>\n							</svg>\n							<span class=\"slds-assistive-text\">Next Month</span>\n						</button>\n					</div>\n				</div>\n				<div class=\"slds-picklist datepicker__filter--year slds-shrink-none\">\n					");
  hashContexts = {'class': depth0,'aria-haspopup': depth0,'selectedWhen': depth0,'action': depth0};
  hashTypes = {'class': "STRING",'aria-haspopup': "STRING",'selectedWhen': "ID",'action': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral slds-picklist__label"),
    'aria-haspopup': ("true"),
    'selectedWhen': ("isYearOpen"),
    'action': ("clickYearDropdown")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isYearOpen", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n			<table class=\"datepicker__month\" role=\"grid\" aria-labelledby=\"month\">\n				<thead>\n					<tr id=\"weekdays\">\n						<th id=\"Sunday\">\n							<abbr title=\"Sunday\">S</abbr>\n						</th>\n						<th id=\"Monday\">\n							<abbr title=\"Monday\">M</abbr>\n						</th>\n						<th id=\"Tuesday\">\n							<abbr title=\"Tuesday\">T</abbr>\n						</th>\n						<th id=\"Wednesday\">\n							<abbr title=\"Wednesday\">W</abbr>\n						</th>\n						<th id=\"Thursday\">\n							<abbr title=\"Thursday\">T</abbr>\n						</th>\n						<th id=\"Friday\">\n							<abbr title=\"Friday\">F</abbr>\n						</th>\n						<th id=\"Saturday\">\n							<abbr title=\"Saturday\">S</abbr>\n						</th>\n					</tr>\n				</thead>\n				<tbody>\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "row", "in", "calendarRows", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</tbody>\n			</table>\n		</div>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "selectedYear", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						<svg aria-hidden=\"true\" class=\"slds-icon slds-icon--small\">\n							<use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n						</svg>\n					");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						<div class=\"slds-dropdown slds-dropdown--menu\" aria-hidden=\"false\">\n						    <ul id=\"yearDropdown\" class=\"slds-dropdown__list\" style=\"max-height: 13.5rem; overflow-y:auto;\">\n						    	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "year", "in", "years", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</ul>\n						</div>\n					");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n									<li id=\"yearDropdown");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "year.value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"slds-dropdown__item\" aria-selected=\"false\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickSelectYear", "year.value", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n										<a href=\"#\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":slds-truncate :slds-has-icon--left year.isSelected:slds-is-selected")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" role=\"menuitemradio\">\n											");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "year.isSelected", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n											<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "year.value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n										</a>\n									</li>\n								");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n												<svg aria-hidden=\"true\" class=\"slds-icon slds-icon--small slds-icon--left\" data-reactid=\".46.0.0.1:$=10:0.0.$=11:0.0.0\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/standard-sprite/svg/symbols.svg#task2\" data-reactid=\".46.0.0.1:$=10:0.0.$=11:0.0.0.0\"></use></svg>\n											");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						<tr>\n							");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "col", "in", "row", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						</tr>\n					");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n								<td ");
  hashContexts = {'class': depth0,'aria-disabled': depth0};
  hashTypes = {'class': "STRING",'aria-disabled': "STRING"};
  options = {hash:{
    'class': ("col.isCurrentMonth::slds-disabled-text col.isToday:slds-is-today col.isSelected:slds-is-selected"),
    'aria-disabled': ("col.isCurrentMonth:false:true")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" headers=\"Sunday\" role=\"gridcell\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickSelectDate", "col", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n									<span class=\"slds-day\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "col.value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n								</td>\n							");
  return buffer;
  }

  data.buffer.push("<div class=\"slds-form--stacked\">\n	<div class=\"slds-form-element\">\n		<label class=\"slds-form-element__label\" for=\"date\">Date Picker Label</label>\n		<div class=\"slds-form-element__control\">\n			<div class=\"slds-input-has-icon slds-input-has-icon--right\">\n				<svg aria-hidden=\"true\" class=\"slds-input__icon slds-icon-text-default\">\n					<use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/utility-sprite/svg/symbols.svg#event\"></use>\n				</svg>\n				");
  hashContexts = {'class': depth0,'type': depth0,'placeholder': depth0,'label': depth0,'value': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'placeholder': "STRING",'label': "STRING",'value': "ID"};
  options = {hash:{
    'class': ("slds-input"),
    'type': ("text"),
    'placeholder': ("Pick a date"),
    'label': ("Date Picker Label"),
    'value': ("selectedDateText")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isOpen", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/sf-form-element"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("<label class=\"slds-form-element__label\" for=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "labelFor", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashContexts = {'data-qa-label': depth0};
  hashTypes = {'data-qa-label': "STRING"};
  options = {hash:{
    'data-qa-label': ("label")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "label", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"slds-form-element__control\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/sf-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div aria-hidden=\"false\" role=\"dialog\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":slds-modal isModalOpen:slds-fade-in-open")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" id=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "modalId", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" data-qa-modal=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "modalId", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n	<div class=\"slds-modal__container\">\n		<div class=\"slds-modal__header\" data-qa-container=\"modalHeader\">\n            <headerYield></headerYield>\n            <button class=\"slds-button slds-modal__close\" data-close-modal=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "modalId", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--inverse slds-button__icon--large\">\n                    <use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/action-sprite/svg/symbols.svg#close\"></use>\n                </svg>\n                <span class=\"slds-assistive-text\">Close</span>\n            </button>\n        </div>\n        <div class=\"slds-modal__content\">\n            <div data-qa-container=\"modalBody\">\n                <bodyYield></bodyYield>\n            </div>\n        </div>\n        <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":slds-modal__footer directionalFooter:slds-modal__footer--directional")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" data-qa-container=\"modalFooter\">\n            <footerYield></footerYield>\n        </div>\n		");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	</div>\n</div>\n<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":slds-modal-backdrop isModalOpen:slds-modal-backdrop--open")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></div>");
  return buffer;
  
});

Ember.TEMPLATES["components/sf-picklist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n				<li id=\"menu-0-0\" href=\"#\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":slds-dropdown__item :slds-has-icon--left picklistOption.isSelected:slds-is-selected")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n					<a href=\"#\" class=\"slds-truncate\" role=\"menuitemradio\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickPicklistOption", "picklistOption", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "picklistOption.isSelected", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "picklistOption.label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</a>\n				</li>\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n							<svg aria-hidden=\"true\" class=\"slds-icon slds-icon--small slds-icon--left\" data-reactid=\".5.0.0.1:$=10:0.0.$=10:0.0.0\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/standard-sprite/svg/symbols.svg#task2\" data-reactid=\".5.0.0.1:$=10:0.0.$=10:0.0.0.0\"></use></svg>\n						");
  return buffer;
  }

  data.buffer.push("<div ");
  hashContexts = {'aria-expanded': depth0};
  hashTypes = {'aria-expanded': "STRING"};
  options = {hash:{
    'aria-expanded': ("isOpen")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"slds-picklist\">\n	<button class=\"slds-button slds-button--neutral slds-picklist__label\" aria-haspopup=\"true\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickTogglePicklist", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n		<span class=\"slds-truncate\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getLabelFromPicklistOption || (depth0 && depth0.getLabelFromPicklistOption)),stack1 ? stack1.call(depth0, "selection", "optionValueKey", "optionLabelKey", "prompt", options) : helperMissing.call(depth0, "getLabelFromPicklistOption", "selection", "optionValueKey", "optionLabelKey", "prompt", options))));
  data.buffer.push("</span>\n		<svg aria-hidden=\"true\" class=\"slds-icon\">\n			<use xlink:href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sldsUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n		</svg>\n	</button>\n	<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":slds-dropdown :slds-dropdown--left :slds-dropdown--small :slds-dropdown--menu isOpen::slds-hide")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n		<ul class=\"slds-dropdown__list\" role=\"menu\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "picklistOption", "in", "contentObjects", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</ul>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/sf-popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"slds-popover__content\">\n	<div class=\"slds-popover__header\">\n		<headerYield>\n		</headerYield>\n		\n	</div>\n	<div class=\"slds-popover__body\">\n		<bodyYield>\n		</bodyYield>\n	</div>\n	");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["explore"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                ");
  hashContexts = {'class': depth0,'content': depth0,'value': depth0};
  hashTypes = {'class': "STRING",'content': "ID",'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'class': ("slds-select"),
    'content': ("picklistSimplerThings"),
    'value': ("selectedPicklistSimplerThing")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n            \n            ");
  hashContexts = {'class': depth0,'selectedWhen': depth0,'disabledWhen': depth0,'action': depth0,'param1': depth0,'param2': depth0,'param3': depth0};
  hashTypes = {'class': "STRING",'selectedWhen': "ID",'disabledWhen': "ID",'action': "STRING",'param1': "ID",'param2': "ID",'param3': "ID"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'selectedWhen': ("thing.isSelected"),
    'disabledWhen': ("thing.isDisabled"),
    'action': ("doThis"),
    'param1': ("thing.id"),
    'param2': ("thing.name"),
    'param3': ("thing")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n            \n            ");
  hashContexts = {'class': depth0,'iconLeft': depth0,'buttonLabel': depth0,'selectedWhen': depth0,'action': depth0,'param1': depth0,'param2': depth0,'param3': depth0};
  hashTypes = {'class': "STRING",'iconLeft': "STRING",'buttonLabel': "ID",'selectedWhen': "ID",'action': "STRING",'param1': "ID",'param2': "ID",'param3': "ID"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'iconLeft': ("download"),
    'buttonLabel': ("thing.name"),
    'selectedWhen': ("thing.isSelected"),
    'action': ("doThat"),
    'param1': ("thing.id"),
    'param2': ("thing.name"),
    'param3': ("thing")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n                \n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--left\">\n                    <use ");
  hashContexts = {'xlink:href': depth0};
  hashTypes = {'xlink:href': "STRING"};
  options = {hash:{
    'xlink:href': ("thing.iconUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></use>\n                </svg>\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "thing.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" - this gets disabled/enabled when a button with another name is clicked\n                <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--right\">\n                    <use ");
  hashContexts = {'xlink:href': depth0};
  hashTypes = {'xlink:href': "STRING"};
  options = {hash:{
    'xlink:href': ("thing.iconUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></use>\n                </svg>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <modalHeader>\n                <h2 class=\"slds-text-heading--medium\">Modal 1, directional footer</h2>\n            </modalHeader>\n            <modalBody>\n                <p>You can close this by clicking the background. Except for when it's \"Large\" because the container takes up the vertical space, we need to work around this somehow.</p>\n            </modalBody>\n            <modalFooter>\n                ");
  hashContexts = {'class': depth0,'buttonLabel': depth0,'data-close-modal': depth0};
  hashTypes = {'class': "STRING",'buttonLabel': "STRING",'data-close-modal': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'buttonLabel': ("Cancel on the left"),
    'data-close-modal': ("modal1")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n                ");
  hashContexts = {'class': depth0,'buttonLabel': depth0,'data-close-modal': depth0};
  hashTypes = {'class': "STRING",'buttonLabel': "STRING",'data-close-modal': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral slds-button--brand"),
    'buttonLabel': ("Save on the right"),
    'data-close-modal': ("modal1")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n            </modalFooter>\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <modalHeader>\n                <h2 class=\"slds-text-heading--medium\">Modal 2</h2>\n                <p>Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show that to you. It is allowed to <a href=\"#\">contain links or be a link</a>.</p>\n            </modalHeader>\n            <modalBody>\n                <p>You can <strong>NOT</strong> close this by clicking the background</p>\n            </modalBody>\n            <modalFooter>\n                ");
  hashContexts = {'class': depth0,'buttonLabel': depth0,'data-close-modal': depth0};
  hashTypes = {'class': "STRING",'buttonLabel': "STRING",'data-close-modal': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'buttonLabel': ("Cancel 2"),
    'data-close-modal': ("modal2")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n                ");
  hashContexts = {'class': depth0,'buttonLabel': depth0,'data-close-modal': depth0};
  hashTypes = {'class': "STRING",'buttonLabel': "STRING",'data-close-modal': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral slds-button--brand"),
    'buttonLabel': ("Save 2"),
    'data-close-modal': ("modal2")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n                ");
  hashContexts = {'class': depth0,'buttonLabel': depth0,'action': depth0};
  hashTypes = {'class': "STRING",'buttonLabel': "STRING",'action': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'buttonLabel': ("A third button 2 - won't close it"),
    'action': ("sayBye")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n            </modalFooter>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n            <div>Hover for tooltip</div>\n        ");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n            <div>Click for popover</div>\n        ");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n            <popoverHeader>\n                <p class=\"slds-text-heading--small\">Hi</p>\n            </popoverHeader>\n            <popoverBody>\n                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud <a href=\"#\">ullamco</a> deserunt aute id consequat veniam incididunt duis in sint irure nisi.\n            </popoverBody>\n        ");
  }

  data.buffer.push("<div class=\"slds\">\n    <div>\n        FORM ELEMENTS\n        <br/>\n        <div>\n            Native Select\n            ");
  hashContexts = {'label': depth0,'labelFor': depth0};
  hashTypes = {'label': "STRING",'labelFor': "STRING"};
  options = {hash:{
    'label': (""),
    'labelFor': ("")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-form-element'] || (depth0 && depth0['sf-form-element'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-form-element", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n        <div>\n            SF Picklist\n            ");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"};
  options = {hash:{
    'content': ("picklistThings"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.label"),
    'value': ("selectedPicklistThing")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-picklist'] || (depth0 && depth0['sf-picklist'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-picklist", options))));
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "selectedPicklistThing", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n            ");
  hashContexts = {'content': depth0,'value': depth0};
  hashTypes = {'content': "ID",'value': "ID"};
  options = {hash:{
    'content': ("picklistSimplerThings"),
    'value': ("selectedPicklistSimplerThing")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-picklist'] || (depth0 && depth0['sf-picklist'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-picklist", options))));
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "selectedPicklistSimplerThing", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    </div>\n    <div>\n        BUTTON STUFF - they all toggle a selected state when clicked<br/>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "thing", "in", "things", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    <div>\n        MODAL STUFF\n        <br/>\n\n        ");
  hashContexts = {'class': depth0,'iconLeft': depth0,'buttonLabel': depth0,'selectedWhen': depth0,'data-open-modal': depth0};
  hashTypes = {'class': "STRING",'iconLeft': "STRING",'buttonLabel': "STRING",'selectedWhen': "ID",'data-open-modal': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'iconLeft': ("apps"),
    'buttonLabel': ("open modal 1"),
    'selectedWhen': ("modalOpened"),
    'data-open-modal': ("modal1")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n\n        Or type $('#modal1').modal('open'); in the console<br/>\n\n        ");
  hashContexts = {'class': depth0,'iconLeft': depth0,'buttonLabel': depth0,'selectedWhen': depth0,'data-open-modal': depth0};
  hashTypes = {'class': "STRING",'iconLeft': "STRING",'buttonLabel': "STRING",'selectedWhen': "ID",'data-open-modal': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'iconLeft': ("apps"),
    'buttonLabel': ("open modal 2"),
    'selectedWhen': ("modalOpened"),
    'data-open-modal': ("modal2")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options))));
  data.buffer.push("\n\n\n        ");
  hashContexts = {'modalId': depth0,'openFunction': depth0,'directionalFooter': depth0,'class': depth0};
  hashTypes = {'modalId': "STRING",'openFunction': "STRING",'directionalFooter': "STRING",'class': "STRING"};
  options = {hash:{
    'modalId': ("modal1"),
    'openFunction': ("sayHi"),
    'directionalFooter': ("true"),
    'class': ("slds-modal--large custom-class")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-modal'] || (depth0 && depth0['sf-modal'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-modal", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'modalId': depth0,'preventBgClose': depth0,'openFunction': depth0,'param1': depth0};
  hashTypes = {'modalId': "STRING",'preventBgClose': "STRING",'openFunction': "STRING",'param1': "STRING"};
  options = {hash:{
    'modalId': ("modal2"),
    'preventBgClose': ("true"),
    'openFunction': ("sayHi"),
    'param1': ("dude2")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-modal'] || (depth0 && depth0['sf-modal'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-modal", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n    <div>\n        Datepicker - Ember\n        ");
  hashContexts = {'selectedDate': depth0};
  hashTypes = {'selectedDate': "ID"};
  options = {hash:{
    'selectedDate': ("selectedDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['sf-datepicker'] || (depth0 && depth0['sf-datepicker'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-datepicker", options))));
  data.buffer.push("\n    </div>\n\n    <div>\n        Datepicker - jQuery\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "datepicker", options) : helperMissing.call(depth0, "partial", "datepicker", options))));
  data.buffer.push("\n    </div>\n\n    <div>\n        TOOLTIPS - JQUERY - initialize with $('[data-sljt=\"tooltip\"]').tooltip(); or $('body').tooltip({ selector: '[data-sljt=\"tooltip\"]'});\n        <br/>\n        ");
  hashContexts = {'class': depth0,'data-sljt': depth0,'data-placement': depth0,'title': depth0};
  hashTypes = {'class': "STRING",'data-sljt': "STRING",'data-placement': "STRING",'title': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'data-sljt': ("tooltip"),
    'data-placement': ("top"),
    'title': ("Test LA LA LA LA LA LA L AL A LA LAL AL LAL AL LA")
  },inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    \n    <div>\n        POPOVERS - EMBER\n        <br/>\n        ");
  hashContexts = {'class': depth0,'data-toggle-popover': depth0};
  hashTypes = {'class': "STRING",'data-toggle-popover': "STRING"};
  options = {hash:{
    'class': ("slds-button--neutral"),
    'data-toggle-popover': ("popover1")
  },inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-button'] || (depth0 && depth0['sf-button'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-button", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'popoverId': depth0,'position': depth0};
  hashTypes = {'popoverId': "STRING",'position': "STRING"};
  options = {hash:{
    'popoverId': ("popover1"),
    'position': ("right")
  },inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['sf-popover'] || (depth0 && depth0['sf-popover'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "sf-popover", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        <div>\n            POPOVERS - JQUERY - initialize with $('[data-sljt=\"popover\"]').popover();\n            <div>\n                <button class=\"slds-button slds-button--neutral slds-button--small\" data-sljt=\"popover\" data-placement=\"right\">Click for popover\n                </button>\n                <div class=\"slds-popover slds-nubbin--left\" role=\"dialog\">\n                    <div class=\"slds-popover__content\">\n                        <div class=\"slds-popover__header\">\n                            <p class=\"slds-text-heading--small\">Popover Heading</p>\n                        </div>\n                        <div class=\"slds-popover__body\">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud <a href=\"#\">ullamco</a> deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <button class=\"slds-button slds-button--neutral slds-button--small\" data-sljt=\"popover\" data-placement=\"right\">Click for popover 2\n                </button>\n                <div class=\"slds-popover slds-nubbin--left\" role=\"dialog\">\n                    <div class=\"slds-popover__content\">\n                        <div class=\"slds-popover__header\">\n                            <p class=\"slds-text-heading--small\">Popover Heading 2</p>\n                        </div>\n                        <div class=\"slds-popover__body\">2 Sit nulla est ex deserunt exercitation anim occaecat. Nostrud <a href=\"#\">ullamco</a> deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});