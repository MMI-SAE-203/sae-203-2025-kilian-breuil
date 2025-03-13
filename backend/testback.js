import { getfilm,getactivite,getinvite,oneID,oneIDActivite,oneIDInvite,allActiviteByInvite,allActiviteByName,addNewFilm,addNewInvite,addNewActivite,updateFilmById,updateInviteById,updateActiviteById
   } from './backend.mjs' ;

// try { const date = await getfilm();   
//     console.log(date); 
//     } catch (e) { 
//         console.error(e); 
//     }

    /*try { const date = await getactivite();   
        console.log(date); 
        } catch (e) { 
            console.error(e); 
        }*/
        
        
        /*try {
            const records = await getinvite();
            console.log(records);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await oneID('2grp0c625y7q571');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await oneIDactivite('071jb477df49g0n');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await oneIDinvite('4m41ye2le4bdi5b');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const records = await allActiviteByInvite('4m41ye2le4bdi5b');
            console.table(records);
        } catch (e) {
            console.error(e);
            
        }*/
        
        /*try {
            const records = await allActiviteByName('Stanton');
            console.log(records);
        } catch (e) {
            console.error(e);
        
        }*/
        
        
        // try {
        //     const newFilm = {
        //         "synopsis": "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d'explorer les différentes régions encore mystérieuses de Pandora. Lorsqu'une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.",
        //         "ba": "https://www.youtube.com/watch?v=d9MyW72ELq0",
        //         "titre": "Avatar 2",
        //         "date": "2025-07-08 19:30:00",
        //     };
        
        //     await addNewFilm(newFilm);
            
        // } catch (e) {
        //     console.error(e);
        // }
        
        
        // try {
        //     const newInvite = {
        //         "nom": "Kilian",
        //         "prenom": "Breuil",
        //         "bio": "je suis un ours bleu",
        //     };
        
        //     await addNewInvite(newInvite);
        
        // } catch (e) {
        //     console.error(e);
        // }
        
//         try {
//             const newActivite = {
//                 "date": "2025-07-06 15:00:00",
//                 "nom_activite": "Atelier d'effet spéciaux",
//             };
        
//             await addNewActivite(newActivite);
        
//         } catch (e) {
//             console.error(e);
// }
        
        // try {
        //     const data = {
        //         "nom_film": "Avatar 2",
        //         "synopsis": "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d'explorer les différentes régions encore mystérieuses de Pandora. Lorsqu'une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.",
        //         "langue": "Français",
        //         "duree": "192 minutes",
        //         "bande_annonce": "https://www.youtube.com/watch?v=d9MyW72ELq0",
        //         "date": "2025-07-08 19:30:00",
        //         "infos": "Film en 3D",
        //     };
        
        //     await updateFilmById('kr880q99n78f2i7', data);
        // } catch (e) {
        //     console.error(e);
        // }
        
        
        // try {
        //     const data = {
        //         "nom": "Kilian",
        //         "prenom": "Breuil",
        //         "categorie": "Animateurs",
        //         "biographie": "update",
                
        //     };
        
        //     await updateInviteById('4m41ye2le4bdi5b', data);
        // } catch (e) {
        //     console.error(e);
        // }
        
        // try {
        //     const data = {
        //         "nom_activite": "Animation 3D",
        //         "date": "2025-09-21 17:00:00",
        //     };
        
        //     await updateActiviteById('u269lys0rdn129g', data);
        // } catch (e) {
        //     console.error(e);
        // }