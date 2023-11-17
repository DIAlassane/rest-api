import axios from "axios";

export async function productsData() {
    const products = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
    );
    return products.data;  // Assurez-vous de retourner les données et non l'objet de réponse complet
}
