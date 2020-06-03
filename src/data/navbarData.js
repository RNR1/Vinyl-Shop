import {
  faGift,
  faQuestionCircle,
  faUserAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"

export const categories = [
  { label: "Music", to: "/" },
  { label: "DJ equipment", to: "/" },
  { label: "Studio equipment", to: "/" },
]

export const misc = [
  { icon: null, label: "USD", to: "/" },
  { icon: faGift, label: "Gift Vouchers", to: "/" },
  { icon: faQuestionCircle, label: "Help", to: "/" },
]

export const account = [
  { icon: faUserAlt, label: "My Juno", to: "/", status: true },
  { icon: null, label: "Wishlist", to: "/" },
  { icon: faShoppingCart, label: "Cart", to: "/" },
]
