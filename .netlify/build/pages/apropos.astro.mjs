import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DtKCzDam.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_CKXsgQPO.mjs';
import { i as imagepratique } from '../chunks/image 10_CTzjvJJt.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="flex justify-center mb-4">À propos</h2> <div class="ml-8 pb-5"> <p class="mb-4">Le Festival Cinénature est un événement innovant qui célèbre le septième art tout en mettant en avant des thématiques environnementales. Chaque année, il propose une sélection de films documentaires et de fictions abordant des sujets tels que la biodiversité, le changement climatique et les initiatives durables.</p> <p>En plus des projections, le festival offre des ateliers pratiques sur la permaculture et le recyclage, des rencontres avec des réalisateurs et des discussions sur l’impact du cinéma sur l'environnement. Les projections en plein air, accompagnées de stands de restauration écoresponsable, créent une atmosphère conviviale. Cet événement unique incite les participants à réfléchir à leur rapport à la nature et à agir pour un avenir plus durable.</p> ${renderComponent($$result2, "Image", $$Image, { "src": imagepratique, "alt": "Festival Cin\xE9nature", "class": "mt-5" })} </div> ` })}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/pages/apropos/index.astro", void 0);

const $$file = "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/apropos/index.astro";
const $$url = "/apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
