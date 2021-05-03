(()=>{"use strict";const t="AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";var s=class{constructor(t,s,e){this.name=t,this.spreadsheetIds=s,this.afterFetchCallback=e,this.covidBedLocations=[],this.covidBedMarkers=[],this.fetchCovidBedData(),this.oxygenSupplyLocations=[],this.oxygenSupplyMarkers=[],void 0!==s.oxygenSupply&&this.fetchOxygemSupplyData()}fetchCovidBedData(){let s=`https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetIds.covidBeds}/values/Sheet1!A2:Q?key=${t}`;fetch(s).then((t=>t.json())).then((t=>{t.values.forEach((t=>{let s=new class{constructor(t){this.title=t[0],this.latitude=parseFloat(t[2]),this.longitude=parseFloat(t[3]),this.url=t[4],this.covidbed=void 0===t[5]?"N/A":t[5],this.oxybed=void 0===t[6]?"N/A":t[6],this.icu=void 0===t[7]?"N/A":t[7],this.venti=void 0===t[8]?"N/A":t[8],this.updatedAt=t[9],this.position={lat:this.latitude,lng:this.longitude},this.hasCovidBeds=this.hasAttribute("covidbed"),this.hasOxygenBeds=this.hasAttribute("oxybed"),this.hasICUs=this.hasAttribute("icu"),this.hasVentilators=this.hasAttribute("venti")}hasAttribute(t){return!(void 0===this[t]||""===this[t]||isNaN(this[t])||parseFloat(this[t])<1)}}(t);this.covidBedLocations.push(s),this.covidBedMarkers.push(new class{constructor(t){this.location=t,this.marker=new google.maps.Marker({position:t.position,map:null,title:t.title}),this.position=this.marker.position,this.descriptionHtml=`\n      <div class="content">\n        <h5 class="title is-5 mb-0">\n         ${void 0===t.url?t.title:'<a href="'+t.url+'">'+t.title+"</a>"}\n        </h5>\n        <p class="is-size-7 mt-1">Updated at: ${t.updatedAt}</p>\n        <table class="table has-text-left is-striped is-narrow is-hoverable">\n          <tr><th>COVID Beds: </th><td>${t.covidbed}</td></tr>\n          <tr><th>Oxygen Beds: </th><td>${t.oxybed}</td></tr>\n          <tr><th>ICUs: </th><td>${t.icu}</td></tr>\n          <tr><th>Ventilators: </th><td>${t.venti}</td></tr>\n        </table>\n      </div>\n    `}setMap(t){this.marker.setMap(t)}}(s))})),this.afterFetchCallback(this.covidBedMarkers)}))}fetchOxygemSupplyData(){let s=`https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetIds.oxygenSupply}/values/Sheet1!A2:Q?key=${t}`;fetch(s).then((t=>t.json())).then((t=>{t.values.forEach((t=>{let s=new class{constructor(t){this.title=t[0],this.latitude=parseFloat(t[2]),this.longitude=parseFloat(t[3]),this.url=t[4],this.hasRefilling=this.parseYesOrNo(t[5]),this.hasCylinders=this.parseYesOrNo(t[6]),this.hasCans=this.parseYesOrNo(t[7]),this.hasConcentrator=this.parseYesOrNo(t[8]),this.additionalInfo=t[9],this.updatedAt=t[10],this.position={lat:this.latitude,lng:this.longitude}}parseYesOrNo(t){return"yes"==(t=t.toLowerCase().trim())||"no"!=t&&void 0}}(t);this.oxygenSupplyLocations.push(s),this.oxygenSupplyMarkers.push(new class{constructor(t){this.location=t,this.marker=new google.maps.Marker({position:t.position,map:null,title:t.title,icon:"/assets/images/oxygen.png"}),this.position=this.marker.position,this.descriptionHtml=`\n      <div class="content">\n        <h5 class="title is-5 mb-0">\n         ${void 0===t.url?t.title:'<a href="'+t.url+'">'+t.title+"</a>"}\n        </h5>\n        <p class="is-size-7 mt-1">Updated at: ${t.updatedAt}</p>\n        <table class="table has-text-left is-striped is-narrow is-hoverable">\n          <tr><th>Oxygen Refilling</th><td>${t.hasRefilling?"Yes":"No"}</td></tr>\n          <tr><th>Oxygen Cylinders</th><td>${t.hasCylinders?"Yes":"No"}</td></tr>\n          <tr><th>Oxygen Cans</th><td>${t.hasCans?"Yes":"No"}</td></tr>\n          <tr><th>Oxygen Concentrator</th><td>${t.hasConcentrator?"Yes":"No"}</td></tr>\n        </table>\n        <p>\n        <strong>\n          Additional info:\n        </strong>\n        ${t.additionalInfo}\n        </p>\n      </div>\n    `}setMap(t){this.marker.setMap(t)}}(s)),console.log(s)})),this.afterFetchCallback(this.oxygenSupplyMarkers)}))}};window.initialiseMap=function(){let t=new class{constructor(){this.map=null,this.initialiseMap(),this.markerInfoWindow=new google.maps.InfoWindow({content:""}),this.cowinMapMarkers=[],this.bounds=new google.maps.LatLngBounds,this.mapFilters=new class{constructor(t){this.state={shouldHaveCovidBeds:!1,shouldHaveOxygenBeds:!1,shouldHaveICUs:!1,shouldHaveVentilators:!1},this.setEventListeners(),this.onChangeCallback=t}setEventListeners(){let t=this;document.querySelectorAll(".filters_form input").forEach((function(s){s.addEventListener("change",(s=>{t.filterChanged(s.target)}))}))}filterChanged(t){let s=t.dataset.filterName;"show_covid_beds"==s?this.state.shouldHaveCovidBeds=t.checked:"show_oxygen_beds"==s?this.state.shouldHaveOxygenBeds=t.checked:"show_icus"==s?this.state.shouldHaveICUs=t.checked:"show_ventilators"==s&&(this.state.shouldHaveVentilators=t.checked),this.onChangeCallback(this.state)}shouldShowLocation(t){return!(this.state.shouldHaveCovidBeds&&!t.hasCovidBeds||this.state.shouldHaveOxygenBeds&&!t.hasOxygenBeds||this.state.shouldHaveICUs&&!t.hasICUs||this.state.shouldHaveVentilators&&!t.hasVentilators)}}((t=>{this.plotAllCowinMapMarkers()}))}initialiseMap(){this.map=new google.maps.Map(document.getElementById("map"),{zoom:10,center:new google.maps.LatLng(0,0)})}setupAndPlotCowinMapMarker(t){google.maps.event.addListener(t.marker,"click",(()=>{this.markerInfoWindow.setContent(t.descriptionHtml),this.markerInfoWindow.open(this.map,t.marker)})),this.cowinMapMarkers.push(t)}plotCowinMapMarker(t){this.mapFilters.shouldShowLocation(t.location)?(t.setMap(this.map),isNaN(t.location.latitude)||isNaN(t.location.longitude)||this.bounds.extend(t.position)):t.setMap(null)}plotAllCowinMapMarkers(){this.cowinMapMarkers.forEach((t=>{this.plotCowinMapMarker(t)})),this.map.fitBounds(this.bounds)}},e=s=>{s.forEach((s=>{t.setupAndPlotCowinMapMarker(s)})),t.plotAllCowinMapMarkers()};new s("coimbatore",{covidBeds:"1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw",oxygenSupply:"1Ry3y1hx1iHeuF17YmWtzfaDQdhx5zRr6lSLrzBW_TU0"},e),new s("tirupur",{covidBeds:"1T5fUP5nhCctC2bpNWeO4Yg2UYrewbTxrGh58c2zJePU"},e),new s("Madurai",{covidBeds:"1Dr7DYS6GKe5avhHcwhHMB6Z9DTFSj20eEgLvfBlQJSo"},e),new s("Chennai",{covidBeds:"1YV3DWGxsvlTp0-vaw8f09AajQ5cl3MovFvWVVDtkbOc"},e),new s("Salem",{covidBeds:"1GlNu4jyK_nkI2KwEBe9Wc6qgW1bCxbrH9v8cUJDJWrs"},e)}})();
//# sourceMappingURL=index.js.map