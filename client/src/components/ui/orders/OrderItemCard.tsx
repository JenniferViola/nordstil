import type { OrderItem } from "@/types/order";

interface OrderItemCardProps {
  item: OrderItem;
  classNameImg: string;
  classNameCard: string;
}

export default function OrderItemCard({
  item,
  classNameImg,
  classNameCard,
}: OrderItemCardProps) {
  return (
    <div
      id="order-item"
      key={item.id}
      className={`flex gap-4 w-full justify-between ${classNameCard}`}
    >
      <div id="left" className="flex gap-2 min-w-0">
        <div id="img-container">
          <img
            src={item.img_url}
            alt="item.title"
            width="700"
            height="1050"
            className={`relative block aspect-2/3 rounded-xs object-cover
              ${classNameImg}`}
          />
        </div>
        <div
          id="item-info"
          className="flex flex-col justify-between min-w-0 p-2"
        >
          <div className="flex flex-col min-w-0">
            <p className="font-bold truncate min-w-0">{item.title}</p>
            <p className="text-sm">{`${item.price} SEK`}</p>
          </div>
        </div>
      </div>
      <div id="right" className="flex flex-col justify-between min-w-0 p-2">
        <div id="quantity" className="flex items-center gap-1 text-primary-600">
          <p className="text-sm font-bold">X</p>
          <p> {item.quantity}</p>
        </div>
      </div>
    </div>
  );
}
