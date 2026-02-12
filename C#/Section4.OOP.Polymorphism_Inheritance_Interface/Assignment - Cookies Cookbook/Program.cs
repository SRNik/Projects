// Welcome to the Cookies Cookbook application

using CookiesCookbook.Recipes;
using CookiesCookbook.Recipes.Ingredients;
using CookiesCookbook.FileAccess;
using CookiesCookbook.DataAccess;
using CookiesCookbook.App;

const FileFormat Format = FileFormat.Json;

IStringsRepository stringsRepository = Format == FileFormat.Json ? 
    new StringsJsonRepository() : 
    new StringsTextualRepository();

const string FileName = "recipe";
var fileMetaData = new FileMetaData(FileName, Format);

var ingredientsRegister = new IngredientsRegister();

var cookiesRecipesApp = new CookiesRecipesApp(
    new RecipesRepository(stringsRepository, ingredientsRegister),
    new RecipesUserInterface(ingredientsRegister));

cookiesRecipesApp.Run(fileMetaData.ToPath());








