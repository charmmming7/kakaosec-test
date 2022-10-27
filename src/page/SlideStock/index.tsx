import React, {useEffect, useRef} from 'react';
import Layout from 'component/Layout';
import Title from 'component/Title';
import { Timeline, Tween } from 'react-gsap';
import { gsap } from "gsap";
import { useReward } from 'react-rewards';

export const listArray = [
  {name: "버크셔 헤서웨이", code: "BRK/B"},
  {name: "세일즈포스", code: "CRM", isSelected: true},
  {name: "에스티 로더", code: "EL"},
  {name: "골드만삭스", code: "GS"},
  {name: "홈디포", code: "HD"},
  {name: "제이피모간체이스", code: "JPM"},
  {name: "오라클", code: "ORCL"},
  {name: "화이자", code: "PFE"},
  {name: "AT&T", code: "T"},
  {name: "UPS", code: "UPS"},
  {name: "월마트", code: "WMT"},
  {name: "AMD", code: "AMD"},
  {name: "ASML", code: "ASML"},
  {name: "모더나", code: "MRNA"},
  {name: "엔비디아", code: "NVDA"},
];

const SlideStock = () => {
  const slideRef = useRef(null);
  const tl = gsap.timeline();
  const winningIdx = listArray.length - 3; // 임의의 숫자
  const itemsRef = useRef([]);

  const {reward: confettiReward, isAnimating: isConfettiAnimating} = useReward('confetti', 'confetti');
  
  useEffect(() => {
    setTimeout(() => {
      if (slideRef.current != null) {
        const winningStock = slideRef.current.childNodes[winningIdx];
        const stopPos = winningStock.getBoundingClientRect().left - 123;

        tl.from(slideRef.current, { x: 0 })
        .to(slideRef.current, { x: -stopPos-100 })
        .to(slideRef.current, { x: -stopPos })
        .to(slideRef.current.childNodes[winningIdx], { opacity: 1, scale: 1.2 })
      }
      gsap.to(".title_wrap", {opacity: 0, delay: 1.5})
      gsap.to(".page_slide_stock", {backgroundColor: '#ffffff', delay: 1.5})
      
      itemsRef.current.map((item, index) => {
        if(index !== winningIdx) {
          gsap.to(item, {opacity: 0, delay: 1.5})
        }
      });

    },200)

    setTimeout(() => {
      confettiReward();
    }, 1700)
  }, []);

  return (
    <Layout className="page_slide_stock">
      <Title titleTxt="두근💛 두근💛<br />어떤 주식을 받게 될까요?" isShowClose={true}/>

      <span id="confetti"/>
      <div className="stock_slide_wrap">
        <ul className="stock_slide" ref={slideRef}>
          {listArray.map((item, index) => {
            const url = `../../asset/img/stock/stock_${index+1}.svg`;
            return (
              <li key={index} className="stock_slide_item" ref={(el) => (itemsRef.current[index] = el)} >
                <div className="thumb">
                  <img src={url} alt={item.name} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default SlideStock;
