import React from 'react';
import classnames from 'classnames';
import IconClsoe from '../../asset/img/close.svg'

export interface TitleProps {
  titleTxt?: string;
  descTxt?: string;
  className?: string;
  isShowClose?: boolean;
  children?: React.ReactNode;
}

const Title = ({
  children, 
  className,
  titleTxt = '',
  descTxt = '',
  isShowClose = true
}: TitleProps) => {
  return (
    <div className={classnames("title_wrap", className)}>
      {isShowClose && 
      <div className="btn_area">
        <button type="button" className="btn_close"><span className="blind">레이어 닫기</span><IconClsoe/></button>
      </div>
      }
      <div className="title_inner">
        {titleTxt && <h2 className="title_txt" dangerouslySetInnerHTML={{__html: titleTxt}}></h2>}
        {descTxt && <p className="title_desc" dangerouslySetInnerHTML={{__html: descTxt}}></p>}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Title;
