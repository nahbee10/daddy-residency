(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(53)},23:function(e,t,a){},24:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(7),r=a.n(s),i=(a(23),a(8)),c=a(55),m=a(56),o=a(57),d=(a(24),a(9)),u=a.n(d),h=a(10),y=a(11),g=a(14),p=a(12),E=a(3),_=a(15),b=(a(28),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(p.a)(t).call(this))).state={selectedIndex:0,ovumImg:"img/ovum.png",diffDays:0},e.prevButtonClicked=e.prevButtonClicked.bind(Object(E.a)(e)),e.nextButtonClicked=e.nextButtonClicked.bind(Object(E.a)(e)),e.handleMouseEnter=e.handleMouseEnter.bind(Object(E.a)(e)),e.handleMouseLeave=e.handleMouseLeave.bind(Object(E.a)(e)),e}return Object(_.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.ddayCounter(),setInterval(this.ovumTransition,5e3),document.getElementsByTagName("body")[0].setAttribute("style","overflow-x:hidden;overflow-y:hidden;background:#d8e5f4;");var e=document.querySelector(".carousel"),t=document.querySelector(".carousel2"),a=e.offsetHeight,l=t.offsetHeight,n=Math.round(a/2/Math.tan(Math.PI/6)),s=Math.round(l/2/Math.tan(Math.PI/8)),r=60*this.state.selectedIndex*-1,i=45*this.state.selectedIndex*-1,c=e.querySelectorAll(".carousel__cell");e.style.transform="translateZ("+-n+"px) rotateX("+r+"deg)";var m=t.querySelectorAll(".carousel__cell2");t.style.transform="translateZ("+-s+"px) rotateX("+i+"deg)";for(var o=this.state.selectedIndex%6,d=this.state.selectedIndex%8,u=0;u<c.length;u++){var h=c[u];u==o||u==o-1?(h.style.zIndex=3e3,h.style.opacity=1):o<5&&u==o+1?(h.style.zIndex=2500,h.style.opacity=.5):5==u?(h.style.zIndex=2500,h.style.opacity=.5):(h.style.zIndex=2e3,h.style.opacity=.1)}for(u=0;u<m.length;u++){(g=m[u]).style.zIndex=u==d||u==d-1?3e3:u==d+1?2500:2e3}for(u=0;u<c.length;u++){h=c[u];if(u<6){var y=60*u;h.style.transform="rotateX("+y+"deg) translateZ("+n+"px)"}else h.style.opacity=0,h.style.transform="none"}for(u=0;u<m.length;u++){var g=m[u];if(u<8){y=45*u;g.style.transform="rotateX("+y+"deg) translateZ("+s+"px)"}else g.style.opacity=0,g.style.transform="none"}}},{key:"rotateCarousel",value:function(e){var t=document.querySelector(".carousel"),a=document.querySelector(".carousel2"),l=t.offsetHeight,n=a.offsetHeight,s=60*this.state.selectedIndex*-1,r=45*this.state.selectedIndex*-1,i=l,c=n,m=Math.round(i/2/Math.tan(Math.PI/6)),o=Math.round(c/2/Math.tan(Math.PI/8));t.style.transform="translateZ("+-m+"px) rotateX("+s+"deg)",a.style.transform="translateZ("+-o+"px) rotateX("+r+"deg)";for(var d=t.querySelectorAll(".carousel__cell"),u=a.querySelectorAll(".carousel__cell2"),h=this.state.selectedIndex%6,y=this.state.selectedIndex%8,g=0;g<d.length;g++){var p=d[g];g==h||g==h-1?(p.style.zIndex=3e3,p.style.opacity=1):h<5&&g==h+1?(p.style.zIndex=2500,p.style.opacity=.5):5==h&&0==g?(p.style.zIndex=2500,p.style.opacity=.5):(p.style.zIndex=2e3,p.style.opacity=.1)}for(g=0;g<u.length;g++){var E=u[g];g==y||g==y-1?(E.style.zIndex=3e3,E.style.opacity=1):y<7&&g==y+1?(E.style.zIndex=2500,E.style.opacity=.5):7==y&&0==g?(E.style.zIndex=2500,E.style.opacity=.5):(E.style.zIndex=2e3,E.style.opacity=.1)}}},{key:"prevButtonClicked",value:function(){this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex-1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"nextButtonClicked",value:function(){this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex+1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"updateTransition",value:function(){var e=document.querySelector("div.inner_scene1");return e?e.className="inner_scene":(e=document.querySelector("div.inner_scene")).className="inner_scene1",e}},{key:"ovumTransition",value:function(){var e=document.querySelector("img.ovum_img");return e?e.className="ovum_img2":(e=document.querySelector("img.ovum_img2")).className="ovum_img",e}},{key:"sceneTransition",value:function(){var e=document.querySelector("div.scene_none");return e&&(e.className="scene"),e}},{key:"handleMouseEnter",value:function(e){this.setState({ovumImg:"img/ovum_me.png"})}},{key:"handleMouseLeave",value:function(){this.setState({ovumImg:"img/ovum.png"})}},{key:"ddayCounter",value:function(){var e=new Date(2025,6,31),t=new Date;console.log(e),console.log(t);var a=Math.round(Math.abs((e.getTime()-t.getTime())/864e5));this.setState({diffDays:a})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"opencall_container",style:{width:window.innerWidth,height:window.innerHeight}},n.a.createElement("div",{className:"container",style:{width:window.innerWidth,height:window.innerHeight}},n.a.createElement("img",{src:this.state.ovumImg,className:"ovum_img",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),n.a.createElement("img",{src:"img/spermy.gif",className:"sperm_img"}),n.a.createElement("img",{src:"img/spermy4.gif",className:"sperm_img4"}),n.a.createElement("img",{src:"img/spermy3.gif",className:"sperm_img3"}),n.a.createElement("img",{src:"img/spermy2.gif",className:"sperm_img2"}),n.a.createElement("div",{className:"timeline_spermy"},n.a.createElement("b",null,n.a.createElement("i",null,this.state.diffDays))," days have remained until fertilization \u2933\u2933\u2933\u2933\u2933"),n.a.createElement("div",{className:"inner_scene1"},n.a.createElement("img",{src:"img/daddy_logo-16.png",className:"img_apply2"})),n.a.createElement("div",{className:"forAnimation"},n.a.createElement("div",{className:"scene"},n.a.createElement("div",{className:"carousel"},n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in",style:{textAlign:"center",paddingTop:"1%"}},n.a.createElement("div",{className:"title_small_text",style:{textAlign:"left"}},n.a.createElement("span",{className:"span_white",style:{fontWeight:"normal"}}," Nahee.app's family programming series")),n.a.createElement("span",{className:"span_white"},n.a.createElement("span",{className:"title"},"OPEN CALL FOR DADDIES"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"fancy_title"}," Nahee is looking for daddy residents who will raise her baby together 7 years later.")),n.a.createElement("div",{className:"title_small_text"},n.a.createElement("br",null),n.a.createElement("span",{className:"span_white",style:{fontWeight:"normal"}}," Application deadline is July 31 2025.")),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/introduction.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"Nahee Kim who is IRL extended version of Nahee.app plans to have a baby by herself 7 years later(around Summer 2026) with sperm donation. She is looking for daddy residents who are going to dedicate a certain amount of time in their life to raise the baby. Daddy residents will live together with Nahee and the baby in the same house which is supposed to be located in nice area either in South Korea or the United States close to nature and get stipend during their residency period. ",n.a.createElement("br",null),n.a.createElement("br",null),"The term residency, which is the term used for the programs run by art-related institutions to invite artists within their premises and offer conditions encouraging creativity, is applied in this \u2018daddy residency\u2019 also. The aim of this residency program is providing time and space for the applicants to think about their meaning of caring as a parent and creatively define the existing family system together.")))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/offering.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"\u261e\u21e2 opportunity to experience parenting in real life for either 3 or 6 months",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 place to stay",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 stipend (about $700/month)",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 daddy master classes",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 invitations to annual family retreat",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 recommendation letter for each daddy\u2019s future partner about their acheivement",n.a.createElement("br",null))))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/requirements.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"\u261e\u21e2 older than 30 by the time the residency starts",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 speaking English or Korean fluently",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 attending all daddy master classes before the residency starts",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 relocating to Nahee\u2019s house during the residency period",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 attending weekly parent meetings during the residency period",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 posting a baby journal every week during the residency period",n.a.createElement("br",null),n.a.createElement("br",null))))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/timeline.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"> application closed ",n.a.createElement("div",{className:"title_small_text"},"(July 31 2025)"),n.a.createElement("br",null),"> select candidates for interview",n.a.createElement("div",{className:"title_small_text"},"(Sep 2025)"),n.a.createElement("br",null),"> interview1",n.a.createElement("div",{className:"title_small_text"},"(Oct 2025)")," ",n.a.createElement("br",null),"> pregnancy",n.a.createElement("div",{className:"title_small_text"},"(Nov 2025 - Feb 2026)")," ",n.a.createElement("br",null),"> interview2",n.a.createElement("div",{className:"title_small_text"},"(Mar 2026)")," ",n.a.createElement("br",null),"> final selection ",n.a.createElement("div",{className:"title_small_text"},"(on the third month of pregrancy)")," "),"   "),"   ")),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/faq.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"Q1) What\u2019s the difference between being a daddy resident and babysitting?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"You will rear the baby with me. This residency is not for asking residents to care for the child instead of me. The actual time with the baby will be temporary but you will be one of the \u2018parents\u2019 of my child and will be asked to keep this relationship for the rest of your and my baby\u2019s life (if you want to).")," ",n.a.createElement("br",null),"Q2) Is a married person also eligible to apply?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"Yes."),n.a.createElement("br",null),"Q3) Does a daddy applicant have to be a male-identified person?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"No, this residency is open to all gender."),n.a.createElement("br",null),"Q4) Why do you launch this open call seven years before the residency begins?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"Becoming a parent is serious business and hard work. I want to give plenty of time to me and the applicants to think about whether they are ready to be a parent."),n.a.createElement("br",null),"Q5) What is daddy master class?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"I plan to invite selected applicants\u2019 inspirational caregivers in one place and ask them to give classes to the residents. The classes could happen in any format in which they(inspirational daddies) want to share their experience and knowledge about having and caring a baby."),n.a.createElement("br",null),"Q6) Who\u2019s going to be the baby\u2019s biological father?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"I'm working on creating Daddy.app which is artificial intelligence to help Nahee develop her dynamic family in real life. Nahee and Daddy.app will dream together about their ideal baby. The features of the biological father of the baby will be determined based on what they are dreaming."),n.a.createElement("br",null),"Q7) What if Nahee marries someone before the start of the residency?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"Nahee will try best to make this residency happened. Let's hope that her partner can understand this situation."),n.a.createElement("br",null),n.a.createElement("br",null)))))))),n.a.createElement("div",{className:"carousel-options"},n.a.createElement("p",null,n.a.createElement("button",{className:"previous-button",onClick:function(t){return e.prevButtonClicked(t)}},n.a.createElement("img",{src:"img/arrowup2.png",className:"arrowup"})),n.a.createElement("button",{className:"next-button",onClick:function(t){return e.nextButtonClicked(t)}},n.a.createElement("img",{src:"img/arrowdown.png",className:"arrowdown"})),n.a.createElement("a",{href:"https://forms.gle/HacnLpYr6ZgwUf1U6",className:"next-button",target:"_blank"}," ",n.a.createElement("img",{src:"img/daddy_apply-14.png",className:"applybtn"}),n.a.createElement("img",{src:"img/daddy_arrow_apply.png",className:"applyarrowimg"})))),n.a.createElement("div",{className:"familyapp"},n.a.createElement("a",{href:"https://github.com/nahbee10/nahee.app/blob/master/Family.app/Family.js",target:"_blank"},n.a.createElement("img",{src:"img/daddy.gif",className:"familyapp_img"})))),n.a.createElement("div",{className:"container2",style:{display:"none",position:"fixed",top:"0",left:"0",width:window.innerWidth,height:window.innerHeight,background:"transparent",pointerEvents:"none"}},n.a.createElement("div",{className:"scene2"},n.a.createElement("div",{className:"carousel2"},n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-04.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}})))))))}}]),t}(n.a.Component)),v=u()({render:function(){var e;return n.a.createElement(c.a,null,n.a.createElement("div",{id:"app",className:"App"},n.a.createElement(l.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(o.a,(e={exact:!0,path:"/"},Object(i.a)(e,"exact",!0),Object(i.a)(e,"render",function(){return n.a.createElement(b,null)}),e))))))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.eb1c4c1f.chunk.js.map