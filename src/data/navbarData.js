import {
  faGift,
  faQuestionCircle,
  faUserAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

export const categories = [
  { label: 'Music', short: 'Music', to: '/' },
  { label: 'DJ equipment', short: 'DJ', to: '/' },
  { label: 'Studio equipment', short: 'Studio', to: '/' },
]

export const misc = [
  { icon: null, iso: 'gb', label: 'USD', to: '/' },
  { icon: faGift, label: 'Gift Vouchers', to: '/' },
  { icon: faQuestionCircle, label: 'Help', to: '/' },
]

export const account = [
  { icon: faUserAlt, label: 'My Juno', to: '/', status: 'n/a' },
  { icon: null, label: 'Wishlist', to: '/' },
  { icon: faShoppingCart, iconColor: '#E89108', label: 'Cart', to: '/' },
]
