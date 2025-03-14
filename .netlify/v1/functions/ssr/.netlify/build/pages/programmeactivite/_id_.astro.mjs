import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DtKCzDam.mjs';
import { a as oneIDActivite, $ as $$ImgPb } from '../../chunks/ImgPb_4VoeLRnM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const oneRecord = await oneIDActivite(id);
  console.log(oneRecord);
  const { ...activite } = oneRecord;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="./"> <p class=" font-bold py-5 ml-5">Retour sur le programme</p> <div></div> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": activite, "field": "image_activite", "alt": activite.nom_activite, "classPicture": "col-span-1 row span-3 flex items-center justify-center ", "classImg": "object-cover" })} </a><p class=" font-semibold py-2 flex justify-center items-center"><a href="./"></a><a class="text-black"${addAttribute(`/programmeactivite/${activite.id}`, "href")}>${activite.nom_activite}</a> </p> <p class=" font-semibold py-2 ml-5"> <a class="text-black"${addAttribute(`/programmeactivite/${activite.id}`, "href")}>${activite.image_activite}</a> </p><p class="ml-5">invité :<a${addAttribute(`/invite/${activite.expand?.animateur.id}`, "href")}>${activite.expand?.animateur.nom} ${activite.expand?.animateur.prenom}</a></p>  </div>` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/programmeactivite/[id].astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/programmeactivite/[id].astro";
const $$url = "/programmeactivite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
