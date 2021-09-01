import { FC } from 'react';

type IProps = { title: string }

const Banner: FC<IProps> = (props) => {
    return (
        <div className="page-box">
        <h2 className="page-title">{props.title}</h2>
      </div>
    )
}

export default Banner;