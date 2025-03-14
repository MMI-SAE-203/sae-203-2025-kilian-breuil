import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DtKCzDam.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:grid lg:grid-cols-3"> <h2 class="text-center py-6 col-start-2">Contact</h2> <div class="items-center ml-10  py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Nom</h3> <input type="text" class="relative bg-white  w-80 h-6 rounded-3xl border border-black"> </div> <div class=" ml-10 items-center py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Prénom</h3> <input type="text" class="relative bg-white  w-80 h-6 rounded-3xl border border-black"> </div> <div class=" ml-10 items-center py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Email</h3> <input type="text" class="relative bg-white  w-80 h-6 rounded-3xl border border-black"> </div> <div class=" ml-10 items-center py-3 col-start-2 lg:justify-center lg:ml-20"> <h3>Messages</h3> <input type="text" class="relative bg-white w-80 h-36 rounded-3xl border border-black top-0"> </div> <div class=" flex justify-center items-center py-6 col-start-2"> <div class="relative bg-[#345337] w-24 h-6 rounded-lg"> <h3 class="text-center">Envoyer</h3> </div> </div> <div class=" flex justify-center items-center py-6 col-start-2"> <div class="relative bg-[#D8FFC0] w-80 h-12 rounded-lg"> <h3 class="text-center">Adresse email  www.cinenature@gmail.com</h3> </div> </div> <div class=" flex justify-center items-center py-6 col-start-2"> <div class="relative bg-[#D8FFC0] w-80 h-12 rounded-lg"> <h3 class="text-center">numéro de téléphone
                +33 XX XX XX XX </h3> </div> </div> </div> ` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
