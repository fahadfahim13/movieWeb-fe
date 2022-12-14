import React from 'react';
import { Button, Card, Col, Row, Spin } from 'antd';
import MovieTable from 'components/MovieTable';
import useTableContainer from './hook';
import SearchMovieComponent from '../../components/SearchMovieComponent';

const TableContainer = () => {
  const {
    movies,
    totalMovies,
    onLogoutClick,
    page,
    onPageChange,
    tableLoading,
    pageLoading,
    onMovieSearch,
  } = useTableContainer();
  return (
    <Card style={{ height: '800px' }}>
      {!pageLoading ? (
        <>
          <Row>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={4}></Col>
            <Col span={4}>
              <Button type="primary" onClick={onLogoutClick}>
                {' '}
                Logout{' '}
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            {' '}
            <SearchMovieComponent onMovieSearch={onMovieSearch} />{' '}
          </Row>
          <br />
          <Row>
            <MovieTable
              rows={movies}
              page={page}
              onChange={onPageChange}
              totalMovies={totalMovies}
              loading={tableLoading}
            />
          </Row>
        </>
      ) : (
        <div
          style={{
            height: 800,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30%',
          }}
        >
          <Spin size="large" />
        </div>
      )}
    </Card>
  );
};

export default TableContainer;
