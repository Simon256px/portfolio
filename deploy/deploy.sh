#!/usr/bin/env bash
# Déploiement du site sur le VPS : synchronise le dépôt, reconstruit, redémarre.
# Lancé par GitHub Actions en SSH (voir .github/workflows/deploy.yml).
set -euo pipefail

REPO_DIR=/srv/portfolio
DENO=/usr/local/bin/deno
export DENO_DIR="$REPO_DIR/.deno"

cd "$REPO_DIR"

# Récupère l'état exact de origin/main (écrase tout changement local éventuel).
git fetch --prune origin
git reset --hard origin/main

# Reconstruit le site statique dans _site/.
"$DENO" task build

# Dossier des likes : hors dépôt, persistant d'un déploiement à l'autre.
mkdir -p "$REPO_DIR/data"

# Redémarre le service (sudoers autorise ce seul restart sans mot de passe).
sudo systemctl restart portfolio

echo "Déploiement terminé : $(git rev-parse --short HEAD)"
