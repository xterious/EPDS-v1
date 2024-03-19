// CartModal.jsx
import React from "react";

const CartModal = ({ isOpen, handleClose, cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={handleClose}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Total:</p>
              <p className="text-lg">₹{calculateTotalPrice().toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
