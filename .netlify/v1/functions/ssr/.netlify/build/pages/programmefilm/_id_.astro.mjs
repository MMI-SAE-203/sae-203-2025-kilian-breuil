import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DtKCzDam.mjs';
import { c as oneID, $ as $$ImgPb } from '../../chunks/ImgPb_BaSukuCJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const oneRecord = await oneID(id);
  const { ...film } = oneRecord;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="./"> <p class=" font-bold py-5 ml-5">Retour sur le programme</p> <div></div> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": film, "field": "affiche", "alt": film.titre, "classPicture": "col-span-1 row span-3 flex items-center justify-center ", "classImg": "object-cover" })} </a><p class=" font-semibold py-2 flex justify-center items-center"><a href="./"></a><a class="text-black"${addAttribute(`/Programmefilm/${film.id}`, "href")}>${film.nom_film}</a> </p> <p class=" font-semibold py-2 ml-5"> <a class="text-black"${addAttribute(`/Programmefilm/${film.id}`, "href")}>${film.synopsis}</a> </p><p class=" font-semibold py-2 ml-5"> <a class="text-black"${addAttribute(`/Programmefilm/${film.id}`, "href")}>${film.infos}</a> </p> <p class="ml-5">invité :<a${addAttribute(`/invite/${film.expand?.invite.id}`, "href")}>${film.expand?.invite.nom_invite} ${film.expand?.invite.prenom_invite}</a></p> <p class="text-black pb-4 ml-5"> ${film.ba} </p>  </div>` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/Programmefilm/[id].astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/Programmefilm/[id].astro";
const $$url = "/Programmefilm/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
