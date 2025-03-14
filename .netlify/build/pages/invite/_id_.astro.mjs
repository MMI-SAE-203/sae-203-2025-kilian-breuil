import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DtKCzDam.mjs';
import { o as oneIDInvite, $ as $$ImgPb } from '../../chunks/ImgPb_BaSukuCJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invites = await oneIDInvite(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="./"> <p class=" font-bold py-10">Retour sur les invités</p></a> <div></div> ${renderComponent($$result2, "ImgPB", $$ImgPb, { "record": invites, "field": "image", "alt": invites.imgAlt, "classPicture": "duotone  col-span-2 row span-3 flex items-center justify-center", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal mb-3" })} <p class="flex text-center justify-center">${invites.prenom} ${invites.nom}</p> <div class="col-start-2 ml-10 flex items-center justify-center mt-3"> <h3 class="text-2xl font-semibold"> <a class="text-black"${addAttribute(`/film/${invites.id}`, "href")}>${invites.nom_invite} ${invites.prenom_invite}</a> </h3> <address class="text-black pb-4"> ${invites.bio} </address> </div></div>` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
