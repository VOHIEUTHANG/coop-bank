import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FormSelect from '../FormControl/FormSelect';
import Accordion from '../Accordion/index';
import FormItem from '../FormControl/FormItem';
import FormInput from '../FormControl/FormInput';
import { getCountry, getProvince, getDistrict, getWard } from 'services/location.service';
import { useFormContext } from 'react-hook-form';

const AddressSelectAccordion = ({ disabled }) => {
  const methods = useFormContext();
  const [dataCountryList, setDataCountryList] = useState([]);
  const [dataProvinceList, setDataProvinceList] = useState([]);
  const [dataDistrictList, setDataDistrictList] = useState([]);
  const [dataWardList, setDataWardList] = useState([]);

  const loadCountry = useCallback(() => {
    getCountry().then((val) => {
      methods.setValue('country_id', 6);
      setDataCountryList(val);
    });
  }, []);
  useEffect(loadCountry, [loadCountry]);

  const loadProvince = useCallback(() => {
    getProvince().then(setDataProvinceList);
  }, []);
  useEffect(loadProvince, [loadProvince]);

  const province_id = useMemo(() => methods.watch('province_id'), [methods]);
  const loadDistrict = useCallback(() => {
    getDistrict({
      parent_id: province_id,
    }).then((p) => {
      setDataDistrictList(p);
    });
  }, [province_id]);
  useEffect(loadDistrict, [loadDistrict]);

  const district_id = useMemo(() => methods.watch('district_id'), [methods]);
  const loadWard = useCallback(() => {
    getWard({
      parent_id: district_id,
    }).then(setDataWardList);
  }, [district_id]);
  useEffect(loadWard, [loadWard]);

  return (
    <Accordion title='Địa chỉ' id='cb_address_com'>
      <div className='cb_row'>
        <div className='cb_col_4'>
          <FormItem disabled={disabled} label='Quốc gia' isRequired>
            <FormSelect
              showSearch
              field='country_id'
              validation={{
                required: 'Cần chọn quốc gia',
              }}
              list={dataCountryList?.map((p) => {
                return {
                  label: p?.name,
                  value: p?.id,
                };
              })}
              onChange={(value) => {
                methods.setValue('country_id', value);
                methods.setValue('province_id', undefined);
                methods.setValue('district_id', undefined);
                methods.setValue('ward_id', undefined);
              }}
            />
          </FormItem>
        </div>
        <div className='cb_col_4'>
          <FormItem disabled={!methods.watch('country_id') || disabled} label='Tỉnh/Thành phố' isRequired>
            <FormSelect
              field='province_id'
              list={dataProvinceList?.map((p) => {
                return {
                  label: p?.name,
                  value: p?.id,
                };
              })}
              validation={{
                required: 'Cần chọn Tỉnh/Thành phố',
              }}
              onChange={(value) => {
                methods.setValue('province_id', value);
                methods.setValue('district_id', undefined);
                methods.setValue('ward_id', undefined);
              }}
            />
          </FormItem>
        </div>
        <div className='cb_col_4'>
          <FormItem disabled={!methods.watch('province_id') || disabled} label='Quận/Huyện' isRequired>
            <FormSelect
              field='district_id'
              list={dataDistrictList?.map((p) => {
                return {
                  label: p?.name,
                  value: p?.id,
                };
              })}
              validation={{
                required: 'Cần chọn Quận/Huyện',
              }}
              onChange={(value) => {
                methods.setValue('district_id', value);
                methods.setValue('ward_id', undefined);
              }}
            />
          </FormItem>
        </div>
        <div className='cb_col_4'>
          <FormItem disabled={!methods.watch('district_id') || disabled} label='Phường/Xã' isRequired>
            <FormSelect
              field='ward_id'
              list={dataWardList?.map((p) => {
                return {
                  label: p?.name,
                  value: p?.id,
                };
              })}
              validation={{
                required: 'Cần chọn Phường/Xã',
              }}
            />
          </FormItem>
        </div>
        <div className='cb_col_4'>
          <FormItem disabled={disabled} label='Postal code' isRequired>
            <FormInput
              type='number'
              field='postal_code'
              validation={{
                required: 'Cần nhập Postal Code',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Postal Code không hợp lệ',
                },
              }}
            />
          </FormItem>
        </div>
        <div className='cb_col_12'>
          <FormItem disabled={disabled} label='Số nhà, tên đường' isRequired>
            <FormInput
              field='address'
              validation={{
                required: 'Cần nhập địa chỉ',
              }}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};
export default AddressSelectAccordion;
