import { useActionState } from "react";

const AddToCartForm = ({ itemID, itemTitle }) => {
    const [message, formAction] = useActionState(
        addToCart,
        "Click the button to add to cart"
    );

    return (
        <form
            action={formAction}
            className="bg-white border border-gray-300 rounded px-8 pt-6 pb-8 mb-4"
        >
            <h2 className="text-xl font-bold mb-4">{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add to Cart
            </button>
            <div className="mt-4 text-sm text-gray-700">{message}</div>
        </form>
    );
};

const addToCart = async (prevState, formData) => {
    setTimeout(() => {}, 1000);
    const id = formData.get("itemID");

    // 模拟根据表单操作结果更新状态
    if (id === "1") {
        return "Added to cart";
    }
    return "Out of stock";
};

export default AddToCartForm;
