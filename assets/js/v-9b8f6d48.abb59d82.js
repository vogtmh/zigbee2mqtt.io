"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8673],{450651:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-9b8f6d48","path":"/devices/SZ-T04.html","title":"Nous SZ-T04 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Nous SZ-T04 control via MQTT","description":"Integrate your Nous SZ-T04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-01T09:06:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature report interval (numeric)","slug":"temperature-report-interval-numeric","link":"#temperature-report-interval-numeric","children":[]},{"level":3,"title":"Humidity report interval (numeric)","slug":"humidity-report-interval-numeric","link":"#humidity-report-interval-numeric","children":[]},{"level":3,"title":"Temperature unit convert (enum)","slug":"temperature-unit-convert-enum","link":"#temperature-unit-convert-enum","children":[]},{"level":3,"title":"Temperature alarm (enum)","slug":"temperature-alarm-enum","link":"#temperature-alarm-enum","children":[]},{"level":3,"title":"Max temperature (numeric)","slug":"max-temperature-numeric","link":"#max-temperature-numeric","children":[]},{"level":3,"title":"Min temperature (numeric)","slug":"min-temperature-numeric","link":"#min-temperature-numeric","children":[]},{"level":3,"title":"Temperature sensitivity (numeric)","slug":"temperature-sensitivity-numeric","link":"#temperature-sensitivity-numeric","children":[]},{"level":3,"title":"Humidity alarm (enum)","slug":"humidity-alarm-enum","link":"#humidity-alarm-enum","children":[]},{"level":3,"title":"Max humidity (numeric)","slug":"max-humidity-numeric","link":"#max-humidity-numeric","children":[]},{"level":3,"title":"Min humidity (numeric)","slug":"min-humidity-numeric","link":"#min-humidity-numeric","children":[]},{"level":3,"title":"Humidity sensitivity (numeric)","slug":"humidity-sensitivity-numeric","link":"#humidity-sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1713295678000},"filePathRelative":"devices/SZ-T04.md"}')},420447:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(166252);const r=(0,a._)("h1",{id:"nous-sz-t04",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#nous-sz-t04","aria-hidden":"true"},"#"),(0,a.Uk)(" Nous SZ-T04")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SZ-T04")],-1),d=(0,a._)("td",null,"Vendor",-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Temperature and humidity sensor with clock")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, battery, temperature_report_interval, humidity_report_interval, temperature_unit_convert, temperature_alarm, max_temperature, min_temperature, temperature_sensitivity, humidity_alarm, max_humidity, min_humidity, humidity_sensitivity, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SZ-T04.png",alt:"Nous SZ-T04"})])],-1),s=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),m=(0,a.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-report-interval-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-report-interval-numeric" aria-hidden="true">#</a> Temperature report interval (numeric)</h3><p>Temperature Report interval. Value can be found in the published state on the <code>temperature_report_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_report_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>120</code>. The unit of this value is <code>min</code>.</p><h3 id="humidity-report-interval-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-report-interval-numeric" aria-hidden="true">#</a> Humidity report interval (numeric)</h3><p>Humidity Report interval. Value can be found in the published state on the <code>humidity_report_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_report_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>120</code>. The unit of this value is <code>min</code>.</p><h3 id="temperature-unit-convert-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-convert-enum" aria-hidden="true">#</a> Temperature unit convert (enum)</h3><p>Current display unit. Value can be found in the published state on the <code>temperature_unit_convert</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit_convert&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="temperature-alarm-enum" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-enum" aria-hidden="true">#</a> Temperature alarm (enum)</h3><p>Temperature alarm status. Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>canceled</code>, <code>lower_alarm</code>, <code>upper_alarm</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric" aria-hidden="true">#</a> Max temperature (numeric)</h3><p>Alarm temperature max. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric" aria-hidden="true">#</a> Min temperature (numeric)</h3><p>Alarm temperature min. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric" aria-hidden="true">#</a> Temperature sensitivity (numeric)</h3><p>Temperature sensitivity. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-alarm-enum" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-enum" aria-hidden="true">#</a> Humidity alarm (enum)</h3><p>Humidity alarm status. Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>canceled</code>, <code>lower_alarm</code>, <code>upper_alarm</code>.</p><h3 id="max-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#max-humidity-numeric" aria-hidden="true">#</a> Max humidity (numeric)</h3><p>Alarm humidity max. Value can be found in the published state on the <code>max_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="min-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#min-humidity-numeric" aria-hidden="true">#</a> Min humidity (numeric)</h3><p>Alarm humidity min. Value can be found in the published state on the <code>min_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="humidity-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-sensitivity-numeric" aria-hidden="true">#</a> Humidity sensitivity (numeric)</h3><p>Humidity sensitivity. Value can be found in the published state on the <code>humidity_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),h={},p=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[o,(0,a._)("tbody",null,[u,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Nous"},{default:(0,a.w5)((()=>[(0,a.Uk)("Nous")])),_:1})])]),n,c,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);