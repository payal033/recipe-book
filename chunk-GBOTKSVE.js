import{$ as u,C as H,D as a,E as v,F as T,G as J,H as Q,O as M,P as W,Q as P,R as Z,S as ee,V as te,W as g,X as ie,Y as ne,Z as A,ba as oe,ca as re,d as _,da as ae,e as h,ea as ce,f as y,fa as pe,g as c,ga as me,h as l,ha as de,i as s,ia as le,j as N,ka as se,l as m,ma as fe,n as K,na as O,o as L,oa as w,p as U,pa as ge,q as S,qa as ue,r as R,ra as ve,s as i,sa as xe,t as e,ta as Ce,u as p,ua as be,v as k,w as f,wa as _e,x as C,y as Y,ya as D,za as he}from"./chunk-RCE24MVK.js";var q=class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=s({type:r,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(t,n){t&1&&(i(0,"h5"),a(1,"Please create a new recipe or select from existing recipes!"),e())},styles:["h5[_ngcontent-%COMP%]{font-size:16px;text-align:center;margin-top:15px}"]})};var Pe=r=>[r],V=class r{faStopwatch=xe;faPeopleGroup=ge;recipeData;index;static \u0275fac=function(t){return new(t||r)};static \u0275cmp=s({type:r,selectors:[["app-recipe-item"]],inputs:{recipeData:"recipeData",index:"index"},decls:15,vars:11,consts:[["routerLinkActive","active",1,"recipe",3,"routerLink"],[1,"details"],[1,"recipeType"],[1,"info"],[3,"icon"],[1,"recipe-image"],[3,"src","alt"]],template:function(t,n){t&1&&(i(0,"a",0)(1,"div",1)(2,"p",2),a(3),e(),i(4,"h5"),a(5),e(),i(6,"div",3)(7,"p"),p(8,"fa-icon",4),a(9),e(),i(10,"p"),p(11,"fa-icon",4),a(12),e()()(),i(13,"div",5),p(14,"img",6),e()()),t&2&&(m("routerLink",Q(9,Pe,n.index)),c(3),v(n.recipeData.recipeType),c(2),v(n.recipeData.name),c(3),m("icon",n.faStopwatch),c(),T(" ",n.recipeData.cookTime,""),c(2),m("icon",n.faPeopleGroup),c(),T(" ",n.recipeData.servings," "),c(2),m("src",n.recipeData.imageURL,y)("alt",n.recipeData.name))},dependencies:[w,O,Z,ee],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:inherit;font-family:Roboto,sans-serif}.recipe[_ngcontent-%COMP%]{display:flex;height:100px;width:88%;justify-content:space-between;align-items:center;border-radius:22px;margin-top:18px;margin-bottom:18px;background:#fff}.active[_ngcontent-%COMP%]{background-color:#001f40;color:#fff}.recipe-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:55%;margin-right:-23px}.details[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:30px;justify-content:center;margin-top:15px}.details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;font-weight:600;letter-spacing:1.1px}.recipeType[_ngcontent-%COMP%]{background-color:#ffe0b9;width:fit-content;padding-top:0;padding-left:6px;padding-right:6px;border-radius:10px;font-size:13px;margin:5px 0;color:#000!important}.info[_ngcontent-%COMP%]{width:220px;display:flex;justify-content:space-between}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}"]})};var Oe=(r,o)=>o.name;function we(r,o){if(r&1&&p(0,"app-recipe-item",3),r&2){let t=o.$implicit,n=o.$index;m("recipeData",t)("index",n)}}var j=class r{constructor(o,t,n,d){this.recipeService=o;this.router=t;this.route=n;this.dataService=d}recipes=[];subscription;ngOnInit(){this.dataService.fetchRecipeData(),this.subscription=this.recipeService.recipesChanged.subscribe(o=>{this.recipes=o}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(t){return new(t||r)(l(D),l(P),l(M),l(he))};static \u0275cmp=s({type:r,selectors:[["app-recipe-list"]],decls:9,vars:0,consts:[[1,"row"],[1,"col-xs-12"],[1,"button","addRecipe",3,"click"],[3,"recipeData","index"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return n.onNewRecipe()}),a(3,"New Recipe"),e()()(),p(4,"hr"),i(5,"div",0)(6,"div",1),S(7,we,1,2,"app-recipe-item",3,Oe),e()()),t&2&&(c(7),R(n.recipes))},dependencies:[V],styles:[".button[_ngcontent-%COMP%]{text-align:center;background:none;border-radius:5px;margin-bottom:12px;font-size:14px;padding:5px 8px}.addRecipe[_ngcontent-%COMP%]{border:1px solid #a70082;background:#a70082;color:#fff;margin-bottom:0;margin-top:15px}.disabled[_ngcontent-%COMP%]{background:#a36496;color:#fff;cursor:not-allowed}"]})};var z=class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=s({type:r,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1),p(2,"app-recipe-list"),e(),i(3,"div",2),p(4,"router-outlet"),e()())},dependencies:[j,W],encapsulation:2})};function De(r,o){if(r&1&&(i(0,"option",18),a(1),e()),r&2){let t=o.$implicit;m("value",t),c(),T(" ",t," ")}}function ke(r,o){if(r&1){let t=k();i(0,"div",28)(1,"div",30),p(2,"input",31),e(),i(3,"div",32),p(4,"input",33),e(),i(5,"div",32)(6,"button",34),f("click",function(){let d=_(t).$index,b=C();return h(b.onDeleteIngredient(d))}),p(7,"fa-icon",35),e()()()}if(r&2){let t=o.$index,n=C();m("formGroupName",t),c(7),m("icon",n.faXmark)}}var F=class r{constructor(o,t,n){this.route=o;this.recipeService=t;this.router=n}id;editMode=!1;recipeTypes;faXmark=_e;recipeForm;ngOnInit(){this.recipeTypes=this.recipeService.getRecipeTypes(),this.route.params.subscribe(o=>{this.id=o.id,this.editMode=o.id!=null}),this.initForm()}initForm(){let o="",t="",n="",d="",b="",$="",X=new se([]);if(this.editMode){let x=this.recipeService.getRecipe(this.id);if(o=x.name,t=x.imageURL,n=x.description,d=x.cookTime,b=x.recipeType,$=x.servings,x.ingredients)for(let B of x.ingredients){let Me=new A({ingredientName:new u(B.ingredientName,g.required),quantity:new u(B.quantity,g.required)});X.push(Me)}}this.recipeForm=new A({name:new u(o,g.required),imageURL:new u(t,g.required),description:new u(n,g.required),cookTime:new u(d,g.required),recipeType:new u(b,g.required),servings:new u($,g.required),ingredients:X})}get controls(){return this.recipeForm.get("ingredients").controls}onSubmit(){let o={name:this.recipeForm.value.name,description:this.recipeForm.value.description,cookTime:this.recipeForm.value.cookTime,recipeType:this.recipeForm.value.recipeType,servings:this.recipeForm.value.servings,imageURL:this.recipeForm.value.imageURL,ingredients:this.recipeForm.value.ingredients};this.editMode?this.recipeService.updateRecipe(this.id,o):this.recipeService.addRecipe(o),this.onCancel()}onCancel(){this.router.navigate(["../"],{relativeTo:this.route}),console.log("clicked on cancel button")}onDeleteIngredient(o){this.recipeForm.get("ingredients").removeAt(o)}onAddIngredient(){this.recipeForm.get("ingredients").push(new A({ingredientName:new u(null,g.required),quantity:new u(null,g.required)}))}static \u0275fac=function(t){return new(t||r)(l(M),l(D),l(P))};static \u0275cmp=s({type:r,selectors:[["app-recipe-edit"]],decls:59,vars:5,consts:[["imageURL",""],[1,"container"],[1,"col-xs-12"],[3,"ngSubmit","formGroup"],[1,"button-group"],["type","submit",1,"button","save",3,"disabled"],["type","submit",1,"button","cancel",3,"click"],[1,"row"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"col-md-3"],["for","time"],["type","text","id","time","formControlName","cookTime",1,"form-control"],[1,"col-md-6"],["for","type"],["id","type","formControlName","recipeType",1,"form-select"],["disabled","","value",""],[3,"value"],["for","servings"],["type","text","id","servings","formControlName","servings",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imageURL",1,"form-control"],[3,"src"],["for","description"],["id","description","rows","12","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],[1,"my-2"],[1,"row",3,"formGroupName"],["type","button",1,"button","addNew",3,"click"],[1,"col-md-8"],["type","text","formControlName","ingredientName",1,"form-control"],[1,"col-md-2"],["type","text","formControlName","quantity",1,"form-control"],["type","button",1,"button","deleteIng",3,"click"],[3,"icon"]],template:function(t,n){if(t&1){let d=k();i(0,"div",1)(1,"div",2)(2,"form",3),f("ngSubmit",function(){return _(d),h(n.onSubmit())}),i(3,"div",4)(4,"button",5),a(5," Save "),e(),i(6,"button",6),f("click",function(){return _(d),h(n.onCancel())}),a(7," Cancel "),e()(),i(8,"div",7)(9,"div",8)(10,"label",9),a(11,"Recipe Name"),e(),p(12,"input",10),e()(),i(13,"div",7)(14,"div",11)(15,"div",8)(16,"label",12),a(17,"Cook Time"),e(),p(18,"input",13),e()(),i(19,"div",14)(20,"div",8)(21,"label",15),a(22,"Recipe Type"),e(),i(23,"select",16)(24,"option",17),a(25,"Choose"),e(),S(26,De,2,2,"option",18,U),e()()(),i(28,"div",11)(29,"div",8)(30,"label",19),a(31,"Servings"),e(),p(32,"input",20),e()()(),i(33,"div",7)(34,"div",2)(35,"div",8)(36,"label",21),a(37,"Image URL"),e(),p(38,"input",22,0),e()()(),i(40,"div",7),p(41,"img",23),e(),i(42,"div",7)(43,"div",2)(44,"div",8)(45,"label",24),a(46,"Description"),e(),p(47,"textarea",25),e()()(),i(48,"div",7)(49,"div",26)(50,"label",27),a(51,"Ingredients"),e(),S(52,ke,8,2,"div",28,U),p(54,"hr"),i(55,"div",7)(56,"div",2)(57,"button",29),f("click",function(){return _(d),h(n.onAddIngredient())}),a(58," Add Ingredient "),e()()()()()()()()}if(t&2){let d=H(39);c(2),m("formGroup",n.recipeForm),c(2),m("disabled",!n.recipeForm.valid),c(22),R(n.recipeTypes),c(15),K(d.value?"uploadImg":""),m("src",d.value,y),c(11),R(n.controls)}},dependencies:[w,O,fe,oe,de,le,te,me,ie,ne,re,pe,ae,ce],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1.5px solid red}.container[_ngcontent-%COMP%]{background-color:#fff;margin-top:20px;margin-bottom:20px;border-radius:6px;width:100%;padding:20px}.button[_ngcontent-%COMP%]{text-align:center;background:none;border-radius:5px;margin-bottom:12px;font-size:14px;padding:5px 8px}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px}.save[_ngcontent-%COMP%]{border:1px solid #008104;background-color:#008104;color:#fff;margin-bottom:0}.cancel[_ngcontent-%COMP%]{border:1px solid #f44336;background-color:#f44336;color:#fff;margin-bottom:0}.disabled[_ngcontent-%COMP%]{background:#567a57;color:#fff;cursor:not-allowed}.form-group[_ngcontent-%COMP%]{margin-bottom:8px}.uploadImg[_ngcontent-%COMP%]{width:50%;height:300px;margin-top:8px;margin-bottom:8px;border-radius:6px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:none;background-color:#f7f7f7}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{background-color:#f3f3f3}label[_ngcontent-%COMP%]{font-size:16px;margin-bottom:5px;font-weight:500}.addNew[_ngcontent-%COMP%]{border:1px solid #a70082;margin-bottom:0;background:#a70082;color:#fff}.deleteIng[_ngcontent-%COMP%]{border:1px solid #f44336;background-color:#f44336;color:#fff;padding:4px 8px}"]})};var Te=(r,o)=>o.ingId;function Ie(r,o){r&1&&(i(0,"div",13)(1,"h5"),a(2,"Ingredients"),e()())}function Ee(r,o){if(r&1&&(i(0,"li"),a(1),e()),r&2){let t=o.$implicit;c(),J(" ",t.ingredientName," - ",t.quantity," ")}}function Fe(r,o){if(r&1){let t=k();i(0,"button",17),f("click",function(){_(t);let d=C(2);return h(d.addToShoppingList())}),p(1,"fa-icon",3),a(2," Add to Shopping List "),e()}if(r&2){let t=C(2);c(),m("icon",t.faRectangleList)}}function Ne(r,o){if(r&1&&(i(0,"button",16),p(1,"fa-icon",3),a(2," Added to Shopping List "),e()),r&2){let t=C(2);c(),m("icon",t.faCheckSquare)}}function Le(r,o){if(r&1&&(i(0,"div",13),N(1,Fe,3,1,"button",15)(2,Ne,3,1,"button",16),e()),r&2){let t=C();c(),L(t.addedToSL?t.addedToSL?2:-1:1)}}var G=class r{constructor(o,t,n){this.recipeService=o;this.route=t;this.router=n}recipeDetail;id;addedToSL=!1;faPenToSquare=ve;faTrash=Ce;faRectangleList=be;faCheckSquare=ue;ngOnInit(){this.route.params.subscribe(o=>{this.id=+o.id,this.recipeDetail=this.recipeService.getRecipe(this.id)})}addToShoppingList(){let o=this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);this.addedToSL=!0}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}static \u0275fac=function(t){return new(t||r)(l(D),l(M),l(P))};static \u0275cmp=s({type:r,selectors:[["app-recipe-detail"]],decls:40,vars:11,consts:[[1,"container"],[1,"manage"],[1,"button","edit",3,"click"],[3,"icon"],[1,"button","delete",3,"click"],[1,"recipeName"],[1,"recipepic"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],[1,"details"],[1,"time-servings"],[1,"recipeDesc"],[1,"description"],[1,"ingredient"],[1,"header"],[1,""],[1,"button","addSL"],["disabled","",1,"button","addedSL"],[1,"button","addSL",3,"click"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return n.onEditRecipe()}),p(3,"fa-icon",3),a(4," Edit "),e(),i(5,"button",4),f("click",function(){return n.onDeleteRecipe()}),p(6,"fa-icon",3),a(7," Delete "),e()(),i(8,"div",5)(9,"h3"),a(10),e()(),i(11,"div",6),p(12,"img",7),e(),i(13,"div",8)(14,"div",9)(15,"p"),a(16,"COOK TIME"),e(),i(17,"p"),a(18),e()(),i(19,"div",9)(20,"p"),a(21,"SERVINGS"),e(),i(22,"p"),a(23),e()(),i(24,"div",9)(25,"p"),a(26,"TYPE"),e(),i(27,"p"),a(28),e()()(),i(29,"div",10)(30,"h5"),a(31,"Description"),e(),i(32,"div",11),a(33),e()(),i(34,"div",12),N(35,Ie,3,0,"div",13),i(36,"ul",14),S(37,Ee,2,2,"li",null,Te),e()(),N(39,Le,3,1,"div",13),e()),t&2&&(c(3),m("icon",n.faPenToSquare),c(3),m("icon",n.faTrash),c(4),v(n.recipeDetail.name),c(2),Y("alt",n.recipeDetail.name),m("src",n.recipeDetail.imageURL,y),c(6),v(n.recipeDetail.cookTime),c(5),v(n.recipeDetail.servings),c(5),v(n.recipeDetail.recipeType),c(5),v(n.recipeDetail.description),c(2),L(n.recipeDetail.ingredients.length!==0?35:-1),c(2),R(n.recipeDetail.ingredients),c(2),L(n.recipeDetail.ingredients.length!==0?39:-1))},dependencies:[w,O],styles:[".container[_ngcontent-%COMP%]{background-color:#fff;margin-top:20px;margin-bottom:20px;border-radius:5px;width:100%;font-family:Verdana,Geneva,Tahoma,sans-serif;padding:10px}.recipeName[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-bottom:0;padding:10px;font-weight:600}.recipepic[_ngcontent-%COMP%]{text-align:center}.recipepic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;height:250px;border-radius:4px;margin-top:10px;margin-bottom:10px}h5[_ngcontent-%COMP%]{text-align:center;font-weight:700;margin-bottom:10px;margin-top:10px}.description[_ngcontent-%COMP%]{font-size:14px;text-align:center;padding-left:15px;padding-right:15px}.ingredient[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;text-align:center}.ingredient[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border:1px solid #ededed;border-radius:5px;background-color:#ffeae8;display:inline-block;color:#2d2013;font-size:12px;font-weight:600;padding:5px;margin:0 5px 5px 0}.header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}.button[_ngcontent-%COMP%]{text-align:center;background:none;border-radius:5px;margin-bottom:12px;font-size:14px;padding:5px 8px}.addSL[_ngcontent-%COMP%]:hover{background-color:#001f40;color:#fff}.addedSL[_ngcontent-%COMP%]{background-color:#008104;color:#fff;border:1px solid #008104}.manage[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:0}.delete[_ngcontent-%COMP%]{border:1px solid #f44336;color:#f44336;margin-bottom:0}.edit[_ngcontent-%COMP%]{border:1px solid #0a66c2;color:#0a66c2;margin-bottom:0}.edit[_ngcontent-%COMP%]:hover{background-color:#0a66c2;color:#fff}.delete[_ngcontent-%COMP%]:hover{background-color:#f44336;color:#fff}.details[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:2px dashed #00003d;border-radius:5px;margin-left:25%;margin-right:25%;padding:8px}.time-servings[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:15px;margin-right:15px}.time-servings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{font-size:14px;margin-bottom:0;color:#eaa700;text-align:center;font-weight:600}.time-servings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{font-size:13px;text-align:center;margin-bottom:0}"]})};var at=[{path:"",component:z,children:[{path:"",component:q},{path:"new",component:F},{path:":id",component:G},{path:":id/edit",component:F}]}];export{at as recipeRoutes};
