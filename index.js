import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})

app.get("/", async (req, res) =>{
    try{
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const ingredients = [result.data.drinks[0].strIngredient1, result.data.drinks[0].strIngredient2, result.data.drinks[0].strIngredient3, result.data.drinks[0].strIngredient4, result.data.drinks[0].strIngredient5, result.data.drinks[0].strIngredient6, result.data.drinks[0].strIngredient7]
        const measure = [result.data.drinks[0].strMeasure1, result.data.drinks[0].strMeasure2, result.data.drinks[0].strMeasure3, result.data.drinks[0].strMeasure4, result.data.drinks[0].strMeasure5, result.data.drinks[0].strMeasure6, result.data.drinks[0].strMeasure7]
        res.render("index.ejs", {
            img: result.data.drinks[0].strDrinkThumb,
            name: result.data.drinks[0].strDrink,
            glass: result.data.drinks[0].strGlass,
            instructions: result.data.drinks[0].strInstructions,
            ingredients: ingredients,
            measure: measure,
        });  
    } catch (error){
        res.render("index.ejs", {
            img: "", name: error, glass: "", instructions: "", ingredients: "", measure: "",
        });
        res.status(500);
    }
})

app.post("/", async (req, res) =>{
    try{
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const ingredients = [result.data.drinks[0].strIngredient1, result.data.drinks[0].strIngredient2, result.data.drinks[0].strIngredient3, result.data.drinks[0].strIngredient4, result.data.drinks[0].strIngredient5, result.data.drinks[0].strIngredient6, result.data.drinks[0].strIngredient7]
        const measure = [result.data.drinks[0].strMeasure1, result.data.drinks[0].strMeasure2, result.data.drinks[0].strMeasure3, result.data.drinks[0].strMeasure4, result.data.drinks[0].strMeasure5, result.data.drinks[0].strMeasure6, result.data.drinks[0].strMeasure7]
        res.render("index.ejs", {
            img: result.data.drinks[0].strDrinkThumb,
            name: result.data.drinks[0].strDrink,
            glass: result.data.drinks[0].strGlass,
            instructions: result.data.drinks[0].strInstructions,
            ingredients: ingredients,
            measure: measure,
        });  
    } catch (error){
        res.render("index.ejs", {
            img: "", name: error, glass: "", instructions: "", ingredients: "", measure: "",
        });
        res.status(500);
    }
})

app.post("/search", async (req, res) =>{
    try{
        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.cockName}`);
        const ingredients = [result.data.drinks[0].strIngredient1, result.data.drinks[0].strIngredient2, result.data.drinks[0].strIngredient3, result.data.drinks[0].strIngredient4, result.data.drinks[0].strIngredient5, result.data.drinks[0].strIngredient6, result.data.drinks[0].strIngredient7]
        const measure = [result.data.drinks[0].strMeasure1, result.data.drinks[0].strMeasure2, result.data.drinks[0].strMeasure3, result.data.drinks[0].strMeasure4, result.data.drinks[0].strMeasure5, result.data.drinks[0].strMeasure6, result.data.drinks[0].strMeasure7]
        res.render("index.ejs", {
            img: result.data.drinks[0].strDrinkThumb,
            name: result.data.drinks[0].strDrink,
            glass: result.data.drinks[0].strGlass,
            instructions: result.data.drinks[0].strInstructions,
            ingredients: ingredients,
            measure: measure,
        });  
    } catch (error){
        res.render("index.ejs", {
            img: "", name: "No drinks matching that name, please try again", glass: "", instructions: "", ingredients: [], measure: [],
        });
        res.status(500); 
    }
})
