// CartCard.tsx
import type { CartItem } from "@/types/cart";
import { Link } from "react-router";
import { SlPlus, SlMinus, SlTrash, SlHeart } from "react-icons/sl";

export default function CartCard({ item }: { item: CartItem }) {
  return (
    <Link
      id="cart-item"
      key={item.id}
      to={`/products/${item.slug}`}
      className="flex justify-between gap-4 w-full"
    >
      <div id="left" className="flex gap-2">
        <div id="img-container">
          <img
            src={item.img_url}
            alt="item.title"
            width="700"
            height="1050"
            className="relative block aspect-2/3 w-[8rem] rounded-xs
              object-cover"
          />
        </div>
        <div
          id="item-info"
          className="flex flex-col justify-between min-w-0 p-2"
        >
          <div>
            <p className="font-bold truncate min-w-0">{item.title}</p>
            <p>{`${item.price} SEK`}</p>
          </div>

          <p className="text-primary-900/60">{`Size M, ${item.color_name}`}</p>

          <div
            id="quantity"
            className="flex gap-3 items-center text-primary-600"
          >
            <button>
              <SlMinus size={20} />
            </button>

            <p className="text-lg">1</p>
            <button>
              <SlPlus size={20} />
            </button>
          </div>
        </div>
      </div>
      <div
        id="right"
        className="flex flex-col justify-between p-2 text-primary-600"
      >
        <button>
          <SlHeart size={20} />
        </button>
        <button>
          <SlTrash size={20} />
        </button>
      </div>
    </Link>
  );
}
