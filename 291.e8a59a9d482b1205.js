"use strict";(self.webpackChunkempz_ui=self.webpackChunkempz_ui||[]).push([[291],{291:(_N,A2,l)=>{l.r(A2),l.d(A2,{HomeModule:()=>n});var R=l(895),P2=l(322),c=l(256);class H{constructor(){}ngOnInit(){}}H.\u0275fac=function(a){return new(a||H)},H.\u0275cmp=c.Xpm({type:H,selectors:[["app-navbar"]],decls:5,vars:0,consts:[[1,"navbar"],["src","../../../../../assets/logo-empz.png","alt","",1,"logo"],[1,"name-div"],[1,"name"]],template:function(a,e){1&a&&(c.TgZ(0,"div",0),c._UZ(1,"img",1),c.TgZ(2,"div",2)(3,"p",3),c._uU(4," Escuela de Manejo PZ "),c.qZA()()())},styles:[".navbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:10px;background:#FFFDFA;border-bottom:1px solid #ebebeb;z-index:2}.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:50px}.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]{margin-left:-9px}.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:inline-block;margin-block-start:0;margin-block-end:0;font-family:Montserrat,sans-serif;transform:scaleX(.85);font-weight:700;color:#000c}@media screen and (min-width: 0px){.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:12pt}}@media screen and (min-width: 540px){.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:12pt}}@media screen and (min-width: 768px){.navbar[_ngcontent-%COMP%]   .name-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14pt}}"]});var _8={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},G8={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},s=l(340),f7=l(216);const yN=function(r){return{active:r}};function TN(r,a){if(1&r){const e=c.EpF();c.TgZ(0,"span",9),c.NdJ("click",function(){const t=c.CHM(e).index,qN=c.oxw();return c.KtG(qN.goToSlide(t))}),c.qZA()}if(2&r){const e=a.index,i=c.oxw();c.Q6J("ngClass",c.VKq(1,yN,i.currentIndex===e))}}class h{constructor(){this.faChevronLeft=_8,this.faChevronRight=G8,this.slides=[],this.currentSlide={},this.currentIndex=0,this.animationState=0}ngOnInit(){this.resetTimer(),this.getCurrentImage()}ngOnDestroy(){window.clearTimeout(this.timeoutId)}resetTimer(){this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>this.goToNext(),5e3)}goToPrevious(){const e=0===this.currentIndex?this.slides.length-1:this.currentIndex-1;this.resetTimer(),this.currentIndex=e,0===this.currentIndex&&this.animationState<-50?this.animationState=0:this.animationState--,this.getCurrentImage()}goToNext(){const e=this.currentIndex===this.slides.length-1?0:this.currentIndex+1;this.resetTimer(),this.currentIndex=e,0===this.currentIndex&&this.animationState>50?this.animationState=0:this.animationState++,this.getCurrentImage()}goToSlide(a){this.resetTimer(),this.currentIndex<a?this.animationState++:this.animationState--,this.currentIndex=a,this.getCurrentImage()}getCurrentImage(){this.currentSlide={image:`${this.slides[this.currentIndex].url}`,description:this.slides[this.currentIndex].description}}}h.\u0275fac=function(a){return new(a||h)},h.\u0275cmp=c.Xpm({type:h,selectors:[["app-carousel"]],inputs:{slides:"slides"},decls:12,vars:6,consts:[[1,"slider"],[1,"leftArrow"],[3,"icon","click"],[1,"rightArrow"],[1,"slide"],["alt","",1,"image",3,"src"],[1,"description"],[1,"dotsContainer"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"dot",3,"ngClass","click"]],template:function(a,e){1&a&&(c.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"fa-icon",2),c.NdJ("click",function(){return e.goToPrevious()}),c.qZA()(),c.TgZ(4,"div",3)(5,"fa-icon",2),c.NdJ("click",function(){return e.goToNext()}),c.qZA()()(),c.TgZ(6,"div",4),c._UZ(7,"img",5),c.TgZ(8,"p",6),c._uU(9),c.qZA()(),c.TgZ(10,"div",7),c.YNc(11,TN,1,3,"span",8),c.qZA()()),2&a&&(c.xp6(3),c.Q6J("icon",e.faChevronLeft),c.xp6(2),c.Q6J("icon",e.faChevronRight),c.xp6(1),c.Q6J("@slide",e.animationState),c.xp6(1),c.s9C("src",e.currentSlide.image,c.LSH),c.xp6(2),c.hij(" ",e.currentSlide.description," "),c.xp6(2),c.Q6J("ngForOf",e.slides))},dependencies:[R.mk,R.sg,f7.BN],styles:[".slider[_ngcontent-%COMP%]{position:relative;height:100%}.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:50px}.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:center}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:200px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:280px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px}}.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:center;line-height:1.8;padding-top:5px}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:10pt;width:300px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:10pt;width:400px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:10pt;width:450px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12pt;width:500px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12pt;width:550px}}@media screen and (min-width: 900px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12pt;width:700px}}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:80px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:45px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{top:20px}}.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:45px;color:#183153;z-index:1;cursor:pointer}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:10px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:10px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:10px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:32px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:32px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]{right:32px}}.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%]:hover{opacity:.8}.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:45px;color:#183153;z-index:1;cursor:pointer}@media screen and (min-width: 0px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:10px}}@media screen and (min-width: 480px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:10px}}@media screen and (min-width: 580px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:10px}}@media screen and (min-width: 630px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:32px}}@media screen and (min-width: 700px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:32px}}@media screen and (min-width: 810px){.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]{left:32px}}.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%]:hover{opacity:.8}.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%);margin-bottom:15px}.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{cursor:pointer;border:3px solid rgba(24,49,83,.5);transition:opacity .6s ease;margin:0 5px;height:8px;width:8px;border-radius:50%}.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background-color:#183153}"],data:{animation:[(0,s.X$)("slide",[(0,s.SB)("void",(0,s.oB)({transform:"translateX(-50%)",opacity:0})),(0,s.SB)("*",(0,s.oB)({transform:"translateX(0)",opacity:1})),(0,s.eR)("void => *",[(0,s.jt)(300,(0,s.oB)({transform:"translateX(0)",opacity:1}))]),(0,s.eR)("* => void",[(0,s.jt)(300,(0,s.oB)({transform:"translateX(0)",opacity:1}))]),(0,s.eR)(":decrement",[(0,s.jt)(300,(0,s.F4)([(0,s.oB)({transform:"translateX(-50%)"}),(0,s.oB)({transform:"translateX(-45%)"}),(0,s.oB)({transform:"translateX(-40%)"}),(0,s.oB)({transform:"translateX(-35%)"}),(0,s.oB)({transform:"translateX(-30%)"}),(0,s.oB)({transform:"translateX(-25%)"}),(0,s.oB)({transform:"translateX(-20%)"}),(0,s.oB)({transform:"translateX(-15%)"}),(0,s.oB)({transform:"translateX(-10%)"}),(0,s.oB)({transform:"translateX(-5%)"}),(0,s.oB)({transform:"translateX(0)"})]))]),(0,s.eR)(":increment",[(0,s.jt)(300,(0,s.F4)([(0,s.oB)({transform:"translateX(50%)"}),(0,s.oB)({transform:"translateX(45%)"}),(0,s.oB)({transform:"translateX(40%)"}),(0,s.oB)({transform:"translateX(35%)"}),(0,s.oB)({transform:"translateX(30%)"}),(0,s.oB)({transform:"translateX(25%)"}),(0,s.oB)({transform:"translateX(20%)"}),(0,s.oB)({transform:"translateX(15%)"}),(0,s.oB)({transform:"translateX(10%)"}),(0,s.oB)({transform:"translateX(5%)"}),(0,s.oB)({transform:"translateX(0)"})]))])])]}});class C{constructor(){this.slides=[{url:"../../../../../assets/carousel/Perla.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue, nibh ac aliquam pretium, tortor leo malesuada dui, vel facilisis erat quam sit amet mauris. Nunc tempus risus eget sagittis feugiat. Suspendisse vehicula et risus quis volutpat."},{url:"../../../../../assets/carousel/Luffy.jpg",description:"Proin iaculis lacus sapien, eu commodo nibh porta quis. Nulla malesuada suscipit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce in urna odio. Integer nibh risus."},{url:"../../../../../assets/carousel/Eevee.JPG",description:"Proin tincidunt lorem libero, vitae pellentesque nulla sagittis consectetur. Aenean rutrum sem ut convallis auctor. Duis pretium sem in ligula volutpat lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}]}ngOnInit(){}}C.\u0275fac=function(a){return new(a||C)},C.\u0275cmp=c.Xpm({type:C,selectors:[["app-introduction"]],decls:7,vars:1,consts:[[1,"introduction-container"],[3,"slides"],[1,"btn-group"],[1,"booking-btn"],[1,"information-btn"]],template:function(a,e){1&a&&(c.TgZ(0,"div",0),c._UZ(1,"app-carousel",1),c.TgZ(2,"div",2)(3,"a",3),c._uU(4,"Reservar"),c.qZA(),c.TgZ(5,"div",4),c._uU(6,"M\xe1s informaci\xf3n"),c.qZA()()()),2&a&&(c.xp6(1),c.Q6J("slides",e.slides))},dependencies:[h],styles:[".introduction-container[_ngcontent-%COMP%]{height:92vh;width:100%;position:relative;overflow:hidden;background:#FFFDFA;box-shadow:0 1px 4px -2px #0000004d;z-index:1}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:50%;transform:translate(-50%);row-gap:10px}@media screen and (min-width: 0px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{top:78%}}@media screen and (min-width: 580px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{top:80%}}@media screen and (min-width: 810px){.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{top:80%}}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .booking-btn[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:1rem;border-color:#183153;font-weight:700;text-transform:uppercase;padding:10px 42.5px;color:#fffdfa;background-color:#183153}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .booking-btn[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#183153cc;border-color:#183153cc}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:.65rem;text-transform:uppercase;background-color:#fffdfa;color:#183153;font-weight:700}.introduction-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .information-btn[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}"]});const FN=["firstBlock"],DN=["secondBlock"],RN=["thirdBlock"],UN=["fourthBlock"];class p{constructor(a){this.renderer2=a,this.infoBlock=[{url:"../../../../../assets/carousel/Perla.jpg",title:"Clases de manejo",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue, nibh ac aliquam pretium, tortor leo malesuada dui, vel facilisis erat quam sit amet mauris. Nunc tempus risus eget sagittis feugiat. Suspendisse vehicula et risus quis volutpat."},{url:"../../../../../assets/carousel/Luffy.jpg",title:"Alquiler de carro",description:"Proin iaculis lacus sapien, eu commodo nibh porta quis. Nulla malesuada suscipit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce in urna odio. Integer nibh risus."},{url:"../../../../../assets/carousel/Eevee.JPG",title:"Coordinaci\xf3n dictamen m\xe9dico",description:"Proin tincidunt lorem libero, vitae pellentesque nulla sagittis consectetur. Aenean rutrum sem ut convallis auctor. Duis pretium sem in ligula volutpat lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{url:"../../../../../assets/carousel/Eevee.JPG",title:"Alquiler de moto",description:"Proin tincidunt lorem libero, vitae pellentesque nulla sagittis consectetur. Aenean rutrum sem ut convallis auctor. Duis pretium sem in ligula volutpat lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}]}isOddOrEven(a){return 0===a?"info-block-left-first":a%2?"info-block-right":"info-block-left"}checkScroll(){const a=this.firstBlock.nativeElement,e=this.secondBlock.nativeElement,i=this.thirdBlock.nativeElement,f=this.fourthBlock.nativeElement,t=window.pageYOffset;t>=a.offsetTop+130?(this.renderer2.setStyle(a,"transition-timing-function","ease-in"),this.renderer2.setStyle(a,"transition","0.5s"),this.renderer2.setStyle(a,"opacity","1"),this.renderer2.setStyle(a,"transform","translateX(0)")):(this.renderer2.setStyle(a,"transition-timing-function","ease-out"),this.renderer2.setStyle(a,"transition","0.5s"),this.renderer2.setStyle(a,"opacity","0"),this.renderer2.setStyle(a,"transform","translateX(-100%)")),t>=e.offsetTop+155?(this.renderer2.setStyle(e,"transition-timing-function","ease-in"),this.renderer2.setStyle(e,"transition","0.5s"),this.renderer2.setStyle(e,"opacity","1"),this.renderer2.setStyle(e,"transform","translateX(0)")):(this.renderer2.setStyle(e,"transition-timing-function","ease-out"),this.renderer2.setStyle(e,"transition","0.5s"),this.renderer2.setStyle(e,"opacity","0"),this.renderer2.setStyle(e,"transform","translateX(100%)")),t>=i.offsetTop+170?(this.renderer2.setStyle(i,"transition-timing-function","ease-in"),this.renderer2.setStyle(i,"transition","0.5s"),this.renderer2.setStyle(i,"opacity","1"),this.renderer2.setStyle(i,"transform","translateX(0)")):(this.renderer2.setStyle(i,"transition-timing-function","ease-in"),this.renderer2.setStyle(i,"transition","0.5s"),this.renderer2.setStyle(i,"opacity","0"),this.renderer2.setStyle(i,"transform","translateX(-100%)")),t>=f.offsetTop+174?(this.renderer2.setStyle(f,"transition-timing-function","ease-in"),this.renderer2.setStyle(f,"transition","0.5s"),this.renderer2.setStyle(f,"opacity","1"),this.renderer2.setStyle(f,"transform","translateX(0)")):(this.renderer2.setStyle(f,"transition-timing-function","ease-out"),this.renderer2.setStyle(f,"transition","0.5s"),this.renderer2.setStyle(f,"opacity","0"),this.renderer2.setStyle(f,"transform","translateX(100%)"))}}p.\u0275fac=function(a){return new(a||p)(c.Y36(c.Qsj))},p.\u0275cmp=c.Xpm({type:p,selectors:[["app-information"]],viewQuery:function(a,e){if(1&a&&(c.Gf(FN,5),c.Gf(DN,5),c.Gf(RN,5),c.Gf(UN,5)),2&a){let i;c.iGM(i=c.CRH())&&(e.firstBlock=i.first),c.iGM(i=c.CRH())&&(e.secondBlock=i.first),c.iGM(i=c.CRH())&&(e.thirdBlock=i.first),c.iGM(i=c.CRH())&&(e.fourthBlock=i.first)}},hostBindings:function(a,e){1&a&&c.NdJ("scroll",function(f){return e.checkScroll(f)},!1,c.Jf7)},decls:31,vars:12,consts:[[1,"information-container"],["test",""],[1,"information"],[1,"info-block-left-first"],["firstBlock",""],[1,"title"],[1,"description"],["alt","",1,"image",3,"src"],[1,"info-block-right"],["secondBlock",""],[1,"info-block-left"],["thirdBlock",""],["fourthBlock",""]],template:function(a,e){1&a&&(c.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3,4)(5,"h1",5),c._uU(6),c.qZA(),c.TgZ(7,"p",6),c._uU(8),c.qZA(),c._UZ(9,"img",7),c.qZA(),c.TgZ(10,"div",8,9)(12,"h1",5),c._uU(13),c.qZA(),c.TgZ(14,"p",6),c._uU(15),c.qZA(),c._UZ(16,"img",7),c.qZA(),c.TgZ(17,"div",10,11)(19,"h1",5),c._uU(20),c.qZA(),c.TgZ(21,"p",6),c._uU(22),c.qZA(),c._UZ(23,"img",7),c.qZA(),c.TgZ(24,"div",8,12)(26,"h1",5),c._uU(27),c.qZA(),c.TgZ(28,"p",6),c._uU(29),c.qZA(),c._UZ(30,"img",7),c.qZA()()()),2&a&&(c.xp6(6),c.Oqu(e.infoBlock[0].title),c.xp6(2),c.Oqu(e.infoBlock[0].description),c.xp6(1),c.s9C("src",e.infoBlock[0].url,c.LSH),c.xp6(4),c.Oqu(e.infoBlock[1].title),c.xp6(2),c.Oqu(e.infoBlock[1].description),c.xp6(1),c.s9C("src",e.infoBlock[1].url,c.LSH),c.xp6(4),c.Oqu(e.infoBlock[2].title),c.xp6(2),c.Oqu(e.infoBlock[2].description),c.xp6(1),c.s9C("src",e.infoBlock[2].url,c.LSH),c.xp6(4),c.Oqu(e.infoBlock[3].title),c.xp6(2),c.Oqu(e.infoBlock[3].description),c.xp6(1),c.s9C("src",e.infoBlock[3].url,c.LSH))},styles:[".information-container[_ngcontent-%COMP%]{height:92vh;width:100%;position:relative;overflow:visible;background:#FFFDFA}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#FFFDFA;overflow:visible;position:absolute;width:75%;box-shadow:1px 2px 20px #0000004d;left:50%;transform:translate(-50%)}@media screen and (min-width: 0px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{padding:65px 50px}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{padding:70px}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px;align-self:flex-start;opacity:0;transform:translate(-100%)}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14pt}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:justify}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:flex-start;height:200px}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px;align-items:flex-end;align-self:flex-end;opacity:0;transform:translate(100%)}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]{margin-top:-180px;width:50%}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14pt}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:justify}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-right[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:flex-end;height:200px}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:50px;align-self:flex-start;opacity:0;transform:translate(-100%)}@media screen and (min-width: 700px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 810px){.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]{width:50%}}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14pt}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#000c;text-align:justify}.information-container[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .info-block-left-first[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-self:flex-start;height:200px}"]});class L{constructor(){}ngOnInit(){}}L.\u0275fac=function(a){return new(a||L)},L.\u0275cmp=c.Xpm({type:L,selectors:[["app-home-page"]],decls:3,vars:0,template:function(a,e){1&a&&c._UZ(0,"app-navbar")(1,"app-introduction")(2,"app-information")},dependencies:[H,C,p]});const ON=[{path:"",component:L}];class o{}o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[P2.Bz.forChild(ON),P2.Bz]});class n{}n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[R.ez,o,f7.uH]})}}]);