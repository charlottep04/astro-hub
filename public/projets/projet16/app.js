var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//interfaces créées avec le site https://app.quicktype.io/
var HttpClient = /** @class */ (function () {
    function HttpClient(url) {
        this.url = url;
        this.options = {
            headers: {
                "Content-Type": "application/json",
            },
        };
    }
    HttpClient.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch(this.url, this.options)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data_1 = _a.sent();
                        return [2 /*return*/, data_1];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("There was a problem with the fetch operation: ", error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return HttpClient;
}());
var CreateClient = /** @class */ (function (_super) {
    __extends(CreateClient, _super);
    function CreateClient(url, data) {
        var _this = _super.call(this, url) || this;
        _this.options.method = "POST";
        _this.options.body = JSON.stringify(data);
        return _this;
    }
    return CreateClient;
}(HttpClient));
var ReadClient = /** @class */ (function (_super) {
    __extends(ReadClient, _super);
    function ReadClient(url) {
        var _this = _super.call(this, url) || this;
        _this.options.method = "GET";
        return _this;
    }
    return ReadClient;
}(HttpClient));
var UpdateClient = /** @class */ (function (_super) {
    __extends(UpdateClient, _super);
    function UpdateClient(url, data) {
        var _this = _super.call(this, url) || this;
        _this.options.method = "PATCH";
        _this.options.body = JSON.stringify(data);
        return _this;
    }
    return UpdateClient;
}(HttpClient));
var DeleteClient = /** @class */ (function (_super) {
    __extends(DeleteClient, _super);
    function DeleteClient(url) {
        var _this = _super.call(this, url) || this;
        _this.options.method = "DELETE";
        return _this;
    }
    return DeleteClient;
}(HttpClient));
//lecture de tous les restaurants
var url = "http://localhost:3000/restaurants";
var readClient = new ReadClient(url);
readClient.execute().then(function (restaurants) {
    if (restaurants) {
        restaurants.forEach(function (restaurant) {
            console.log("READ id : ".concat(restaurant.id, " name : ").concat(restaurant.name, " "));
        });
    }
});
//suppression du restaurant "Le Café Rigolo"
var deleteClient = new DeleteClient("".concat(url, "/3aa8"));
deleteClient.execute().then(function (restaurant) {
    if (restaurant) {
        console.log("DELETE id : ".concat(restaurant.id, " name : ").concat(restaurant.name, " "));
    }
});
//création du restaurant "Le Restaurant de la Joie"
var data = {
    name: "Le Restaurant de la Joie",
    description: "Un restaurant où la joie est au menu",
    categoryIds: ["71b2"],
};
var createClient = new CreateClient(url, data);
createClient.execute().then(function (restaurant) {
    if (restaurant) {
        console.log("CREATE id : ".concat(restaurant.id, " name : ").concat(restaurant.name, " "));
    }
});
//modification du restaurant "Le Grill Marrant" pour le renommer "Le Grill Super Marrant"
var updatedData = {
    name: "Le Grill Super Marrant",
};
var updateClient = new UpdateClient("".concat(url, "/12b3"), updatedData);
updateClient.execute().then(function (restaurant) {
    if (restaurant) {
        console.log("UPDATE id : ".concat(restaurant.id, " name : ").concat(restaurant.name, " "));
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
function updateCategoryIds(action, categoryId, newCategoryId // Ajout d'un paramètre pour la nouvelle catégorie en cas de modification
) {
    return __awaiter(this, void 0, void 0, function () {
        var url, readClient, restaurants, updatedRestaurants, _i, updatedRestaurants_1, restaurant, updateClient_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:3000/restaurants";
                    readClient = new ReadClient(url);
                    return [4 /*yield*/, readClient.execute()];
                case 1:
                    restaurants = _a.sent();
                    if (!restaurants) return [3 /*break*/, 5];
                    updatedRestaurants = restaurants.map(function (restaurant) {
                        var _a;
                        if ((_a = restaurant.categoryIds) === null || _a === void 0 ? void 0 : _a.includes(categoryId)) {
                            if (action === "delete") {
                                // Supprime la catégorie des categoryIds
                                restaurant.categoryIds = restaurant.categoryIds.filter(function (id) { return id !== categoryId; }); // Filtre les categoryIds pour exclure la catégorie supprimée
                            }
                            else if (action === "update" && newCategoryId) { // Vérifie si une nouvelle catégorie est fournie
                                restaurant.categoryIds = restaurant.categoryIds.map(function (id) {
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
                    _i = 0, updatedRestaurants_1 = updatedRestaurants;
                    _a.label = 2;
                case 2:
                    if (!(_i < updatedRestaurants_1.length)) return [3 /*break*/, 5];
                    restaurant = updatedRestaurants_1[_i];
                    updateClient_1 = new UpdateClient("".concat(url, "/").concat(restaurant.id), restaurant);
                    return [4 /*yield*/, updateClient_1.execute()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateRestaurantIds(action, restaurantId, newRestaurantId // Ajout d'un paramètre pour le nouvel ID en cas de modification
) {
    return __awaiter(this, void 0, void 0, function () {
        var url, readClient, categories, updatedCategories, _i, updatedCategories_1, category, updateClient_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:3000/categories";
                    readClient = new ReadClient(url);
                    return [4 /*yield*/, readClient.execute()];
                case 1:
                    categories = _a.sent();
                    if (!categories) return [3 /*break*/, 5];
                    updatedCategories = categories.map(function (category) {
                        var _a;
                        if ((_a = category.restaurantIds) === null || _a === void 0 ? void 0 : _a.includes(restaurantId)) {
                            if (action === "delete") {
                                // Supprime le restaurant des restaurantIds
                                category.restaurantIds = category.restaurantIds.filter(function (id) { return id !== restaurantId; }); // Filtre les restaurantIds pour exclure le restaurant supprimé
                            }
                            else if (action === "update" && newRestaurantId) { // Vérifie si un nouvel ID de restaurant est fourni
                                category.restaurantIds = category.restaurantIds.map(function (id) {
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
                    _i = 0, updatedCategories_1 = updatedCategories;
                    _a.label = 2;
                case 2:
                    if (!(_i < updatedCategories_1.length)) return [3 /*break*/, 5];
                    category = updatedCategories_1[_i];
                    updateClient_2 = new UpdateClient("".concat(url, "/").concat(category.id), category);
                    return [4 /*yield*/, updateClient_2.execute()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateRestaurantCategories(action, restaurantId, categoryId, newRestaurantId, newCategoryId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, readClient, restaurantCategories, updatedRelations, updateClient_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:3000/restaurantCategories";
                    readClient = new ReadClient(url);
                    return [4 /*yield*/, readClient.execute()];
                case 1:
                    restaurantCategories = _a.sent();
                    if (!restaurantCategories) return [3 /*break*/, 3];
                    updatedRelations = restaurantCategories;
                    if (action === "delete") {
                        // Supprime les relations liées au restaurant ou à la catégorie
                        updatedRelations = restaurantCategories.filter(function (relation) {
                            return ((restaurantId && relation.restaurantId !== restaurantId) &&
                                (categoryId && relation.categoryId !== categoryId));
                        });
                    }
                    else if (action === "update") {
                        // Met à jour les relations avec les nouveaux IDs
                        updatedRelations = restaurantCategories.map(function (relation) {
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
                    updateClient_3 = new UpdateClient(url, updatedRelations);
                    return [4 /*yield*/, updateClient_3.execute()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Test de la fonction updateCategoryIds
var categoryIdToDelete = "34b0";
updateCategoryIds("delete", categoryIdToDelete); // Suppression de la catégorie
var oldCategoryId = "71b2";
var newCategoryId = "82c3";
updateCategoryIds("update", oldCategoryId, newCategoryId); // Mise à jour de la catégorie
// Test de la fonction updateRestaurantIds
var restaurantIdToDelete = "3aa8";
updateRestaurantIds("delete", restaurantIdToDelete);
var oldRestaurantId = "3aa8";
var newRestaurantId = "4bb9";
updateRestaurantIds("update", oldRestaurantId, newRestaurantId);
// Test de la fonction updateRestaurantCategories
// Supression d'un restaurant
var restaurantIdToDelete2 = "3aa8";
updateRestaurantCategories("delete", restaurantIdToDelete2);
// Supression d'une catégorie
var categoryIdToDelete2 = "34b0";
updateRestaurantCategories("delete", undefined, categoryIdToDelete2);
// Modification d'un restaurant
var oldRestaurantId2 = "3aa8";
var newRestaurantId2 = "4bb9";
updateRestaurantCategories("update", oldRestaurantId2, undefined, newRestaurantId2);
// Modification d'une catégorie
var oldCategoryId3 = "71b2";
var newCategoryId3 = "82c3";
updateRestaurantCategories("update", undefined, oldCategoryId3, undefined, newCategoryId3);
