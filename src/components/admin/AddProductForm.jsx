import React, { useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
import * as Dialog from "@radix-ui/react-dialog";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    image: null,
    price: 0,
    scale: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const imageRef = ref(
        storage,
        `chatspaces/${product.image.name + new Date().toUTCString()}`
      );
      await uploadBytes(imageRef, product.image);
      const url = await getDownloadURL(imageRef);

      const newProduct = {
        ...product,
        image: url,
      };

      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/admin/new`,
        newProduct,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token-admin"),
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className='px-3 py-1 flex items-center justify-around gap-1 text-slate-700 rounded-md bg-none border border-slate-700 hover:bg-slate-700 hover:text-white transition duration-300'>
        <p>+</p>
        <p>Add Product</p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/25 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none space-y-4 flex flex-col items-end justify-end'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
            <input
              type='text'
              name='name'
              className='border p-2 rounded-lg focus:outline-none'
              placeholder='Product Name'
              value={product.name}
              onChange={handleInputChange}
            />
            <label
              htmlFor='new-prod-image'
              className='border p-2 rounded-lg focus:outline-none'>
              Upload Image
            </label>
            <input
              id='new-prod-image'
              type='file'
              className='hidden'
              accept='image/*'
              onChange={handleImageChange}
            />
            <input
              type='text'
              className='border p-2 rounded-lg focus:outline-none'
              name='price'
              value={product.price}
              onChange={handleInputChange}
              placeholder='Price of Product'
            />
            <input
              type='text'
              name='scale'
              className='border p-2 rounded-lg focus:outline-none'
              value={product.scale}
              onChange={handleInputChange}
            />
            <button
              className='px-3 py-1 flex items-center justify-around gap-1 text-slate-700 rounded-md bg-none border border-slate-700 hover:bg-slate-700 hover:text-white transition duration-300'
              type='submit'>
              Add Product
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddProductForm;
