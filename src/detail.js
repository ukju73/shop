import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  id = Number(id); // 숫자로 변환

  let shoe = props.shoes.find((shoe) => shoe.id === id); // id가 일치하는 아이템 찾기

  if (!shoe) {
    return <p>제품 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={shoe.image} width="100%" alt='' />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
