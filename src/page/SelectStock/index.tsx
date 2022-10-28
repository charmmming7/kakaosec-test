import React, {SyntheticEvent, useState} from 'react';
import Layout from 'component/Layout';
import Title from 'component/Title';
import StockList from 'component/StockList';
import StockButton from 'component/StockButton';
import IconFavorite from '../../asset/img/favorite.svg';

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

const SelectStock = () => {

  const [checkedItems, setCheckedItems] = useState(new Set()); 
  const [isChecked, setChecked] = useState<boolean>(false);

  const onChange = (e: SyntheticEvent) => {
    setChecked(!isChecked);
    checkedItemHandler(e.target.id, e.target.checked);
  };

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) { //체크X, id가 있을 때 (클릭 2번시)
      checkedItems.delete(id); //체크 두번 시 삭제
      setCheckedItems(checkedItems);
    }
    setCheckedItems(checkedItems);
    console.log(checkedItems);
    return checkedItems;
  };

  const checkedArr = Array.from(checkedItems);

  return (
    <Layout className="page_select">
      <Title titleTxt="받고 싶은 주식<br />찜하세요!" descTxt="고른 주식 중 하나를 최대 500만원어치 드릴게요."/>
      <StockList listArray={listArray} onChange={onChange} checkedList={checkedItems}/>
      <StockButton idxArray={checkedArr} text="3개이상 선택하세요"/>
      <p className="guide_txt"><IconFavorite />찜한 주식은<br />‘내 관심’에도 넣어둘게요!</p>
    </Layout>
  )
}

export default SelectStock;
