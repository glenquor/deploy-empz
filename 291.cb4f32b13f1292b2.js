"use strict";(self.webpackChunkempz_ui=self.webpackChunkempz_ui||[]).push([[291],{291:(WN,B2,o)=>{o.r(B2),o.d(B2,{HomeModule:()=>H});var z=o(895),y2=o(322),c=o(256);const o7=["navbar"];class m{constructor(e){this.renderer2=e}ngOnInit(){}checkScroll(){const e=window.pageYOffset,a=this.navbar.nativeElement;e<=0?(this.renderer2.setStyle(a,"position","sticky"),this.renderer2.removeStyle(a,"width")):(this.renderer2.setStyle(a,"position","fixed"),this.renderer2.setStyle(a,"width","100%"))}}m.\u0275fac=function(e){return new(e||m)(c.Y36(c.Qsj))},m.\u0275cmp=c.Xpm({type:m,selectors:[["app-navbar"]],viewQuery:function(e,a){if(1&e&&c.Gf(o7,5),2&e){let s;c.iGM(s=c.CRH())&&(a.navbar=s.first)}},hostBindings:function(e,a){1&e&&c.NdJ("scroll",function(f){return a.checkScroll(f)},!1,c.Jf7)},decls:6,vars:0,consts:[[1,"navbar"],["navbar",""],["src","../../../../../assets/logo-empz.png","alt","",1,"logo"],[1,"name-div"],[1,"name"]],template:function(e,a){1&e&&(c.TgZ(0,"div",0,1),c._UZ(2,"img",2),c.TgZ(3,"div",3)(4,"p",4),c._uU(5," Escuela de Manejo PZ "),c.qZA()()())},styles:[".navbar[_ngcontent-%COMP%]{display:flex;position:sticky;top:0;align-items:center;justify-content:flex-start;padding:10px;background:#FFFDFA;border-bottom:1px solid #ebebeb;z-index:2}.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:50px}.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]{margin-left:-9px}.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:inline-block;margin-block-start:0;margin-block-end:0;font-family:Montserrat,sans-serif;transform:scaleX(.85);font-weight:700;color:#000c}@media screen and (min-width: 0px){.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:12pt}}@media screen and (min-width: 540px){.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:12pt}}@media screen and (min-width: 768px){.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14pt}}"]});var z4={prefix:"fas",iconName:"circle-chevron-up",icon:[512,512,["chevron-circle-up"],"f139","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]},E8={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},I8={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},r=o(340),P2=o(216);const FN=function(i){return{active:i}};function DN(i,e){if(1&i){const a=c.EpF();c.TgZ(0,"span",10),c.NdJ("click",function(){const n=c.CHM(a).index,l=c.oxw();return c.KtG(l.goToSlide(n))}),c.qZA()}if(2&i){const a=e.index,s=c.oxw();c.Q6J("ngClass",c.VKq(1,FN,s.currentIndex===a))}}class p{constructor(){this.faChevronLeft=E8,this.faChevronRight=I8,this.slides=[],this.currentSlide={},this.currentIndex=0,this.animationState=0,this.previousIndex=0,this.nextIndex=1,this.disabled=!1}ngOnInit(){this.previousIndex=this.slides.length-1,this.resetTimer()}ngOnDestroy(){window.clearTimeout(this.timeoutId)}resetTimer(){this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>this.goToNext(),5e3)}goToPrevious(){this.disabled=!0;const a=0===this.currentIndex?this.slides.length-1:this.currentIndex-1;this.resetTimer(),this.currentIndex=a,this.previousIndex=0===this.currentIndex?this.slides.length-1:this.currentIndex-1,this.nextIndex=this.currentIndex===this.slides.length-1?0:this.currentIndex+1,0===this.currentIndex&&this.animationState<-50?this.animationState=0:this.animationState--,setTimeout(()=>{this.disabled=!1},550)}goToNext(){this.disabled=!0;const a=this.currentIndex===this.slides.length-1?0:this.currentIndex+1;this.resetTimer(),this.currentIndex=a,this.previousIndex=0===this.currentIndex?this.slides.length-1:this.currentIndex-1,this.nextIndex=this.currentIndex===this.slides.length-1?0:this.currentIndex+1,0===this.currentIndex&&this.animationState>50?this.animationState=0:this.animationState++,setTimeout(()=>{this.disabled=!1},550)}goToSlide(e){this.disabled=!0,this.resetTimer(),this.currentIndex<e?this.animationState++:this.animationState--,this.currentIndex=e,setTimeout(()=>{this.disabled=!1},550)}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=c.Xpm({type:p,selectors:[["app-carousel"]],inputs:{slides:"slides"},decls:21,vars:16,consts:[[1,"slider"],[1,"leftArrow"],[3,"icon","click"],[1,"rightArrow"],[1,"slides"],[1,"slide"],["alt","",1,"image",3,"src"],[1,"description"],[1,"dotsContainer"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"dot",3,"ngClass","click"]],template:function(e,a){1&e&&(c.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"fa-icon",2),c.NdJ("click",function(){return a.goToPrevious()}),c.qZA()(),c.TgZ(4,"div",3)(5,"fa-icon",2),c.NdJ("click",function(){return a.goToNext()}),c.qZA()()(),c.TgZ(6,"div",4)(7,"div",5),c._UZ(8,"img",6),c.TgZ(9,"p",7),c._uU(10),c.qZA()(),c.TgZ(11,"div",5),c._UZ(12,"img",6),c.TgZ(13,"p",7),c._uU(14),c.qZA()(),c.TgZ(15,"div",5),c._UZ(16,"img",6),c.TgZ(17,"p",7),c._uU(18),c.qZA()()(),c.TgZ(19,"div",8),c.YNc(20,DN,1,3,"span",9),c.qZA()()),2&e&&(c.xp6(2),c.ekj("disabled",a.disabled),c.xp6(1),c.Q6J("icon",a.faChevronLeft),c.xp6(1),c.ekj("disabled",a.disabled),c.xp6(1),c.Q6J("icon",a.faChevronRight),c.xp6(1),c.Q6J("@slide",a.animationState),c.xp6(2),c.s9C("src",a.slides[a.previousIndex].url,c.LSH),c.xp6(2),c.hij(" ",a.slides[a.previousIndex].description," "),c.xp6(2),c.s9C("src",a.slides[a.currentIndex].url,c.LSH),c.xp6(2),c.hij(" ",a.slides[a.currentIndex].description," "),c.xp6(2),c.s9C("src",a.slides[a.nextIndex].url,c.LSH),c.xp6(2),c.hij(" ",a.slides[a.nextIndex].description," "),c.xp6(1),c.ekj("disabled",a.disabled),c.xp6(1),c.Q6J("ngForOf",a.slides))},dependencies:[z.mk,z.sg,P2.BN],styles:[".slider[_ngcontent-%COMP%]{position:relative;height:100%}.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{display:flex;justify-content:space-around}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{column-gap:65px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{column-gap:100px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{column-gap:100px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{column-gap:450px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{column-gap:450px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{column-gap:450px}}.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:50px}.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:center}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:200px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:280px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:center;line-height:1.8;padding-top:5px}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:10pt;width:300px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:10pt;width:400px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:10pt;width:450px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12pt;width:500px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12pt;width:550px}}@media screen and (min-width: 900px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12pt;width:700px}}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:80px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:45px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:45px;color:#183153;z-index:1;cursor:pointer}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:10px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:10px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:10px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:32px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:32px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:32px}}.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]:hover{opacity:.8}.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:45px;color:#183153;z-index:1;cursor:pointer}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:10px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:10px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:10px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:32px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:32px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:32px}}.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]:hover{opacity:.8}.slider[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{pointer-events:none}.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%);margin-bottom:40px}.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{cursor:pointer;border:3px solid rgba(24,49,83,.5);transition:opacity .6s ease;margin:0 5px;height:8px;width:8px;border-radius:50%}.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#183153}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{border:3px solid rgba(24,49,83,.5)}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background-color:#183153}}"],data:{animation:[(0,r.X$)("slide",[(0,r.SB)("void",(0,r.oB)({transform:"translateX(-100%)",opacity:0})),(0,r.SB)("*",(0,r.oB)({transform:"translateX(0)",opacity:1})),(0,r.eR)("void => *",[(0,r.jt)(500,(0,r.oB)({transform:"translateX(0)",opacity:1}))]),(0,r.eR)("* => void",[(0,r.jt)(500,(0,r.oB)({transform:"translateX(0)",opacity:1}))]),(0,r.eR)(":decrement",[(0,r.jt)(500,(0,r.F4)([(0,r.oB)({transform:"translateX(-77%)"}),(0,r.oB)({transform:"translateX(0)"})]))]),(0,r.eR)(":increment",[(0,r.jt)(500,(0,r.F4)([(0,r.oB)({transform:"translateX(77%)"}),(0,r.oB)({transform:"translateX(0)"})]))])])]}});class L{constructor(e){this.scroller=e,this.slides=[{url:"../../../../../assets/carousel/Perla.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue, nibh ac aliquam pretium, tortor leo malesuada dui, vel facilisis erat quam sit amet mauris. Nunc tempus risus eget sagittis feugiat. Suspendisse vehicula et risus quis volutpat."},{url:"../../../../../assets/carousel/Luffy.jpg",description:"Proin iaculis lacus sapien, eu commodo nibh porta quis. Nulla malesuada suscipit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce in urna odio. Integer nibh risus."},{url:"../../../../../assets/carousel/Eevee.JPG",description:"Proin tincidunt lorem libero, vitae pellentesque nulla sagittis consectetur. Aenean rutrum sem ut convallis auctor. Duis pretium sem in ligula volutpat lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}]}ngOnInit(){}scrollToElement(){this.scroller.scrollToAnchor("moreInfo")}}L.\u0275fac=function(e){return new(e||L)(c.Y36(z.EM))},L.\u0275cmp=c.Xpm({type:L,selectors:[["app-introduction"]],decls:7,vars:1,consts:[[1,"introduction-container"],[3,"slides"],[1,"btn-group"],[1,"booking-btn"],["id","moreInfo",1,"information-btn",3,"click"]],template:function(e,a){1&e&&(c.TgZ(0,"div",0),c._UZ(1,"app-carousel",1),c.TgZ(2,"div",2)(3,"a",3),c._uU(4,"Reservar"),c.qZA(),c.TgZ(5,"div",4),c.NdJ("click",function(){return a.scrollToElement()}),c._uU(6,"M\xe1s informaci\xf3n"),c.qZA()()()),2&e&&(c.xp6(1),c.Q6J("slides",a.slides))},dependencies:[p],styles:[".introduction-container[_ngcontent-%COMP%]{height:92vh;width:100%;position:relative;overflow:hidden;background:#FFFDFA;box-shadow:0 1px 4px -2px #0000004d;z-index:1}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:50%;transform:translate(-50%);row-gap:10px}@media screen and (min-width: 0px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{top:75%}}@media screen and (min-width: 580px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{top:80%}}@media screen and (min-width: 810px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{top:80%}}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .booking-btn[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:1rem;border-color:#183153;font-weight:700;text-transform:uppercase;padding:10px 42.5px;color:#fffdfa;background-color:#183153}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .booking-btn[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#183153cc;border-color:#183153cc}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:.65rem;text-transform:uppercase;background-color:#fffdfa;color:#183153;font-weight:700}@media screen and (min-width: 0px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]{text-decoration:underline}}@media screen and (min-width: 700px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]{text-decoration:none}}@media screen and (min-width: 810px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]{text-decoration:none}}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}"]});const RN=["firstBlock"],ON=["secondBlock"],_N=["thirdBlock"],UN=["fourthBlock"],qN=["scrollUp"];class d{constructor(e,a){this.renderer2=e,this.scroller=a,this.faChevronCircleUp=z4,this.infoBlock=[{url:"../../../../../assets/carousel/Perla.jpg",title:"Clases de manejo",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue, nibh ac aliquam pretium, tortor leo malesuada dui, vel facilisis erat quam sit amet mauris. Nunc tempus risus eget sagittis feugiat. Suspendisse vehicula et risus quis volutpat."},{url:"../../../../../assets/carousel/Luffy.jpg",title:"Alquiler de carro",description:"Proin iaculis lacus sapien, eu commodo nibh porta quis. Nulla malesuada suscipit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce in urna odio. Integer nibh risus."},{url:"../../../../../assets/carousel/Eevee.JPG",title:"Coordinaci\xf3n dictamen m\xe9dico",description:"Proin tincidunt lorem libero, vitae pellentesque nulla sagittis consectetur. Aenean rutrum sem ut convallis auctor. Duis pretium sem in ligula volutpat lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{url:"../../../../../assets/carousel/Eevee.JPG",title:"Alquiler de moto",description:"Proin tincidunt lorem libero, vitae pellentesque nulla sagittis consectetur. Aenean rutrum sem ut convallis auctor. Duis pretium sem in ligula volutpat lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}]}isOddOrEven(e){return 0===e?"info-block-left-first":e%2?"info-block-right":"info-block-left"}checkScroll(){const e=this.firstBlock.nativeElement,a=this.secondBlock.nativeElement,s=this.thirdBlock.nativeElement,f=this.fourthBlock.nativeElement,n=this.scrollUp.nativeElement,l=window.pageYOffset;window.innerWidth<700?(l>=e.offsetTop+130?this.inAnimation(e):this.outAnimation(e,-100),l>=a.offsetTop+11?this.inAnimation(a):this.outAnimation(a,100),l>=s.offsetTop+6?this.inAnimation(s):this.outAnimation(s,-100),l>=f.offsetTop-4?this.inAnimation(f):this.outAnimation(f,100)):(l>=e.offsetTop+70?this.inAnimation(e):this.outAnimation(e,-100),l>=a.offsetTop+63?this.inAnimation(a):this.outAnimation(a,100),l>=s.offsetTop+61?this.inAnimation(s):this.outAnimation(s,-100),l>=f.offsetTop+59?this.inAnimation(f):this.outAnimation(f,100)),l>=n.offsetTop-400?(this.renderer2.setStyle(n,"transition-timing-function","ease-in"),this.renderer2.setStyle(n,"transition","0.2s"),this.renderer2.setStyle(n,"opacity","1")):(this.renderer2.setStyle(n,"transition-timing-function","ease-in"),this.renderer2.setStyle(n,"transition","0.1s"),this.renderer2.setStyle(n,"opacity","0"))}inAnimation(e){this.renderer2.setStyle(e,"transition-timing-function","ease-in"),this.renderer2.setStyle(e,"transition","0.5s"),this.renderer2.setStyle(e,"opacity","1"),this.renderer2.setStyle(e,"transform","translateX(0)")}outAnimation(e,a){this.renderer2.setStyle(e,"transition-timing-function","ease-out"),this.renderer2.setStyle(e,"transition","0.5s"),this.renderer2.setStyle(e,"opacity","0"),this.renderer2.setStyle(e,"transform",`translateX(${a}%)`)}goToTop(){this.scroller.scrollToPosition([0,0])}}d.\u0275fac=function(e){return new(e||d)(c.Y36(c.Qsj),c.Y36(z.EM))},d.\u0275cmp=c.Xpm({type:d,selectors:[["app-information"]],viewQuery:function(e,a){if(1&e&&(c.Gf(RN,5),c.Gf(ON,5),c.Gf(_N,5),c.Gf(UN,5),c.Gf(qN,5)),2&e){let s;c.iGM(s=c.CRH())&&(a.firstBlock=s.first),c.iGM(s=c.CRH())&&(a.secondBlock=s.first),c.iGM(s=c.CRH())&&(a.thirdBlock=s.first),c.iGM(s=c.CRH())&&(a.fourthBlock=s.first),c.iGM(s=c.CRH())&&(a.scrollUp=s.first)}},hostBindings:function(e,a){1&e&&c.NdJ("scroll",function(f){return a.checkScroll(f)},!1,c.Jf7)("resize",function(f){return a.checkScroll(f)},!1,c.Jf7)},decls:33,vars:13,consts:[[1,"information-container"],[1,"information"],[1,"info-block-left-first"],["firstBlock",""],[1,"title"],[1,"description"],["alt","",1,"image",3,"src"],[1,"info-block-right"],["secondBlock",""],[1,"info-block-left"],["thirdBlock",""],["fourthBlock",""],[1,"upArrow"],["scrollUp",""],[3,"icon","click"]],template:function(e,a){1&e&&(c.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3)(4,"h1",4),c._uU(5),c.qZA(),c.TgZ(6,"p",5),c._uU(7),c.qZA(),c._UZ(8,"img",6),c.qZA(),c.TgZ(9,"div",7,8)(11,"h1",4),c._uU(12),c.qZA(),c.TgZ(13,"p",5),c._uU(14),c.qZA(),c._UZ(15,"img",6),c.qZA(),c.TgZ(16,"div",9,10)(18,"h1",4),c._uU(19),c.qZA(),c.TgZ(20,"p",5),c._uU(21),c.qZA(),c._UZ(22,"img",6),c.qZA(),c.TgZ(23,"div",7,11)(25,"h1",4),c._uU(26),c.qZA(),c.TgZ(27,"p",5),c._uU(28),c.qZA(),c._UZ(29,"img",6),c.qZA()(),c.TgZ(30,"div",12,13)(32,"fa-icon",14),c.NdJ("click",function(){return a.goToTop()}),c.qZA()()()),2&e&&(c.xp6(5),c.Oqu(a.infoBlock[0].title),c.xp6(2),c.Oqu(a.infoBlock[0].description),c.xp6(1),c.s9C("src",a.infoBlock[0].url,c.LSH),c.xp6(4),c.Oqu(a.infoBlock[1].title),c.xp6(2),c.Oqu(a.infoBlock[1].description),c.xp6(1),c.s9C("src",a.infoBlock[1].url,c.LSH),c.xp6(4),c.Oqu(a.infoBlock[2].title),c.xp6(2),c.Oqu(a.infoBlock[2].description),c.xp6(1),c.s9C("src",a.infoBlock[2].url,c.LSH),c.xp6(4),c.Oqu(a.infoBlock[3].title),c.xp6(2),c.Oqu(a.infoBlock[3].description),c.xp6(1),c.s9C("src",a.infoBlock[3].url,c.LSH),c.xp6(3),c.Q6J("icon",a.faChevronCircleUp))},dependencies:[P2.BN],styles:[".information-container[_ngcontent-%COMP%]{height:92vh;width:100%;position:relative;overflow:visible;background:#FFFDFA}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#FFFDFA;overflow:visible;position:absolute;width:75%;box-shadow:1px 2px 20px #0000004d;left:50%;transform:translate(-50%);overflow-x:hidden}@media screen and (min-width: 0px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{padding:65px 50px}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{padding:70px}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px;align-self:flex-start;opacity:0;transform:translate(-100%)}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14pt}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:justify}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:flex-start;height:200px}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px;align-items:flex-end;align-self:flex-end;opacity:0;transform:translate(100%)}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14pt}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:justify}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:flex-end;height:200px}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px;align-self:flex-start;opacity:0;transform:translate(-100%)}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]{width:50%}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14pt}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:justify}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:flex-start;height:200px}.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{position:fixed;color:#0003;width:40px;font-size:40px;bottom:4%;z-index:10;opacity:0}@media screen and (min-width: 0px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{right:7.5%}}@media screen and (min-width: 480px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{right:7.5%}}@media screen and (min-width: 580px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{right:7.5%}}@media screen and (min-width: 630px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{right:7.5%}}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{right:7.5%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{bottom:2%;right:7%}}@media screen and (min-width: 1100px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{bottom:2%;right:8.5%}}@media screen and (min-width: 1600px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]{bottom:2%;right:9.5%}}@media screen and (min-width: 0px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]:hover{color:#0003}}@media screen and (min-width: 630px){.information-container[_ngcontent-%COMP%]   .upArrow[_ngcontent-%COMP%]:hover{color:#0006}}"]});class u{constructor(){}ngOnInit(){}}u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=c.Xpm({type:u,selectors:[["app-home-page"]],decls:3,vars:0,template:function(e,a){1&e&&c._UZ(0,"app-navbar")(1,"app-introduction")(2,"app-information")},dependencies:[m,L,d]});const GN=[{path:"",component:u}];class t{}t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[y2.Bz.forChild(GN),y2.Bz]});class H{}H.\u0275fac=function(e){return new(e||H)},H.\u0275mod=c.oAB({type:H}),H.\u0275inj=c.cJS({imports:[z.ez,t,P2.uH]})}}]);