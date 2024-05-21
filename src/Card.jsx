function Card({ item }) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={item.imgsrc} alt="mypic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{item.title}</span>
            <h3 className="card__title">{item.sname}</h3>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
