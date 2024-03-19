import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CartModal = () => {
  const [products, setProducts] = useState([]);

  const fetchCartItems = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/product/getCart`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token-client"),
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleCallback = () => {
    fetchCartItems();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger onClick={fetchCartItems}>
        <div className='absolute right-4 bottom-4 flex items-center gap-1 bg-gray-600 text-white p-2 rounded-lg'>
          <h1>View Cart</h1>
          <div>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/25 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none space-y-4 flex flex-col items-end justify-end'>
          {products.length > 0 ? (
            products.map((product, index) => (
              <CartItem
                id={product.id}
                key={index}
                productId={product.productId}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                scale={product.scale}
                handleDelete={handleCallback}
              />
            ))
          ) : (
            <p className='h-fit place-self-start text-xl'>Cart is Empty</p>
          )}
          <div className='flex items-center gap-1'>
            <Dialog.Close className='px-3 py-1 flex items-center justify-around gap-1 text-red-500 rounded-md bg-none border border-red-500 hover:bg-red-500 hover:text-white transition duration-300'>
              Close
            </Dialog.Close>
            <button className='px-3 py-1 flex items-center justify-around gap-1 text-green-600 rounded-md bg-none border border-green-600 hover:bg-green-600 hover:text-white transition duration-300'>
              Checkout
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const CartItem = ({
  id,
  productId,
  name,
  quantity,
  image,
  price,
  scale,
  handleDelete,
}) => {
  const [qty, setQty] = useState(quantity);

  const removeFromCart = () => {
    axios
      .delete(
        `${import.meta.env.VITE_APP_API_URL}/product/removeFromCart/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token-client"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        handleDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDecrease = () => {
    setQty((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQty((prev) => prev + 1);
  };

  const updateCart = () => {
    const data = {
      id: id,
      product: {
        id: productId,
      },
      quantity: qty,
    };
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/product/updateCart`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token-client"),
        },
      })
      .then((res) => {
        console.log(res.data);
        handleDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (qty > 0) updateCart();
    else removeFromCart();
  }, [qty]);

  return (
    <div className='flex gap-2'>
      <img src={image} alt={name} className='w-1/3 h-full' />
      <div className='w-1/3 flex flex-col justify-end'>
        <h1 className='font-bold text-sm'>Total</h1>
        <p className='text-lg'>₹{price * qty}</p>
      </div>
      <div className='w-1/3 flex flex-col items-end justify-end'>
        <h1 className='capitalize font-semibold'>{name}</h1>
        <p>
          ₹{price} per <span className='capitalize'>{scale}</span>
        </p>
        <p className='capitalize'>
          qty {qty} {scale}
        </p>
        <div className='flex items-center gap-1'>
          <button
            className='size-6 bg-red-600 text-center text-white rounded-full text-sm hover:bg-red-800'
            onClick={handleDecrease}>
            -
          </button>
          <button
            className='size-6 bg-red-600 text-center text-white rounded-full text-sm hover:bg-red-800'
            onClick={handleIncrease}>
            +
          </button>
          <FontAwesomeIcon
            className='text-red-500 hover:text-red-800 cursor-pointer'
            onClick={removeFromCart}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
