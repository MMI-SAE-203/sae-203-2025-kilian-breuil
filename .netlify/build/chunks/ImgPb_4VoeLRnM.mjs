import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Picture } from './_astro_assets_B6aXVqVn.mjs';
import PocketBase from 'pocketbase';

const pb = new PocketBase(`http://127.0.0.1:8090/`) ;

async function getfilm() {
    const getfilms = await pb.collection('film').getFullList({ sort : 'date', }) ;
    return  getfilms ;
}

async function getactivite() {
    const getactivite = await pb.collection('activite').getFullList({ sort : 'date', }) ;
    return  getactivite ;
}

async function getinvite() {
    const getinvite = await pb.collection('invite').getFullList({ sort: 'nom' });
    return getinvite;
}

async function oneID(id) {
    const oneRecord = await pb.collection('film').getOne(id, { expand: 'invite' });
    return oneRecord;
}

async function oneIDActivite(id) {
    const oneRecord = await pb.collection('activite').getOne(id, { expand: 'animateur' });
    return oneRecord;
}

async function oneIDInvite(id) {
    const oneRecord = await pb.collection('invite').getOne(id, { expand: 'film' });
    return oneRecord;
}

const $$Astro = createAstro();
const $$ImgPb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImgPb;
  const { record, field = "imgUrl", alt, classPicture, classImg, thumb = "1024x1024" } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "alt": alt || "Image", "src": imageUrl })}`}`;
}, "C:/Users/kilia/OneDrive/\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A/GitHub/sae-203-2025-kilian-breuil/src/components/ImgPb.astro", void 0);

export { $$ImgPb as $, oneIDActivite as a, getactivite as b, oneID as c, getfilm as d, getinvite as g, oneIDInvite as o };
