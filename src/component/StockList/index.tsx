import React, {useState, SyntheticEvent} from 'react';
import IconFavorite from '../../asset/img/favorite.svg';

export interface StockListProps {
  listArray: Array<any>;
  onChange?: (e: SyntheticEvent) => void;
}

const StockList = ({
  listArray,
  onChange
}: StockListProps) => {
  const [checkedItems, setCheckedItems] = useState(new Set()); 

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) { //체크X, id가 있을 때 (클릭 2번시)
      checkedItems.delete(id); //체크 두번 시 삭제
      setCheckedItems(checkedItems);
    }
    setCheckedItems(checkedItems);
    return checkedItems;
  };

  return (
    <>
      <span className="blind" id="stock_list_title">찜할 주식 목록</span>
      <ul className="stock_list" tabIndex={0} role="listbox" aria-labelledby="stock_list_title">
        {listArray.map((item, index) => {
          const url = `../../asset/img/stock/stock_${index+1}.svg`;
          const [isChecked, setChecked] = useState<boolean>(false);
          const checkHandler = (e: SyntheticEvent) => {
            setChecked(!isChecked);
            checkedItemHandler(e.target.id, e.target.checked);
          };

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
                onChange={(e) => checkHandler(e)}
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
