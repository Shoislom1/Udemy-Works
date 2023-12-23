import styles from './Card.module.scss'

const Card = ({title, price, imageUrl }) => {
    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/unliked.svg" alt="" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>{price}  руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/plus.svg" alt="" />
              </button>
            </div>
          </div>
    );
}

export default Card