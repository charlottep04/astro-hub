import os

# Chemin de base des projets
base_path = r"c:\Users\chach\Documents\My_git\Display_Typescript\public\projets"

# Contenu à rechercher (ancien contenu)
old_content = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebDev101 Telecom Paris</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
            position: relative;
        }

        .return-button {
            background-color: #4a90e2;
            color: white;
            padding: 15px 30px;
            font-size: 1.1em;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 20px;
        }
    </style>
</head>

<body>
    <a href="/" class="return-button">Retour</a>
</body>


</html>"""

# Nouveau contenu (remplacement)
new_content_template = """<!DOCTYPE html>
<html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WebDev101 Telecom Paris</title>
        <style>
            body {{
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                margin: 0;
                position: relative;
                font-family: sans-serif;
            }}

            .button-container {{
                position: absolute;
                top: 20px;
                right: 20px;
                display: flex;
                gap: 10px; /* Espace entre les boutons */
            }}

            .return-button, .explications-button {{
                background-color: #4a90e2;
                color: white;
                padding: 15px 30px;
                font-size: 1.1em;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                text-decoration: none;
            }}

            .return-button:hover, .explications-button:hover {{
                background-color: #357ab7;
            }}
        </style>
    </head>

    <body>
        <div class="button-container">
            <!-- Bouton Explications -->
            <a href="../../explications/projet{X}.html" class="explications-button">Explications</a>
            <!-- Bouton Retour -->
            <a href="/" class="return-button">Retour</a>
        </div>
    </body>
</html>"""

# Parcourir les dossiers projetX
for i in range(3, 16):
    project_path = os.path.join(base_path, f"projet{i}")
    file_path = os.path.join(project_path, "index.html")

    # Vérifier si le fichier index.html existe
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()

        # Remplacer l'ancien contenu par le nouveau
        if old_content in content:
            new_content = new_content_template.replace("{X}", str(i))
            with open(file_path, "w", encoding="utf-8") as file:
                file.write(new_content)
            print(f"Fichier mis à jour : {file_path}")
        else:
            print(f"Aucun remplacement nécessaire pour : {file_path}")
    else:
        print(f"Fichier non trouvé : {file_path}")