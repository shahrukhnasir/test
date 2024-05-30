import React, { useState } from 'react';
import { Card, Row, Col, Skeleton, Descriptions, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetProductDetailsByIdQuery } from '../../RTK/service';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { addWishList, removeWishList } from '../../RTK/wishList';
import "../ProductDetails/productDetailStyles.css"

const ProDetails = () => {
    const [heartClick, setHeartClick] = useState(false);

    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductDetailsByIdQuery(id);
    if (error) return <div>Error: {error.message}</div>;

    const handleWishListToggle = (e) => {
        e.preventDefault();
        if (heartClick) {
            dispatch(removeWishList(data?.meals?.[0]?.idMeal));
        } else {
            dispatch(addWishList(data?.meals?.[0]));
        }

        setHeartClick(!heartClick);
    }
    return (
        <>

            <Card title="Product Name" bordered={false}>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <img
                            src={data?.meals?.[0]?.strMealThumb}
                            alt={data?.meals?.[0]?.strMeal}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col span={16}>
                        <Descriptions title="Product Info">
                            <Descriptions.Item label="Category">{data?.meals?.[0]?.strCategory}</Descriptions.Item>
                        </Descriptions>

                        <Descriptions title="Ingredient">
                            <Descriptions.Item >{data?.meals?.[0]?.strIngredient1}</Descriptions.Item>
                            <Descriptions.Item >{data?.meals?.[0]?.strIngredient2}</Descriptions.Item>
                            <Descriptions.Item >{data?.meals?.[0]?.strIngredient3}</Descriptions.Item>

                            <Descriptions.Item >{data?.meals?.[0]?.strIngredient4}</Descriptions.Item>
                            <Descriptions.Item >{data?.meals?.[0]?.strIngredient5}</Descriptions.Item>
                            <Descriptions.Item >{data?.meals?.[0]?.strIngredient5}</Descriptions.Item>
                        </Descriptions>
                        <Descriptions.Item >{data?.meals?.[0]?.strInstructions}</Descriptions.Item>

                        <br />
                        <Button type="text" style={{ marginTop: '20px', color: "black", fontSize: 16, fontWeight: 900, display: 'flex' }} onClick={(e) => handleWishListToggle(e,)}>

                            <span style={{  display: 'flex' }} >
                                {heartClick === true ? (<>
                                    <span className='heartIcon'>
                                        <h6>Remove to Wishlist</h6>
                                        <BsSuitHeartFill
                                        />
                                    </span>
                                </>
                                ) : (
                                    <>
                                        <span className='heartIcon'>
                                            <h6> Add to Wishlist</h6>
                                            <FaRegHeart
                                                onClick={(e) => heartClickHandler(e)}
                                                className={""}
                                            />
                                        </span>
                                    </>
                                )}
                            </span>
                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default ProDetails;
