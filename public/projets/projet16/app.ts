interface AlloResto {
  restaurants: Restaurant[];
  categories: Category[];
  restaurantCategories: RestaurantCategory[];
}

interface Category {
  id?: string;
  name?: string;
  restaurantIds?: string[];
}

interface RestaurantCategory {
  restaurantId?: string;
  categoryId?: string;
}

interface Restaurant {
  id?: string;
  name?: string;
  description?: string;
  categoryIds?: string[];
}

//interfaces créées avec le site https://app.quicktype.io/

abstract class HttpClient<T> {
  protected url: string;
  protected options: RequestInit;

  constructor(url: string) {
    this.url = url;
    this.options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  public async execute(): Promise<T | void> {
    try {
      const response = await fetch(this.url, this.options);
      if (response.ok) {
      const data: T = await response.json(); //extraction du corps de la réponse au format JSON
      return data;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  }
}

class CreateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "POST";
    this.options.body = JSON.stringify(data);
  }
}

class ReadClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "GET";
  }
}

class UpdateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "PATCH";
    this.options.body = JSON.stringify(data);
  }
}

class DeleteClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "DELETE";
  }
}

//lecture de tous les restaurants
const url = "http://localhost:3000/restaurants";

const readClient = new ReadClient<Restaurant[]>(url);
readClient.execute().then((restaurants) => {
  if (restaurants) {
    restaurants.forEach((restaurant) => {
      console.log(`READ id : ${restaurant.id} name : ${restaurant.name} `);
    });
  }
});

//suppression du restaurant "Le Café Rigolo"
const deleteClient = new DeleteClient<Restaurant>(`${url}/3aa8`);
deleteClient.execute().then((restaurant) => {
  if (restaurant) {
    console.log(`DELETE id : ${restaurant.id} name : ${restaurant.name} `);
  }
});

//création du restaurant "Le Restaurant de la Joie"
const data: Restaurant = {
  name: "Le Restaurant de la Joie",
  description: "Un restaurant où la joie est au menu",
  categoryIds: ["71b2"],
};

const createClient = new CreateClient<Restaurant>(url, data);
createClient.execute().then((restaurant) => {
  if (restaurant) {
    console.log(`CREATE id : ${restaurant.id} name : ${restaurant.name} `);
  }
});

//modification du restaurant "Le Grill Marrant" pour le renommer "Le Grill Super Marrant"
const updatedData: Restaurant = {
  name: "Le Grill Super Marrant",
};

const updateClient = new UpdateClient<Restaurant>(`${url}/12b3`, updatedData);
updateClient.execute().then((restaurant) => {
  if (restaurant) {
    console.log(`UPDATE id : ${restaurant.id} name : ${restaurant.name} `);
  }
});

/*la sortie de la console devrait être : (attention à l'order des opérations asynchrones 
qui peut varier à chaque exécution du code)

READ id : a45d name : Le Bistrot du Rire 
READ id : 12b3 name : Le Grill Marrant 
READ id : 3aa8 name : Le Café Rigolo 
READ id : 55fa name : La Crêperie Rigolote 
DELETE id : 3aa8 name : Le Café Rigolo 
UPDATE id : 12b3 name : Le Grill Super Marrant 
CREATE id : 82ef name : Le Restaurant de la Joie 
 */

//à chaque suppression/modification d'une catégorie, modifiez les categoryIds de tous les restaurants qui la contiennent

async function updateCategoryIds(
  action: "delete" | "update",
  categoryId?: string,
  newCategoryId?: string // Ajout d'un paramètre pour la nouvelle catégorie en cas de modification
): Promise<void> {
  const url = "http://localhost:3000/restaurants";
  const readClient = new ReadClient<Restaurant[]>(url);
  const restaurants = await readClient.execute();

  if (restaurants) {
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.categoryIds?.includes(categoryId!)) {
        if (action === "delete") {
          // Supprime la catégorie des categoryIds
          restaurant.categoryIds = restaurant.categoryIds.filter((id) => id !== categoryId); // Filtre les categoryIds pour exclure la catégorie supprimée
        } else if (action === "update" && newCategoryId) { // Vérifie si une nouvelle catégorie est fournie
          restaurant.categoryIds = restaurant.categoryIds.map((id) => { // cree un nouveau tableau categoryIds 
            // Vérifie si l'ID de la catégorie correspond à l'ancienne catégorie}
            if (id === categoryId) {
              return newCategoryId; // Remplace l'ancienne catégorie par la nouvelle
            }
            return id;
          });
        }
      }
      return restaurant;
    });

    // Met à jour chaque restaurant individuellement
    for (const restaurant of updatedRestaurants) {
      const updateClient = new UpdateClient<Restaurant>(`${url}/${restaurant.id}`, restaurant);
      await updateClient.execute();
    }
  }
}

