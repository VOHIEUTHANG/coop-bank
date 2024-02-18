import React, { useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import useScroll from 'hooks/use-scroll';
import classNames from 'classnames';
import styled from 'styled-components';
import Loading from 'components/shared/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getListNotify } from 'services/global.service';
import { hideNotify } from 'actions/global';
import moment from 'moment';

const List = styled.div`
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  a,
  h3 {
    line-height: 1;
  }

  .fi-rr-bell:before {
    font-size: 17px;
  }
`;

const NotifySection = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [data, setData] = useState([]);
  const [isScroll] = useScroll(ref);
  const [stopScroll, setStopScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { typeNotify } = useSelector((state) => state.global);

  const loadNotify = useCallback(() => {
    setLoading(true);
    getListNotify(typeNotify?.apiUrl, page, typeNotify?.value).then((data) => {
      if (data.length === 0) {
        setStopScroll(true);
        setLoading(false);
        return;
      }
      setData((prev) => _.concat(prev, data));
      setLoading(false);
    });
  }, [typeNotify, page]);

  useEffect(loadNotify, [loadNotify]);

  useEffect(() => {
    if (isScroll && !loading && !stopScroll) {
      setPage((prev) => prev + 1);
    }
  }, [isScroll, loading, stopScroll]);

  return (
    <React.Fragment>
      <List ref={ref}>
        {data?.map((o) => (
          <a
            href={typeNotify?.redirectUrl(o?.id, o?.children_id ?? o?.id)}
            onClick={() => {
              dispatch(hideNotify());
            }}
            className={classNames('cb_list_items', {
              cb_non_read: !o?.is_read,
            })}>
            <span className={`fi ${typeNotify?.icon}`} style={{ width: '30px', height: '30px' }}></span>
            <h3>{o?.subject}</h3>
            <span>
              <b>{'Hệ thống'}</b> - {moment().format('DD/MM/YYYY')}
            </span>
          </a>
        ))}
        {loading && <Loading />}
      </List>
    </React.Fragment>
  );
};

export default NotifySection;
