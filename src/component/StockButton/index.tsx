import React, { SyntheticEvent, forwardRef, LegacyRef } from 'react';
import classnames from 'classnames';

export interface StockButtonProps {
  /** 선택된 인덱스 배열 */
  idxArray: Array<any>,
  /** 버튼 텍스트 */
  text?: string;
  /** 커스텀 클래스  */
  className?: string;
  /** 클릭 이벤트 함수 */
  onClick?: (e: SyntheticEvent) => void;
}

const StockButton = forwardRef(({
  idxArray,
  text,
  className,
  onClick
}: StockButtonProps, ref: LegacyRef<HTMLButtonElement> | undefined) => {
  const maxNum = 3;
  const isAllSelected = idxArray?.length >= maxNum;
  const isOverMax = idxArray?.length > maxNum;
  const isDisabled = !isAllSelected;

  return (
    <div className="bottom_btn_area">
      <button
        ref={ref}
        type="button"
        className={classnames(
          "btn_stock",
          className
        )}
        disabled={isDisabled}
        onClick={onClick}
      >
        <div className="stock_thumb_list">
          {
            [...Array(maxNum)].map((item, index) => {
              const url = `../../asset/img/stock/stock_${index+1}.svg`;
              return (
                <div className="item" key={index}>
                  <img src="../../asset/img/question.svg" alt="" />
                  {idxArray[index] && <img src={url} alt={idxArray[index].name} />}
                  {isOverMax && index === 2 && <span className="num">+20</span>}
                </div>
              );
            })
          }
        </div>
        <span className="text">{text}</span>
      </button>
    </div>
  );
});

export default StockButton;
