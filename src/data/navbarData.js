import {
  faGift,
  faQuestionCircle,
  faUserAlt,
  faShoppingCart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { faWeebly } from '@fortawesome/free-brands-svg-icons'

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

export const search = { icon: faSearch, label: 'Search' }

export const account = [
  { icon: faUserAlt, label: 'My Juno', to: '/', status: 'online' },
  { icon: faWeebly, label: 'Wishlist', to: '/' },
  {
    icon: faShoppingCart,
    iconColor: '#E89108',
    label: 'Cart',
    to: '/',
  },
]