async function updateRestaurantIds(
  action: "delete" | "update",
  restaurantId: string,
  newRestaurantId?: string // Ajout d'un paramètre pour le nouvel ID en cas de modification
): Promise<void> {
  const url = "http://localhost:3000/categories";
  const readClient = new ReadClient<Category[]>(url);
  const categories = await readClient.execute();

  if (categories) {
    const updatedCategories = categories.map((category) => {
      if (category.restaurantIds?.includes(restaurantId)) {
        if (action === "delete") {
          // Supprime le restaurant des restaurantIds
          category.restaurantIds = category.restaurantIds.filter((id) => id !== restaurantId); // Filtre les restaurantIds pour exclure le restaurant supprimé
        } else if (action === "update" && newRestaurantId) { // Vérifie si un nouvel ID de restaurant est fourni
          category.restaurantIds = category.restaurantIds.map((id) => { // Crée un nouveau tableau restaurantIds
            // Vérifie si l'ID du restaurant correspond à l'ancien restaurant
            if (id === restaurantId) {
              return newRestaurantId; // Remplace l'ancien restaurant par le nouveau
            }
            return id;
          });
        }
      }
      return category;
    });

    // Met à jour chaque catégorie individuellement
    for (const category of updatedCategories) {
      const updateClient = new UpdateClient<Category>(`${url}/${category.id}`, category);
      await updateClient.execute();
    }
  }
}

async function updateRestaurantCategories(
  action: "delete" | "update",
  restaurantId?: string,
  categoryId?: string,
  newRestaurantId?: string,
  newCategoryId?: string
): Promise<void> {
  const url = "http://localhost:3000/restaurantCategories";
  const readClient = new ReadClient<RestaurantCategory[]>(url);
  const restaurantCategories = await readClient.execute();

  if (restaurantCategories) {
    let updatedRelations = restaurantCategories;

    if (action === "delete") {
      // Supprime les relations liées au restaurant ou à la catégorie
      updatedRelations = restaurantCategories.filter((relation) => {
        return (
          (restaurantId && relation.restaurantId !== restaurantId) &&
          (categoryId && relation.categoryId !== categoryId)
        );
      });
    } else if (action === "update") {
      // Met à jour les relations avec les nouveaux IDs
      updatedRelations = restaurantCategories.map((relation) => {
        if (restaurantId && relation.restaurantId === restaurantId) {
          relation.restaurantId = newRestaurantId || relation.restaurantId;
        }
      /* Condition if (restaurantId && relation.restaurantId === restaurantId) :
      Vérifie deux choses :
      Si un restaurantId est fourni (non undefined ou null).
      Si le restaurantId de la relation (relation.restaurantId) correspond au restaurantId fourni.
      Si ces deux conditions sont vraies, cela signifie que cette relation est liée au restaurant que nous voulons modifier.
      relation.restaurantId = newRestaurantId || relation.restaurantId; :
      Si un newRestaurantId est fourni (non undefined ou null), il remplace l'ancien restaurantId dans la relation.
      Si newRestaurantId n'est pas fourni, le restaurantId reste inchangé grâce à l'opérateur logique ||.*/
        
        if (categoryId && relation.categoryId === categoryId) {
          relation.categoryId = newCategoryId || relation.categoryId;
        }
        return relation;
      });
    }

    // Met à jour les relations dans la base de données
    const updateClient = new UpdateClient<RestaurantCategory[]>(url, updatedRelations);
    await updateClient.execute();
  }
}


// Test de la fonction updateCategoryIds
const categoryIdToDelete = "34b0";
updateCategoryIds("delete", categoryIdToDelete); // Suppression de la catégorie
const oldCategoryId = "71b2";
const newCategoryId = "82c3";
updateCategoryIds("update", oldCategoryId, newCategoryId);  // Mise à jour de la catégorie

// Test de la fonction updateRestaurantIds
const restaurantIdToDelete = "3aa8";
updateRestaurantIds("delete", restaurantIdToDelete);
const oldRestaurantId = "3aa8";
const newRestaurantId = "4bb9";
updateRestaurantIds("update", oldRestaurantId, newRestaurantId);

// Test de la fonction updateRestaurantCategories
// Supression d'un restaurant
const restaurantIdToDelete2 = "3aa8";
updateRestaurantCategories("delete", restaurantIdToDelete2);
// Supression d'une catégorie
const categoryIdToDelete2 = "34b0";
updateRestaurantCategories("delete", undefined, categoryIdToDelete2);
// Modification d'un restaurant
const oldRestaurantId2 = "3aa8";
const newRestaurantId2 = "4bb9";
updateRestaurantCategories("update", oldRestaurantId2, undefined, newRestaurantId2);
// Modification d'une catégorie
const oldCategoryId3 = "71b2";
const newCategoryId3 = "82c3";
updateRestaurantCategories("update", undefined, oldCategoryId3, undefined, newCategoryId3);