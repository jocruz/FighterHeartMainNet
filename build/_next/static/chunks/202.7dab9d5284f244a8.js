"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{73202:function(t,a,e){e.r(a),e.d(a,{Split:function(){return o}});var r=e(60409),s=e(68522),n=e(49242),i=e(2593),c=e(64146);e(13550),e(25025),e(70332),e(8455),e(59189),e(26729),e(54098),e(62555),e(23565),e(26219),e(68834),e(61303),e(71497),e(70565),e(13670),e(79120),e(42328),e(97604),e(8187),e(19362),e(54730),e(36250),e(85725),e(38730),e(48507),e(2090),e(88777),e(52876),e(86841),e(49561),e(80580),e(54253),e(91559),e(40553),e(26),e(69392),e(62822),e(82037),e(2162),e(64063),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(40721),e(29526),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435);class o{get chainId(){return this._chainId}constructor(t,a,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cA(t,a,i,n);(0,r._)(this,"contractWrapper",void 0),(0,r._)(this,"storage",void 0),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"interceptor",void 0),(0,r._)(this,"_chainId",void 0),this._chainId=c,this.abi=i,this.contractWrapper=d,this.storage=e,this.metadata=new s.aj(this.contractWrapper,s.cR,this.storage),this.roles=new s.ak(this.contractWrapper,o.contractRoles),this.encoder=new s.ai(this.contractWrapper),this.estimator=new s.aT(this.contractWrapper),this.events=new s.aU(this.contractWrapper),this.interceptor=new s.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){const t=[];let a=i.O$.from(0);const e=await this.contractWrapper.readContract.payeeCount();for(;a.lt(e);)try{const e=await this.contractWrapper.readContract.payee(a);t.push(await this.getRecipientSplitPercentage(e)),a=a.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),a={};for(const e of t)a[e.address]=await this.balanceOf(e.address);return a}async balanceOfTokenAllRecipients(t){const a=await this.getAllRecipients(),e={};for(const r of a)e[r.address]=await this.balanceOfToken(r.address,t);return e}async balanceOf(t){const a=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),e=await this.contractWrapper.readContract["totalReleased()"](),r=a.add(e);return this._pendingPayment(t,r,await this.contractWrapper.readContract["released(address)"](t))}async balanceOfToken(t,a){const e=new c.CH(a,n,this.contractWrapper.getProvider()),r=await e.balanceOf(this.getAddress()),i=await this.contractWrapper.readContract["totalReleased(address)"](a),o=r.add(i),d=await this._pendingPayment(t,o,await this.contractWrapper.readContract["released(address,address)"](a,t));return await(0,s.b4)(this.contractWrapper.getProvider(),a,d)}async getRecipientSplitPercentage(t){const[a,e]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(t)]);return{address:t,splitPercentage:e.mul(i.O$.from(1e7)).div(a).toNumber()/1e5}}async withdraw(t){return{receipt:await this.contractWrapper.sendTransaction("release(address)",[t])}}async withdrawToken(t,a){return{receipt:await this.contractWrapper.sendTransaction("release(address,address)",[a,t])}}async distribute(){return{receipt:await this.contractWrapper.sendTransaction("distribute()",[])}}async distributeToken(t){return{receipt:await this.contractWrapper.sendTransaction("distribute(address)",[t])}}async _pendingPayment(t,a,e){return a.mul(await this.contractWrapper.readContract.shares(t)).div(await this.contractWrapper.readContract.totalShares()).sub(e)}async call(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];return this.contractWrapper.call(t,...e)}}(0,r._)(o,"contractRoles",["admin"])}}]);