import React, {SyntheticEvent} from 'react';
import IconFavorite from '../../asset/img/favorite.svg';

export interface StockListProps {
  listArray: Array<any>;
  checkedList: any;
  onChange?: (e: SyntheticEvent) => void;
}

const StockList = ({
  listArray,
  checkedList,
  onChange
}: StockListProps) => {
  const checkedArr = Array.from(checkedList);

  return (
    <>
      <span className="blind" id="stock_list_title">찜할 주식 목록</span>
      <ul className="stock_list" tabIndex={0} role="listbox" aria-labelledby="stock_list_title">
        {listArray.map((item, index) => {
          const url = `../../asset/img/stock/stock_${index+1}.svg`;
          const isChecked = false;
          return (
            <li 
              key={index} 
              className="stock_item"
              role="option"
              aria-selected={isChecked}
            >
              <input type="checkbox"
                id={`stock_chk_${index}`}
                name="stock_chk"
                className="input_chk"
                onChange={onChange}
              />
              <label htmlFor={`stock_chk_${index}`} className="label">
                <div className="thumb">
                  <img src={url} alt={item.name} />
                  {
                    isChecked &&
                    <div className="favorite"><IconFavorite/></div>
                  }
                </div>
                <strong className="name">{item.name}</strong>
                <span className="code">{item.code}</span>
              </label>
            </li>
          )
        }
        )}
      </ul>
    </>
  );
};

export default StockList;
