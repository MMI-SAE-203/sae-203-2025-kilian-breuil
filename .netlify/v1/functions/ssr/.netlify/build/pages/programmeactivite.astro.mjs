import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_G6IkVrM4.mjs';
import { $ as $$ImgPb, b as getactivite } from '../chunks/ImgPb_4VoeLRnM.mjs';
import { f as formatDate } from '../chunks/helpers_e6HYK15F.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardactivite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardactivite;
  const { ...activite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/programmeactivite/${activite.id}`, "href")}> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": activite, "field": "image_activite", "alt": activite.titre, "classPicture": "col-span-1 row span-3 flex items-center justify-center", "classImg": "object-cover" })} </a> <div class="relative px-6 py-4 space-y-2"> <p class=" font-semibold py-2 flex justify-center items-center"> <a class="text-black"${addAttribute(`/Programmefilm/${activite.id}`, "href")}>${activite.nom_activite}</a> </p> <p class="text-black flex justify-center items-center"> <span class=" font-bold ">${formatDate(activite.date)}</span> </p> </div> </article>`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/components/Cardactivite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activites = await getactivite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-20 space-y-8"> <h2>Programmes activité</h2> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${activites.length > 0 ? activites.map((activite) => renderTemplate`${renderComponent($$result2, "Cardactivite", $$Cardactivite, { ...activite })}`) : renderTemplate`<p>Aucune activitée trouvée.</p>`} </div> </div> ` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/programmeactivite/index.astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/programmeactivite/index.astro";
const $$url = "/programmeactivite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
