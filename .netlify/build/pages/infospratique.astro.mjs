import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DtKCzDam.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_B6aXVqVn.mjs';
export { renderers } from '../renderers.mjs';

const map = new Proxy({"src":"/_astro/image 11.DaWG5QGa.png","width":295,"height":209,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/assets/img/image 11.png";
							}
							
							return target[name];
						}
					});

const campanile = new Proxy({"src":"/_astro/image 29.DpGKbG-Y.png","width":176,"height":176,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/assets/img/image 29.png";
							}
							
							return target[name];
						}
					});

const hotelwestern = new Proxy({"src":"/_astro/image 30.fcM7w9N3.png","width":176,"height":176,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/assets/img/image 30.png";
							}
							
							return target[name];
						}
					});

const kyriad = new Proxy({"src":"/_astro/image 31.RBM4t-K7.png","width":176,"height":176,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/assets/img/image 31.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="flex justify-center">Infos pratiques</h2> <div class="flex items-center justify-center mt-5 pb-2"> ${renderComponent($$result2, "Image", $$Image, { "src": map, "alt": "map de l'endroit" })} </div> <div class="ml-8"> <p>Lac du Malsaucy </p> <p>7 rue du Malsaucy </p> <p>90300 Sermamagny</p> </div> <div class="mb-5"> <h4 class="ml-10 underline mt-4">Horraires :</h4> <div class="ml-8"> <p>Le festival Cinénature ce passera aux horaires suivantes</p> <p>Samedi 10h 23h</p> <p>Dimanche et Lundi 10h 21h</p> </div> </div> <div class="mb-5"> <h4 class="ml-10 underline">Tarifs :</h4> <div class="ml-8"> <p>Pass 1 jour : 55 euros</p> <p>Pass 2 jours : 80 euros</p> <p>Pass complet : 95 euros</p> </div> </div> <h3 class="ml-10 mb-5">Hébergement</h3> <div class="ml-10"> ${renderComponent($$result2, "Image", $$Image, { "src": campanile, "alt": "campanile" })} </div> <div class="ml-8"> <p>Campanile Belfort-Montbéliard***</p> <p>La Jonxion</p> <p>Avenue de la Gare TGV</p> <p>90400 Meroux</p> <p>03 84 19 08 97</p> </div> <div class="ml-10"> ${renderComponent($$result2, "Image", $$Image, { "src": hotelwestern, "alt": "western" })} </div> <div class="ml-8"> <p>HOTEL BEST WESTERN</p> <p>9 avenue wilson</p> <p>90000 Belfort</p> <p>03 84 21 59 45</p> </div> <div class="ml-10"> ${renderComponent($$result2, "Image", $$Image, { "src": kyriad, "alt": "kyriad" })} </div> <div class="ml-8"> <p></p> <p>HOTEL KYRIAD</p> <p>55 Bis Fbg de Montbéliard</p> <p>90000 Belfort</p> <p>03 84 22 46 76</p> </div> <h3 class="ml-10 mb-5 mt-2">Comment venir</h3> <p class="ml-8 pb-5">Le festival Cinénature se déroule sur la presqu’île du Malsaucy, un site protégé situé à 7 km de Belfort. Afin de limiter les impacts environnementaux et réduire le temps de venue sur le site, le festival développe un dispositif de navettes train et bus gratuits entre la gare TGV Belfort-Montbéliard, la gare Belfort-Ville, le camping et le site du festival. Cinénature encouragent et recommandent d’utiliser des moyens de transport alternatifs à la voiture, tels que le vélo ou les transports en commun.</p> ` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/infospratique/index.astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/infospratique/index.astro";
const $$url = "/infospratique";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
