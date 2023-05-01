(function(g){var window=this;'use strict';var hib=function(a,b){g.T.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Qa("click",this.onClick,this);this.updateValue("title",g.UT(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ab(this,g.VS(b.Gc(),this.element))},iib=function(a){g.T.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.ag=!1;this.player=a;this.S(a,"minimized",this.Xh);this.S(a,"onStateChange",this.tP)},jib=function(a){g.AT.call(this,a);
this.u=new g.bI(this);this.j=new iib(this.player);this.j.hide();g.JS(this.player,this.j.element,4);a.yg()&&(this.load(),g.Wp(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(hib,g.T);hib.prototype.onClick=function(){this.F.Na("onExpandMiniplayer")};g.w(iib,g.T);g.k=iib.prototype;
g.k.xM=function(){this.tooltip=new g.VV(this.player,this);g.E(this,this.tooltip);g.JS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Pc=new g.fU(this.player);g.E(this,this.Pc);this.Sj=new g.T({G:"div",N:"ytp-miniplayer-scrim"});g.E(this,this.Sj);this.Sj.Ea(this.element);this.S(this.Sj.element,"click",this.cH);var a=new g.T({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.hQ()]});g.E(this,a);a.Ea(this.Sj.element);this.S(a.element,"click",this.bp);
a=new hib(this.player,this);g.E(this,a);a.Ea(this.Sj.element);this.Lu=new g.T({G:"div",N:"ytp-miniplayer-controls"});g.E(this,this.Lu);this.Lu.Ea(this.Sj.element);this.S(this.Lu.element,"click",this.cH);var b=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.E(this,b);b.Ea(this.Lu.element);a=new g.T({G:"div",N:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Ea(this.Lu.element);var c=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.E(this,c);c.Ea(this.Lu.element);this.VW=new g.fV(this.player,
this,!1);g.E(this,this.VW);this.VW.Ea(b.element);b=new g.eV(this.player,this);g.E(this,b);b.Ea(a.element);this.nextButton=new g.fV(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Ea(c.element);this.sj=new g.OV(this.player,this);g.E(this,this.sj);this.sj.Ea(this.Sj.element);this.Ic=new g.kV(this.player,this);g.E(this,this.Ic);g.JS(this.player,this.Ic.element,4);this.SG=new g.T({G:"div",N:"ytp-miniplayer-buttons"});g.E(this,this.SG);g.JS(this.player,this.SG.element,4);a=new g.T({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.hQ()]});g.E(this,a);a.Ea(this.SG.element);this.S(a.element,"click",this.bp);a=new g.T({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.oQ()]});g.E(this,a);a.Ea(this.SG.element);this.S(a.element,"click",this.X6);this.S(this.player,"presentingplayerstatechange",this.xd);this.S(this.player,"appresize",this.Db);this.S(this.player,"fullscreentoggled",this.Db);this.Db()};
g.k.show=function(){this.mf=new g.Ip(this.Jv,null,this);this.mf.start();this.ag||(this.xM(),this.ag=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.mf&&(this.mf.dispose(),this.mf=void 0);g.T.prototype.hide.call(this);this.player.yg()||(this.ag&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.k.oa=function(){this.mf&&(this.mf.dispose(),this.mf=void 0);g.T.prototype.oa.call(this)};
g.k.bp=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.X6=function(){this.player.playVideo()};
g.k.cH=function(a){if(a.target===this.Sj.element||a.target===this.Lu.element)g.RO(this.player.Cb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Xh=function(){g.Wp(this.player.getRootNode(),"ytp-player-minimized",this.player.yg())};
g.k.He=function(){this.Ic.yc();this.sj.yc()};
g.k.Jv=function(){this.He();this.mf&&this.mf.start()};
g.k.xd=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Db=function(){g.xV(this.Ic,0,this.player.jb().getPlayerSize().width,!1);g.lV(this.Ic)};
g.k.tP=function(a){this.player.yg()&&(0===a?this.hide():this.show())};
g.k.Gc=function(){return this.tooltip};
g.k.xg=function(){return!1};
g.k.Ug=function(){return!1};
g.k.Rb=function(){return!1};
g.k.Ol=function(){return!1};
g.k.aI=function(){};
g.k.Pp=function(){};
g.k.sy=function(){};
g.k.Mm=function(){return null};
g.k.NF=function(){return null};
g.k.PL=function(){return new g.He(0,0)};
g.k.yk=function(){return new g.Gm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Wv=function(a,b,c,d,e){var f=0,h=d=0,l=g.Um(a);if(b){c=g.Rp(b,"ytp-prev-button")||g.Rp(b,"ytp-next-button");var m=g.Rp(b,"ytp-play-button"),n=g.Rp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Sm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Rp(b,"ytp-miniplayer-button-top-left"),f=g.Sm(b,this.element),b=g.Um(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.jb().getPlayerSize().width;e=f+(e||0);l=g.ze(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.vp=function(){};
g.k.Il=function(){return!1};
g.k.TD=function(){};
g.k.Sz=function(){};
g.k.Uq=function(){};
g.k.Tq=function(){};
g.k.ZA=function(){};
g.k.Wr=function(){};
g.k.FD=function(){};g.w(jib,g.AT);g.k=jib.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Wp(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.AT.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Tk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.zT("miniplayer",jib);})(_yt_player);
