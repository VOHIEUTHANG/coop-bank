import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/branch.service';
import BranchInfo from '../components/FormSection/Info';
import { showToast } from 'utils/helpers';
import RepresentativeList from '../components/FormSection/RepresentativeList';

const BranchAdd = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: branch_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (branch_id) {
        await update(payload);
        label = 'Chỉnh sửa';
      } else {
        await create(payload);
        label = 'Thêm mới';
        methods.reset({
          is_active: 1,
          is_system: 0,
        });
      }
      showToast.success(`${label} thành công !`);
    } catch (error) {
      showToast.error(error.message?.length ? error.message[0] : error.message || 'Có lỗi xảy ra!');
    }
  };

  const loadDetail = useCallback(() => {
    if (branch_id) {
      getById(branch_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [branch_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin chi nhánh',
      id: 'branch_id',
      component: BranchInfo,
      fieldActive: ['branch_name', 'address'],
    },
    {
      id: 'representative_list',
      title: 'Danh sách người đại diện',
      fieldActive: ['bankRepresentatives'],
      component: RepresentativeList,
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  return (
    <FormProvider {...methods}>
      <FormSection detailForm={detailForm} onSubmit={onSubmit} disabled={disabled} />
    </FormProvider>
  );
};

export default BranchAdd;
