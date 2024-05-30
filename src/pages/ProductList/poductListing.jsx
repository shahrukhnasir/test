import React from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import { useGetCategoryByIdQuery } from '/src/RTK/service';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const slug = window.location.href.split('/');
  console.log(slug?.[4], "slugslugslug");
  const { data, error, isLoading } = useGetCategoryByIdQuery(slug?.[4]);

  if (error) return <div>Error: {error.message}</div>;
  console.log(data, "data");
  return (
    <div>
      <h1 style={{ fontSize: 20, textAlign: 'center', fontWeight: 900, fontFamily: "sans-serif", margin: 20 }}>Menu List</h1>

      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Skeleton style={{margin:20}}>
            <Card
              style={{ width: '100%', cursor: 'pointer' }}
              cover={<img alt="example" src="" />}
            >
              <p></p>
            </Card>

          </Skeleton>
        ) : (
          data?.meals?.map((meal, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4} style={{ margin: 10 }}>
              <Link to={`/menu-details/${meal?.idMeal}`}>
                <Card
                  style={{ width: '100%', cursor: 'pointer' }}
                  cover={<img alt="example" src={meal?.strMealThumb} />}
                >
                  <p>{meal?.strMeal}</p>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default ProductListing;
