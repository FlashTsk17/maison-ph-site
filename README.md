# Maison PH — Site vitrine

## Structure du projet
- `index.html` — page unique du site
- `style.css` — tous les styles (charte Maison PH : navy/doré/ivoire)
- `script.js` — filtrage des collections, menu mobile, animations
- `data/collections.json` — le catalogue (c'est CE fichier que Pierre édite via /admin)
- `images/homme/`, `images/femme/`, `images/enfant/` — photos des créations
- `admin/` — interface Decap CMS (panneau d'administration pour Pierre)

## Étape 1 — Aperçu rapide (GitHub Pages)
1. Créer un repo sur le compte Flashtsk17 (ex: `maison-ph-site`)
2. Pousser tous les fichiers de ce dossier
3. Activer GitHub Pages (Settings → Pages → branch main → /root)
4. Le site est visible à `https://flashtsk17.github.io/maison-ph-site/`

⚠️ À cette étape, le panneau `/admin` ne fonctionnera pas encore (il a besoin de
Netlify Identity + Git Gateway pour l'authentification — voir étape 2).

## Étape 2 — Hébergement final (Netlify) + activation de l'admin
1. Connecter le repo GitHub à Netlify (nouveau site depuis Git)
2. Dans Netlify : Site settings → Identity → Enable Identity
3. Identity → Registration → "Invite only" (pour que seul Pierre ait accès)
4. Identity → Services → Git Gateway → Enable Git Gateway
5. Inviter Pierre par email depuis l'onglet Identity (il recevra un lien pour
   créer son mot de passe)
6. Une fois connecté, Pierre accède à `https://[votre-site].netlify.app/admin`
   et peut ajouter/modifier/supprimer des créations sans toucher au code —
   même après la fin du programme Tsk Tremplin.

## Modifier les liens réseaux sociaux
Dans `index.html`, chercher les balises `<a href="#" target="_blank" aria-label="Instagram">`
etc. dans la section Contact, et remplacer les `#` par les vrais liens une fois
les comptes harmonisés.

## Modifier le numéro WhatsApp
Le numéro est présent à plusieurs endroits (`wa.me/22901541574`) — remplacer
partout si le numéro change.
