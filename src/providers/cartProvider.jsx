import { useState, useEffect, createContext } from 'react'

export const CartContext = createContext()

const getItemFromStorage = (item) =>
  JSON.parse(localStorage.getItem(item));

const CartProvider = ({ children }) => {
    const [totalCount, setTotalCount] = useState(0);
    const [productList, setProductList] = useState(() => {
		const storageCart = getItemFromStorage('Cart');
		return storageCart || [];
});


useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(productList));
}, [productList]);

    const isInCart = (itemId) => productList.find(item => item.id === itemId);

    const addItem = (item, quantity = 0) => {
        const cart = [...productList]
        console.log(item?.id)
        const product = isInCart(item?.id)
        if (!product) {
			setProductList([...cart, { ...item, quantity }])
		} else {
            const newArr = cart.map(obj => {
                if (obj.id === item?.id) {
                  return {...obj, quantity: obj.quantity + 1};
                }
              
                return obj;
              })
              setProductList([...newArr])
		}
    }

    const removeItem = (item) => {
        const cart = [...productList];
        const filteredList = cart.filter(product => item.id !== product.id);
        setProductList(filteredList)
    }

    const restQuantity = (item) => {
        const cart = [...productList];
        
        if (item.quantity <= 1 ) {
            const filteredList = productList.filter(product => item.id !== product.id);
            return setProductList(filteredList)
        }
        
        const newArr = cart.map(obj => {
            if (obj.id === item?.id) {
              return {...obj, quantity: obj.quantity - 1};
            }
        
          
            return obj;
          })
          setProductList([...newArr])
        
    }

    function getTotalPrice() {
        let total = 0;
        productList.forEach((itemInCart) => {
          total = total + itemInCart.quantity * itemInCart.price;
        });
        return total;
      }

    useEffect(() => {
        getTotalPrice()
    },[productList])
 
    return (
        <CartContext.Provider value={{
            totalCount,
            productList,
            addItem,
            removeItem,
            restQuantity,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider