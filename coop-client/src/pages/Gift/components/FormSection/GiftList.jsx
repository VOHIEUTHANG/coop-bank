import React, { useMemo } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import DataTable from 'components/shared/DataTable/index';
import Accordion from 'components/shared/Accordion/index';
import FormNumber from 'components/shared/FormControl/FormNumber';
import FormInput from 'components/shared/FormControl/FormInput';
import { formatPrice } from 'utils';

const GiftList = ({ disabled, title }) => {
  const methods = useFormContext();
  const { control } = methods;

  const { remove, fields, append } = useFieldArray({
    control,
    name: 'gifts',
  });

  console.log(fields);

  const columns = [
    {
      header: 'STT',
      formatter: (_, index) => index + 1,
      classNameBody: 'cb_text_center',
      classNameHeader: 'cb_text_center',
    },
    {
      header: 'Tên phần quà',
      classNameHeader: 'cb_text_center',
      accessor: 'gift_name',
      formatter: (_, index) => {
        return (
          <FormInput
            className='cb_inp'
            field={`gifts.${index}.gift_name`}
            placeholder='Nhập tên phần quà'
            validation={{
              required: 'Tên phần quà là bắt buộc',
            }}
          />
        );
      },
    },
    {
      header: 'Số lượng',
      classNameHeader: 'cb_text_center',
      accessor: 'gift_quantity',
      formatter: (_, index) => {
        return (
          <FormNumber
            bordered
            field={`gifts.${index}.gift_quantity`}
            placeholder='Nhập số lượng'
            validation={{
              min: { value: 1, message: 'Giá trị phải lớn hơn 0' },
              required: 'Số lượng là bắt buộc',
            }}
          />
        );
      },
    },
    {
      header: 'Giá trị',
      classNameHeader: 'cb_text_center',
      classNameBody: 'cb_text_center',
      accessor: 'representative_position',
      formatter: (_, index) => {
        return (
          <FormNumber
            bordered
            field={`gifts.${index}.gift_price`}
            placeholder='Nhập giá trị'
            addonAfter='VND'
            validation={{
              min: { value: 1, message: 'Giá trị phải lớn hơn 0' },
              required: 'Giá trị là bắt buộc',
            }}
          />
        );
      },
    },
    {
      header: 'Thành tiền',
      classNameHeader: 'cb_text_center',
      classNameBody: 'cb_text_right',
      formatter: (_, index) => {
        return formatPrice(_.gift_price * _.gift_quantity) + ' đ';
      },
    },
  ];

  const actions = useMemo(
    () => [
      {
        globalAction: true,
        icon: 'ti-plus',
        type: 'success',
        content: 'Thêm phần quà',
        onClick: () => {
          if (!disabled) {
            append({});
          }
        },
      },
      {
        icon: 'fi ti-trash',
        color: 'red',
        disabled: disabled,
        onClick: (_, index) => {
          if (!disabled) {
            remove(index);
          }
        },
      },
    ],
    [],
  );

  return (
    <Accordion title={title} isRequired={true}>
      <div className='cb_col_12'>
        <DataTable noSelect noPaging actions={actions} columns={columns} data={methods.watch('gifts') || []} />
      </div>
    </Accordion>
  );
};

export default GiftList;
