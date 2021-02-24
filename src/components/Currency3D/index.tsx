import styles from './styles.module.scss'
import { useState } from 'react';
const Currency3D = () => {

  const [reference, setReference]: any = useState({ one: 0, two: 0, three: 0, four: 0 })
  const [currentId, setcurrentId]: any = useState(false)
  const [coin, setCoin]: any = useState({ one: '_coinStaticOne', two: '_coinStaticOne', three: '_coinStaticOne', four: '_coinStaticOne' })
  const coins = [
    {
      id: '1',
      source: '../../images/lying-coins/lying-btc.svg',
      class: '._coin1',
      enter: (index) => mouseEnter('one'),
      out: () => mouseOut('1', 'one'),
      animation: coin.one
    },
    {
      id: '2',
      source: '../../images/lying-coins/lying-lite.svg',
      class: '._coin2',
      enter: (index) => mouseEnter('two'),
      out: () => mouseOut('2', 'two'),
      animation: coin.two
    },
    {
      id: '3',
      source: '../../images/lying-coins/lying-ether.svg',
      class: '._coin3',
      enter: (index) => mouseEnter('three'),
      out: () => mouseOut('3', 'three'),
      animation: coin.three
    },
    {
      id: '4',
      source: '../../images/lying-coins/lying-xpt.svg',
      class: '._coin4',
      enter: (index) => mouseEnter('four'),
      out: () => mouseOut('4', 'four'),
      animation: coin.four
    }
  ]

  const mouseEnter = (number) => {
    setCoin({ ...coin, [number]: '_coinPositionOne' })
  }

  const mouseOut = (id, number) => {
    setcurrentId(id)
    const referenceCoin = document.getElementById(id)
    const getCoinPosition = new DOMMatrix(window.getComputedStyle(referenceCoin).transform)
    const coinPosition = getCoinPosition.m42
    setReference({ ...reference, ['one']: `${coinPosition}px` })
    setCoin({ ...coin, [number]: `_coinPositionTwo${id}` })
  }

  return (

    <div className={styles._container}>
      <div className={styles._coins}>
        {
          coins.map((res, index) => {
            return (
              <div key={index} className={res.class}>
                <img id={res.id} className={res.animation} onMouseOver={() => res.enter(index)} onMouseOut={() => res.out()} src={res.source} width='100%'></img>
              </div>
            )
          })
        }
      </div>


      <style jsx>{`
      ._coinStaticOne {
        display:flex;
      }
      ._coinPositionOne{
        animation: MoveUpDownCoins 1s alternate infinite
      }
      ._coinPositionTwo${currentId}{
        animation: DownCoins 1s
      }
      @keyframes MoveUpDownCoins {
        from { transform: translateY(0px)}
        to { transform:translateY(-20px)}
      }
      @keyframes DownCoins {
        from { transform: translateY(${reference['one']})}
        to { transform:translateY(0px)}
      }
    `}</style>
    </div>
  )
}
export default Currency3D
