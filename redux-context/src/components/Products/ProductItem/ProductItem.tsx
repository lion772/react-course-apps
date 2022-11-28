import React, { FC } from "react";
import { useDispatch } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    isFav: boolean;
    description: string;
    title: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    //const dispatch = useDispatch();

    const toggleFavHandler = () => {
        //dispatch(toggleFav(props.id));
    };

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className={styles["product-item"]}>
                <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
                <p>{props.description}</p>
                <button
                    className={!props.isFav ? "button-outline" : ""}
                    onClick={toggleFavHandler}
                >
                    {props.isFav ? "Un-Favorite" : "Favorite"}
                </button>
            </div>
        </Card>
    );
};

export default ProductItem;