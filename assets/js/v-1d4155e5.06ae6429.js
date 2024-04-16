"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98137],{614463:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-1d4155e5","path":"/guide/configuration/","title":"Configuration","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"adapter-settings.md"},"excerpt":"","headers":[{"level":2,"title":"Environment variables","slug":"environment-variables","link":"#environment-variables","children":[]},{"level":2,"title":"Config changes at runtime","slug":"config-changes-at-runtime","link":"#config-changes-at-runtime","children":[]}],"git":{"updatedTime":1713295678000},"filePathRelative":"guide/configuration/README.md"}')},637951:(e,n,a)=>{a.r(n),a.d(n,{default:()=>b});var t=a(166252);const i=(0,t._)("h1",{id:"configuration",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,t.Uk)(" Configuration")],-1),s={href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"},o=(0,t._)("code",null,"configuration.yaml",-1),r=(0,t._)("code",null,"data",-1),l=(0,t._)("code",null,"data",-1),c=(0,t._)("code",null,"configuration.yaml",-1),d=(0,t._)("code",null,"ZIGBEE2MQTT_DATA",-1),u=(0,t.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Minimal configuration.yml example</span>\n<span class="token key atrule">permit_join</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token key atrule">server</span><span class="token punctuation">:</span> mqtt<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">1883</span>\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token comment"># Could be either USB port (/dev/ttyUSB0), network Zigbee adapters (tcp://192.168.1.1:6638) or mDNS adapter (mdns://my-adapter).</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyUSB0\n<span class="token comment"># Will run frontend on port 8080</span>\n<span class="token key atrule">frontend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">CONVENTION</p><p>The <em>dot-notation</em> of a config-key like <code>mqtt.server</code> means <code>server</code> property within the <code>mqtt</code> section. All <em>dot-notation</em> references are absolute.</p></div>',2),p={class:"custom-container warning"},m=(0,t._)("p",{class:"custom-container-title"},"ATTENTION",-1),g=(0,t._)("code",null,"permit_join: true",-1),v=(0,t.uE)('<h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h2><p>It is possible to override the values in <code>configuration.yaml</code> via environment variables. The name of the environment variable should start with <code>ZIGBEE2MQTT_CONFIG_</code> followed by the path to the property you want to set in uppercase split by a <code>_</code>.</p><p>In case you want to for example override:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>set <code>ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC</code> to the desired value.</p><h2 id="config-changes-at-runtime" tabindex="-1"><a class="header-anchor" href="#config-changes-at-runtime" aria-hidden="true">#</a> Config changes at runtime</h2>',6),h=(0,t._)("code",null,"zigbee2mqtt/bridge/request/options",-1),k={},b=(0,a(983744).Z)(k,[["render",function(e,n){const a=(0,t.up)("ExternalLinkIcon"),k=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[i,(0,t._)("p",null,[(0,t.Uk)("Zigbee2MQTT is configured using "),(0,t._)("a",s,[(0,t.Uk)("YAML"),(0,t.Wm)(a)]),(0,t.Uk)(" based "),o,(0,t.Uk)(" file. The file have to be located in the "),r,(0,t.Uk)(" directory within your installation. The "),l,(0,t.Uk)(" directory and the "),c,(0,t.Uk)(" has to be writeable for Zigbee2MQTT process because it can get updated - e.g. if you change the settings in the frontend. It's possible specify a custom data directory by setting the "),d,(0,t.Uk)(" environment variable.")]),u,(0,t._)("div",p,[m,(0,t._)("p",null,[(0,t.Uk)("Be aware of the implications using "),g,(0,t.Uk)(" and read the details in the "),(0,t.Wm)(k,{to:"/guide/configuration/zigbee-network.html#permit-join"},{default:(0,t.w5)((()=>[(0,t.Uk)("Permit join")])),_:1}),(0,t.Uk)(" documentation.")])]),v,(0,t._)("p",null,[(0,t.Uk)("Some configuration options can be changed at runtime by issuing a MQTT-publish at the topic "),h,(0,t.Uk)(". See "),(0,t.Wm)(k,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request"},{default:(0,t.w5)((()=>[(0,t.Uk)("MQTT Topics and Messages")])),_:1}),(0,t.Uk)(" for details.")])])}]])}}]);