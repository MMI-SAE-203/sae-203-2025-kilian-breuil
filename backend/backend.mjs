import PocketBase from 'pocketbase' ;	
export const pb = new PocketBase(`http://127.0.0.1:8090/`) ;

export async function getfilm() {
    const getfilms = await pb.collection('film').getFullList({ sort : 'date', }) ;
    return  getfilms ;
}

export async function getactivite() {
    const getactivite = await pb.collection('activite').getFullList({ sort : 'date', }) ;
    return  getactivite ;
}

export async function getinvite() {
    const getinvite = await pb.collection('invite').getFullList({ sort: 'nom' });
    return getinvite;
}

export async function oneID(id) {
    const oneRecord = await pb.collection('film').getOne(id, { expand: 'invite' });
    return oneRecord;
}

export async function oneIDActivite(id) {
    const oneRecord = await pb.collection('activite').getOne(id);
    return oneRecord;
}

export async function oneIDInvite(id) {
    const oneRecord = await pb.collection('invite').getOne(id);
    return oneRecord;
}

export async function allActiviteByInvite(id) {
    return await pb.collection('activite').getFullList({
        filter: `invite_activite.id = '${id}'`,
        expand: 'invite_activite',
    });
}

export async function allActiviteByName(nom) {
    return await pb.collection('activites').getFullList({
        filter: `invite_activite.nom = '${nom}'`,
        expand: 'invite_activite',
    });
}

export async function addNewFilm(newFilm) {
    return await pb.collection('film').create(newFilm);
}

export async function addNewInvite(newInvite) {
    return await pb.collection('invite').create(newInvite);
}

export async function addNewActivite(newActivite) {
    return await pb.collection('activite').create(newActivite);
}

export async function updateFilmById(id, data) {
    return await pb.collection('film').update(id, data);
}

export async function updateInviteById(id, data) {
    return await pb.collection('invite').update(id, data);
}

export async function updateActiviteById(id, data) {
    return await pb.collection('activite').update(id, data);
}