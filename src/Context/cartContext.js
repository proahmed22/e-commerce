import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartContext = createContext();

export default function CartContextProvider({ children }) {

    const [numOfCartItems, setnumOfCartItems] = useState(null)
    const [totalCartPrice, settotalCartPrice] = useState(null)
    const [Cartproducts, setCartProducts] = useState(null)


    async function addToCart(proId) {
        try {

            const { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/cart', {
                "productId": proId
            }, {
                headers: { 'token': localStorage.getItem('tkn') }
            })

            if (data.status === 'success') {
                return true
            }
            else {
                return false
            }

        } catch (error) {
            console.log('errorr', error);
        }
    }



    async function getLoggedUserCart() {
        try {

            const { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/cart', {
                headers: { 'token': localStorage.getItem('tkn') }
            })
            console.log(data);

            if (data.status === 'success') {
                setnumOfCartItems(data.numOfCartItems)
                settotalCartPrice(data.data.totalCartPrice)
                setCartProducts(data.data.products)

            }


        } catch (error) {
            console.log('errorr', error);
        }
    }


    useEffect(() => {
        getLoggedUserCart()
    }, [])


    return <>
        <cartContext.Provider value={{ addToCart, numOfCartItems, totalCartPrice,Cartproducts }}>
            {children}
        </cartContext.Provider>
    </>;
}