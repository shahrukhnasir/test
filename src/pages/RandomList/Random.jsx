import React from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import { useGetRandomProductQuery } from '../../RTK/service';
import { Link } from 'react-router-dom';

const Random = () => {
  const { data, error, isLoading } = useGetRandomProductQuery();
  return (
    <>
      <h1 style={{ fontSize: 20, textAlign: 'center', fontWeight: 900, fontFamily: "sans-serif" }}>Random Category</h1>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.meals?.map((meal, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
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

export default Random;
