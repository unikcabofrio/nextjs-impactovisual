import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashBoard from './dashboard'
import ShopConfig from './shop'
import Enterprise from './enterprise'

export default function Menu({ setScreen }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          bottom: '0',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderTop: '1px solid rgba(0,0,0,.1)'
        }}
      >
        <FontAwesomeIcon
          icon={['fas', 'bars']}
          className={'black'}
          onClick={() => {
            setScreen(<DashBoard />)
          }}
          style={{
            cursor: 'pointer'
          }}
        />
        <FontAwesomeIcon
          icon={['fas', 'cart-shopping']}
          className={'black'}
          onClick={() => {
            setScreen(<ShopConfig />)
          }}
          style={{
            cursor: 'pointer'
          }}
        />
        <FontAwesomeIcon
          icon={['fas', 'shop']}
          className={'black'}
          onClick={() => {
            setScreen(<Enterprise />)
          }}
          style={{
            cursor: 'pointer'
          }}
        />
      </div>
    </>
  )
}
