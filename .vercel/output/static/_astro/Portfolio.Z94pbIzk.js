import{j as e}from"./jsx-runtime.hLk7vqoo.js";import{r as t}from"./index._83CrWW8.js";const v={src:"/_astro/pvc-logo-color.QQ4ejva1.svg",width:341,height:100,format:"svg"},f={src:"/_astro/kmarket.10P1fUsi.png",width:700,height:300,format:"png"},k={src:"/_astro/Eduvizija.dJx1WB3H.jpg",width:180,height:180,format:"jpg"},o=[{id:1,headline:"PV Smart Click",category:["Application"," | ","Energetics"],src:v},{id:2,headline:"Kaufland marke(t)",category:["Application"],src:f},{id:2,headline:"Eduvizija",category:["Application"],src:k}],b=[{title:"Banke",content:["Modul za narudžbu gotovine","Modul za gotovinske zajmove","Mobilno bankarstvo i Omnichannel (razvoj frontend-a)","Projekt implementacije čarobnjaka koji prikazuje generičke zaslone definirane konfiguracijom koristeći tehnologiju React. Aplikacija koja crta zaslone iz dizajna koji se povlači s BE-a i ima prijenos podataka poslanih natrag na BE.",'Projekt na modulu za "ca-onboarding", na proširenom kyc obrascu.',"Razvoj aplikacija za unos podataka o bankama. Dio frontend-a, aplikacija u angularu (CPM unutar EMA)."],category:["Banke"]},{title:"Državni sektor",content:["Aplikacija porezne uprave","Aplikacija skladišta za područja pogođena potresom za vladu","Aplikacija za obračun plaće za drugi dohodak vlade"],category:["Državni sektor"]},{title:"Trgovina",content:["Implementacija ERP/POS u maloprodaji","Automatske narudžbe za POS","Mjenjačnice za male trgovine","WEB integracija blagajne sa ERP-om","Automatski unos radnog vremena i izvoz izvješća","Integracija s tvrtkom za distribuciju paketa","Integracija za EDI razmjenu","Integracija za aplikaciju plaćanja računa"],category:["Trgovina"]},{title:"Telekomunikacije",content:["LH1E – Implementacija svjetionika 1e","LCM alat 2.0 – Održavanje legacy komponenti","CSDP - Platforma za podršku korisnicima"],category:["Telekomunikacije"]}];function E({lang:i}){const[g,s]=t.useState(o),[x,y]=t.useState(b),[n,c]=t.useState(!0),[z,d]=t.useState(!1),[l,p]=t.useState(!1),[A,m]=t.useState(!1),u=()=>{s(o),c(!0),d(!1),p(!1),m(!1)},j=()=>{const a=o.filter(r=>r.category.includes("Web Design"));s(a),c(!1),d(!1),p(!0),m(!1)};return e.jsxs("div",{className:"relative bg-gray-200",children:[e.jsx("div",{className:"px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24",children:e.jsx("div",{className:"sm:pe-6 lg:pe-8",children:e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("p",{className:"text-green-500 text-left font-bold text-lg md:text-2xl",children:"RECENT WORKS"}),e.jsx("h2",{className:"text-left font-bold text-4xl md:text-4xl",children:"Our Portfolio"})]})})}),e.jsx("div",{children:e.jsxs("div",{className:"flex space-x-4 max-w-lg mx-auto pb-20 px-5",children:[e.jsx("button",{onClick:u,className:`flex-1 duration-all duration-300  ${n?"bg-green-500 ":"border-black border"} ${n?"text-white":"text-black"}  font-bold py-2 px-4 rounded shadow-2xl `,children:"Aplikacije"}),e.jsx("button",{onClick:j,className:`flex-1 duration-300 ${l?"bg-green-500 ":"border-black border"} ${l?"text-white":"text-black"} font-bold py-2 px-4 rounded shadow-2xl`,children:"Razno"})]})}),e.jsx("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto gap-20 w-full px-5",children:g.map(a=>e.jsxs("div",{className:"relative group",children:[e.jsx("a",{href:(i===void 0?`/hr/portfolio/${a.headline}`:`/en/portfolio/${a.headline}`).toLowerCase().replace(/\s/g,"-").replaceAll(",","").replaceAll("ć","c").replaceAll("š","s").replaceAll("!","").replaceAll("?",""),className:"block rounded-md overflow-hidden",children:e.jsx("div",{className:"bg-gray-200 border border-gray-300 shadow-md p-5",children:e.jsx("img",{src:a.src.src,alt:"images",className:"w-full h-[20rem] object-contain"})})}),e.jsxs("div",{className:`mt-4 flex flex-col items-start justify-start opacity-0 bg-white transition-all duration-500 transform translate-y-[-4rem] 
              group-hover:opacity-100 group-hover:translate-y-[-7rem] mx-2 py-4 rounded-lg ease-in`,children:[e.jsx("h2",{className:"text-lg text-center opacity-0 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-5 duration-500 delay-200 text-green-500 font-semibold",children:a.category}),e.jsx("a",{href:`/${i}/portfolio/${a.headline.toLowerCase().replace(/\s/g,"-").replaceAll(",","").replaceAll("ć","c").replaceAll("š","s").replaceAll("!","").replaceAll("?","")}`,className:"text-lg text-black transform translate-x-20 group-hover:translate-x-5 duration-500 delay-500",children:e.jsx("p",{className:"text-base text-start opacity-0 group-hover:opacity-100 translate-x-20 group-hover:-translate-x-0 duration-500 delay-200 text-black font-semibold ",children:a.headline})})]})]},a.id))}),e.jsx("div",{className:"grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2",children:l?x.map(a=>e.jsxs("div",{className:"border p-4 m-4",children:[e.jsx("p",{className:"font-bold mb-2 text-left text-2xl",children:a.category}),e.jsx("ul",{className:"list-disc ",children:a.content.map((r,h)=>e.jsx("li",{className:"mb-2",children:r},h))})]},a.id)):""})]})}export{E as default};
