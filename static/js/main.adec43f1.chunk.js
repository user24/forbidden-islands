(this.webpackJsonpforbidden=this.webpackJsonpforbidden||[]).push([[0],{14:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var s=a(0),t=a(1),i=a(3),l=a.n(i),r=a(4),c=a(5),o=a(8),m=a(7),d=(a(14),a(6)),u=function(e){var n=e.tiles.reduce((function(e,n){return e.concat(n)})).reduce((function(e,n){return e+(1===n?1:0)}));return Object(s.jsxs)("div",{className:"layout",children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsxs)("div",{className:"sum",children:["(",n," tiles)"]}),Object(s.jsx)("div",{className:"layout-tiles",children:e.tiles.map((function(e){return Object(s.jsx)("div",{className:"tile-row",children:e.map((function(e){var n="tile";return 1===e?n+=" filled":2===e&&(n+=" impassable"),Object(s.jsx)("div",{className:n})}))})}))})]})},b=function(e){Object(o.a)(a,e);var n=Object(m.a)(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Forbidden Island Layouts"}),Object(s.jsx)("div",{className:"layouts",children:d.map(u)})]})}}]),a}(t.PureComponent);l.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"name":"Forbidden Island","tiles":[[0,0,1,1,0,0],[0,1,1,1,1,0],[1,1,1,1,1,1],[1,1,1,1,1,1],[0,1,1,1,1,0],[0,0,1,1,0,0]]},{"name":"Volcano Island","tiles":[[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]},{"name":"Tombstone Island","tiles":[[0,0,1,1,0,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[1,1,1,1,1,1]]},{"name":"Bay of Gulls","tiles":[[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[1,0,0,1,1,0,0,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0]]},{"name":"Bone Island","tiles":[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,0,0,1,1,0]]},{"name":"Coral Reef","tiles":[[0,1,1,0,0,0,0],[1,1,1,1,0,0,0],[1,1,1,1,1,1,0],[0,1,1,1,1,1,1],[0,0,0,1,1,1,1],[0,0,0,0,1,1,0]]},{"name":"Skull Island","tiles":[[1,1,1,1,1,1],[1,0,1,1,0,1],[1,1,1,1,1,1],[0,1,1,1,1,0],[0,1,1,1,1,0]]},{"name":"Shock-King Island","tiles":[[1,0,1,0,1],[1,1,1,1,1],[1,0,1,0,1],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0]]},{"name":"Bridge of Horrors","tiles":[[1,1,1,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,1,1,1]]},{"name":"Treasure Island","tiles":[[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1]]},{"name":"Arch of Fate","tiles":[[0,0,0,1,1,1,0,0,0],[0,0,1,1,1,1,1,0,0],[0,1,1,1,0,1,1,1,0],[1,1,1,0,0,0,1,1,1],[1,1,0,0,0,0,0,1,1]]},{"name":"Atoll of Decisions","tiles":[[0,0,1,1,1,0,0],[0,1,1,2,1,1,0],[1,1,2,2,2,1,1],[1,2,2,2,2,2,1],[1,1,2,2,2,1,1],[0,1,1,2,1,1,0],[0,0,1,1,1,0,0]]},{"name":"Barbary Coast","tiles":[[0,1,1,1,1,1],[1,1,0,1,1,0],[1,1,1,1,1,1],[0,1,1,0,1,1],[1,1,1,1,1,0]]},{"name":"Hangman\'s Harbour","tiles":[[0,0,1,1,0,0,0],[0,1,1,1,1,0,0],[1,1,1,1,1,1,0],[1,0,0,0,1,1,0],[1,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]]},{"name":"Anchor Bay","tiles":[[0,1,1,1,1,0],[0,0,1,1,0,0],[0,1,1,1,1,0],[0,0,1,1,0,0],[1,1,1,1,1,1],[0,1,1,1,1,0],[0,0,1,1,0,0]]},{"name":"Anchor Isle","tiles":[[0,0,1,1,0,0],[0,1,1,1,1,0],[0,0,1,1,0,0],[1,0,1,1,0,1],[1,1,1,1,1,1],[0,1,1,1,1,0],[0,0,1,1,0,0]]},{"name":"Invader\'s Space","tiles":[[0,1,0,0,1,0],[1,1,1,1,1,1],[1,0,1,1,0,1],[1,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,0,1,1]]},{"name":"Shipwreck Bay","tiles":[[1,1,1,1,1,1,1,1],[1,1,0,1,1,0,1,1],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0]]},{"name":"Perilous Peaks","tiles":[[1,0,1,0,1,0],[1,0,1,0,1,0],[1,1,1,1,1,1],[0,0,1,1,1,1],[0,1,1,1,1,0],[0,0,1,1,1,1]]},{"name":"Palm Springs","tiles":[[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[0,1,0,1,0,1,0],[0,0,0,1,0,0,0],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1]]},{"name":"Harpoon Hideout","tiles":[[1,1,1,1,0,0],[1,1,1,0,0,0],[1,1,1,1,0,1],[1,0,1,1,1,1],[0,0,0,1,1,1],[0,0,1,1,1,1]]},{"name":"Parlay Peninsula","tiles":[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,1,1],[0,0,1,1,1,1],[0,0,1,1,1,1],[0,0,1,1,1,1]]},{"name":"Roasted Refuge","tiles":[[0,1,0,0,1,0],[1,1,0,0,1,1],[0,1,1,1,1,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[1,1,0,0,1,1],[0,1,0,0,1,0]]},{"name":"Mutiny Towers","tiles":[[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]]},{"name":"Davy Jones\' Locker","tiles":[[0,0,0,0,1,0,0,0,0],[0,1,1,1,1,0,0,0,0],[1,1,1,0,1,1,1,1,0],[0,1,1,1,1,0,1,1,1],[0,0,0,0,1,1,1,1,0],[0,0,0,0,1,0,0,0,0]]},{"name":"Plank Walk Paradise","tiles":[[1,1,1,1,0,0,0,0,0],[0,1,1,1,1,0,0,0,0],[0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0],[0,0,0,0,1,1,1,1,0],[0,0,0,0,0,1,1,1,1]]},{"name":"Shuriken Isle","tiles":[[0,0,0,0,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,1,1,0],[1,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,1],[0,0,1,1,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,0,0,0]]}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.adec43f1.chunk.js.map