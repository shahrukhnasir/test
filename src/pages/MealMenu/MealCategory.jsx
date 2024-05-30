import React from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import { useGetCategoryQuery } from '../../RTK/service';
import { Link } from 'react-router-dom';

const MealCategory = () => {
  const { data, error, isLoading } = useGetCategoryQuery();
  return (
    <>
      <h1 style={{ fontSize: 20, textAlign: 'center', fontWeight: 900, fontFamily: "sans-serif" }}>Menu Category</h1>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.meals?.map((meal, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Link to={`/menu/${meal?.strCategory}`}>
                <Card
                  style={{ width: '100%', cursor: 'pointer' }}
                >
                  <p>{meal?.strCategory}</p>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default MealCategory;
